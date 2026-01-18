'use client';

import { Award, Zap, Shield, Users, HeadphonesIcon, CheckCircle } from 'lucide-react';
import ScrollAnimation from '../ScrollAnimation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Award, titleKey: 'yearsExperienceTitle', descriptionKey: 'yearsExperienceDesc' },
    { icon: Zap, titleKey: 'cuttingEdgeTech', descriptionKey: 'cuttingEdgeTechDesc' },
    { icon: Shield, titleKey: 'qualityAssurance', descriptionKey: 'qualityAssuranceDesc' },
    { icon: Users, titleKey: 'expertTeam', descriptionKey: 'expertTeamDesc' },
    { icon: HeadphonesIcon, titleKey: 'support247', descriptionKey: 'support247Desc' },
    { icon: CheckCircle, titleKey: 'provenTrackRecord', descriptionKey: 'provenTrackRecordDesc' },
  ];

  return (
    <section className="py-12 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold mb-3 text-white"
            >
              {t('whyChooseUs')}
            </motion.h2>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              {t('whyChooseUsDesc')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <ScrollAnimation delay={100}>
            <motion.div
              className="relative h-64 rounded-xl overflow-hidden border border-slate-800"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </ScrollAnimation>

          {/* Content Side */}
          <ScrollAnimation delay={200}>
            <motion.div
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl p-5 border border-slate-800/50"
            >
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#eb1f28]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-semibold text-white mb-1">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-[10px] text-slate-400 leading-relaxed" style={{ textAlign: 'justify' }}>
                          {t(feature.descriptionKey)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
