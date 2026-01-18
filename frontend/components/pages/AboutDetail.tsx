"use client";

import Image from "next/image";
import {
  Award,
  Users,
  Globe,
  Target,
  Heart,
  Lightbulb,
  Sparkles,
  Code,
  MapPin,
} from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutDetail = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      titleKey: "integrity",
      descriptionKey: "integrityDesc",
    },
    {
      icon: Lightbulb,
      titleKey: "innovation",
      descriptionKey: "innovationDesc",
    },
    {
      icon: Target,
      titleKey: "excellence",
      descriptionKey: "excellenceDesc",
    },
    {
      icon: Users,
      titleKey: "collaboration",
      descriptionKey: "collaborationDesc",
    },
  ];

  const boardMembers = [
    {
      name: "Ahmed Al-Saud",
      roleKey: "ceoFounder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      descriptionKey: "visionaryLeader",
    },
    {
      name: "Sarah Mohamed",
      roleKey: "cto",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      descriptionKey: "techExpert",
    },
    {
      name: "Mohammed Hassan",
      roleKey: "coo",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      descriptionKey: "operationsSpecialist",
    },
    {
      name: "Fatima Ali",
      roleKey: "cfo",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      descriptionKey: "financialStrategist",
    },
  ];

  const techStack = [
    { name: t("techReactNextjs"), icon: Code },
    { name: t("techNodePython"), icon: Code },
    { name: t("techAIML"), icon: Code },
    { name: t("techCloudInfrastructure"), icon: Code },
    { name: t("techMobileDevelopment"), icon: Code },
    { name: t("techDatabaseSystems"), icon: Code },
  ];

  const offices = [
    { location: t("officeRiyadh"), icon: MapPin },
    { location: t("officeCairo"), icon: MapPin },
    { location: t("officeDubai"), icon: MapPin },
    { location: t("officeMuscat"), icon: MapPin },
  ];

  return (
    <div className="pt-16 bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#eb1f28]/20 via-[#ff4757]/20 to-[#eb1f28]/20 backdrop-blur-xl border border-[#eb1f28]/40 mb-4"
              >
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
                <span className="text-white font-bold text-[10px] tracking-wide">
                  {t("about")}
                </span>
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              </motion.div>

              <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4">
                {t("aboutEnergizeTech")}
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("aboutDescription1")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <ScrollAnimation>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-64 rounded-xl overflow-hidden border border-slate-800"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  {t("ourStory")}
                </h2>
                <p
                  className="text-xs text-slate-400 mb-3 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {t("ourStoryDesc1")}
                </p>
                <p
                  className="text-xs text-slate-400 mb-3 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {t("ourStoryDesc2")}
                </p>
                <p
                  className="text-xs text-slate-400 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {t("ourStoryDesc3")}
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Board of Directors */}
          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
                {t("boardOfDirectors")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="group p-4 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150 text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[#eb1f28]/50 relative z-10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold mb-1 text-white relative z-10">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#eb1f28] mb-2 relative z-10">
                      {t(member.roleKey)}
                    </p>
                    <p
                      className="text-[10px] text-slate-400 leading-relaxed relative z-10"
                      style={{ textAlign: "justify" }}
                    >
                      {t(member.descriptionKey)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Values Section */}
          <ScrollAnimation delay={100}>
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
                {t("ourValues")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.15 }}
                      className="group p-4 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#eb1f28] to-[#ff4757] flex items-center justify-center mb-3 relative z-10">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm font-semibold mb-2 text-white relative z-10">
                        {t(value.titleKey)}
                      </h3>
                      <p
                        className="text-[10px] text-slate-400 leading-relaxed relative z-10"
                        style={{ textAlign: "justify" }}
                      >
                        {t(value.descriptionKey)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Technology Stack */}
          <ScrollAnimation delay={200}>
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
                {t("ourTechnologyStack")}
              </h2>
              <div className="relative max-w-4xl mx-auto">
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-[#eb1f28] flex items-center justify-center">
                  <Code className="w-8 h-8 text-[#eb1f28]" />
                </div>

                {/* SVG Lines - Red lines from center to all directions */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{ overflow: "visible" }}
                >
                  {techStack.map((_, index) => {
                    const angle =
                      (index * 2 * Math.PI) / techStack.length - Math.PI / 2;
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const centerX = "50%";
                    const centerY = "50%";
                    const endX = `calc(50% + ${x}px)`;
                    const endY = `calc(50% + ${y}px)`;

                    return (
                      <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={endX}
                        y2={endY}
                        stroke="#eb1f28"
                        strokeWidth="2"
                        opacity="0.6"
                      />
                    );
                  })}
                </svg>

                {/* Tech Items */}
                <div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative"
                  style={{ minHeight: "300px" }}
                >
                  {techStack.map((tech, index) => {
                    const Icon = tech.icon;
                    const angle =
                      (index * 2 * Math.PI) / techStack.length - Math.PI / 2;
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={index}
                        className="p-3 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 text-center"
                        style={{
                          position: "absolute",
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-[#eb1f28] mx-auto mb-1.5" />
                        <p className="text-[10px] text-white font-medium">
                          {tech.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Our Offices */}
          <ScrollAnimation delay={300}>
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
                {t("ourOffices")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {offices.map((office, index) => {
                  const Icon = office.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -3 }}
                      transition={{ duration: 0.15 }}
                      className="group p-4 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                      <Icon className="w-6 h-6 text-[#eb1f28] mb-3 relative z-10" />
                      <p className="text-xs text-white font-medium relative z-10">
                        {office.location}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          {/* Stats Section */}
          <ScrollAnimation delay={400}>
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Award className="w-7 h-7 text-[#eb1f28] mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1 gradient-text">
                    24
                  </div>
                  <div className="text-xs text-slate-400">
                    {t("yearsExperience")}
                  </div>
                </div>
                <div>
                  <Users className="w-7 h-7 text-[#eb1f28] mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1 gradient-text">
                    500+
                  </div>
                  <div className="text-xs text-slate-400">
                    {t("happyClients")}
                  </div>
                </div>
                <div>
                  <Globe className="w-7 h-7 text-[#eb1f28] mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1 gradient-text">4</div>
                  <div className="text-xs text-slate-400">{t("countries")}</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default AboutDetail;
