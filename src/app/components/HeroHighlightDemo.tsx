"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20"
      >
        Concept.
      </motion.h1>

      {/* Primer gradiente */}
      <div className="absolute inset-x-20 top-0 mt-32 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />

      <div className="absolute inset-x-20 top-0 mt-32 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />


      {/* segundo gradiente */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: ["100%", "-100%", "0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="absolute inset-x-60 top-0 mt-32 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: ["100%", "-100%", "0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="absolute inset-x-60 top-0 mt-32 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"
      />
    </HeroHighlight>
  );
}
