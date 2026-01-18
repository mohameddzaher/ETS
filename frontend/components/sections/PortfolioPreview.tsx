"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioPreview = () => {
  const { t } = useLanguage();

  const portfolioItems = [
    {
      category: t("webDevelopment"),
      title: t("ecommercePlatform"),
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      category: t("mobileApplications"),
      title: t("healthcareMobileApp"),
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    },
    {
      category: t("aiSolutions"),
      title: t("aiPoweredAnalytics"),
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
            >
              {t("ourPortfolio")}
            </motion.h2>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-8">
              {t("portfolioDescription")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Link href="/portfolio">
                <motion.div className="group relative rounded-lg overflow-hidden bg-slate-900/50 border border-slate-800/50">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-32 md:h-24 w-full md:w-40 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-center">
                      <p className="text-[10px] text-slate-400 mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-6 py-3 bg-slate-900/50 hover:bg-slate-800/50 text-white text-sm rounded-lg border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              {t("viewAllProjects")}
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
