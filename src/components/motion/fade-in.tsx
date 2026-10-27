"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type MotionEffectProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Entrance animation for above-the-fold content (respects reduced motion). */
export function FadeIn({ children, className, delay = 0, y = 24 }: MotionEffectProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Scroll-in reveal for sections (respects reduced motion). */
export function Reveal({ children, className, delay = 0, y = 28 }: MotionEffectProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
