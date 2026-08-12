"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";

export function SmoothScroll() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ duration: 1.1, smoothWheel: true });
      lenis = instance;
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [reduced]);

  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 right-0 z-40 hidden h-screen w-px bg-border md:block"
    >
      <motion.div className="w-px origin-top bg-accent" style={{ scaleY, height: "100%" }} />
    </div>
  );
}

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset["cursor"] ?? null);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[70] flex items-center justify-center rounded-full bg-accent text-[10px] font-medium tracking-[0.14em] text-accent-foreground uppercase mix-blend-normal"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: label ? 84 : 10, height: label ? 84 : 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
    >
      {label}
    </motion.div>
  );
}
