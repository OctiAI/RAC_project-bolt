import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Target } from 'lucide-react';
import { translations } from '../utils/translations';

type Language = 'en' | 'uk' | 'ru';

interface WhyItMattersProps {
  currentLanguage: Language;
}

const WhyItMatters: React.FC<WhyItMattersProps> = ({ currentLanguage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = translations[currentLanguage];
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const values = [
    {
      icon: Heart,
      title: t.whyItMatters.values.respect.title,
      description: t.whyItMatters.values.respect.description,
      example: t.whyItMatters.values.respect.example
    },
    {
      icon: Shield,
      title: t.whyItMatters.values.accountability.title,
      description: t.whyItMatters.values.accountability.description,
      example: t.whyItMatters.values.accountability.example
    },
    {
      icon: Target,
      title: t.whyItMatters.values.commitment.title,
      description: t.whyItMatters.values.commitment.description,
      example: t.whyItMatters.values.commitment.example
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-br from-gold-primary to-gold-secondary rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="text-6xl text-white/30 mb-6">"</div>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {t.whyItMatters.quote}
            </blockquote>
            <div className="text-6xl text-white/30 mt-6 rotate-180">"</div>
          </div>
        </motion.div>

        {/* Values Cards - Centered and Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="relative h-80"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 bg-white rounded-xl shadow-lg border-2 border-gold-primary/20 p-6 flex flex-col items-center text-center"
                  style={{
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="bg-gold-primary/10 p-4 rounded-full mb-6">
                    <value.icon className="w-10 h-10 text-gold-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 bg-navy-primary rounded-xl shadow-lg p-6 flex items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className="text-white text-center leading-relaxed">
                    {value.example}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;