import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentLanguage: 'en' | 'id';
  onLanguageChange: (lang: 'en' | 'id') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = currentLanguage === 'en' 
    ? ['Home', 'About', 'Credentials', 'Projects', 'Contact']
    : ['Beranda', 'Tentang', 'Kredensial', 'Proyek', 'Kontak'];

  const navLinks = ['home', 'about', 'credentials', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-cyber-darker/95 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="font-bold text-lg md:text-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-cyber-primary">{'<'}</span>
          <span className="text-white">The Architect</span>
          <span className="text-cyber-primary">{'>'}</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              href={`#${navLinks[idx]}`}
              className="text-slate-400 hover:text-cyber-primary transition-colors font-medium"
              whileHover={{ color: '#06b6d4' }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher 
            currentLanguage={currentLanguage} 
            onLanguageChange={onLanguageChange}
          />
          
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${navLinks[idx]}`}
                  className="text-slate-400 hover:text-cyber-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 8, color: '#06b6d4' }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
