"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Code,
  Cpu,
  Globe,
  Layers,
  Rocket,
} from "lucide-react";
import * as THREE from "three";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
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
    camera.position.z = 40;

    // Create morphing blob - reduced complexity
    const blobGeometry = new THREE.IcosahedronGeometry(12, 2);
    const blobMaterial = new THREE.MeshPhongMaterial({
      color: 0xeb1f28,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const blob = new THREE.Mesh(blobGeometry, blobMaterial);
    scene.add(blob);

    // Store original positions
    const originalPositions = blobGeometry.attributes.position.array.slice();

    // Create inner glow blob - reduced complexity
    const glowGeometry = new THREE.IcosahedronGeometry(11, 2);
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: 0xff4757,
      transparent: true,
      opacity: 0.15,
      emissive: 0xeb1f28,
      emissiveIntensity: 0.5,
    });
    const glowBlob = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowBlob);

    // Create orbiting rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(15 + i * 3, 0.1, 16, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.4,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.3,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.userData.speedX = 0.001 + Math.random() * 0.002;
      ring.userData.speedY = 0.001 + Math.random() * 0.002;
      rings.push(ring);
      scene.add(ring);
    }

    // Create floating geometric cubes - reduced count
    const cubes: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const size = 0.5 + Math.random() * 1.5;
      const cubeGeometry = new THREE.BoxGeometry(size, size, size);
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.2 + Math.random() * 0.3,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.5,
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

      cube.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60
      );

      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      cube.userData = {
        speedX: (Math.random() - 0.5) * 0.003,
        speedY: (Math.random() - 0.5) * 0.003,
        speedZ: (Math.random() - 0.5) * 0.003,
        rotSpeedX: (Math.random() - 0.5) * 0.01,
        rotSpeedY: (Math.random() - 0.5) * 0.01,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
        initialY: cube.position.y,
      };

      cubes.push(cube);
      scene.add(cube);
    }

    // Create data stream lines - reduced count
    const lines: THREE.Line[] = [];
    for (let i = 0; i < 10; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40
        ),
      ]);

      const points = curve.getPoints(50);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.15,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      lines.push(line);
      scene.add(line);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xeb1f28, 2, 100);
    light1.position.set(30, 30, 30);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xff4757, 1.5, 100);
    light2.position.set(-30, -30, 30);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xffffff, 1, 100);
    light3.position.set(0, 50, 0);
    scene.add(light3);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Morph blob - optimized (only update every other frame)
      if (Math.floor(time * 10) % 2 === 0) {
        const positions = blobGeometry.attributes.position;
        for (let i = 0; i < positions.count; i += 2) {
          const i3 = i * 3;
          const x = originalPositions[i3];
          const y = originalPositions[i3 + 1];
          const z = originalPositions[i3 + 2];

          const noise =
            Math.sin(x * 0.3 + time) *
            Math.cos(y * 0.3 + time) *
            Math.sin(z * 0.3 + time);

          positions.array[i3] = x + x * noise * 0.3;
          positions.array[i3 + 1] = y + y * noise * 0.3;
          positions.array[i3 + 2] = z + z * noise * 0.3;
        }
        positions.needsUpdate = true;
      }

      // Rotate blobs
      blob.rotation.y = time * 0.2;
      blob.rotation.x = time * 0.1;
      glowBlob.rotation.y = time * 0.15;
      glowBlob.rotation.x = -time * 0.1;

      // Animate rings
      rings.forEach((ring) => {
        ring.rotation.x += ring.userData.speedX;
        ring.rotation.y += ring.userData.speedY;
      });

      // Animate cubes
      cubes.forEach((cube, i) => {
        cube.position.x += cube.userData.speedX;
        cube.position.y =
          cube.userData.initialY + Math.sin(time * 0.5 + i * 0.5) * 3;
        cube.position.z += cube.userData.speedZ;

        cube.rotation.x += cube.userData.rotSpeedX;
        cube.rotation.y += cube.userData.rotSpeedY;
        cube.rotation.z += cube.userData.rotSpeedZ;

        if (Math.abs(cube.position.x) > 40) cube.userData.speedX *= -1;
        if (Math.abs(cube.position.z) > 30) cube.userData.speedZ *= -1;
      });

      // Rotate lines
      lines.forEach((line, i) => {
        line.rotation.y = time * 0.1 * (i % 2 === 0 ? 1 : -1);
      });

      // Animate lights
      light1.position.x = Math.sin(time * 0.5) * 40;
      light1.position.z = Math.cos(time * 0.5) * 40;

      light2.position.x = Math.cos(time * 0.7) * 40;
      light2.position.z = Math.sin(time * 0.7) * 40;

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
      blobGeometry.dispose();
      blobMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        if (Array.isArray(ring.material)) {
          ring.material.forEach((m) => m.dispose());
        } else {
          ring.material.dispose();
        }
      });
      cubes.forEach((cube) => {
        cube.geometry.dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach((m) => m.dispose());
        } else {
          cube.material.dispose();
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 pointer-events-none" />

      {/* Animated gradient circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#eb1f28]/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff4757]/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#eb1f28]/20 via-[#ff4757]/20 to-[#eb1f28]/20 backdrop-blur-xl border border-[#eb1f28]/40 mb-4"
          >
            <Zap className="w-3 h-3 text-[#eb1f28]" />
            <span className="text-white font-bold text-[10px] tracking-wide">
              &lt;{t("pioneering")}/&gt;
            </span>
            <Sparkles className="w-3 h-3 text-[#eb1f28]" />
          </motion.div>

          <div className="space-y-2 mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-none tracking-tight"
            >
              <span
                className="block text-white drop-shadow-2xl mb-1"
                style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
              >
                {t("create")}
              </span>
              <span
                className="block bg-gradient-to-r from-[#eb1f28] via-[#ff6b7a] to-[#eb1f28] bg-clip-text text-transparent"
                style={{ backgroundSize: "200% auto" }}
              >
                {t("innovate")}
              </span>
              <span
                className="block text-white drop-shadow-2xl mt-1"
                style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
              >
                {t("dominate")}
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed"
            style={{ textAlign: "justify" }}
          >
            {t("heroDescription")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 bg-gradient-to-r from-[#eb1f28] via-[#ff4757] to-[#eb1f28] text-white rounded-lg font-bold text-xs overflow-hidden shadow-2xl shadow-[#eb1f28]/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4757] via-[#eb1f28] to-[#ff4757] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-1.5">
                <Rocket className="w-4 h-4" />
                {t("launchProject")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 py-3 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-lg font-bold text-xs hover:border-[#eb1f28] hover:bg-[#eb1f28]/20 transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                {t("exploreWork")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Stats or features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {[
              { icon: Code, label: t("smartDevelopment"), value: "+500" },
              { icon: Cpu, label: t("aiModels"), value: "+50" },
              { icon: Globe, label: t("globalClients"), value: "+200" },
              { icon: Zap, label: t("projectsLive"), value: "+1000" },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-4 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#eb1f28]/50 hover:bg-[#eb1f28]/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
                <div className="relative">
                  <Icon className="w-5 h-5 text-[#eb1f28] mb-1.5 mx-auto" />
                  <div className="text-xl font-black text-white mb-0.5">
                    {value}
                  </div>
                  <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
