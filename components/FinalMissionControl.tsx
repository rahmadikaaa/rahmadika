import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FinalMissionControl: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Rahmadika, saya [Nama] dari [Perusahaan]. Saya melihat portofolio 'The Cognitive QA Architect' Anda dan tertarik untuk berdiskusi lebih lanjut mengenai peluang kolaborasi."
    );
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCVDownload = () => {
    // CV download logic - akan mengarah ke file CV yang di-host
    window.open('/cv/Rahmadika-Tri-Putera-CV.html', '_blank');
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyber-primary/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="text-cyber-primary" size={32} />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Secure Your System's <span className="text-cyber-primary">Integrity?</span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed">
            Mari berkolaborasi membangun sistem yang berkualitas, cerdas, dan dapat diandalkan dengan standar enterprise yang ketat.
          </p>

          <div className="p-6 rounded-lg bg-gradient-to-r from-cyber-primary/10 to-purple-500/10 border border-cyber-primary/30 mb-8">
            <p className="text-slate-200 font-semibold">
              ✨ Saat ini saya sedang membuka peluang kolaborasi untuk peran <span className="text-cyber-primary">Quality Assurance</span> atau <span className="text-cyan-400">AI Automation Architect</span>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* Primary CTA - CV Download */}
            <motion.button
              onClick={handleCVDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg font-bold text-lg transition-all overflow-hidden"
            >
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyan-400 opacity-80 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyan-400 opacity-90 z-0" />

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent bg-clip-padding group-hover:border-cyan-200 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all rounded-lg" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center gap-2 text-cyber-darker">
                <FileText size={20} />
                <span>Download Full CV (PDF)</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>

            {/* Secondary CTA - WhatsApp */}
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg font-bold text-lg transition-all overflow-hidden"
            >
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg group-hover:bg-white/10 group-hover:border-white/40 transition-all z-0" />

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg blur-lg transition-opacity z-0" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-cyan-300 transition-colors">
                <MessageCircle size={20} />
                <span>Chat via WhatsApp</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.button>
          </div>

          {/* Supporting Text */}
          <div className="space-y-4 text-slate-400 text-sm">
            <p>
              💼 Spesialisasi: Quality Assurance Architecture, AI Automation, DevOps Strategy, Data-Driven Marketing
            </p>
            <p>
              🎯 Teknologi: GCP, n8n, LLM Integration, Meta API, BigQuery, Terraform, CI/CD
            </p>
            <p>
              📊 Bukti Kesuksesan: 3+ case studies dengan ROI terukur, 80% task automation, 99.95% system uptime
            </p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
            <div className="text-2xl font-bold text-cyber-primary mb-2">3+</div>
            <p className="text-sm text-slate-400">Complete Case Studies</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">2+ Years</div>
            <p className="text-sm text-slate-400">QA Manual & Automation Experience</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">3.2x</div>
            <p className="text-sm text-slate-400">Average Marketing ROI</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-cyber-primary rounded-full opacity-40" />
      <div className="absolute bottom-40 left-10 w-3 h-3 bg-purple-500 rounded-full opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-50" />
    </section>
  );
};
