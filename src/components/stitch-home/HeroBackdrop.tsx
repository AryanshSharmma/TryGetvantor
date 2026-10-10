"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const VIOLET = new THREE.Color("#A855F7");
const ROSE = new THREE.Color("#E11D48");
const TILT = 1.15;

type PointerRef = RefObject<{ x: number; y: number }>;

type RingSpec = {
  kind: "dots" | "line";
  radius: number;
  squash: number;
  count: number;
  opacity: number;
  tilt: [number, number, number];
  idleSpin: number;
  follow: { x: number; y: number; z: number };
  lambda: number;
  stretch: number;
};

const RINGS: RingSpec[] = [
  {
    kind: "dots",
    radius: 3.5,
    squash: 1,
    count: 900,
    opacity: 0.7,
    tilt: [TILT, 0.08, 0],
    idleSpin: 0.05,
    follow: { x: 0.35, y: 0.5, z: 0.25 },
    lambda: 2.2,
    stretch: 0.06,
  },
  {
    kind: "line",
    radius: 2.5,
    squash: 0.86,
    count: 220,
    opacity: 0.34,
    tilt: [TILT, -0.12, 0.2],
    idleSpin: -0.09,
    follow: { x: -0.5, y: -0.7, z: -0.4 },
    lambda: 3.2,
    stretch: 0.09,
  },
  {
    kind: "line",
    radius: 1.5,
    squash: 0.9,
    count: 160,
    opacity: 0.42,
    tilt: [TILT, 0.2, -0.2],
    idleSpin: 0.16,
    follow: { x: 0.8, y: 1, z: 0.5 },
    lambda: 4.5,
    stretch: 0.12,
  },
];

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildRing(spec: RingSpec, seed: number) {
  const random = seededRandom(seed);
  const positions = new Float32Array(spec.count * 3);
  const colors = new Float32Array(spec.count * 3);
  const color = new THREE.Color();

  for (let i = 0; i < spec.count; i += 1) {
    const angle = (i / spec.count) * Math.PI * 2;
    const jitter = spec.kind === "dots" ? 1 + (random() - 0.5) * 0.035 : 1;
    positions[i * 3] = Math.cos(angle) * spec.radius * jitter;
    positions[i * 3 + 1] = Math.sin(angle) * spec.radius * spec.squash * jitter;
    color.copy(VIOLET).lerp(ROSE, (1 + Math.cos(angle)) / 2);
    colors.set([color.r, color.g, color.b], i * 3);
  }
  return { positions, colors };
}

function Ring({ spec, seed, pointer, animate }: { spec: RingSpec; seed: number; pointer: PointerRef; animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const spin = useRef(0);
  const twist = useRef(0);
  const { positions, colors } = useMemo(() => buildRing(spec, seed), [spec, seed]);

  useFrame((_, delta) => {
    const target = group.current;
    if (!animate || !target) return;
    const { x, y } = pointer.current;
    const { lambda, follow, stretch, tilt, idleSpin } = spec;
    const reach = Math.hypot(x, y);

    target.rotation.x = THREE.MathUtils.damp(target.rotation.x, tilt[0] + y * follow.x, lambda, delta);
    target.rotation.y = THREE.MathUtils.damp(target.rotation.y, tilt[1] + x * follow.y, lambda, delta);
    twist.current = THREE.MathUtils.damp(twist.current, x * follow.z, lambda, delta);
    spin.current += delta * idleSpin;
    target.rotation.z = tilt[2] + twist.current + spin.current;

    target.scale.x = THREE.MathUtils.damp(target.scale.x, 1 + x * stretch + reach * 0.04, lambda, delta);
    target.scale.y = THREE.MathUtils.damp(target.scale.y, 1 + y * stretch - x * stretch * 0.4 + reach * 0.04, lambda, delta);
  });

  const geometry = (
    <bufferGeometry>
      <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      <bufferAttribute attach="attributes-color" args={[colors, 3]} />
    </bufferGeometry>
  );

  return (
    <group ref={group} rotation={spec.tilt}>
      {spec.kind === "dots" ? (
        <points>
          {geometry}
          <pointsMaterial
            vertexColors
            size={1.8}
            sizeAttenuation={false}
            transparent
            opacity={spec.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
      ) : (
        <lineLoop>
          {geometry}
          <lineBasicMaterial
            vertexColors
            transparent
            opacity={spec.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineLoop>
      )}
    </group>
  );
}

export function HeroBackdrop() {
  const reduce = useReducedMotion();
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [supported] = useState(hasWebGL);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      pointer.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    }
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useEffect(() => {
    const node = wrapper.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(node);
    const home = node.closest(".stitch-home");
    home?.setAttribute("data-rings", "");
    return () => {
      observer.disconnect();
      home?.removeAttribute("data-rings");
    };
  }, [supported]);

  if (!supported) return null;

  const animate = !reduce && visible;

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 11], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={animate ? "always" : "demand"}
      >
        {RINGS.map((spec, index) => (
          <Ring key={spec.radius} spec={spec} seed={index + 11} pointer={pointer} animate={animate} />
        ))}
      </Canvas>
    </div>
  );
}
