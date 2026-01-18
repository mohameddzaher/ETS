"use client";

import { MapPin } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const MapSection = () => {
  const { t, lang } = useLanguage();

  const locations = [t("saudiArabia"), t("egypt"), t("dubai"), t("oman")];

  return (
    <section className="py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        <ScrollAnimation>
          <div className="text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold mb-3"
            >
              {t("findUs")}
            </motion.h2>
            <p
              className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              {t("mapDescription")}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <motion.a
            href="https://maps.app.goo.gl/2GDxDh8wa5mJbWgt9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-slate-800 shadow-xl cursor-pointer block group"
          >
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
              alt="Our Location"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center z-10">
                <MapPin className="w-8 h-8 text-[#eb1f28] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold text-sm mb-1">
                  {t("ourLocation")}
                </p>
                <p className="text-slate-300 text-xs">
                  Click to open in Google Maps
                </p>
              </div>
            </div>
            <div
              className={`absolute top-2 ${
                lang === "ar" ? "left-2" : "right-2"
              } bg-slate-900/90 backdrop-blur-sm p-2 rounded-lg border border-slate-800 shadow-lg z-20`}
            >
              <div
                className={`flex items-center ${
                  lang === "ar" ? "space-x-reverse" : ""
                } space-x-2 text-white`}
              >
                <MapPin className="w-3 h-3 text-[#eb1f28]" />
                <span className="text-[10px] font-medium">
                  {t("ourLocation")}
                </span>
              </div>
            </div>
          </motion.a>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.15 }}
                className="group p-3 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-lg text-center border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                <MapPin className="w-4 h-4 text-[#eb1f28] mx-auto mb-1.5 relative z-10" />
                <p className="text-[10px] font-medium text-white relative z-10">
                  {location}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MapSection;
