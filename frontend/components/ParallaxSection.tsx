"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const ParallaxSection = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  let transform;
  const range = 100 * speed;

  switch (direction) {
    case "up":
      transform = useTransform(smoothProgress, [0, 1], [range, -range]);
      break;
    case "down":
      transform = useTransform(smoothProgress, [0, 1], [-range, range]);
      break;
    case "left":
      transform = useTransform(smoothProgress, [0, 1], [range, -range]);
      break;
    case "right":
      transform = useTransform(smoothProgress, [0, 1], [-range, range]);
      break;
  }

  const style =
    direction === "left" || direction === "right"
      ? { x: transform }
      : { y: transform };

  return (
    <div ref={ref} className={className}>
      <motion.div style={style}>{children}</motion.div>
    </div>
  );
};

export default ParallaxSection;
