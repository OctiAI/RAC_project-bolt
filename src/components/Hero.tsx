import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { translations } from '../utils/translations';

type Language = 'en' | 'uk' | 'ru';

interface HeaderProps {
  currentLanguage: Language;
  setCurrentLanguage: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, setCurrentLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[currentLanguage];

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'blog', href: '#blog' },
    { key: 'contact', href: '#contact' }
  ];

  const languages = [
    { code: 'en' as Language, flag: '🇬🇧', name: 'EN' },
    { code: 'uk' as Language, flag: '🇺🇦', name: 'UKR' },
    { code: 'ru' as Language, flag: '🇷🇺', name: 'RU' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-navy-primary/95 backdrop-blur-sm z-40 border-b-2 border-gold-primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gold-primary rounded-full flex items-center justify-center border-2 border-white">
                <span className="text-navy-primary font-bold text-sm">RAC</span>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg leading-tight">RAC Immigration</div>
                <div className="text-xs text-gold-primary">RCIC #R506278</div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-white hover:text-gold-primary transition-colors font-medium"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            {languages.map((lang) => (
              <motion.button
                key={lang.code} 
                onClick={() => setCurrentLanguage(lang.code)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-gold-primary text-navy-primary'
                    : 'text-white hover:text-gold-primary'
                }`}
              >
                <span className="mr-1">{lang.flag}</span>
                {lang.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gold-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-primary border-t border-gold-primary/20"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block text-white hover:text-gold-primary transition-colors font-medium px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
              
              <div className="flex items-center space-x-2 px-4 pt-4 border-t border-gold-primary/20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      currentLanguage === lang.code
                        ? 'bg-gold-primary text-navy-primary'
                        : 'text-white hover:text-gold-primary'
                    }`}
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;