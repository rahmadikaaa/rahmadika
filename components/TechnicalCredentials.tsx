import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, TrendingUp, Cpu, Lock } from 'lucide-react';

export const TechnicalCredentials: React.FC = () => {
  const credentials = [
    {
      category: "Data Intelligence",
      accent: "from-blue-500 to-blue-600",
      borderColor: "group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30",
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      valueProposition: "Optimizing business decisions through advanced SQL-based ML and predictive analytics.",
      certifications: [
        {
          title: "Perform Predictive Data Analysis in BigQuery",
          icon: <TrendingUp size={18} className="text-blue-400" />
        },
        {
          title: "Create ML Models with BigQuery ML",
          icon: <Cpu size={18} className="text-blue-400" />
        },
        {
          title: "Implement Multimodal Vector Search with BigQuery",
          icon: <Brain size={18} className="text-blue-400" />
        }
      ]
    },
    {
      category: "Gen AI Mastery",
      accent: "from-emerald-500 to-emerald-600",
      borderColor: "group-hover:border-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/30",
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      valueProposition: "Accelerating application development with AI-powered automation and intelligent agents.",
      certifications: [
        {
          title: "Build Real World AI Applications with Gemini and Imagen",
          icon: <Zap size={18} className="text-emerald-400" />
        },
        {
          title: "Create Agents with Generative Playbooks",
          icon: <Cpu size={18} className="text-emerald-400" />
        },
        {
          title: "Develop Gen AI Apps with Gemini and Streamlit",
          icon: <Brain size={18} className="text-emerald-400" />
        }
      ]
    },
    {
      category: "Infrastructure & Security",
      accent: "from-rose-500 to-rose-600",
      borderColor: "group-hover:border-rose-500 group-hover:shadow-lg group-hover:shadow-rose-500/30",
      icon: <Shield className="w-8 h-8 text-rose-400" />,
      valueProposition: "Building resilient, secure, and scalable cloud infrastructure with enterprise-grade compliance.",
      certifications: [
        {
          title: "Mitigate Threats and Vulnerabilities with SCC",
          icon: <Lock size={18} className="text-rose-400" />
        },
        {
          title: "Develop Serverless Applications on Cloud Run",
          icon: <Zap size={18} className="text-rose-400" />
        },
        {
          title: "Automate Data Capture with Document AI",
          icon: <Cpu size={18} className="text-rose-400" />
        },
        {
          title: "Monitoring in Google Cloud",
          icon: <Shield size={18} className="text-rose-400" />
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="credentials" className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyber-primary">Credentials</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Google Cloud Platform Certified expertise across Data, AI, and Infrastructure domains
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group relative p-8 rounded-xl bg-slate-900/50 border border-slate-800 transition-all duration-300 ${cred.borderColor}`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cred.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Category */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                    {cred.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{cred.category}</h3>
                </div>

                {/* Value Proposition */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed italic border-l-2 border-slate-700 pl-4">
                  "{cred.valueProposition}"
                </p>

                {/* Certifications List */}
                <div className="space-y-3">
                  {cred.certifications.map((cert, cidx) => (
                    <motion.div
                      key={cidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + cidx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 group-hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1">
                        {cert.icon}
                      </div>
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {cert.title}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Verified Badge */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span>Google Cloud Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm font-mono mb-4">
            Continuously expanding expertise through Google Cloud certifications
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-cyber-primary font-semibold hover:border-cyber-primary hover:shadow-lg hover:shadow-cyber-primary/20 transition-all"
          >
            Verify Credentials
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
