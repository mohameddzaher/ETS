'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import * as THREE from 'three';

const Newsletter = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

    // Create floating mail/envelope shapes
    const envelopes: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.BoxGeometry(2, 1.5, 0.1);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
        emissive: 0xffffff,
        emissiveIntensity: 0.4,
      });
      const envelope = new THREE.Mesh(geometry, material);
      envelope.position.set(
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 70,
        (Math.random() - 0.5) * 50
      );
      envelope.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      envelope.userData = {
        speedX: (Math.random() - 0.5) * 0.001,
        speedY: (Math.random() - 0.5) * 0.001,
        speedZ: (Math.random() - 0.5) * 0.001,
        rotSpeed: (Math.random() - 0.5) * 0.01,
      };
      envelopes.push(envelope);
      scene.add(envelope);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x444444);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(30, 30, 30);
    scene.add(pointLight);

    // Animation
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      particlesMesh.rotation.y = time * 0.05;
      particlesMesh.rotation.x = time * 0.03;

      envelopes.forEach((envelope, i) => {
        envelope.position.x += envelope.userData.speedX;
        envelope.position.y += Math.sin(time * 0.3 + i) * 0.08;
        envelope.position.z += envelope.userData.speedZ;
        envelope.rotation.x += envelope.userData.rotSpeed;
        envelope.rotation.y += envelope.userData.rotSpeed;
        if (Math.abs(envelope.position.x) > 35) envelope.userData.speedX *= -1;
        if (Math.abs(envelope.position.z) > 25) envelope.userData.speedZ *= -1;
      });

      pointLight.position.x = Math.sin(time * 0.35) * 40;
      pointLight.position.z = Math.cos(time * 0.35) * 40;

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
      envelopes.forEach(envelope => {
        envelope.geometry.dispose();
        if (Array.isArray(envelope.material)) {
          envelope.material.forEach(m => m.dispose());
        } else {
          envelope.material.dispose();
        }
      });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-12 bg-black text-white relative overflow-hidden border-t border-slate-800/50">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-5 border border-white/20"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3"
            >
              {t('stayUpdated')}
            </motion.h2>
            
            <p className="text-xs text-white/90 mb-6 leading-relaxed" style={{ textAlign: 'justify' }}>
              {t('newsletterDescription')}
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('enterEmail')}
                required
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-xs"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-[#eb1f28] to-[#ff4757] text-white rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-xl hover:shadow-[#eb1f28]/50 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {t('subscribed')}
                  </>
                ) : (
                  <>
                    {t('subscribe')}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
            
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-white/90 text-xs"
              >
                {t('thankYou')}
              </motion.p>
            )}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Newsletter;
