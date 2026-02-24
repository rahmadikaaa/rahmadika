import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-0 bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700 hover:border-slate-600 transition-colors">
        {/* ID Button */}
        <button
          onClick={() => setLanguage('id')}
          className={`px-3 py-2 rounded transition-all font-semibold text-sm ${language === 'id'
              ? 'bg-cyber-primary text-cyber-darker'
              : 'text-slate-400 hover:text-white'
            }`}
        >
          ID
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-700" />

        {/* EN Button */}
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-2 rounded transition-all font-semibold text-sm ${language === 'en'
              ? 'bg-cyber-primary text-cyber-darker'
              : 'text-slate-400 hover:text-white'
            }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
};
