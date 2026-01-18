'use client';

import Image from 'next/image';
import { Flag, Rocket, Globe, Heart } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Vision2030 = () => {
  const { t } = useLanguage();
  
  const vision2030Features = [
    {
      icon: Rocket,
      title: t('vision2030Innovation'),
      description: t('vision2030InnovationDesc'),
    },
    {
      icon: Globe,
      title: t('globalStandards'),
      description: t('globalStandardsDesc'),
    },
    {
      icon: Heart,
      title: t('communityImpact'),
      description: t('communityImpactDesc'),
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-green-950/20 via-black to-green-950/20 text-white relative overflow-hidden border-t border-slate-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 mb-4 shadow-lg shadow-green-600/50"
            >
              <Flag className="w-5 h-5 text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3"
            >
              {t('supportingVision2030')}
            </motion.h2>
            
            <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed" style={{ textAlign: 'justify' }}>
              {t('vision2030Description')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {vision2030Features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollAnimation key={index} delay={index * 50}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-green-800/30 hover:border-[#eb1f28]/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#eb1f28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#eb1f28] to-[#ff4757] flex items-center justify-center mb-3 relative z-10 shadow-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-sm font-semibold mb-2 text-white relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 leading-relaxed relative z-10" style={{ textAlign: 'justify' }}>
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation delay={150}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-slate-800"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
              alt="Saudi Vision 2030"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="text-xs font-semibold mb-1.5">{t('buildingFuture')}</p>
                <p className="text-[10px] text-slate-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                  {t('buildingFutureDesc')}
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Vision2030;
