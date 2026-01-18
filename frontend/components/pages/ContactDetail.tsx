"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import MapSection from "../sections/MapSection";
import GetInTouch from "../sections/GetInTouch";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import * as THREE from "three";

const ContactDetail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

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

    // Create communication network
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.SphereGeometry(1, 8, 8);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.7,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.6,
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

    // Create connections
    const connections: THREE.Line[] = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.6) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const material = new THREE.LineBasicMaterial({
            color: 0xeb1f28,
            transparent: true,
            opacity: 0.25,
          });
          const line = new THREE.Line(geometry, material);
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Create floating icons
    const icons: THREE.Mesh[] = [];
    for (let i = 0; i < 12; i++) {
      const geometry = new THREE.BoxGeometry(2, 2, 0.1);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.3,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.4,
      });
      const icon = new THREE.Mesh(geometry, material);
      icon.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 50
      );
      icon.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      icon.userData = {
        speedX: (Math.random() - 0.5) * 0.001,
        speedY: (Math.random() - 0.5) * 0.001,
        speedZ: (Math.random() - 0.5) * 0.001,
        rotSpeed: (Math.random() - 0.5) * 0.01,
      };
      icons.push(icon);
      scene.add(icon);
    }

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

      nodes.forEach((node, i) => {
        node.position.y += Math.sin(time * 0.4 + i) * 0.05;
        node.rotation.y += 0.01;
      });

      icons.forEach((icon, i) => {
        icon.position.x += icon.userData.speedX;
        icon.position.y += Math.sin(time * 0.25 + i) * 0.08;
        icon.position.z += icon.userData.speedZ;
        icon.rotation.x += icon.userData.rotSpeed;
        icon.rotation.y += icon.userData.rotSpeed;
        if (Math.abs(icon.position.x) > 35) icon.userData.speedX *= -1;
        if (Math.abs(icon.position.z) > 25) icon.userData.speedZ *= -1;
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
      icons.forEach((icon) => {
        icon.geometry.dispose();
        if (Array.isArray(icon.material)) {
          icon.material.forEach((m) => m.dispose());
        } else {
          icon.material.dispose();
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
                  {t("contact")}
                </span>
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              </motion.div>

              <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4">
                {t("getInTouch")}
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("contactDescription")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <GetInTouch showTitle={false} />
      <MapSection />
    </div>
  );
};

export default ContactDetail;
