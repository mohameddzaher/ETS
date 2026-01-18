"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Code,
  Smartphone,
  Brain,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import * as THREE from "three";

const PortfolioDetail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { t } = useLanguage();
  const router = useRouter();

  const categories = [
    { id: "all", name: t("allProjects"), icon: Code },
    { id: "web", name: t("webDevelopment"), icon: Code },
    { id: "mobile", name: t("mobileApps"), icon: Smartphone },
    { id: "ai", name: t("aiSolutions"), icon: Brain },
    { id: "ecommerce", name: t("ecommerce"), icon: ShoppingCart },
  ];

  const projects = [
    {
      id: 1,
      title: t("ecommercePlatform"),
      category: "web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: t("ecommercePlatformDesc"),
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      id: 2,
      title: t("healthcareMobileApp"),
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      description: t("healthcareMobileAppDesc"),
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      id: 3,
      title: t("aiPoweredAnalytics"),
      category: "ai",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      description: t("aiPoweredAnalyticsDesc"),
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      id: 4,
      title: t("onlineRetailStore"),
      category: "ecommerce",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: t("onlineRetailStoreDesc"),
      technologies: ["Next.js", "Shopify", "Stripe"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      id: 5,
      title: t("corporateWebsite"),
      category: "web",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      description: t("corporateWebsiteDesc"),
      technologies: ["Next.js", "Contentful", "Tailwind CSS"],
      liveUrl: "#",
      demoUrl: "#",
    },
    {
      id: 6,
      title: t("fitnessTrackingApp"),
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description: t("fitnessTrackingAppDesc"),
      technologies: ["Flutter", "Firebase", "GraphQL"],
      liveUrl: "#",
      demoUrl: "#",
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
    const particlesCount = 300;
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
      color: 0xeb1f28,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Geometric shapes
    const frames: THREE.Mesh[] = [];
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.BoxGeometry(3, 2, 0.1);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.3,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.4,
        wireframe: true,
      });
      const frame = new THREE.Mesh(geometry, material);
      frame.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 50
      );
      frame.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      frame.userData = {
        speedX: (Math.random() - 0.5) * 0.002,
        speedY: (Math.random() - 0.5) * 0.002,
        speedZ: (Math.random() - 0.5) * 0.002,
        rotSpeedX: (Math.random() - 0.5) * 0.01,
        rotSpeedY: (Math.random() - 0.5) * 0.01,
      };
      frames.push(frame);
      scene.add(frame);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xeb1f28, 1.2, 100);
    pointLight.position.set(20, 20, 20);
    scene.add(pointLight);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      particlesMesh.rotation.y = time * 0.05;
      particlesMesh.rotation.x = time * 0.02;

      frames.forEach((frame, i) => {
        frame.position.x += frame.userData.speedX;
        frame.position.y += Math.sin(time * 0.2 + i) * 0.05;
        frame.position.z += frame.userData.speedZ;
        frame.rotation.x += frame.userData.rotSpeedX;
        frame.rotation.y += frame.userData.rotSpeedY;
        if (Math.abs(frame.position.x) > 35) frame.userData.speedX *= -1;
        if (Math.abs(frame.position.z) > 25) frame.userData.speedZ *= -1;
      });

      pointLight.position.x = Math.sin(time * 0.3) * 40;
      pointLight.position.z = Math.cos(time * 0.3) * 40;

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
      frames.forEach((frame) => {
        frame.geometry.dispose();
        if (Array.isArray(frame.material)) {
          frame.material.forEach((m) => m.dispose());
        } else {
          frame.material.dispose();
        }
      });
    };
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (projectId: number) => {
    router.push(`/portfolio/${projectId}`);
  };

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
                  {t("portfolio")}
                </span>
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              </motion.div>

              <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4">
                {t("ourPortfolio")}
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("portfolioDescription")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2 rounded-lg font-medium text-xs transition-all duration-150 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-[#eb1f28] to-[#ff4757] text-white shadow-lg shadow-[#eb1f28]/50"
                        : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {category.name}
                  </motion.button>
                );
              })}
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 50}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => handleProjectClick(project.id)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150 bg-slate-900/50 backdrop-blur-sm"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[#eb1f28] text-[10px] font-medium bg-black/50 px-2 py-1 rounded">
                        {
                          categories.find((c) => c.id === project.category)
                            ?.name
                        }
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold mb-2 text-white group-hover:text-[#eb1f28] transition-colors duration-150">
                      {project.title}
                    </h3>
                    <p
                      className="text-[10px] text-slate-400 leading-relaxed mb-3"
                      style={{ textAlign: "justify" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[9px] border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
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

export default PortfolioDetail;
