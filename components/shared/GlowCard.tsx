"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type GlowCardProps = HTMLMotionProps<"div"> & {
  glow?: "gold" | "red" | "neutral";
};

export function GlowCard({
  className,
  children,
  glow = "neutral",
  ...props
}: GlowCardProps) {
  const glowClass = {
    gold: "before:bg-gold/18 hover:border-gold/35",
    red: "before:bg-neon-red/16 hover:border-neon-red/35",
    neutral: "before:bg-white/8 hover:border-white/20"
  }[glow];

  return (
    <motion.div
      className={cn(
        "glass-panel group relative overflow-hidden rounded-lg p-6 transition duration-300 before:absolute before:-right-12 before:-top-10 before:h-24 before:w-44 before:rotate-12 before:blur-3xl before:content-['']",
        glowClass,
        className
      )}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
