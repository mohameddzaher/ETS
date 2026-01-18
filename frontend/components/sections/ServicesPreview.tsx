"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Server,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import * as THREE from "three";
import TypingCode from "../TypingCode";

const ServicesPreview = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("webDevelopment"),
      description: t("webDevelopmentDesc"),
      threeColor: 0xeb1f28,
      slug: "web-development",
    },
    {
      icon: Smartphone,
      title: t("mobileApplications"),
      description: t("mobileApplicationsDesc"),
      threeColor: 0xeb1f28,
      slug: "mobile-applications",
    },
    {
      icon: Cpu,
      title: t("aiSolutions"),
      description: t("aiSolutionsDesc"),
      threeColor: 0xeb1f28,
      slug: "ai-solutions",
    },
    {
      icon: ShoppingBag,
      title: t("ecommerce"),
      description: t("ecommerceDesc"),
      threeColor: 0xeb1f28,
      slug: "ecommerce",
    },
    {
      icon: Server,
      title: t("cloudSolutions"),
      description: t("cloudSolutionsDesc"),
      threeColor: 0xeb1f28,
      slug: "cloud-solutions",
    },
    {
      icon: Zap,
      title: t("digitalTransformation"),
      description: t("digitalTransformationDesc"),
      threeColor: 0xeb1f28,
      slug: "digital-transformation",
    },
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
    const particlesCount = 500;
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

    // Create geometric shapes representing services
    const shapes: THREE.Mesh[] = [];
    const serviceColors = [
      0xeb1f28, 0xeb1f28, 0xeb1f28, 0xeb1f28, 0xeb1f28, 0xeb1f28,
    ];

    for (let i = 0; i < 12; i++) {
      const geometry =
        i % 3 === 0
          ? new THREE.OctahedronGeometry(2, 0)
          : i % 3 === 1
          ? new THREE.TetrahedronGeometry(2, 0)
          : new THREE.IcosahedronGeometry(2, 0);

      const material = new THREE.MeshPhongMaterial({
        color: serviceColors[i % serviceColors.length],
        transparent: true,
        opacity: 0.4,
        emissive: serviceColors[i % serviceColors.length],
        emissiveIntensity: 0.3,
        wireframe: true,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      shape.userData.rotationSpeed = Math.random() * 0.005 + 0.001;
      shapes.push(shape);
      scene.add(shape);
    }

    // Connecting lines
    const lines: THREE.Line[] = [];
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60
      );
      const end = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60
      );
      const mid = new THREE.Vector3(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60
      );
      const points = [start, mid, end];
      const curve = new THREE.CatmullRomCurve3(points);
      const curvePoints = curve.getPoints(50);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.1,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      lines.push(line);
      scene.add(line);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xeb1f28, 1, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff4757, 0.8, 100);
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Animate particles
      particlesMesh.rotation.y = time * 0.05;
      particlesMesh.rotation.x = time * 0.02;

      // Animate shapes
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed;
        shape.rotation.y += shape.userData.rotationSpeed * 0.5;
        shape.position.y = Math.sin(time * 0.5 + shape.position.x) * 2;
      });

      // Animate lines
      lines.forEach((line, i) => {
        line.rotation.z = time * 0.08 * (i % 2 === 0 ? 1 : -1);
      });

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.7) * 30;
      pointLight1.position.y = Math.cos(time * 0.7) * 30;
      pointLight2.position.x = Math.cos(time * 0.5) * 30;
      pointLight2.position.y = Math.sin(time * 0.5) * 30;

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
      lines.forEach((line) => {
        line.geometry.dispose();
        if (Array.isArray(line.material)) {
          line.material.forEach((m) => m.dispose());
        } else {
          line.material.dispose();
        }
      });
    };
  }, []);

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden border-t border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl" />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#ff4757]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#eb1f28]/20 via-[#ff4757]/20 to-[#eb1f28]/20 backdrop-blur-xl border border-[#eb1f28]/40 mb-4"
            >
              <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              <span className="text-white font-bold text-[10px] tracking-wide">
                &lt;Services/&gt;
              </span>
              <Sparkles className="w-3 h-3 text-[#eb1f28]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3"
            >
              <span className="text-lg text-white">
                <TypingCode
                  text={t("ourServices")}
                  delay={300}
                  speed={70}
                  showCursor={false}
                />
              </span>
            </motion.h2>
            <p
              className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              {t("servicesDescription")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={index} delay={index * 50}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="group relative p-5 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-150 overflow-hidden h-full flex flex-col items-center text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-150 blur-xl" />

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-4 flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-slate-300 transition-colors duration-150" />
                  </motion.div>

                  <h3 className="text-sm font-semibold mb-2 text-white relative z-10 group-hover:text-slate-300 transition-colors duration-150">
                    {service.title}
                  </h3>
                  <p
                    className="text-[10px] text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-150 flex-grow"
                    style={{ textAlign: "justify" }}
                  >
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-[10px] font-medium text-[#eb1f28] hover:text-[#ff4757] transition-colors relative z-10"
                  >
                    {t("learnMoreService")}
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600"
                  />

                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-slate-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150 animate-ping" />
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation delay={300}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl font-medium text-xs overflow-hidden shadow-2xl shadow-slate-700/50 transition-shadow duration-150"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  {t("viewAllServices")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                </span>
              </Link>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesPreview;
