"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor principal
  const wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const animate = () => {
    wordsArray.forEach((word, idx) => {
      setTimeout(() => {
        const spans = containerRef.current?.querySelectorAll("span");
        if (spans) {
          spans[idx].style.opacity = "1";
        }
      }, idx * 200); // Incrementar el retardo por cada palabra
    });
  };

  const renderWords = () => {
    return (
      <motion.div ref={containerRef}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div className="w-2/3 mx-auto">
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    </div>
  );
};
