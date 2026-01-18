"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, lang } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const quickLinks = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/services" },
    { name: t("about"), href: "/about" },
    { name: t("portfolio"), href: "/portfolio" },
    { name: t("career"), href: "/career" },
    { name: t("contact"), href: "/contact" },
  ];

  const services = [
    t("webDevelopment"),
    t("mobileApplications"),
    t("aiSolutions"),
    t("ecommerce"),
    "Consulting",
  ];

  return (
    <footer className="bg-black text-white border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative h-12 sm:h-14 w-auto mb-5"
            >
              <Image
                src="/images/white-logo.png"
                alt="Energize Tech Solutions"
                width={200}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </motion.div>
            <p
              className="text-xs text-slate-400 leading-relaxed mb-4"
              style={{ textAlign: "justify" }}
            >
              {t("footerDescription")}
            </p>
            <div
              className={`flex ${
                lang === "ar" ? "space-x-reverse" : ""
              } space-x-3`}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-[#eb1f28] flex items-center justify-center transition-colors border border-slate-800"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-slate-400 hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-[#eb1f28] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              {t("services")}
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-xs text-slate-400 hover:text-[#eb1f28] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li
                className={`flex items-start ${
                  lang === "ar" ? "space-x-reverse" : ""
                } space-x-3`}
              >
                <Mail className="w-4 h-4 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-400">info@ets-ksa.com</span>
              </li>
              <li
                className={`flex items-start ${
                  lang === "ar" ? "space-x-reverse" : ""
                } space-x-3`}
              >
                <Phone className="w-4 h-4 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-400">+966 53 848 6109</span>
              </li>
              <li
                className={`flex items-start ${
                  lang === "ar" ? "space-x-reverse" : ""
                } space-x-3`}
              >
                <MapPin className="w-4 h-4 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-400">
                  Saudi Arabia, Egypt, Dubai, Oman
                </span>
              </li>
              <li
                className={`flex items-start ${
                  lang === "ar" ? "space-x-reverse" : ""
                } space-x-3`}
              >
                <Clock className="w-4 h-4 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-400">
                  {t("workingHoursTime")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center ${
              lang === "ar" ? "space-y-reverse" : ""
            } space-y-4 md:space-y-0`}
          >
            <p className="text-xs text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} Energize Tech Solutions. All rights
              reserved.
            </p>
            <div
              className={`flex ${
                lang === "ar" ? "space-x-reverse" : ""
              } space-x-6`}
            >
              <Link
                href="#"
                className="text-xs text-slate-500 hover:text-[#eb1f28] transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href="#"
                className="text-xs text-slate-500 hover:text-[#eb1f28] transition-colors"
              >
                {t("termsOfService")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
