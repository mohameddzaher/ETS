"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Clock, Sparkles } from "lucide-react";
import ScrollAnimation from "../ScrollAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import * as THREE from "three";

const CareerDetail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  const processSteps = [
    { title: t("apply"), description: t("applyDesc") },
    { title: t("review"), description: t("reviewDesc") },
    { title: t("interview"), description: t("interviewDesc") },
    { title: t("offer"), description: t("offerDesc") },
  ];

  const jobs = [
    {
      id: 1,
      title: t("seniorFullStackDev"),
      location: t("riyadhKSA"),
      type: t("fullTime"),
      remote: false,
      department: t("development"),
      requirements: [t("fsReq1"), t("fsReq2"), t("fsReq3"), t("fsReq4")],
      responsibilities: [
        t("fsResp1"),
        t("fsResp2"),
        t("fsResp3"),
        t("fsResp4"),
      ],
      benefits: [
        t("fsBenefit1"),
        t("fsBenefit2"),
        t("fsBenefit3"),
        t("fsBenefit4"),
      ],
    },
    {
      id: 2,
      title: t("mobileAppDeveloper"),
      location: t("cairoEgypt"),
      type: t("fullTime"),
      remote: true,
      department: t("development"),
      requirements: [t("fsReq1"), t("fsReq2"), t("fsReq3"), t("fsReq4")],
      responsibilities: [
        t("fsResp1"),
        t("fsResp2"),
        t("fsResp3"),
        t("fsResp4"),
      ],
      benefits: [
        t("fsBenefit1"),
        t("fsBenefit2"),
        t("fsBenefit3"),
        t("fsBenefit4"),
      ],
    },
    {
      id: 3,
      title: t("aiMlEngineer"),
      location: t("dubaiUAE"),
      type: t("fullTime"),
      remote: false,
      department: t("aiInnovation"),
      requirements: [t("fsReq1"), t("fsReq2"), t("fsReq3"), t("fsReq4")],
      responsibilities: [
        t("fsResp1"),
        t("fsResp2"),
        t("fsResp3"),
        t("fsResp4"),
      ],
      benefits: [
        t("fsBenefit1"),
        t("fsBenefit2"),
        t("fsBenefit3"),
        t("fsBenefit4"),
      ],
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

    // Create connecting lines
    const lines: THREE.Line[] = [];
    for (let i = 0; i < 15; i++) {
      const points = [];
      for (let j = 0; j < 3; j++) {
        points.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40
          )
        );
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const curvePoints = curve.getPoints(30);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(
        curvePoints
      );
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xeb1f28,
        transparent: true,
        opacity: 0.2,
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      lines.push(line);
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

      icons.forEach((icon, i) => {
        icon.position.x += icon.userData.speedX;
        icon.position.y += Math.sin(time * 0.3 + i) * 0.08;
        icon.position.z += icon.userData.speedZ;
        icon.rotation.x += icon.userData.rotSpeed;
        icon.rotation.y += icon.userData.rotSpeed;
        if (Math.abs(icon.position.x) > 35) icon.userData.speedX *= -1;
        if (Math.abs(icon.position.z) > 25) icon.userData.speedZ *= -1;
      });

      lines.forEach((line, i) => {
        line.rotation.y = time * 0.08 * (i % 2 === 0 ? 1 : -1);
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
      icons.forEach((icon) => {
        icon.geometry.dispose();
        if (Array.isArray(icon.material)) {
          icon.material.forEach((m) => m.dispose());
        } else {
          icon.material.dispose();
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("applicationSubmitted"));
    setFormData({ name: "", email: "", phone: "", resume: null });
  };

  const handleJobClick = (jobId: number) => {
    router.push(`/career/${jobId}`);
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
                  {t("career")}
                </span>
                <Sparkles className="w-3 h-3 text-[#eb1f28]" />
              </motion.div>

              <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4">
                {t("joinOur")}{" "}
                <span className="gradient-text">{t("team")}</span>
              </h1>
              <p
                className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                {t("careerPageIntro")}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                  {t("whyWorkWithUs")}
                </h2>
                <p
                  className="text-xs text-slate-400 mb-3 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {t("whyWorkWithUsDesc")}
                </p>
                <p
                  className="text-xs text-slate-400 mb-3 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {t("experienceDesc")}
                </p>
                <p
                  className="text-xs text-slate-400 leading-relaxed"
                  style={{ textAlign: "justify" }}
                >
                  {t("reputationDesc")}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative h-64 rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Process Steps */}
          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
                {t("ourHiringProcess")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="group text-center p-5 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 hover:border-[#eb1f28]/50 transition-all duration-150"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    <div className="text-4xl font-black gradient-text mb-3 relative z-10">
                      {index + 1}
                    </div>
                    <h3 className="text-sm font-semibold mb-2 text-white relative z-10">
                      {step.title}
                    </h3>
                    <p
                      className="text-xs text-slate-400 relative z-10"
                      style={{ textAlign: "justify" }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Jobs List */}
          <ScrollAnimation delay={200}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-8 text-center text-white">
                {t("openPositions")}
              </h2>
              <div className="space-y-3">
                {jobs.map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => handleJobClick(job.id)}
                    className="group p-5 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-md rounded-xl border border-slate-800 hover:border-[#eb1f28]/50 cursor-pointer transition-all duration-150"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 relative z-10">
                      <div>
                        <h3 className="text-base font-semibold mb-2 text-white group-hover:text-[#eb1f28] transition-colors duration-150">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {job.type}
                          </span>
                          {job.remote && (
                            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">
                              {t("remote")}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-[#eb1f28] font-medium text-xs group-hover:translate-x-1 transition-transform duration-150">
                        {t("viewDetails")} →
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default CareerDetail;
