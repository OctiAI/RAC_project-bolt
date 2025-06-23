import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Globe, Award, Heart, Shield } from 'lucide-react';
import { translations } from '../utils/translations';

type Language = 'en' | 'uk' | 'ru';

interface WhatIDoProps {
  currentLanguage: Language;
}

const WhatIDo: React.FC<WhatIDoProps> = ({ currentLanguage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = translations[currentLanguage];

  const features = [
    { icon: Award, text: t.whatIDo.features[0] },
    { icon: Users, text: t.whatIDo.features[1] },
    { icon: Globe, text: t.whatIDo.features[2] },
    { icon: Heart, text: t.whatIDo.features[3] },
    { icon: Shield, text: t.whatIDo.features[4] }
  ];

  const partners = [
    { name: 'CICC', logo: '🏛️' },
    { name: 'CAPIC', logo: '🎯' },
    { name: 'MV Group', logo: '🌟' }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-gold-light to-gold-primary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-primary mb-6">
            {t.whatIDo.heading}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.whatIDo.subheading}
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center space-x-12 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group"
            >
              <div className="text-4xl mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                {partner.logo}
              </div>
              <div className="text-sm font-medium text-gray-600 group-hover:text-navy-primary transition-colors">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-primary/20 group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gold-primary/10 p-3 rounded-full group-hover:bg-gold-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-gold-primary group-hover:text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium flex-1">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-white rounded-2xl p-8 shadow-xl border-2 border-gold-primary/20"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.whatIDo.closing.main}
            </p>
            <p className="text-lg font-medium text-navy-primary">
              {t.whatIDo.closing.emphasis}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;