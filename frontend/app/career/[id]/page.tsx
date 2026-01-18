'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowLeft, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function CareerDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const jobId = parseInt(params.id as string);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
  });

  const jobs = [
    {
      id: 1,
      title: t('seniorFullStackDev'),
      location: t('riyadhKSA'),
      type: t('fullTime'),
      remote: false,
      department: t('development'),
      requirements: [t('fsReq1'), t('fsReq2'), t('fsReq3'), t('fsReq4')],
      responsibilities: [t('fsResp1'), t('fsResp2'), t('fsResp3'), t('fsResp4')],
      benefits: [t('fsBenefit1'), t('fsBenefit2'), t('fsBenefit3'), t('fsBenefit4')],
    },
    {
      id: 2,
      title: t('mobileAppDeveloper'),
      location: t('cairoEgypt'),
      type: t('fullTime'),
      remote: true,
      department: t('development'),
      requirements: [t('fsReq1'), t('fsReq2'), t('fsReq3'), t('fsReq4')],
      responsibilities: [t('fsResp1'), t('fsResp2'), t('fsResp3'), t('fsResp4')],
      benefits: [t('fsBenefit1'), t('fsBenefit2'), t('fsBenefit3'), t('fsBenefit4')],
    },
    {
      id: 3,
      title: t('aiMlEngineer'),
      location: t('dubaiUAE'),
      type: t('fullTime'),
      remote: false,
      department: t('aiInnovation'),
      requirements: [t('fsReq1'), t('fsReq2'), t('fsReq3'), t('fsReq4')],
      responsibilities: [t('fsResp1'), t('fsResp2'), t('fsResp3'), t('fsResp4')],
      benefits: [t('fsBenefit1'), t('fsBenefit2'), t('fsBenefit3'), t('fsBenefit4')],
    },
  ];

  const job = jobs.find(j => j.id === jobId);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 50;

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xeb1f28,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xeb1f28, 1.5, 100);
    pointLight.position.set(30, 30, 30);
    scene.add(pointLight);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      particlesMesh.rotation.y = time * 0.05;
      particlesMesh.rotation.x = time * 0.03;
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    alert(t('applicationSubmitted'));
    setFormData({ name: '', email: '', phone: '', resume: null });
  };

  if (!job) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <button
            onClick={() => router.push('/career')}
            className="px-6 py-2 bg-[#eb1f28] rounded-lg hover:bg-[#ff4757] transition-colors"
          >
            Back to Careers
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-16">
        <section className="relative py-16 bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.button
              onClick={() => router.push('/career')}
              className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">{t('backToCareers') || 'Back to Careers'}</span>
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-2xl sm:text-3xl font-bold mb-3 gradient-text">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap gap-3 mb-5 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                  {job.remote && (
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-[10px]">
                      {t('remote')}
                    </span>
                  )}
                </div>

                <div className="mb-5">
                  <h3 className="text-base font-semibold mb-2 text-white">
                    {t('requirements') || 'Requirements'}
                  </h3>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <h3 className="text-base font-semibold mb-2 text-white">
                    {t('responsibilities') || 'Responsibilities'}
                  </h3>
                  <ul className="space-y-1.5">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold mb-2 text-white">
                    {t('benefits') || 'Benefits'}
                  </h3>
                  <ul className="space-y-1.5">
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 flex flex-col items-center justify-center"
              >
                <h2 className="text-lg font-bold mb-4 text-white text-center">
                  {t('applyNow') || 'Apply Now'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-sm">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      {t('yourName')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#eb1f28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      {t('yourEmail')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#eb1f28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      {t('yourPhone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#eb1f28]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      {t('resume') || 'Resume'}
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full px-3 py-2 text-sm bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#eb1f28]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2.5 text-sm bg-gradient-to-r from-[#eb1f28] to-[#ff4757] rounded-lg hover:shadow-lg hover:shadow-[#eb1f28]/50 transition-all"
                  >
                    {t('submitApplication') || 'Submit Application'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
