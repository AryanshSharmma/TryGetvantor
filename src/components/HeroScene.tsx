"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const VIOLET = "#A855F7";
const ROSE = "#E11D48";
const PARTICLE_COUNT = 900;

type PointerRef = RefObject<{ x: number; y: number }>;

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

function Rig({ pointer, animate, children }: { pointer: PointerRef; animate: boolean; children: ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!animate || !group.current) return;
    const { x, y } = pointer.current;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, x * 0.5, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, y * 0.3, 3, delta);
  });

  return <group ref={group}>{children}</group>;
}

function Ring({
  radius,
  tilt,
  speed,
  color,
  animate,
}: {
  radius: number;
  tilt: [number, number, number];
  speed: number;
  color: string;
  animate: boolean;
}) {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (animate && ring.current) ring.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ring} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.75} />
    </mesh>
  );
}

function Shell({ animate }: { animate: boolean }) {
  const shell = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!animate || !shell.current) return;
    shell.current.rotation.y += delta * 0.12;
    shell.current.rotation.x += delta * 0.05;
  });

  return (
    <mesh ref={shell}>
      <icosahedronGeometry args={[1.95, 2]} />
      <meshBasicMaterial color={ROSE} wireframe transparent opacity={0.22} />
    </mesh>
  );
}

function Particles({ animate }: { animate: boolean }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const random = seededRandom(7);
    const array = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const radius = 2.8 + random() * 2.6;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      array[i * 3 + 2] = radius * Math.cos(phi);
    }
    return array;
  }, []);

  useFrame((_, delta) => {
    if (!animate || !points.current) return;
    points.current.rotation.y += delta * 0.04;
    points.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={VIOLET} size={0.035} sizeAttenuation transparent opacity={0.8} depthWrite={false} />
    </points>
  );
}

function Satellite({
  position,
  color,
  size,
  animate,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  animate: boolean;
}) {
  return (
    <Float speed={animate ? 2 : 0} rotationIntensity={1.6} floatIntensity={1.4}>
      <mesh position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
      </mesh>
    </Float>
  );
}

function Scene({ pointer, animate }: { pointer: PointerRef; animate: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 4, 5]} color={VIOLET} intensity={90} />
      <pointLight position={[-5, -3, 4]} color={ROSE} intensity={70} />
      <directionalLight position={[0, 6, 3]} intensity={0.8} />

      <Rig pointer={pointer} animate={animate}>
        <Float speed={animate ? 1.4 : 0} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh>
            <icosahedronGeometry args={[1.35, 16]} />
            <MeshDistortMaterial
              color={VIOLET}
              emissive={ROSE}
              emissiveIntensity={0.25}
              roughness={0.15}
              metalness={0.7}
              distort={0.38}
              speed={animate ? 1.8 : 0}
            />
          </mesh>
        </Float>

        <Shell animate={animate} />
        <Ring radius={2.4} tilt={[1.2, 0.2, 0]} speed={0.35} color={VIOLET} animate={animate} />
        <Ring radius={2.9} tilt={[0.5, 1.1, 0]} speed={-0.25} color={ROSE} animate={animate} />
        <Ring radius={3.4} tilt={[1.6, -0.6, 0]} speed={0.18} color={VIOLET} animate={animate} />

        <Satellite position={[2.7, 1.2, 0.4]} color={ROSE} size={0.2} animate={animate} />
        <Satellite position={[-2.9, -0.8, 0.8]} color={VIOLET} size={0.16} animate={animate} />
        <Satellite position={[0.6, -2.8, -0.5]} color={ROSE} size={0.13} animate={animate} />
        <Satellite position={[-1.2, 2.7, -0.8]} color={VIOLET} size={0.12} animate={animate} />

        <Particles animate={animate} />
      </Rig>
    </>
  );
}

export function HeroScene() {
  const reduce = useReducedMotion();
  const wrapper = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [supported] = useState(hasWebGL);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleMove(event: PointerEvent) {
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
    return () => observer.disconnect();
  }, []);

  if (!supported) return null;

  const animate = !reduce && visible;

  return (
    <div ref={wrapper} className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={animate ? "always" : "demand"}
      >
        <Scene pointer={pointer} animate={animate} />
      </Canvas>
    </div>
  );
}
