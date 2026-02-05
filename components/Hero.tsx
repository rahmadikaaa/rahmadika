import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyber-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full opacity-50 blur-xl animate-pulse"></div>
            <img 
              src="/profile-photo-updated.png" 
              alt="Rahmadika Tri Putera" 
              className="relative w-full h-full rounded-full object-cover border-4 border-cyber-primary shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center p-2 mb-6 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
          <span className="text-sm font-mono text-slate-300">System Online: Ready for Inspection</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
        >
          Rahmadika Tri Putera
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-3xl font-mono text-cyber-primary mb-6"
        >
          Professional QA & AI Architect
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          "Bridging the gap between software quality and AI-driven automation."
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 bg-cyber-primary text-cyber-darker font-bold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
            <ShieldCheck size={20} />
            View Portfolio
          </a>
          <a href="#summary" className="px-8 py-3 bg-slate-800/50 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors backdrop-blur-sm border border-slate-700 flex items-center gap-2">
            <Terminal size={20} />
            Tech Summary
          </a>
        </motion.div>

        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -right-4 top-0 md:top-20 opacity-20 hidden md:block"
        >
          <Cpu size={64} />
        </motion.div>
      </div>
    </section>
  );
};