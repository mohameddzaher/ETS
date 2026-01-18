"use client";

import { useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Brain,
  ShoppingCart,
  Cloud,
  Zap,
  Database,
  Shield,
  BarChart,
  Settings,
  Sparkles,
} from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import * as THREE from "three";

const ServicesDetail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t("serviceWebDevelopment"),
      description: t("serviceWebDevelopmentDesc"),
      features: [
        t("serviceWebDevelopmentFeature1"),
        t("serviceWebDevelopmentFeature2"),
        t("serviceWebDevelopmentFeature3"),
        t("serviceWebDevelopmentFeature4"),
        t("serviceWebDevelopmentFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: 0x3b82f6,
    },
    {
      icon: Smartphone,
      title: t("serviceMobileApplications"),
      description: t("serviceMobileApplicationsDesc"),
      features: [
        t("serviceMobileApplicationsFeature1"),
        t("serviceMobileApplicationsFeature2"),
        t("serviceMobileApplicationsFeature3"),
        t("serviceMobileApplicationsFeature4"),
        t("serviceMobileApplicationsFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      color: 0xa855f7,
    },
    {
      icon: Brain,
      title: t("serviceAIMachineLearning"),
      description: t("serviceAIMachineLearningDesc"),
      features: [
        t("serviceAIMachineLearningFeature1"),
        t("serviceAIMachineLearningFeature2"),
        t("serviceAIMachineLearningFeature3"),
        t("serviceAIMachineLearningFeature4"),
        t("serviceAIMachineLearningFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      color: 0xec4899,
    },
    {
      icon: ShoppingCart,
      title: t("serviceECommerceSolutions"),
      description: t("serviceECommerceSolutionsDesc"),
      features: [
        t("serviceECommerceSolutionsFeature1"),
        t("serviceECommerceSolutionsFeature2"),
        t("serviceECommerceSolutionsFeature3"),
        t("serviceECommerceSolutionsFeature4"),
        t("serviceECommerceSolutionsFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      color: 0x10b981,
    },
    {
      icon: Cloud,
      title: t("serviceCloudSolutions"),
      description: t("serviceCloudSolutionsDesc"),
      features: [
        t("serviceCloudSolutionsFeature1"),
        t("serviceCloudSolutionsFeature2"),
        t("serviceCloudSolutionsFeature3"),
        t("serviceCloudSolutionsFeature4"),
        t("serviceCloudSolutionsFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      color: 0x06b6d4,
    },
    {
      icon: Database,
      title: t("serviceDatabaseSolutions"),
      description: t("serviceDatabaseSolutionsDesc"),
      features: [
        t("serviceDatabaseSolutionsFeature1"),
        t("serviceDatabaseSolutionsFeature2"),
        t("serviceDatabaseSolutionsFeature3"),
        t("serviceDatabaseSolutionsFeature4"),
        t("serviceDatabaseSolutionsFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
      color: 0x6366f1,
    },
    {
      icon: Shield,
      title: t("serviceCybersecurity"),
      description: t("serviceCybersecurityDesc"),
      features: [
        t("serviceCybersecurityFeature1"),
        t("serviceCybersecurityFeature2"),
        t("serviceCybersecurityFeature3"),
        t("serviceCybersecurityFeature4"),
        t("serviceCybersecurityFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      color: 0xef4444,
    },
    {
      icon: BarChart,
      title: t("serviceBusinessIntelligence"),
      description: t("serviceBusinessIntelligenceDesc"),
      features: [
        t("serviceBusinessIntelligenceFeature1"),
        t("serviceBusinessIntelligenceFeature2"),
        t("serviceBusinessIntelligenceFeature3"),
        t("serviceBusinessIntelligenceFeature4"),
        t("serviceBusinessIntelligenceFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      color: 0x8b5cf6,
    },
    {
      icon: Zap,
      title: t("serviceDigitalTransformation"),
      description: t("serviceDigitalTransformationDesc"),
      features: [
        t("serviceDigitalTransformationFeature1"),
        t("serviceDigitalTransformationFeature2"),
        t("serviceDigitalTransformationFeature3"),
        t("serviceDigitalTransformationFeature4"),
        t("serviceDigitalTransformationFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      color: 0xf97316,
    },
    {
      icon: Settings,
      title: t("serviceMaintenanceSupport"),
      description: t("serviceMaintenanceSupportDesc"),
      features: [
        t("serviceMaintenanceSupportFeature1"),
        t("serviceMaintenanceSupportFeature2"),
        t("serviceMaintenanceSupportFeature3"),
        t("serviceMaintenanceSupportFeature4"),
        t("serviceMaintenanceSupportFeature5"),
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      color: 0x64748b,
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

    // Create network-like structure
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 8, 8);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.8,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.5,
      });
      const node = new THREE.Mesh(geometry, material);
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40
      );
      node.position.copy(position);
      nodePositions.push(position);
      nodes.push(node);
      scene.add(node);
    }

    // Create connections between nodes
    const connections: THREE.Line[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.7) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const material = new THREE.LineBasicMaterial({
            color: 0xeb1f28,
            transparent: true,
            opacity: 0.2,
          });
          const line = new THREE.Line(geometry, material);
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Create floating geometric shapes
    const serviceColors = [
      0x3b82f6, 0xa855f7, 0xec4899, 0x10b981, 0x06b6d4, 0x6366f1, 0xef4444,
      0x8b5cf6, 0xf97316, 0x64748b,
    ];
    const shapes: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const geometry =
        i % 3 === 0
          ? new THREE.OctahedronGeometry(1, 0)
          : i % 3 === 1
          ? new THREE.TetrahedronGeometry(1, 0)
          : new THREE.IcosahedronGeometry(1, 0);

      const material = new THREE.MeshPhongMaterial({
        color: serviceColors[i % serviceColors.length],
        transparent: true,
        opacity: 0.3,
        wireframe: true,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 50
      );
      shape.userData = {
        speedX: (Math.random() - 0.5) * 0.002,
        speedY: (Math.random() - 0.5) * 0.002,
        speedZ: (Math.random() - 0.5) * 0.002,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      };
      shapes.push(shape);
      scene.add(shape);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xeb1f28, 1.5, 100);
    pointLight1.position.set(30, 30, 30);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff4757, 1, 100);
    pointLight2.position.set(-30, -30, 30);
    scene.add(pointLight2);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Animate nodes
      nodes.forEach((node, i) => {
        node.position.y += Math.sin(time * 0.5 + i) * 0.05;
        node.rotation.y += 0.01;
      });

      // Animate shapes
      shapes.forEach((shape, i) => {
        shape.position.x += shape.userData.speedX;
        shape.position.y += Math.sin(time * 0.3 + i) * 0.1;
        shape.position.z += shape.userData.speedZ;
        shape.rotation.x += shape.userData.rotSpeed;
        shape.rotation.y += shape.userData.rotSpeed;
        if (Math.abs(shape.position.x) > 35) shape.userData.speedX *= -1;
        if (Math.abs(shape.position.z) > 25) shape.userData.speedZ *= -1;
      });

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.4) * 40;
      pointLight1.position.z = Math.cos(time * 0.4) * 40;

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
      nodes.forEach((node) => {
        node.geometry.dispose();
        if (Array.isArray(node.material)) {
          node.material.forEach((m) => m.dispose());
        } else {
          node.material.dispose();
        }
      });
      connections.forEach((line) => {
        line.geometry.dispose();
        if (Array.isArray(line.material)) {
          line.material.forEach((m) => m.dispose());
        } else {
          line.material.dispose();
        }
      });
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

  return (
    <div className="pt-16 bg-black text-white min-h-screen">
      {/* Hero Section with Three.js */}
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
                  {t("ourServices")}
                </span>
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              </motion.div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{t("ourServices")}</span>
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("servicesDescription")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <ScrollAnimation key={index} delay={index * 50}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative h-64 rounded-xl overflow-hidden border border-slate-800"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </motion.div>
                    </div>
                    <div className={isEven ? "" : "lg:order-1"}>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{
                          background: `linear-gradient(135deg, #${service.color.toString(
                            16
                          )}, #${(service.color + 0x333333).toString(16)})`,
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        {service.title}
                      </h2>
                      <p
                        className="text-xs text-slate-400 mb-4 leading-relaxed"
                        style={{ textAlign: "justify" }}
                      >
                        {service.description}
                      </p>
                      <ul className="space-y-1.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-[#eb1f28] mt-1 text-xs">
                              •
                            </span>
                            <span className="text-xs text-slate-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetail;
