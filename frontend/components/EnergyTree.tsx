"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Circle } from "lucide-react";

interface EnergyTreeProps {
  centerLabel: string;
  branches: { label: string; icon?: React.ReactNode }[];
  onBranchClick?: (index: number) => void;
}

const EnergyTree = ({ centerLabel, branches, onBranchClick }: EnergyTreeProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pulseIndex, setPulseIndex] = useState<number>(-1);

  // Auto-pulse effect - Sequential animation
  useEffect(() => {
    let currentIndex = -1;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % branches.length;
      setPulseIndex(currentIndex);
      setTimeout(() => {
        setPulseIndex(-1);
      }, 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, [branches.length]);

  const handleBranchClick = (index: number) => {
    setActiveIndex(index);
    onBranchClick?.(index);
    setTimeout(() => setActiveIndex(null), 2000);
  };

  // Calculate positions for branches in a circle
  const getPosition = (index: number) => {
    const angle = (index * 2 * Math.PI) / branches.length - Math.PI / 2;
    const radius = 200; // Distance from center
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      {/* Lightning connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {branches.map((_, index) => {
          const pos = getPosition(index);
          const isActive = pulseIndex === index;

          return (
            <g key={index}>
              {/* Static base path */}
              <line
                x1="50%"
                y1="50%"
                x2={`${50 + pos.x / 2}%`}
                y2={`${50 + pos.y / 2}%`}
                stroke="#475569"
                strokeWidth="1.5"
                opacity="0.2"
              />

              {/* Animated energy line - only active one */}
              {isActive && (
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`${50 + pos.x / 2}%`}
                  y2={`${50 + pos.y / 2}%`}
                  stroke="url(#energyGradient)"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0.7, 0] }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )}

              {/* Energy particle */}
              {isActive && (
                <motion.circle
                  cx={`${50 + pos.x / 4}%`}
                  cy={`${50 + pos.y / 4}%`}
                  r="3"
                  fill="#ef4444"
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1.2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Center button */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{
          scale: pulseIndex !== -1 ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Subtle pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-lg border-2 border-red-500"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Main button */}
          <button
            className="relative w-20 h-20 rounded-lg bg-gradient-to-br from-red-600 to-red-700
                     text-white font-bold text-sm shadow-xl shadow-red-600/30
                     hover:shadow-red-600/50 transition-all duration-500
                     border-2 border-red-500/30
                     flex items-center justify-center"
          >
            <Zap className="w-7 h-7" />
            <span className="absolute -bottom-8 text-xs text-white whitespace-nowrap font-medium">
              {centerLabel}
            </span>
          </button>
        </div>
      </motion.div>

      {/* Branch buttons */}
      {branches.map((branch, index) => {
        const pos = getPosition(index);
        const isPulsing = pulseIndex === index;

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 z-10"
            style={{
              x: pos.x,
              y: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isPulsing ? [1, 1.1, 1] : 1,
              opacity: 1
            }}
            transition={{
              scale: { duration: 0.6, ease: "easeInOut" },
              opacity: { delay: index * 0.1 }
            }}
          >
            <div className="relative">
              {/* Subtle pulse effect */}
              {isPulsing && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-red-500"
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              )}

              {/* Branch button */}
              <motion.button
                onClick={() => handleBranchClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative w-16 h-16 rounded-lg
                  ${isPulsing
                    ? "bg-gradient-to-br from-red-600 to-red-700 border-red-400"
                    : "bg-slate-800/80 border-slate-600/50 hover:border-slate-500"
                  }
                  text-white text-xs font-semibold
                  shadow-lg transition-all duration-500
                  border-2
                  flex flex-col items-center justify-center gap-1
                  group
                `}
              >
                <div className={`transition-all duration-300 ${isPulsing ? "text-white" : "text-slate-400"}`}>
                  {branch.icon || <Circle className="w-5 h-5" />}
                </div>

                {/* Glow on active */}
                {isPulsing && (
                  <div className="absolute inset-0 rounded-lg bg-red-600/30 blur-md" />
                )}
              </motion.button>

              {/* Label */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className={`text-xs font-medium transition-colors duration-300 ${isPulsing ? "text-red-400" : "text-slate-400"}`}>
                  {branch.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default EnergyTree;
