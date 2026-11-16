"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/animate-ui/components/radix/popover";
import { lanes, timeline, type Lane } from "@/lib/content";

const months = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + m - 1;
};
const span = months(timeline.end) - months(timeline.start);
const pct = (ym: string) => ((months(ym) - months(timeline.start)) / span) * 100;

const YEARS = ["2024", "2025", "2026"];

function LaneRow({ lane, index }: { lane: Lane; index: number }) {
  const reduced = useReducedMotion();
  // Watch the full-width track, not the bars: a bar at scaleX(0) has no area to intersect.
  const track = useRef<HTMLSpanElement>(null);
  const inView = useInView(track, { once: true, margin: "-40px" });
  return (
    <li className="border-t border-border first:border-t-0">
      <Popover>
        <PopoverTrigger className="group grid w-full cursor-pointer gap-x-4 gap-y-2 py-3 text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:grid-cols-[13rem_1fr] md:items-center">
          <span className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-muted-foreground">{index + 1}</span>
            <span className="font-heading text-xl font-semibold uppercase tracking-wide group-hover:text-primary">
              {lane.name}
            </span>
          </span>
          <span ref={track} className="relative block h-5">
            {lane.segments.map((s) => (
              <motion.span
                key={s.from}
                className="absolute inset-y-0 origin-left rounded-[2px] bg-primary group-hover:bg-foreground"
                style={{
                  left: `${pct(s.from)}%`,
                  width: `${Math.max(pct(s.to) - pct(s.from), 1.2)}%`,
                }}
                initial={reduced ? false : { scaleX: 0 }}
                animate={{ scaleX: inView ? 1 : 0 }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </span>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[min(24rem,calc(100vw-2rem))]">
          <p className="font-heading text-xl font-semibold uppercase tracking-wide">{lane.role}</p>
          <p className="mb-3 font-mono text-xs text-muted-foreground">
            {lane.name} · {lane.dates}
          </p>
          <ul className="space-y-2 text-sm leading-relaxed">
            {lane.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </li>
  );
}

export function Timeline() {
  return (
    <div>
      <div className="grid gap-x-4 md:grid-cols-[13rem_1fr]">
        <div className="relative col-start-1 h-6 md:col-start-2">
          {YEARS.map((y) => (
            <span
              key={y}
              className="absolute -translate-x-1/2 font-mono text-xs text-muted-foreground first:translate-x-0"
              style={{ left: `${pct(`${y}-01`)}%` }}
            >
              {y}
            </span>
          ))}
        </div>
      </div>
      <ol>
        {lanes.map((lane, i) => (
          <LaneRow key={lane.name} lane={lane} index={i} />
        ))}
      </ol>
    </div>
  );
}
