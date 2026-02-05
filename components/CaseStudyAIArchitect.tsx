import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Cloud, TrendingUp, Code2, CheckCircle2 } from 'lucide-react';

export const CaseStudyAIArchitect: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'impact'>('overview');

  const caseStudy = {
    title: "Solusi MasaDepan: AI-Powered UMKM Transformation",
    description: "Membangun ekosistem digital terintegrasi untuk UMKM dengan AI automation, DevOps infrastructure, dan marketing optimization.",
    
    overview: {
      client: "UMKM Network Indonesia",
      duration: "6 months",
      teamSize: "Founder + 2 Technical Partners",
      budget: "Scalable cloud-based architecture"
    },

    architecture: [
      {
        layer: "Backend & Automation Layer",
        icon: <Code2 className="text-purple-400" />,
        description: "Laravel API dengan n8n workflow orchestration untuk automated data processing dan business logic automation",
        technologies: ["Laravel", "n8n", "PostgreSQL", "REST API"]
      },
      {
        layer: "AI & Intelligence Layer",
        icon: <BrainCircuit className="text-cyber-primary" />,
        description: "LLM integration untuk intelligent document processing, chatbot, dan predictive analytics menggunakan prompt engineering",
        technologies: ["OpenAI API", "LangChain", "Vector DB", "Prompt Engineering"]
      },
      {
        layer: "Cloud Infrastructure & DevOps",
        icon: <Cloud className="text-cyan-400" />,
        description: "GCP orchestration dengan VM, Cloud Run, dan Firebase untuk scalable, cost-optimized deployment",
        technologies: ["GCP VM", "Cloud Run", "Firebase", "Docker", "CI/CD"]
      },
      {
        layer: "Marketing & Growth Layer",
        icon: <TrendingUp className="text-yellow-400" />,
        description: "Full-funnel Meta Ads optimization dengan data-driven strategy dan ROI tracking via Facebook Pixel",
        technologies: ["Meta Ads Manager", "Facebook Pixel", "Analytics", "Conversion API"]
      }
    ],

    impact: [
      {
        metric: "Process Automation",
        value: "80% reduction",
        description: "in manual data entry & repetitive tasks"
      },
      {
        metric: "Time to Market",
        value: "4x faster",
        description: "application deployment dengan Cloud Run & n8n"
      },
      {
        metric: "Cost Optimization",
        value: "60% savings",
        description: "melalui intelligent resource allocation di GCP"
      },
      {
        metric: "Marketing ROI",
        value: "3.2x increase",
        description: "dari data-driven Meta Ads campaigns"
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5 rating",
        description: "dengan AI-powered customer experience"
      },
      {
        metric: "Scalability",
        value: "10x capacity",
        description: "tanpa infrastructure overhaul"
      }
    ],

    keyFeatures: [
      "Automated Invoice Processing dengan OCR & LLM validation",
      "n8n Workflow untuk order management, inventory sync, dan customer notification",
      "AI Chatbot untuk customer service dengan context awareness",
      "Real-time Dashboard untuk business metrics & analytics",
      "Meta Ads automation dengan predictive bidding strategy",
      "GCP Serverless architecture untuk cost-efficient scaling"
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BrainCircuit size={18} /> },
    { id: 'architecture', label: 'Architecture', icon: <Cloud size={18} /> },
    { id: 'impact', label: 'Business Impact', icon: <TrendingUp size={18} /> }
  ];

  return (
    <section id="case-study-ai" className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyber-primary/5 rounded-full blur-[120px]" />
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
            AI Architect <span className="text-cyber-primary">Case Study</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {caseStudy.description}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-cyber-primary text-cyber-darker shadow-lg shadow-cyber-primary/50'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-500 font-mono mb-1">CLIENT</div>
                    <p className="text-xl text-white font-semibold">{caseStudy.overview.client}</p>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-mono mb-1">DURATION</div>
                    <p className="text-xl text-white font-semibold">{caseStudy.overview.duration}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-500 font-mono mb-1">TEAM SIZE</div>
                    <p className="text-xl text-white font-semibold">{caseStudy.overview.teamSize}</p>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-mono mb-1">INFRASTRUCTURE</div>
                    <p className="text-xl text-white font-semibold">{caseStudy.overview.budget}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Features & Solutions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.keyFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyber-primary transition-colors"
                    >
                      <CheckCircle2 className="text-cyber-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {caseStudy.architecture.map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-slate-800/50">
                      {layer.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{layer.layer}</h4>
                      <p className="text-slate-400">{layer.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {layer.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-mono border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {caseStudy.impact.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-800/25 border border-slate-800 hover:border-cyber-primary transition-colors"
                >
                  <div className="text-3xl font-bold text-cyber-primary mb-2">{item.value}</div>
                  <div className="text-white font-semibold mb-2">{item.metric}</div>
                  <div className="text-sm text-slate-400">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
