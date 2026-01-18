"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import * as THREE from "three";

interface GetInTouchProps {
  showTitle?: boolean;
}

const GetInTouch = ({ showTitle = true }: GetInTouchProps = {}) => {
  const { t, lang } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: t("email"), value: "info@ets-ksa.com" },
    { icon: Phone, label: t("phone"), value: "+966 53 848 6109" },
    {
      icon: MapPin,
      label: t("address"),
      value: "Saudi Arabia, Egypt, Dubai, Oman",
    },
    { icon: Clock, label: t("workingHours"), value: t("workingHoursTime") },
  ];

  return (
    <section className="py-12 bg-black text-white relative overflow-hidden border-t border-slate-800/50">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showTitle && (
          <ScrollAnimation>
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-bold mb-3"
              >
                {t("getInTouch")}
              </motion.h2>
              <p
                className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("contactDescription")}
              </p>
            </div>
          </ScrollAnimation>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ScrollAnimation>
            <div>
              <h3 className="text-base font-bold mb-5 text-white">
                {t("contactInformation")}
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: lang === "ar" ? -4 : 4 }}
                      transition={{ duration: 0.15 }}
                      className={`flex items-start ${
                        lang === "ar" ? "space-x-reverse" : ""
                      } space-x-3 p-3 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-lg border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150 group`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#eb1f28] to-[#ff4757] flex items-center justify-center flex-shrink-0 relative z-10">
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="font-semibold mb-1 text-xs text-white">
                          {info.label}
                        </h4>
                        <p className="text-slate-400 text-[10px]">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md p-5 rounded-xl border border-slate-800"
            >
              <div className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("yourName")}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#eb1f28] text-xs"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("yourEmail")}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#eb1f28] text-xs"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("yourPhone")}
                    className="w-full px-4 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#eb1f28] text-xs"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("yourMessage")}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#eb1f28] resize-none text-xs"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-5 py-2.5 bg-gradient-to-r from-[#eb1f28] to-[#ff4757] text-white rounded-lg font-semibold text-xs transition-all duration-150 hover:shadow-xl hover:shadow-[#eb1f28]/50 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {t("messageSent")}
                    </>
                  ) : (
                    <>
                      {t("sendMessage")}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
