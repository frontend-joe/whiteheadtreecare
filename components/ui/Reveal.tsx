"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds for items within a group. */
  delay?: number;
  /** Distance (px) the element travels in from. */
  y?: number;
  as?: "div" | "li" | "span" | "section";
};

type Custom = { delay: number; y: number; reduce: boolean };

const variants: Variants = {
  // Reduced motion → cross-fade only, no vestibular travel (Apple §14).
  hidden: ({ y, reduce }: Custom) => ({ opacity: 0, y: reduce ? 0 : y }),
  visible: ({ delay, reduce }: Custom) => ({
    opacity: 1,
    y: 0,
    transition: reduce
      ? { duration: 0.3, delay }
      : // Critically damped spring — settles gracefully, no distracting overshoot (§4).
        { type: "spring", bounce: 0, duration: 0.6, delay },
  }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion() ?? false;
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={{ delay, y, reduce }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
