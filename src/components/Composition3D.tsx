"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * "Ordinary / Composed". Forty-eight identical slabs are the same material a
 * template is made from. Composed, the same slabs fuse into an art-directed
 * layout: colour, depth and proportion decided together. Hovering lifts the
 * slabs under the cursor. Static under reduced motion; falls back to SVG when
 * WebGL is unavailable.
 */

const COLS = 8;
const ROWS = 6;

type Block = { x: number; y: number; w: number; h: number; color: string; height: number };
const blocks: Block[] = [
  { x: 0, y: 0, w: 5, h: 3, color: "--hot", height: 0.95 },
  { x: 5, y: 0, w: 3, h: 2, color: "--paper", height: 0.5 },
  { x: 5, y: 2, w: 3, h: 2, color: "--glow", height: 1.35 },
  { x: 0, y: 3, w: 2, h: 3, color: "--soft", height: 0.65 },
  { x: 2, y: 3, w: 3, h: 3, color: "--mid", height: 0.28 },
  { x: 5, y: 4, w: 3, h: 2, color: "--paper", height: 0.95 },
];

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function cssColors() {
  const cs = getComputedStyle(document.documentElement);
  const v = (n: string, fb: string) => cs.getPropertyValue(n).trim() || fb;
  return {
    "--hot": v("--hot", "#cd2a3e"),
    "--paper": v("--paper", "#fbf2e6"),
    "--glow": v("--glow", "#f6b0ba"),
    "--soft": v("--soft", "#f4d3cc"),
    "--mid": "#2f6b57",
    "--ordinary": "#2c5546",
  } as Record<string, string>;
}

