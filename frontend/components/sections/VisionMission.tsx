"use client";

import { useEffect, useRef } from "react";
import { Lightbulb, Rocket } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import * as THREE from "three";

const VisionMission = () => {
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

    // Create vision/mission symbols
    const symbols: THREE.Mesh[] = [];
    for (let i = 0; i < 14; i++) {
      const geometry =
        i % 2 === 0
          ? new THREE.RingGeometry(1, 2, 16)
          : new THREE.CircleGeometry(1.5, 16);
      const material = new THREE.MeshPhongMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.3,
        emissive: 0xeb1f28,
        emissiveIntensity: 0.4,
        side: THREE.DoubleSide,
        wireframe: true,
      });
      const symbol = new THREE.Mesh(geometry, material);
      symbol.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 50
      );
      symbol.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      symbol.userData = {
        speedX: (Math.random() - 0.5) * 0.001,
        speedY: (Math.random() - 0.5) * 0.001,
        speedZ: (Math.random() - 0.5) * 0.001,
        rotSpeed: (Math.random() - 0.5) * 0.012,
      };
      symbols.push(symbol);
      scene.add(symbol);
    }

    // Create connecting paths
    const paths: THREE.Line[] = [];
    for (let i = 0; i < 10; i++) {
      const points = [];
      for (let j = 0; j < 4; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40
          )
        );
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const curvePoints = curve.getPoints(40);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.18,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      paths.push(line);
      scene.add(line);
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

      symbols.forEach((symbol, i) => {
        symbol.position.x += symbol.userData.speedX;
        symbol.position.y += Math.sin(time * 0.3 + i) * 0.07;
        symbol.position.z += symbol.userData.speedZ;
        symbol.rotation.x += symbol.userData.rotSpeed;
        symbol.rotation.y += symbol.userData.rotSpeed;
        if (Math.abs(symbol.position.x) > 35) symbol.userData.speedX *= -1;
        if (Math.abs(symbol.position.z) > 25) symbol.userData.speedZ *= -1;
      });

      paths.forEach((path, i) => {
        path.rotation.y = time * 0.07 * (i % 2 === 0 ? 1 : -1);
      });

      pointLight.position.x = Math.sin(time * 0.4) * 35;
      pointLight.position.z = Math.cos(time * 0.4) * 35;

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
      symbols.forEach((symbol) => {
        symbol.geometry.dispose();
        if (Array.isArray(symbol.material)) {
          symbol.material.forEach((m) => m.dispose());
        } else {
          symbol.material.dispose();
        }
      });
      paths.forEach((path) => {
        path.geometry.dispose();
        if (Array.isArray(path.material)) {
          path.material.forEach((m) => m.dispose());
        } else {
          path.material.dispose();
        }
      });
    };
  }, []);

  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800/50">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ScrollAnimation>
            <motion.div className="p-5 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 relative overflow-hidden h-full flex flex-col items-center text-center">
              <div className="relative mb-4 flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-slate-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white relative z-10">
                {t("ourVision")}
              </h3>
              <p
                className="text-xs text-slate-400 leading-relaxed relative z-10 flex-grow"
                style={{ textAlign: "justify" }}
              >
                {t("ourVisionDesc")}
              </p>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <motion.div className="p-5 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 relative overflow-hidden h-full flex flex-col items-center text-center">
              <div className="relative mb-4 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-slate-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-white relative z-10">
                {t("ourMission")}
              </h3>
              <p
                className="text-xs text-slate-400 leading-relaxed relative z-10 flex-grow"
                style={{ textAlign: "justify" }}
              >
                {t("ourMissionDesc")}
              </p>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
