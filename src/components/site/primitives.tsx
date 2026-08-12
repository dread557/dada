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

/**
 * Abstract product visual. This is an illustrative composition, NOT a real
 * product screenshot. Replace with real imagery when screenshots are available.
 */
export function ProjectVisual({
  hue,
  label,
  className,
  variant = "dashboard",
}: {
  hue: number;
  label: string;
  className?: string;
  variant?: "dashboard" | "table" | "flow";
}) {
  const accent = `oklch(0.63 0.19 ${hue})`;
  const soft = `oklch(0.9 0.05 ${hue})`;

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border border-border bg-surface",
        className,
      )}
      role="img"
      aria-label={`Abstract interface illustration representing ${label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative flex h-full flex-col p-4 sm:p-6">
        <div className="flex items-center gap-2 border-b border-border pb-3">
          <span className="size-2 rounded-full" style={{ background: accent }} />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="meta ml-3 truncate">{label}</span>
        </div>

        {variant === "dashboard" && (
          <div className="grid flex-1 grid-cols-3 gap-3 pt-4">
            <div className="col-span-2 flex flex-col justify-end gap-2 border border-border bg-background p-3">
              <div className="flex h-full items-end gap-[3px]">
                {[38, 62, 30, 78, 52, 90, 44, 68, 34, 82, 58, 72].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{
                      height: `${h}%`,
                      background: i % 4 === 0 ? accent : soft,
                    }}
                  />
                ))}
              </div>
              <span className="meta">Volume / 12 mo</span>
            </div>
            <div className="flex flex-col gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 border border-border bg-background p-3">
                  <div className="h-1.5 w-8 bg-border" />
                  <div
                    className="mt-2 h-3 w-14"
                    style={{ background: i === 0 ? accent : "var(--border)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "table" && (
          <div className="flex-1 space-y-2 pt-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center gap-3 border-b border-border pb-2"
              >
                <div className="col-span-4 h-2" style={{ background: i === 1 ? accent : "var(--border)" }} />
                <div className="col-span-3 h-2 bg-border/70" />
                <div className="col-span-2 h-2 bg-border/70" />
                <div className="col-span-3 h-2" style={{ background: soft }} />
              </div>
            ))}
          </div>
        )}

        {variant === "flow" && (
          <div className="flex flex-1 items-center justify-center gap-3 pt-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="flex size-16 items-center justify-center border sm:size-20"
                  style={{
                    borderColor: i === 1 ? accent : "var(--border)",
                    background: "var(--background)",
                  }}
                >
                  <span className="meta">{`0${i + 1}`}</span>
                </div>
                {i < 2 && <div className="h-px w-6 bg-border sm:w-10" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