export function Composition3D() {
  const mount = useRef<HTMLDivElement>(null);
  const targetRef = useRef(0);
  const [composed, setComposed] = useState(false);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    targetRef.current = composed ? 1 : 0;
  }, [composed]);

  useEffect(() => {
    const host = mount.current;
    if (!host) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFallback(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.touchAction = "pan-y";

    const colors = cssColors();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 100);

    scene.add(new THREE.HemisphereLight(0xfff4ea, 0x0b2a20, 1.15));
    const sun = new THREE.DirectionalLight(0xfff0e0, 2.6);
    sun.position.set(-6, 12, 5);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1536, 1536);
    sun.shadow.camera.left = -8;
    sun.shadow.camera.right = 8;
    sun.shadow.camera.top = 8;
    sun.shadow.camera.bottom = -8;
    sun.shadow.radius = 5;
    sun.shadow.bias = -0.0004;
    scene.add(sun);

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.38 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.001;
    ground.receiveShadow = true;
    scene.add(ground);

    const count = COLS * ROWS;
    const mesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.0 }),
      count,
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    const group = new THREE.Group();
    group.add(mesh);
    scene.add(group);

    type Tile = { cx: number; cz: number; delay: number; to: THREE.Color; from: THREE.Color; height: number; jitter: number };
    const tiles: Tile[] = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const b = blocks.find((k) => c >= k.x && c < k.x + k.w && r >= k.y && r < k.y + k.h)!;
        const jitter = ((c * 7 + r * 13) % 5) / 5;
        tiles.push({
          cx: c - (COLS - 1) / 2,
          cz: r - (ROWS - 1) / 2,
          delay: ((c + r) / (COLS + ROWS - 2)) * 0.45,
          to: new THREE.Color(colors[b.color]),
          from: new THREE.Color(colors["--ordinary"]).offsetHSL(0, 0, (jitter - 0.5) * 0.05),
          height: b.height,
          jitter,
        });
      }
    }

    const dummy = new THREE.Object3D();
    const tmp = new THREE.Color();
    let progress = 0; // 0 ordinary → 1 composed
    const pointer = { x: 0, z: 0, tx: 0, tz: 0, active: 0, tActive: 0 };
    const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
    const ray = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hit = new THREE.Vector3();

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = w / h;
      const dist = camera.aspect < 1.5 ? 21 + (1.5 - camera.aspect) * 14 : 21;
      camera.position.set(dist * 0.52, dist * 0.78, dist * 0.62);
      camera.lookAt(0, 0.2, 0.3);
      camera.updateProjectionMatrix();
    };

    const draw = (time: number, dt: number) => {
      const target = targetRef.current;
      const speed = reduce ? 1 : dt / 1.7;
      progress += Math.sign(target - progress) * Math.min(Math.abs(target - progress), speed);

      pointer.x += (pointer.tx - pointer.x) * 0.12;
      pointer.z += (pointer.tz - pointer.z) * 0.12;
      pointer.active += (pointer.tActive - pointer.active) * 0.08;
      tilt.x += (tilt.tx - tilt.x) * 0.06;
      tilt.y += (tilt.ty - tilt.y) * 0.06;
      group.rotation.y = tilt.y * 0.12;
      group.rotation.x = tilt.x * 0.05;

      for (let i = 0; i < count; i++) {
        const t = tiles[i];
        const local = ease(Math.min(Math.max((progress - t.delay) / 0.55, 0), 1));
        const gap = 0.84 + local * 0.155;
        const baseH = 0.22 + t.jitter * 0.03;
        let h = baseH + (t.height - baseH) * local;
        const dx = t.cx - pointer.x;
        const dz = t.cz - pointer.z;
        h += Math.exp(-(dx * dx + dz * dz) / 1.1) * 0.38 * pointer.active * (0.4 + (1 - local) * 0.6);
        dummy.position.set(t.cx, h / 2, t.cz);
        dummy.scale.set(gap, h, gap);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        tmp.copy(t.from).lerp(t.to, local);
        mesh.setColorAt(i, tmp);
      }
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      renderer.render(scene, camera);
      void time;
    };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = -(((e.clientY - r.top) / r.height) * 2 - 1);
      ray.setFromCamera(new THREE.Vector2(nx, ny), camera);
      if (ray.ray.intersectPlane(plane, hit)) {
        // undo the group's small rotation by ignoring it: it is only a few degrees
        pointer.tx = hit.x;
        pointer.tz = hit.z;
      }
      pointer.tActive = 1;
      tilt.ty = nx;
      tilt.tx = -ny;
    };
    const onLeave = () => {
      pointer.tActive = 0;
      tilt.tx = 0;
      tilt.ty = 0;
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0, 1);
    });
    ro.observe(host);

    let raf = 0;
    let last = performance.now();
    let visible = false;
    let started = false;
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      draw(now, dt);
      if (visible) raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      targetRef.current = 1;
      progress = 1;
      setComposed(true);
      draw(0, 1);
    } else {
      host.addEventListener("pointermove", onMove, { passive: true });
      host.addEventListener("pointerleave", onLeave);
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (reduce) return;
      if (visible) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
        if (!started) {
          started = true;
          window.setTimeout(() => setComposed(true), 700);
        }
      }
    }, { threshold: 0.25 });
    io.observe(host);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
      ground.geometry.dispose();
      (ground.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  // Reduced motion re-renders on toggle without animation.
  const pill = (active: boolean) =>
    `min-h-10 rounded-full px-5 text-[14px] font-medium transition-colors ${active ? "bg-fg text-bg" : "text-fg/80 hover:text-fg"}`;

  return (
    <figure>
      <div
        ref={mount}
        role="img"
        aria-label="Forty-eight identical slabs shown first as an ordinary grid, then fused into a composed layout of colour and depth."
        className="aspect-[16/11] w-full"
      >
        {fallback && <StaticComposition />}
      </div>
      <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="View" className="inline-flex rounded-full border border-rule p-1">
          <button type="button" aria-pressed={!composed} onClick={() => setComposed(false)} className={pill(!composed)}>Ordinary</button>
          <button type="button" aria-pressed={composed} onClick={() => setComposed(true)} className={pill(composed)}>Composed</button>
        </div>
        <p className="max-w-[16rem] text-[13px] leading-snug text-mute">Same pieces. One is a template. The other is decided.</p>
      </figcaption>
    </figure>
  );
}

function StaticComposition() {
  const cs = typeof document === "undefined" ? null : getComputedStyle(document.documentElement);
  const col = (n: string, fb: string) => cs?.getPropertyValue(n).trim() || fb;
  const map: Record<string, string> = {
    "--hot": col("--hot", "#cd2a3e"),
    "--paper": col("--paper", "#fbf2e6"),
    "--glow": col("--glow", "#f6b0ba"),
    "--soft": col("--soft", "#f4d3cc"),
    "--mid": "#2f6b57",
  };
  return (
    <svg viewBox={`0 0 ${COLS * 40} ${ROWS * 40}`} className="h-full w-full" aria-hidden>
      {blocks.map((b, i) => (
        <rect key={i} x={b.x * 40 + 1} y={b.y * 40 + 1} width={b.w * 40 - 2} height={b.h * 40 - 2} fill={map[b.color]} />
      ))}
    </svg>
  );
}
