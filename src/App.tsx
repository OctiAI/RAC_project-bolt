import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoIAm from './components/WhoIAm';
import WhatIDo from './components/WhatIDo';
import WhyItMatters from './components/WhyItMatters';
import RealSuccess from './components/RealSuccess';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import LoadingAnimation from './components/LoadingAnimation';

type Language = 'en' | 'uk' | 'ru';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowStickyCTA(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time for passport stamp animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero currentLanguage={currentLanguage} />
        <WhoIAm currentLanguage={currentLanguage} />
        <WhatIDo currentLanguage={currentLanguage} />
        <WhyItMatters currentLanguage={currentLanguage} />
        <RealSuccess currentLanguage={currentLanguage} />
        <CTASection currentLanguage={currentLanguage} />
      </motion.main>

      <Footer currentLanguage={currentLanguage} />
      
      <AnimatePresence>
        {showStickyCTA && <StickyCTA currentLanguage={currentLanguage} />}
      </AnimatePresence>
    </div>
  );
}

export default App;