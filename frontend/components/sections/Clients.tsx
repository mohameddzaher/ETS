"use client";

import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const clientLogos = [
  { src: "/images/clients/Energize Agency.png", name: "Energize Agency" },
  { src: "/images/clients/Energize Design.png", name: "Energize Design" },
  { src: "/images/clients/Energize Event.png", name: "Energize Event" },
  { src: "/images/clients/Kit Factory.png", name: "Kit Factory" },
  { src: "/images/clients/Diwan Adly.png", name: "Diwan Adly" },
  { src: "/images/clients/Vision.png", name: "Vision" },
  { src: "/images/clients/Red comma.png", name: "Red Comma" },
  { src: "/images/clients/primo.png", name: "Primo" },
  { src: "/images/clients/little-leaders.png", name: "Little Leaders" },
  { src: "/images/clients/royal med.png", name: "Royal Med" },
  { src: "/images/clients/macalloria.png", name: "Macalloria" },
  { src: "/images/clients/logistics.png", name: "Logistics" },
];

const Clients = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(235,31,40,0.03),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3"
            >
              {t("ourClients")}
            </motion.h2>
            <p
              className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              {t("clientsDescription")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="relative h-16 w-32 flex-shrink-0 bg-gray/95 backdrop-blur-sm rounded-lg p-3 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain p-2"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
