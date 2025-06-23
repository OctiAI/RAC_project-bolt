import React from 'react';Add commentMore actions
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { translations } from '../utils/translations';

type Language = 'en' | 'uk' | 'ru';

interface HeroProps {
  currentLanguage: Language;

}

const Hero: React.FC<HeroProps> = ({ currentLanguage }) => {


  const t = translations[currentLanguage];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Professional woman"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-primary/70"></div>
      </div>

      {/* RCIC License Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-20 left-4 sm:top-24 sm:left-8 bg-gold-primary text-navy-primary px-3 py-2 rounded-full text-xs font-bold shadow-lg z-10"
      >
        RCIC #R506278
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              {t.hero.headline1}
            </motion.div>





















