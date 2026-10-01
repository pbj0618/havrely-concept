"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One entrance for the whole site: a short rise and fade, once. The layout
 * wraps everything in MotionConfig reducedMotion="user", and globals.css
 * shows [data-reveal] outright under prefers-reduced-motion, so visitors who
 * ask for less motion get the content at once, without the fade.
 */
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
      data-reveal
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
