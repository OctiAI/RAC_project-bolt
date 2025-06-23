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
        {/* Centered Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-br from-gold-primary to-gold-secondary p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="text-6xl text-white/30 mb-6">"</div>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {t.whyItMatters.quote}
            </blockquote>
            <div className="text-6xl text-white/30 mt-6 rotate-180">"</div>
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {t.whyItMatters.subheadline}
          </p>
        </motion.div>

        {/* Values Cards with Titles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              className="text-center"
            >
              {/* Title and Icon Above Card */}
              <div className="mb-6">
                <div className="bg-gold-primary/10 p-4 rounded-full mb-3 mx-auto w-fit">
                  <value.icon className="w-8 h-8 text-gold-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary">
                  {value.title}
                </h3>
              </div>

              {/* Flippable Card */}
              <div className="relative h-48" style={{ perspective: '1000px' }}>
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
                    className="absolute inset-0 bg-white rounded-xl shadow-lg border-2 border-gold-primary/20 p-6 flex flex-col justify-center"
                    style={{
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <p className="text-gray-600 text-center leading-relaxed">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;