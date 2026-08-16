"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      {...(reduced ? {} : { whileInView: { opacity: 1, y: 0 } })}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

export function LineReveal({
  lines,
  className,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={line + i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={reduced ? false : { y: "110%" }}
            {...(reduced ? {} : { animate: { y: "0%" } })}
            transition={{
              duration: 1,
              delay: delay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SectionHead({
  index,
  label,
  title,
  id,
}: {
  index: string;
  label: string;
  title?: string;
  id?: string;
}) {
  return (
    <div id={id} className="rule scroll-mt-24 pt-6">
      <div className="flex items-baseline justify-between gap-6">
        <span className="meta">
          {index} / {label}
        </span>
        <span className="meta hidden sm:block">Dada Olawunmi</span>
      </div>
      {title ? (
        <Reveal className="mt-10">
          <h2 className="display-lg uppercase">{title}</h2>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const y = useTransform(smooth, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div {...(reduced ? {} : { style: { y } })}>{children}</motion.div>
    </div>
  );
}

export function ProjectVisual({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border border-border bg-surface",
        className,
      )}
    >
      <img
        src={src}
        alt={label}
        className="size-full object-contain object-center"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
