"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Thin bar across the top of the window showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-40 h-1 origin-left bg-primary"
      style={{ scaleX }}
    />
  );
}

/** First and last name drift apart as the hero scrolls away. */
export function HeroName() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const first = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -260]);
  const last = useTransform(scrollY, [0, 700], [0, reduced ? 0 : 260]);
  return (
    <h1 className="font-heading text-[clamp(4.5rem,13vw,12rem)] font-bold uppercase leading-[0.85]">
      <motion.span className="block" style={{ x: first }}>
        Samir
      </motion.span>
      <motion.span className="block text-primary" style={{ x: last }}>
        Kanbar
      </motion.span>
    </h1>
  );
}

/** The photo is taller than its frame and slides up faster than the page. */
export function HeroPhoto({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], ["0%", reduced ? "0%" : "-9%"]);
  return (
    <div className="relative aspect-square w-full max-w-72 overflow-hidden rounded-md md:max-w-80 md:justify-self-end">
      <motion.div className="absolute inset-x-0 top-0 h-[110%]" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Slides content up into place the first time it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Two-column story section. The text fades up gently as it enters the viewport. */
export function StorySection({
  id,
  aside,
  paragraphs,
  children,
}: {
  id: string;
  aside: ReactNode;
  paragraphs: string[];
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 bg-foreground py-16 text-background sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
        <div>{aside}</div>
        <div className="space-y-4 text-lg leading-relaxed lg:text-xl">
          {paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 0.08}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
      {children}
    </section>
  );
}

/** Oversized text that slides sideways as the page scrolls. */
export function ScrollBand({ text }: { text: string }) {
  const reduced = useReducedMotion();
  const band = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: band,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-35%"]);
  return (
    <div ref={band} aria-hidden className="overflow-x-clip py-6">
      <motion.p
        className="whitespace-nowrap font-heading text-[clamp(4rem,12vw,10rem)] font-bold uppercase leading-none text-primary"
        style={{ x }}
      >
        {`${text} `.repeat(3)}
      </motion.p>
    </div>
  );
}
