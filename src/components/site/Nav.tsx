"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { contactInfo } from "@/data/portfolio";

const links = [
  { n: "01", label: "Work", href: "#work" },
  { n: "02", label: "About", href: "#about" },
  { n: "03", label: "Experience", href: "#experience" },
  { n: "04", label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("work");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["work", "about", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 py-3 backdrop-blur-md"
            : "border-b border-transparent py-6"
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <a href="#top" className="group flex flex-col leading-none">
            <span className="font-display text-base font-medium tracking-tight uppercase">
              Dada Ol.
            </span>
            <span className="meta mt-1 hidden sm:block">Frontend Engineer</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
            {links.slice(0, 4).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="meta link-underline data-[active=true]:text-foreground"
                data-active={active === l.href.slice(1)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="meta text-foreground md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
          >
            Menu
          </button>

          <span className="meta hidden md:block">
            {active === "contact" ? "04" : active === "experience" ? "03" : active === "about" ? "02" : "01"} / 04
          </span>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink text-background"
            initial={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="shell flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-base uppercase">Dada Ol.</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="meta text-background"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-16 flex flex-1 flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-background/15 py-4"
                  >
                    <span className="font-mono text-[11px] opacity-60">{l.n}</span>
                    <span className="display-md uppercase">{l.label}</span>
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-6 pb-4">
                <a className="meta text-background/70" href={contactInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="meta text-background/70" href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="meta text-background/70" href={`mailto:${contactInfo.email}`}>
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
