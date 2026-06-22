"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

const AUTOPLAY_MS = 6500;

const variants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);

  const paginate = useCallback(
    (step: number) => {
      setState(([current]) => {
        const next = (current + step + testimonials.length) % testimonials.length;
        return [next, step];
      });
    },
    [],
  );

  const goTo = (target: number) =>
    setState(([current]) => [target, target > current ? 1 : -1]);

  // Auto-advance.
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, paginate, reduce]);

  const active = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full bg-ink object-cover"
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/testimonials.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Testimonials
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What our customers say
        </h2>

        <div className="relative mt-10 min-h-[18rem] sm:min-h-[16rem]">
          <Quote
            className="mx-auto mb-6 text-accent/80"
            size={40}
            strokeWidth={1.5}
          />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-balance text-lg font-medium leading-relaxed text-white sm:text-xl">
                “{active.quote}”
              </p>
              <footer className="mt-7 flex items-center justify-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white">
                  {active.initials}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold text-white">
                    {active.name}
                  </span>
                  <span className="block text-sm text-white/60">
                    {active.location}
                  </span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => paginate(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
