"use client";

import { Globe, Smartphone, ShoppingCart, Shield, Cpu, Package, Zap } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

const TechStack = () => {
  const { t } = useLanguage();

  const technologies = useMemo(
    () => [
      { label: t("websites"), icon: Globe, color: "from-blue-500 to-cyan-500" },
      { label: t("mobileAppsLabel"), icon: Smartphone, color: "from-purple-500 to-pink-500" },
      { label: t("ecommerceLabel"), icon: ShoppingCart, color: "from-green-500 to-emerald-500" },
      { label: t("cyberSecurity"), icon: Shield, color: "from-sky-500 to-blue-500" },
      { label: t("aiMl"), icon: Cpu, color: "from-orange-500 to-red-500" },
      { label: t("saas"), icon: Package, color: "from-violet-500 to-purple-500" },
    ],
    [t]
  );

  const [activeLineIndex, setActiveLineIndex] = useState<number>(-1);

  useEffect(() => {
    let lineIndex = -1;
    const interval = setInterval(() => {
      lineIndex = (lineIndex + 1) % technologies.length;
      setActiveLineIndex(lineIndex);
      setTimeout(() => {
        setActiveLineIndex(-1);
      }, 1000);
    }, 1800);
    return () => clearInterval(interval);
  }, [technologies.length]);

  const positions = useMemo(() => {
    return technologies.map((_, index) => {
      const angle = (index * 2 * Math.PI) / technologies.length - Math.PI / 2;
      const radius = 120; // Smaller radius for compact layout
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { x, y };
    });
  }, [technologies]);

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-56 h-56 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <ScrollAnimation>
            <div className="space-y-2 md:space-y-3 text-left md:text-left text-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] md:text-xs font-medium">
                  {t("ourTechnologies")}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight"
              >
                {t("cuttingEdge")}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  {t("techStack")}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed"
              >
                {t("techStackDescription")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 border border-slate-600 hover:border-slate-500 text-white text-[10px] md:text-xs font-semibold transition-all duration-300 shadow-lg shadow-slate-900/50 hover:shadow-slate-800/50"
                >
                  <span>{t("exploreServices")}</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>

          <div className="max-w-xl mx-auto w-full">
            <div className="relative h-[280px] sm:h-[300px] md:h-[320px] flex items-center justify-center">
              {/* Center Core with animated rings */}
              <div className="absolute z-20">
                <motion.div
                  className="relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl border-2 border-dashed border-red-500/30" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(239, 68, 68, 0.3)",
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                      "0 0 10px rgba(239, 68, 68, 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-red-600 via-orange-600 to-red-700 flex items-center justify-center border border-red-500/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Connection Lines with particles */}
              <svg
                className="absolute inset-0 w-full h-full svg-overflow-visible"
              >
                <defs>
                  <linearGradient id="techLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#334155" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="techGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {technologies.map((_, index) => {
                  const pos = positions[index];
                  const isActive = activeLineIndex === index;

                  return (
                    <g key={index}>
                      {/* Base connection line */}
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${pos.x}px)`}
                        y2={`calc(50% + ${pos.y}px)`}
                        stroke="#1e293b"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.3"
                      />

                      {/* Animated energy line */}
                      {isActive && (
                        <>
                          <motion.line
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${pos.x}px)`}
                            y2={`calc(50% + ${pos.y}px)`}
                            stroke="url(#techLineGradient)"
                            strokeWidth="3"
                            filter="url(#techGlow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0, 1, 0.5, 0] }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          />

                          {/* Moving particle */}
                          <motion.circle
                            cx="50%"
                            cy="50%"
                            r="2.5"
                            fill="#ef4444"
                            filter="url(#techGlow)"
                            initial={{ opacity: 0 }}
                            animate={{
                              cx: [`50%`, `calc(50% + ${pos.x}px)`],
                              cy: [`50%`, `calc(50% + ${pos.y}px)`],
                              opacity: [0, 1, 1, 0],
                              scale: [0.5, 1.1, 1, 0.5],
                            }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                          />
                        </>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Technology Cards */}
              {technologies.map((tech, index) => {
                const pos = positions[index];
                const isActive = activeLineIndex === index;
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={index}
                    className="absolute z-10"
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      y: isActive ? [-1, 1, -1] : 0,
                    }}
                    transition={{
                      scale: { delay: index * 0.1, type: "spring" },
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card glow effect when active */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-red-500/30 rounded-lg sm:rounded-xl blur-lg sm:blur-xl"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      )}

                      {/* Card */}
                      <div className="relative w-14 h-10 sm:w-16 sm:h-11 md:w-[68px] md:h-12 rounded-lg bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 flex flex-col items-center justify-center gap-0.5 overflow-hidden group hover:border-red-500/50 transition-all duration-500">
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Icon with color animation */}
                        <motion.div
                          animate={isActive ? {
                            scale: [1, 1.12, 1],
                            rotate: [0, 6, -6, 0],
                          } : {}}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 transition-all duration-500 ${
                              isActive
                                ? "text-red-400 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]"
                                : "text-slate-400 group-hover:text-slate-300"
                            }`}
                          />
                        </motion.div>

                        {/* Label with glow effect */}
                        <span
                          className={`text-[6px] sm:text-[7px] md:text-[8px] font-semibold transition-all duration-500 relative z-10 text-center px-0.5 leading-tight ${
                            isActive
                              ? "text-red-400 drop-shadow-[0_0_3px_rgba(239,68,68,0.9)]"
                              : "text-slate-400 group-hover:text-slate-300"
                          }`}
                        >
                          {tech.label}
                        </span>

                        {/* Active indicator dot */}
                        {isActive && (
                          <motion.div
                            className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{
                              scale: [0, 1.2, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(239, 68, 68, 0.7)",
                                "0 0 0 3px rgba(239, 68, 68, 0)",
                              ]
                            }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
