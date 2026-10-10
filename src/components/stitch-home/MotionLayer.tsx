"use client";

import { useLayoutEffect, useRef } from "react";

const RADIUS = 40;
const PULL = 0.3;
const MAX_SHIFT = 14;
const SPY_IDS = [
  "section-selected-concepts",
  "why-we-exist",
  "section-what-we-do",
  "section-the-difference",
  "section-pricing",
  "section-timeline",
];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

function tagTargets(root: HTMLElement) {
  const tagged: HTMLElement[] = [];
  const cards: HTMLElement[] = [];
  const ctas: HTMLElement[] = [];
  const reveal = (element: HTMLElement) => {
    if (element.hasAttribute("data-reveal")) return;
    element.setAttribute("data-reveal", "");
    tagged.push(element);
  };

  const main = root.querySelector("main");
  const sections = main ? Array.from(main.children).filter((c): c is HTMLElement => c instanceof HTMLElement) : [];
  const hero = sections[0];

  root.querySelectorAll<HTMLElement>("main a, main button, header a[data-path='inquire']").forEach((element) => {
    const className = element.className.toString();
    if (!/uppercase/.test(className) || !/rounded/.test(className) || !/tracking-/.test(className)) return;
    const inHero = hero?.contains(element) ?? false;
    const inHeader = element.closest("header") !== null;
    element.setAttribute("data-cta", inHeader ? "nav" : /bg-linear-to-r/.test(className) ? "solid" : "ghost");
    if (inHero) element.setAttribute("data-hero-cta", "");
    element.querySelectorAll(".material-symbols-outlined").forEach((icon) => {
      icon.setAttribute("data-dir", icon.textContent?.trim() === "arrow_outward" ? "out" : "right");
    });
    ctas.push(element);
    const row = element.parentElement;
    if (row && /flex-wrap/.test(row.className.toString())) row.setAttribute("data-cta-row", "");
  });

  if (hero) {
    const wrapper = hero.querySelector<HTMLElement>(":scope > div.z-10");
    wrapper?.querySelectorAll<HTMLElement>(":scope > *").forEach(reveal);
  }

  sections.slice(1).forEach((section) => {
    section.querySelectorAll<HTMLElement>("h2, h2 ~ p, [class*='inline-flex'][class*='backdrop-blur']").forEach(reveal);

    section.querySelectorAll<HTMLElement>("*").forEach((element) => {
      const className = element.className?.toString() ?? "";
      if (!/rounded/.test(className) || !/\bborder\b/.test(className)) return;
      if (element.closest("[data-card], [data-panel]")) return;
      const rect = element.getBoundingClientRect();
      if (rect.height < 150 || rect.height > 900) return;
      if (rect.width <= 760) {
        element.setAttribute("data-card", "");
        if (getComputedStyle(element).position === "static") element.style.position = "relative";
        cards.push(element);
      } else {
        element.setAttribute("data-panel", "");
      }
      reveal(element);
    });

    section.querySelectorAll<HTMLElement>("[data-cta]").forEach((cta) => {
      if (!cta.closest("[data-card], [data-panel]")) reveal(cta);
    });
  });

  root.querySelectorAll<HTMLElement>("footer [class*='col-span']").forEach(reveal);

  const groups = new Map<Element, number>();
  tagged.forEach((element) => {
    const parent = element.parentElement as Element;
    const index = groups.get(parent) ?? 0;
    groups.set(parent, index + 1);
    element.style.setProperty("--st-delay", `${Math.min(index, 5) * 90}ms`);
  });

  return { tagged, cards, ctas };
}

