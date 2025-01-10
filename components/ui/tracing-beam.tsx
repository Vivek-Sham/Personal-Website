"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });
  const [svgHeight, setSvgHeight] = useState(0);

  // Dynamically update SVG height
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === contentRef.current) {
          setSvgHeight(entry.contentRect.height - 25);
        }
      }
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  // Fallback for initial render
  useEffect(() => {
    const initialHeight =
      contentRef.current?.scrollHeight || window.innerHeight;
    setSvgHeight(initialHeight);
  }, []);

  // Spring-based scroll animations for gradient positions
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0.2, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.2, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  const primaryColor = "hsl(var(--primary))";
  const circleBorderColor = "hsl(var(--circle-border-color))";

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", height: "auto" }}
      className={cn("mx-auto", className)}
    >
      <div className="absolute -left-8 lg:-left-[8.5rem] md:-left-12 top-3">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          className="ml-[27px] h-4 w-4 rounded-full border border-[#9091A0] flex items-center justify-center"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : primaryColor,
              borderColor:
                scrollYProgress.get() > 0 ? "white" : circleBorderColor,
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeWidth="2"
            strokeOpacity="0.45"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.5"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor={primaryColor} stopOpacity="0" />
              <stop stopColor={primaryColor} />
              <stop offset="0.325" stopColor={primaryColor} />
              <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
