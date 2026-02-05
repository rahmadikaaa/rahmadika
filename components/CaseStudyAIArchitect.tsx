import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, Cloud, TrendingUp, Code2, CheckCircle2, Zap, Shield } from 'lucide-react';

export const CaseStudyAIArchitect: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'implementation' | 'impact'>('overview');

  const caseStudy = {
    title: "Solusi MasaDepan: AI-Powered UMKM Transformation",
    description: "Engineering-first ecosystem yang mengintegrasikan Cloud orchestration, AI automation, dan data-driven marketing untuk transformasi digital UMKM yang terukur dan sustainable.",
    
    overview: {
      client: "UMKM Network Indonesia",
      duration: "6 months",
      teamSize: "Founder (Architect) + 2 Technical Partners",
      infrastructure: "GCP Serverless Architecture with n8n Orchestration",
      objective: "Build scalable, cost-optimized digital infrastructure dengan built-in quality assurance standards dari QA Excellence framework"
    },

    architecture: [
      {
        layer: "Backend & Orchestration Layer",
        icon: <Code2 className="text-purple-400" />,
        title: "Backend & Orchestration Layer",
        engineeringDetail: "Laravel 10 REST API dengan n8n Enterprise Workflow Orchestration untuk automated data pipeline processing dan business logic automation. Implementasi include: async job processing dengan queue, API rate limiting, request validation layer, dan comprehensive error handling dengan structured logging.",
        technologies: ["Laravel 10", "n8n Workflows", "PostgreSQL 15", "Redis Cache", "REST API"],
        implementation: "n8n automations menangani: invoice OCR parsing → SQL validation → customer notification pipeline. Setiap workflow step dilengkapi dengan error retry logic dan data integrity checks menggunakan SQL query validation."
      },
      {
        layer: "AI & Intelligence Layer",
        icon: <BrainCircuit className="text-cyber-primary" />,
        title: "AI & Intelligence Layer",
        engineeringDetail: "LLM integration dengan OpenAI GPT-4 API untuk intelligent document processing dan contextual analysis. Implementasi menggunakan LangChain framework dengan vector database (Pinecone) untuk semantic search dan memory management. Prompt engineering dengan chain-of-thought pattern untuk akurasi maksimal.",
        technologies: ["OpenAI GPT-4", "LangChain", "Pinecone Vector DB", "Embeddings API", "Prompt Engineering"],
        implementation: "Sistem OCR → LLM parsing → SQL backend validation. Setiap dokumen diproses melalui multi-stage validation: structural integrity check, data consistency validation, dan RBAC authorization sebelum dipegang database."
      },
      {
        layer: "Cloud Infrastructure & DevOps",
        icon: <Cloud className="text-cyan-400" />,
        title: "Cloud Infrastructure & DevOps",
        engineeringDetail: "Google Cloud Platform serverless architecture menggunakan Cloud Run (containerized services), Cloud Scheduler (cron jobs), dan Firebase untuk real-time data sync. Infrastructure-as-Code dengan Terraform untuk reproducibility. Auto-scaling berdasarkan traffic patterns dengan cost monitoring via Cloud Cost Management.",
        technologies: ["GCP Cloud Run", "Cloud Scheduler", "Firebase Realtime DB", "Cloud Storage", "Docker", "Terraform", "Cloud Monitoring"],
        implementation: "Orkestrasi menggunakan Google Cloud Pub/Sub untuk event-driven architecture. CI/CD pipeline: GitHub → Cloud Build → Cloud Run. Setiap deployment dilengkapi dengan automated smoke testing dan production health checks."
      },
      {
        layer: "Marketing & Growth Automation Layer",
        icon: <TrendingUp className="text-yellow-400" />,
        title: "Marketing & Growth Automation Layer",
        engineeringDetail: "Full-funnel digital marketing automation menggunakan Meta Graph API dan Conversion API untuk pixel-less conversion tracking. Data pipeline: customer events → BigQuery data warehouse → ML-powered audience segmentation → programmatic bidding optimization. Real-time attribution modeling dengan 30-day lookback window.",
        technologies: ["Meta Graph API", "Conversion API", "Google BigQuery", "Python ML Pipeline", "Data Studio", "Facebook Pixel"],
        implementation: "n8n integration dengan Meta APIs untuk campaign optimization loops. Automated budget allocation berdasarkan predicted ROAS. Setiap campaign decision didukung oleh SQL-based cohort analysis dan retention metrics."
      }
    ],

    implementationFlow: [
      {
        step: "1. Infrastructure Setup",
        detail: "Terraform provisioning GCP resources (Cloud Run, Firestore, Cloud Storage). Configuration management via Secret Manager. Network isolation dengan VPC dan Cloud Armor untuk DDoS protection."
      },
      {
        step: "2. Data Pipeline Architecture",
        detail: "Event streaming via Cloud Pub/Sub → Apache Beam processing → BigQuery warehouse. Real-time data sync Firebase → Backend via REST API webhooks. SQL schema design dengan normalization dan indexing optimization untuk query performance."
      },
      {
        step: "3. AI Integration & Validation",
        detail: "LLM model fine-tuning untuk domain-specific tasks. Vector embeddings untuk semantic search dan recommendation. QA validation: LLM output → SQL integrity check → RBAC authorization → Data audit logging."
      },
      {
        step: "4. Automation Workflows",
        detail: "n8n workflow design dengan 40+ automation sequences. Error handling dengan exponential backoff retry. Monitoring dengan CloudWatch dan Datadog untuk real-time alerting dan performance analytics."
      },
      {
        step: "5. Marketing Optimization",
        detail: "Meta Conversion API implementation untuk cookieless tracking. Audience segmentation menggunakan BigQuery ML. Bidding automation dengan RL-based budget optimizer untuk ROI maximization."
      }
    ],

    impact: [
      {
        metric: "Manual Task Reduction",
        value: "80%",
        icon: <Zap className="text-yellow-400" />,
        description: "Automasi data entry, invoice processing, dan customer notifications mengeliminasi 80% tugas manual yang previously repetitive.",
        technical: "n8n workflows + LLM OCR automation"
      },
      {
        metric: "Deployment Speed",
        value: "4x faster",
        icon: <TrendingUp className="text-cyber-primary" />,
        description: "Cloud Run serverless deployment dengan automated CI/CD pipeline mengurangi time-to-market dari 2 minggu menjadi 3 hari.",
        technical: "Cloud Build + Cloud Run + Terraform"
      },
      {
        metric: "Infrastructure Cost",
        value: "60% savings",
        icon: <Cloud className="text-cyan-400" />,
        description: "Optimasi GCP resources melalui intelligent auto-scaling dan reserved capacity. Pay-per-use model mengeliminasi idle resources.",
        technical: "GCP Cost Analysis + Auto-scaling policies"
      },
      {
        metric: "Marketing ROI",
        value: "3.2x increase",
        icon: <TrendingUp className="text-green-400" />,
        description: "Data-driven campaign optimization dengan real-time attribution modeling dan predictive audience segmentation.",
        technical: "Meta Conversion API + BigQuery ML"
      },
      {
        metric: "System Uptime",
        value: "99.95%",
        icon: <Shield className="text-purple-400" />,
        description: "High availability architecture dengan multi-region failover dan automated health checks setiap 30 detik.",
        technical: "Cloud Run + Load Balancer + Cloud Monitoring"
      },
      {
        metric: "Scalability Ceiling",
        value: "10x capacity",
        icon: <Zap className="text-orange-400" />,
        description: "Serverless architecture mampu menangani 10x traffic surge tanpa manual infrastructure changes atau downtime.",
        technical: "Cloud Run auto-scaling + Pub/Sub buffering"
      }
    ],

    qaIntegration: "Setiap automation workflow di Solusi MasaDepan menerapkan standar QA Excellence yang sama dengan Mission Logs: SQL backend validation untuk data integrity, ERD-based schema validation, RBAC authorization checks, dan comprehensive audit logging untuk compliance. Sistem OCR output → LLM processing → Database storage semuanya melalui rigorous testing framework sebelum production deployment."
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BrainCircuit size={18} /> },
    { id: 'architecture', label: 'Architecture', icon: <Cloud size={18} /> },
    { id: 'implementation', label: 'Implementation', icon: <Code2 size={18} /> },
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
                    <p className="text-xl text-white font-semibold">{caseStudy.overview.infrastructure}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Objective</h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  {caseStudy.overview.objective}
                </p>
              </div>

              <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-purple-400" />
                  QA Integration dengan Mission Logs Standards
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {caseStudy.qaIntegration}
                </p>
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
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{layer.title}</h4>
                      <p className="text-slate-300 mb-4 leading-relaxed">{layer.engineeringDetail}</p>
                      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700 mb-4">
                        <p className="text-sm text-slate-400">
                          <span className="font-semibold text-cyan-400">Implementation Detail: </span>
                          {layer.implementation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
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

          {activeTab === 'implementation' && (
            <motion.div
              key="implementation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {caseStudy.implementationFlow.map((flow, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors relative"
                >
                  {/* Step number badge */}
                  <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-cyber-primary text-cyber-darker flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 pl-2">{flow.step}</h4>
                  <p className="text-slate-300 leading-relaxed">{flow.detail}</p>
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
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudy.impact.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-lg bg-gradient-to-br from-slate-900/50 to-slate-800/25 border border-slate-800 hover:border-cyber-primary transition-all group hover:shadow-lg hover:shadow-cyber-primary/20"
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-cyber-primary mb-2">{item.value}</div>
                    <div className="text-white font-semibold mb-3">{item.metric}</div>
                    <div className="text-sm text-slate-400 mb-3">{item.description}</div>
                    <div className="pt-3 border-t border-slate-700">
                      <p className="text-xs text-cyan-400 font-mono">{item.technical}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
