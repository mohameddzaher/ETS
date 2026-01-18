'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
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
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const slug = params.slug as string;

  const servicesData = [
    {
      slug: 'web-development',
      icon: Code,
      title: t('serviceWebDevelopment'),
      description: t('serviceWebDevelopmentDesc'),
      features: [
        t('serviceWebDevelopmentFeature1'),
        t('serviceWebDevelopmentFeature2'),
        t('serviceWebDevelopmentFeature3'),
        t('serviceWebDevelopmentFeature4'),
        t('serviceWebDevelopmentFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      color: '#3b82f6',
      details: [
        'Custom website design and development tailored to your brand',
        'Responsive design ensuring perfect display on all devices',
        'Search engine optimization (SEO) for better visibility',
        'Integration with third-party services and APIs',
        'Ongoing maintenance and support',
        'Performance optimization for fast loading times',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    },
    {
      slug: 'mobile-applications',
      icon: Smartphone,
      title: t('serviceMobileApplications'),
      description: t('serviceMobileApplicationsDesc'),
      features: [
        t('serviceMobileApplicationsFeature1'),
        t('serviceMobileApplicationsFeature2'),
        t('serviceMobileApplicationsFeature3'),
        t('serviceMobileApplicationsFeature4'),
        t('serviceMobileApplicationsFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      color: '#a855f7',
      details: [
        'Native iOS and Android app development',
        'Cross-platform development with React Native and Flutter',
        'User-centric UI/UX design',
        'Push notifications and real-time features',
        'App Store and Google Play submission',
        'Post-launch support and updates',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST APIs'],
    },
    {
      slug: 'ai-solutions',
      icon: Brain,
      title: t('serviceAIMachineLearning'),
      description: t('serviceAIMachineLearningDesc'),
      features: [
        t('serviceAIMachineLearningFeature1'),
        t('serviceAIMachineLearningFeature2'),
        t('serviceAIMachineLearningFeature3'),
        t('serviceAIMachineLearningFeature4'),
        t('serviceAIMachineLearningFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      color: '#ec4899',
      details: [
        'Custom machine learning model development',
        'Natural language processing solutions',
        'Computer vision and image recognition',
        'Predictive analytics for business insights',
        'Chatbot and virtual assistant development',
        'AI integration into existing systems',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker', 'Hugging Face'],
    },
    {
      slug: 'ecommerce',
      icon: ShoppingCart,
      title: t('serviceECommerceSolutions'),
      description: t('serviceECommerceSolutionsDesc'),
      features: [
        t('serviceECommerceSolutionsFeature1'),
        t('serviceECommerceSolutionsFeature2'),
        t('serviceECommerceSolutionsFeature3'),
        t('serviceECommerceSolutionsFeature4'),
        t('serviceECommerceSolutionsFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      color: '#10b981',
      details: [
        'Complete e-commerce platform development',
        'Secure payment gateway integration',
        'Inventory and order management systems',
        'Customer account and loyalty programs',
        'Multi-currency and multi-language support',
        'Analytics and reporting dashboards',
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento', 'Custom Solutions'],
    },
    {
      slug: 'cloud-solutions',
      icon: Cloud,
      title: t('serviceCloudSolutions'),
      description: t('serviceCloudSolutionsDesc'),
      features: [
        t('serviceCloudSolutionsFeature1'),
        t('serviceCloudSolutionsFeature2'),
        t('serviceCloudSolutionsFeature3'),
        t('serviceCloudSolutionsFeature4'),
        t('serviceCloudSolutionsFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      color: '#06b6d4',
      details: [
        'Cloud infrastructure design and setup',
        'Migration from on-premises to cloud',
        'Auto-scaling and load balancing',
        'DevOps and CI/CD pipeline implementation',
        'Container orchestration with Kubernetes',
        'Cloud cost optimization',
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    },
    {
      slug: 'digital-transformation',
      icon: Zap,
      title: t('serviceDigitalTransformation'),
      description: t('serviceDigitalTransformationDesc'),
      features: [
        t('serviceDigitalTransformationFeature1'),
        t('serviceDigitalTransformationFeature2'),
        t('serviceDigitalTransformationFeature3'),
        t('serviceDigitalTransformationFeature4'),
        t('serviceDigitalTransformationFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      color: '#f97316',
      details: [
        'Digital strategy consulting and roadmap',
        'Business process automation',
        'Legacy system modernization',
        'Digital workplace solutions',
        'Customer experience transformation',
        'Data-driven decision making',
      ],
      technologies: ['Microsoft 365', 'Salesforce', 'SAP', 'Automation Tools', 'Analytics', 'Integration'],
    },
    {
      slug: 'database-solutions',
      icon: Database,
      title: t('serviceDatabaseSolutions'),
      description: t('serviceDatabaseSolutionsDesc'),
      features: [
        t('serviceDatabaseSolutionsFeature1'),
        t('serviceDatabaseSolutionsFeature2'),
        t('serviceDatabaseSolutionsFeature3'),
        t('serviceDatabaseSolutionsFeature4'),
        t('serviceDatabaseSolutionsFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
      color: '#6366f1',
      details: [
        'Database architecture and design',
        'Performance tuning and optimization',
        'Data migration and ETL processes',
        'High availability and disaster recovery',
        'Database security and encryption',
        'Real-time data synchronization',
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQL Server'],
    },
    {
      slug: 'cybersecurity',
      icon: Shield,
      title: t('serviceCybersecurity'),
      description: t('serviceCybersecurityDesc'),
      features: [
        t('serviceCybersecurityFeature1'),
        t('serviceCybersecurityFeature2'),
        t('serviceCybersecurityFeature3'),
        t('serviceCybersecurityFeature4'),
        t('serviceCybersecurityFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      color: '#ef4444',
      details: [
        'Comprehensive security assessments',
        'Vulnerability scanning and penetration testing',
        'Security policy development',
        'Employee security awareness training',
        'Incident response planning',
        'Compliance with industry standards',
      ],
      technologies: ['SIEM', 'Firewalls', 'Encryption', 'IAM', 'SOC', 'Compliance Tools'],
    },
    {
      slug: 'business-intelligence',
      icon: BarChart,
      title: t('serviceBusinessIntelligence'),
      description: t('serviceBusinessIntelligenceDesc'),
      features: [
        t('serviceBusinessIntelligenceFeature1'),
        t('serviceBusinessIntelligenceFeature2'),
        t('serviceBusinessIntelligenceFeature3'),
        t('serviceBusinessIntelligenceFeature4'),
        t('serviceBusinessIntelligenceFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      color: '#8b5cf6',
      details: [
        'Custom dashboard development',
        'Data warehousing solutions',
        'Advanced analytics and reporting',
        'KPI tracking and monitoring',
        'Predictive modeling',
        'Self-service BI tools',
      ],
      technologies: ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'Python', 'SQL'],
    },
    {
      slug: 'maintenance-support',
      icon: Settings,
      title: t('serviceMaintenanceSupport'),
      description: t('serviceMaintenanceSupportDesc'),
      features: [
        t('serviceMaintenanceSupportFeature1'),
        t('serviceMaintenanceSupportFeature2'),
        t('serviceMaintenanceSupportFeature3'),
        t('serviceMaintenanceSupportFeature4'),
        t('serviceMaintenanceSupportFeature5'),
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      color: '#64748b',
      details: [
        '24/7 technical support',
        'Regular system updates and patches',
        'Performance monitoring and optimization',
        'Bug fixes and issue resolution',
        'Security updates and maintenance',
        'Documentation and training',
      ],
      technologies: ['Monitoring Tools', 'Ticketing Systems', 'DevOps', 'CI/CD', 'Logging', 'Alerting'],
    },
  ];

  const service = servicesData.find(s => s.slug === slug);

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
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xeb1f28,
      transparent: true,
      opacity: 0.5,
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

  if (!service) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => router.push('/services')}
            className="px-6 py-2 bg-[#eb1f28] rounded-lg hover:bg-[#ff4757] transition-colors"
          >
            Back to Services
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-16">
        <section className="relative py-16 bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.button
              onClick={() => router.push('/services')}
              className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">{t('services')}</span>
            </motion.button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#eb1f28]/20 via-[#ff4757]/20 to-[#eb1f28]/20 backdrop-blur-xl border border-[#eb1f28]/40 mb-4"
                >
                  <Sparkles className="w-3 h-3 text-[#eb1f28]" />
                  <span className="text-white font-bold text-[10px] tracking-wide">
                    {t('ourServices')}
                  </span>
                  <Sparkles className="w-3 h-3 text-[#eb1f28]" />
                </motion.div>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: service.color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h1>
                </div>

                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-base font-semibold mb-3 text-white">
                    {t('technologiesUsed')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#eb1f28] to-[#ff4757] rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-[#eb1f28]/50 transition-all"
                >
                  {t('getInTouch')}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative h-80 rounded-xl overflow-hidden border border-slate-800"
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
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold mb-4 text-white">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-bold mb-4 text-white">What We Deliver</h2>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#eb1f28] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-400">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-slate-800 text-center"
            >
              <h2 className="text-xl font-bold mb-3 text-white">Ready to Get Started?</h2>
              <p className="text-sm text-slate-400 mb-4 max-w-2xl mx-auto">
                Let us help you transform your business with our {service.title.toLowerCase()} services.
                Contact us today for a free consultation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#eb1f28] to-[#ff4757] rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-[#eb1f28]/50 transition-all"
              >
                {t('contact')}
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
