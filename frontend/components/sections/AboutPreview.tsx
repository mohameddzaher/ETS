"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Award,
  Users,
  Globe,
  Target,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const AboutPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  const stats = [
    { icon: Award, value: "24", label: t("yearsExperience") },
    { icon: Users, value: "500+", label: t("happyClients") },
    { icon: Globe, value: "4", label: t("countries") },
    { icon: Target, value: "1000+", label: t("projectsDelivered") },
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    camera.position.z = 50;

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x64748b,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Geometric shapes - reduced and simplified
    const shapes: THREE.Mesh[] = [];
    const shapeColors = [0x64748b, 0x475569, 0x334155];

    for (let i = 0; i < 8; i++) {
      const geometry =
        i % 3 === 0
          ? new THREE.BoxGeometry(1.5, 1.5, 1.5)
          : i % 3 === 1
          ? new THREE.SphereGeometry(1, 16, 16)
          : new THREE.CylinderGeometry(0.8, 0.8, 2, 16);

      const material = new THREE.MeshPhongMaterial({
        color: shapeColors[i % shapeColors.length],
        transparent: true,
        opacity: 0.15,
        emissive: shapeColors[i % shapeColors.length],
        emissiveIntensity: 0.1,
        wireframe: true,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 50
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shape.userData.rotationSpeed = Math.random() * 0.008 + 0.002;
      shapes.push(shape);
      scene.add(shape);
    }

    // Lighting - softer
    const ambientLight = new THREE.AmbientLight(0x555555);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x64748b, 0.8, 100);
    pointLight1.position.set(30, 30, 30);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x475569, 0.6, 100);
    pointLight2.position.set(-30, -30, 30);
    scene.add(pointLight2);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      particlesMesh.rotation.y = time * 0.01;
      particlesMesh.rotation.x = time * 0.005;

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed * 0.5;
        shape.rotation.y += shape.userData.rotationSpeed * 0.35;
        shape.position.y = Math.sin(time * 0.3 + shape.position.x) * 2;
      });

      pointLight1.position.x = Math.sin(time * 0.3) * 40;
      pointLight1.position.y = Math.cos(time * 0.3) * 40;
      pointLight2.position.x = Math.cos(time * 0.2) * 40;
      pointLight2.position.y = Math.sin(time * 0.2) * 40;

      renderer.render(scene, camera);
    };

    animate();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shapes.forEach((shape) => {
        shape.geometry.dispose();
        if (Array.isArray(shape.material)) {
          shape.material.forEach((m) => m.dispose());
        } else {
          shape.material.dispose();
        }
      });
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen py-16 overflow-hidden bg-slate-950 text-white border-t border-slate-800/50">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-slate-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-slate-600/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#eb1f28]/20 via-[#ff4757]/20 to-[#eb1f28]/20 backdrop-blur-xl border border-[#eb1f28]/40 mb-4"
            >
              <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              <span className="text-white font-bold text-[10px] tracking-wide">
                &lt;{t("aboutEnergizeTech")}/&gt;
              </span>
              <Sparkles className="w-3 h-3 text-[#eb1f28]" />
            </motion.div>

            <motion.h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              {t("aboutEnergizeTech")}
            </motion.h2>

            <p
              className="text-[10px] sm:text-xs text-slate-400 mb-3 leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              {t("aboutDescription1")}
            </p>

            <p
              className="text-[10px] sm:text-xs text-slate-400 mb-5 leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              {t("aboutDescription2")}
            </p>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl font-medium text-xs transition-all duration-150 hover:shadow-xl hover:shadow-slate-700/50"
            >
              {t("learnMore")}
              <ArrowRight className="ml-1.5 w-3 h-3 group-hover:translate-x-1 transition-transform duration-150" />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-800 shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team working"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.15 }}
                className="group text-center p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-150 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                <Icon className="w-4 h-4 text-slate-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-150 relative z-10" />
                <div className="text-lg sm:text-xl font-bold mb-0.5 gradient-text relative z-10">
                  {stat.value}
                </div>
                <div className="text-[9px] text-slate-400 relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
