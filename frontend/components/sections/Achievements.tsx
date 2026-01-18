"use client";

import { useEffect, useState } from "react";
import { Trophy, Heart, TrendingUp, Star } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef as useReactRef } from "react";

const achievements = [
  {
    icon: Trophy,
    number: 1000,
    suffix: "+",
    labelKey: "projectsCompleted",
  },
  {
    icon: Heart,
    number: 98,
    suffix: "%",
    labelKey: "clientSatisfaction",
  },
  {
    icon: TrendingUp,
    number: 500,
    suffix: "+",
    labelKey: "activeClients",
  },
  {
    icon: Star,
    number: 24,
    suffix: "",
    labelKey: "yearsExcellence",
  },
];

const AnimatedNumber = ({
  value,
  suffix,
  delay = 0,
}: {
  value: number;
  suffix: string;
  delay?: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useReactRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        step++;
        current = Math.min(increment * step, value);
        setDisplayValue(Math.floor(current));

        if (step >= steps) {
          setDisplayValue(value);
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-xl sm:text-2xl font-bold mb-1 text-white">
      {displayValue}
      {suffix}
    </div>
  );
};

const Achievements = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-br from-[#0b1021] via-[#0f172a] to-[#0b1021] text-white relative overflow-hidden border-b border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold mb-3 text-white"
            >
              {t("ourAchievements")}
            </motion.h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              {t("achievementsDescription")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <ScrollAnimation key={index} delay={index * 100}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-center"
                >
                  <div className="mb-2 flex justify-center">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>

                  <AnimatedNumber
                    value={achievement.number}
                    suffix={achievement.suffix}
                    delay={index * 150}
                  />
                  <div className="text-[10px] text-slate-400">
                    {t(achievement.labelKey)}
                  </div>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
