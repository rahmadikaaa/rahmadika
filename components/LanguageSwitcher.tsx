import React from 'react';
import { motion } from 'framer-motion';

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'id';
  onLanguageChange: (lang: 'en' | 'id') => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLanguage, 
  onLanguageChange 
}) => {
  return (
    <motion.div 
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-0 bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700 hover:border-slate-600 transition-colors">
        {/* ID Button */}
        <motion.button
          onClick={() => onLanguageChange('id')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-2 rounded transition-all font-semibold text-sm ${
            currentLanguage === 'id'
              ? 'bg-cyber-primary text-cyber-darker'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          ID
        </motion.button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-700" />

        {/* EN Button */}
        <motion.button
          onClick={() => onLanguageChange('en')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-2 rounded transition-all font-semibold text-sm ${
            currentLanguage === 'en'
              ? 'bg-cyber-primary text-cyber-darker'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          EN
        </motion.button>
      </div>
    </motion.div>
  );
};
