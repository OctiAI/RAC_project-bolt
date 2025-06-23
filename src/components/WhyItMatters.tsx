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
      example: t.whyItMatters.values.respect.example,
      hoverText: "Every client is treated with dignity, regardless of where they come from"
    },
    {
      icon: Shield,
      title: t.whyItMatters.values.accountability.title,
      description: t.whyItMatters.values.accountability.description,
      example: t.whyItMatters.values.accountability.example,
      hoverText: "We own our work, our results, and our promises"
    },
    {
      icon: Target,
      title: t.whyItMatters.values.commitment.title,
      description: t.whyItMatters.values.commitment.description,
      example: t.whyItMatters.values.commitment.example,
      hoverText: "We don't stop until your goal is real"
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
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-br from-gold-primary to-gold-secondary p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="text-6xl text-white/30 mb-6">"</div>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {t.whyItMatters.quote}
            </blockquote>
            <div className="text-6xl text-white/30 mt-6 rotate-180">"</div>
          </div>
        </motion.div>

        {/* Values Titles Centered with Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="text-center group relative"
            >
              <div className="bg-gold-primary/10 p-4 rounded-full mb-3 mx-auto w-fit group-hover:bg-gold-primary transition-all duration-300">
                <value.icon className="w-8 h-8 text-gold-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-navy-primary group-hover:text-gold-primary transition-colors duration-300">
                {value.title}
              </h3>
              
              {/* Hover Text */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                <div className="bg-navy-primary text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                  {value.hoverText}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-navy-primary rotate-45"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
              className="relative h-48"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;