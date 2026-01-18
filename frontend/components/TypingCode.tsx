"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingCodeProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
}

const TypingCode = ({
  text,
  delay = 0,
  speed = 50,
  className = "",
  showCursor = true,
}: TypingCodeProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + (currentIndex === 0 ? 0 : speed));

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, delay, speed, text]);

  return (
    <span className={`inline-block ${className}`}>
      <span className="text-slate-400">&lt;</span>
      <span className="relative">
        {displayText}
        {showCursor && !isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-0.5 h-4 bg-[#eb1f28] ml-0.5"
          />
        )}
      </span>
      <span className="text-slate-400">/&gt;</span>
    </span>
  );
};

export default TypingCode;