export function MotionLayer() {
  const progress = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>(".stitch-home");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const header = root.querySelector<HTMLElement>("header");
    const timelineLine = root.querySelector<HTMLElement>("#section-timeline [class*='w-[1px]'][class*='bg-linear-to-b']");
    const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>("header nav a[href^='#']"));
    const { tagged, cards, ctas } = tagTargets(root);
    const magnetic = ctas.filter((cta) => !cta.hasAttribute("data-hero-cta"));
    const spyTargets = SPY_IDS.map((id) => document.getElementById(id));

    root.classList.add("st-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    tagged.forEach((element) => observer.observe(element));

    let frame = 0;
    let pointer: { x: number; y: number; type: string } | null = null;

    function updateScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      header?.toggleAttribute("data-scrolled", window.scrollY > 8);

      if (timelineLine?.parentElement) {
        const rect = timelineLine.parentElement.getBoundingClientRect();
        const p = clamp((window.innerHeight * 0.65 - rect.top) / rect.height, 0, 1);
        timelineLine.style.transformOrigin = "top";
        timelineLine.style.transform = `scaleY(${p})`;
      }

      let active = 0;
      spyTargets.forEach((target, index) => {
        if (target && target.getBoundingClientRect().top <= window.innerHeight * 0.4) active = index;
      });
      navLinks.forEach((link) => {
        const id = link.getAttribute("href")?.slice(1);
        if (id === SPY_IDS[active]) link.setAttribute("data-active", "");
        else link.removeAttribute("data-active");
      });
    }

    function updatePointer() {
      frame = 0;
      if (!pointer) return;
      const { x, y, type } = pointer;

      if (type === "mouse") {
        const card = (document.elementFromPoint(x, y) as HTMLElement | null)?.closest<HTMLElement>("[data-card]");
        if (card) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--st-mx", `${x - rect.left}px`);
          card.style.setProperty("--st-my", `${y - rect.top}px`);
        }

        magnetic.forEach((cta) => {
          const rect = cta.getBoundingClientRect();
          const shiftX = parseFloat(cta.dataset.shiftX ?? "0");
          const shiftY = parseFloat(cta.dataset.shiftY ?? "0");
          const left = rect.left - shiftX;
          const top = rect.top - shiftY;
          const gapX = Math.max(left - x, 0, x - (left + rect.width));
          const gapY = Math.max(top - y, 0, y - (top + rect.height));
          const near = Math.hypot(gapX, gapY) <= RADIUS;
          const nextX = near ? clamp((x - (left + rect.width / 2)) * PULL, -MAX_SHIFT, MAX_SHIFT) : 0;
          const nextY = near ? clamp((y - (top + rect.height / 2)) * PULL, -MAX_SHIFT, MAX_SHIFT) : 0;
          cta.dataset.shiftX = String(nextX);
          cta.dataset.shiftY = String(nextY);
          cta.style.translate = near ? `${nextX}px ${nextY}px` : "";
        });
      }
    }

    function handlePointer(event: PointerEvent) {
      pointer = { x: event.clientX, y: event.clientY, type: event.pointerType };
      if (!frame) frame = requestAnimationFrame(updatePointer);
    }

    function handleDown(event: PointerEvent) {
      const cta = (event.target as HTMLElement).closest<HTMLElement>("[data-cta]");
      if (!cta) return;
      const rect = cta.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = document.createElement("span");
      ripple.className = "st-ripple";
      ripple.style.cssText = `left:${event.clientX - rect.left}px;top:${event.clientY - rect.top}px;width:${size}px;height:${size}px`;
      cta.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    }

    updateScroll();
    root.addEventListener("pointerdown", handleDown);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("pointermove", handlePointer);
      root.classList.remove("st-motion");
      tagged.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.classList.remove("is-in");
        element.style.removeProperty("--st-delay");
      });
      cards.forEach((card) => card.removeAttribute("data-card"));
      root.querySelectorAll("[data-panel]").forEach((panel) => panel.removeAttribute("data-panel"));
      ctas.forEach((cta) => {
        cta.removeAttribute("data-cta");
        cta.removeAttribute("data-hero-cta");
        cta.style.translate = "";
      });
      if (timelineLine) timelineLine.style.transform = "";
    };
  }, []);

  return <div ref={progress} aria-hidden="true" className="st-progress" />;
}
