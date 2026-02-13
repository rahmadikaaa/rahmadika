import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, PlayCircle, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image (Rectangular Portrait) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              {/* Image Container with aspect ratio if needed, or just standard box */}
              <img
                src="/profile-photo-updated.png"
                alt="Rahmadika Tri Putera"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                style={{ maxHeight: '600px', objectPosition: 'top' }}
              />
              {/* Optional minimal overlay if image is too bright, though reference looks clean */}
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-left order-2 lg:order-2"
          >
            {/* Tag/Badge */}
            <div className="flex items-center gap-2 mb-8">
              <Star className="text-blue-500 fill-blue-500 w-3 h-3" />
              <span className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase">
                QA Automation Engineer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
              Accelerate Your <br />
              Release Cycle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                with AI-Powered QA & Automation
              </span>
            </h1>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
              <p>
                Expert Quality Assurance with a proven track record in Telecommunication projects (Telkomsel) and ERP systems. I don't just find bugs; I automate the entire testing ecosystem using n8n and Cypress.
              </p>
              <p className="text-sm font-medium opacity-80 border-l-2 border-slate-700 pl-4">
                Proven track record providing technical support for 50+ users and maintaining high-quality internal documentation.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center"
              >
                Get Free QA Consultation
              </a>
              <a
                href="#projects"
                className="px-8 py-4 bg-transparent border border-slate-800 hover:bg-slate-900 hover:border-slate-700 text-slate-300 font-semibold rounded-lg transition-all flex items-center justify-center"
              >
                View My Automation Samples
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};