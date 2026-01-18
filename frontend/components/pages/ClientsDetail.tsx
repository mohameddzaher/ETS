"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Quote, Star, Sparkles } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import * as THREE from "three";

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

const ClientsDetail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t("testimonial1Name"),
      company: t("testimonial1Company"),
      role: t("testimonial1Role"),
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      quote: t("testimonial1Quote"),
      rating: 5,
    },
    {
      name: t("testimonial2Name"),
      company: t("testimonial2Company"),
      role: t("testimonial2Role"),
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      quote: t("testimonial2Quote"),
      rating: 5,
    },
    {
      name: t("testimonial3Name"),
      company: t("testimonial3Company"),
      role: t("testimonial3Role"),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      quote: t("testimonial3Quote"),
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    camera.position.z = 50;

    // Create floating stars
    const stars: THREE.Mesh[] = [];
    for (let i = 0; i < 30; i++) {
      const geometry = new THREE.OctahedronGeometry(0.8, 0);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.6,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.8,
      });
      const star = new THREE.Mesh(geometry, material);
      star.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60,
      );
      star.userData = {
        speedX: (Math.random() - 0.5) * 0.001,
        speedY: (Math.random() - 0.5) * 0.001,
        speedZ: (Math.random() - 0.5) * 0.001,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      };
      stars.push(star);
      scene.add(star);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xeb1f28,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial,
    );
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xeb1f28, 1.5, 100);
    pointLight.position.set(30, 30, 30);
    scene.add(pointLight);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      particlesMesh.rotation.y = time * 0.06;
      particlesMesh.rotation.x = time * 0.04;

      stars.forEach((star, i) => {
        star.position.x += star.userData.speedX;
        star.position.y += Math.sin(time * 0.2 + i) * 0.06;
        star.position.z += star.userData.speedZ;
        star.rotation.x += star.userData.rotSpeed;
        star.rotation.y += star.userData.rotSpeed;
        if (Math.abs(star.position.x) > 40) star.userData.speedX *= -1;
        if (Math.abs(star.position.z) > 30) star.userData.speedZ *= -1;
      });

      pointLight.position.x = Math.sin(time * 0.35) * 40;
      pointLight.position.z = Math.cos(time * 0.35) * 40;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      stars.forEach((star) => {
        star.geometry.dispose();
        if (Array.isArray(star.material)) {
          star.material.forEach((m) => m.dispose());
        } else {
          star.material.dispose();
        }
      });
    };
  }, []);

  return (
    <div className="pt-16 bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none" />

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
                  {t("clients")}
                </span>
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              </motion.div>

              <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4">
                Our <span className="gradient-text">{t("clients")}</span>
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("clientsDescription")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Partners */}
      <ScrollAnimation delay={150}>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
            {t("Meet Our Partners")}
          </h2>
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
      </ScrollAnimation>

      {/* Testimonials */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl font-bold mb-10 text-center text-white">
              {t("clientTestimonials")}
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-5 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-300"
                >
                  <Quote className="w-6 h-6 text-[#eb1f28] mb-3" />
                  <p
                    className="text-xs text-slate-400 mb-4 leading-relaxed"
                    style={{ textAlign: "justify" }}
                  >
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xs">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-500 text-[10px]">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsDetail;
