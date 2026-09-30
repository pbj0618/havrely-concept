"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * The hero photograph drifts a little slower than the page. Kept small
 * (6%) so it reads as depth, not as an effect; MotionConfig turns it off
 * for reduced motion.
 */
export function ParallaxPhoto({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image src={src} alt={alt} fill priority sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
