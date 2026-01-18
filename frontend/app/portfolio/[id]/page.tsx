'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const projectId = parseInt(params.id as string);

  // Get project data (same as in PortfolioDetail component)
  const projects = [
    {
      id: 1,
      title: t('ecommercePlatform'),
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: t('ecommercePlatformDesc'),
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
      demoUrl: '#',
    },
    {
      id: 2,
      title: t('healthcareMobileApp'),
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      description: t('healthcareMobileAppDesc'),
      images: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
      demoUrl: '#',
    },
    {
      id: 3,
      title: t('aiPoweredAnalytics'),
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      description: t('aiPoweredAnalyticsDesc'),
      images: [
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
      demoUrl: '#',
    },
    {
      id: 4,
      title: t('onlineRetailStore'),
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      description: t('onlineRetailStoreDesc'),
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
      demoUrl: '#',
    },
    {
      id: 5,
      title: t('corporateWebsite'),
      category: 'web',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      description: t('corporateWebsiteDesc'),
      images: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
      demoUrl: '#',
    },
    {
      id: 6,
      title: t('fitnessTrackingApp'),
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      description: t('fitnessTrackingAppDesc'),
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      ],
      liveUrl: '#',
      demoUrl: '#',
    },
  ];

  const project = projects.find(p => p.id === projectId);

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

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/portfolio')}
            className="px-6 py-2 bg-[#eb1f28] rounded-lg hover:bg-[#ff4757] transition-colors"
          >
            Back to Portfolio
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
              onClick={() => router.push('/portfolio')}
              className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">{t('backToPortfolio') || 'Back to Portfolio'}</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 gradient-text">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed" style={{ textAlign: 'justify' }}>
                {project.description}
              </p>
            </motion.div>

            {/* Image Gallery */}
            <div className="mb-8">
              <h3 className="text-base font-semibold mb-4 text-white">
                {t('projectGallery') || 'Project Gallery'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.images?.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative h-32 sm:h-40 rounded-lg overflow-hidden border border-slate-800 hover:border-[#eb1f28]/50 transition-all cursor-pointer group"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm bg-gradient-to-r from-[#eb1f28] to-[#ff4757] rounded-lg hover:shadow-lg hover:shadow-[#eb1f28]/50 transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                {t('liveDemo')}
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                {t('viewDemo')}
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
