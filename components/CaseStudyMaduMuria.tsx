import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Brain, Zap, BarChart3, BookOpen, Settings, Target, CheckCircle2, AlertCircle } from 'lucide-react';

export const CaseStudyMaduMuria: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'phase1' | 'phase2' | 'phase3'>('phase1');
  const [activeTab, setActiveTab] = useState<'roadmap' | 'architecture' | 'metrics' | 'intelligence'>('roadmap');

  const caseStudy = {
    title: "Strategic AI Campaign Architecture: Madu Muria",
    subtitle: "Data-Driven Marketing Excellence dengan AI-Powered Business Intelligence",
    tagline: "From 'Madu Asli' to 'Madu Murni Nektar' - Education-Based Marketing Strategy dengan Sanad Madu Narrative",
    
    brandIdentity: {
      legacy: "Madu Asli",
      premium: "Madu Murni Nektar",
      narrative: "Sanad Madu (Certification & Trust)",
      positioning: "Premium Health & Wellness Product dengan Education-First Marketing",
      targetAudience: "Health-conscious millennials, Ramadan/Lebaran spike, Corporate bulk orders"
    },

    phases: {
      phase1: {
        name: "Fase 1: Munggahan (Awareness & Stocking)",
        duration: "Month 1-2 (30 Hari Sebelum Ramadan)",
        objective: "Massive brand awareness dan mempersiapkan inventory untuk peak season",
        messaging: "Starter Pack Kuat Puasa - 'Persiapan Puasa dengan Nektar Premium'",
        tactics: [
          "Educational content: Manfaat madu murni untuk kesehatan (Sanad-backed)",
          "Awareness campaigns dengan CPM optimization untuk reach maksimal",
          "Influencer partnerships dengan health & wellness micro-influencers",
          "Stocking prep campaign: Early bird discounts untuk B2B buyers",
          "Landing page: Product education dengan certification showcase"
        ],
        aiAutomation: [
          "Meta Ads audience expansion menggunakan Lookalike dari health-conscious segment",
          "Dynamic creative optimization untuk 5 messaging variants",
          "Chatbot untuk FAQ handling: 'Apa itu Sanad Madu?', 'Manfaat untuk puasa?'",
          "Inventory forecasting via BigQuery ML untuk stocking recommendations"
        ],
        targetMetrics: {
          reach: "1M+ impressions",
          ctr: "0.7-0.9%",
          cpc: "$0.15-0.25",
          conversionRate: "12-15%"
        }
      },
      phase2: {
        name: "Fase 2: Penetrasi (Aggressive Scaling)",
        duration: "Month 2-3 (Ramadan Peak)",
        objective: "Aggressive scaling dengan conversion optimization dan viral amplification",
        messaging: "Maksimalkan penjualan saat konsumsi tertinggi - 'Ramadan Berkat dengan Nektar'",
        tactics: [
          "Scaling budget to winning creatives dengan ROAS > 3.0x",
          "Conversion-focused campaigns dengan landing page A/B testing",
          "Retargeting warm audiences dengan bundle offers dan urgency messaging",
          "Video testimonials dari Sanad holders (authority & trust building)",
          "Email nurture campaigns untuk cart abandonment recovery"
        ],
        aiAutomation: [
          "Predictive audience segmentation: High-propensity buyers vs awareness-only",
          "Bid optimization dengan RL-based ML model untuk budget allocation",
          "Real-time performance dashboard dengan anomaly detection",
          "Lead scoring system: Qualifying B2B corporate bulk orders",
          "Automated objection handling via n8n workflows untuk sales team"
        ],
        targetMetrics: {
          reach: "3M+ impressions",
          ctr: "> 1.0%",
          cpc: "$0.10-0.18",
          conversionRate: "25-30%",
          roas: "3.0x - 4.5x"
        }
      },
      phase3: {
        name: "Fase 3: Peak (Premium Hampers & Retargeting)",
        duration: "Month 3-4 (Lebaran & THR Timing)",
        objective: "Maximize high-margin products saat THR cair dan gift-giving season",
        messaging: "Premium positioning - 'Hampers Madu Murni untuk Keluarga Tercinta'",
        tactics: [
          "Premium hamper campaigns: Gift bundles dengan luxury packaging narrative",
          "Lebaran-specific messaging: Family bonding & tradition angle",
          "Corporate gifting: B2B campaigns untuk employee appreciation programs",
          "Retargeting phase 1-2 browsers dengan scarcity messaging",
          "Loyalty program activation: Repeat buyers dengan exclusive THR deals"
        ],
        aiAutomation: [
          "Customer lifetime value (CLV) prediction untuk premium segment targeting",
          "Product recommendation engine based on purchase history & browsing",
          "Seasonal demand forecasting: THR cash availability timing",
          "Personalized email campaigns with dynamic product recommendations",
          "Attribution modeling untuk understanding customer journey complexity"
        ],
        targetMetrics: {
          reach: "2M+ impressions",
          ctr: "0.8-1.2%",
          avgOrderValue: "+40% vs phase 2",
          conversionRate: "28-35%",
          roas: "4.0x - 5.5x"
        }
      }
    },

    aiArchitecture: {
      readingBrain: {
        name: "NotebookLM (Reader - Knowledge Hub)",
        role: "Central strategy & operational knowledge base",
        responsibilities: [
          "Sanad Madu certification & compliance documentation",
          "Marketing SOP & objection handling scripts",
          "Competitive intelligence & market positioning analysis",
          "Customer psychology & Ramadan behavioral insights",
          "Product education materials untuk sales team"
        ],
        implementation: "Multi-document upload dengan semantic search untuk instant SOP retrieval. Video generation untuk training content. Real-time Q&A untuk team support.",
        impact: "Single source of truth untuk 100+ marketing materials. 60% reduction dalam time-to-answer untuk sales team questions."
      },
      buildingBrain: {
        name: "AntiGravity (Builder - Execution Hub)",
        role: "Automated asset creation & campaign orchestration",
        responsibilities: [
          "Dynamic ad creative generation based on performance data",
          "Campaign script automation untuk multi-platform deployment",
          "Landing page A/B test variant creation",
          "Email copy generation dengan personalization tokens",
          "Performance report synthesis untuk stakeholder updates"
        ],
        implementation: "MCP protocol integration dengan Meta API, Google Ads, n8n. Agentic workflow untuk iterative campaign optimization. Real-time asset versioning.",
        impact: "From 2 weeks creative development → 2 days. 5x more A/B variants tested. 40% improvement dalam creative engagement metrics."
      },
      orchestration: "NotebookLM (Reading) ↔ AntiGravity (Building) ↔ Meta/Google Ads APIs ↔ BigQuery Analytics ↔ n8n Workflows. Bi-directional feedback loop: Performance insights → Strategy refinement → Asset regeneration."
    },

    businessLogic: {
      dataFlows: [
        {
          name: "Customer Journey Mapping",
          flow: "Awareness (Phase 1) → Consideration (Phase 2) → Decision (Phase 3) → Advocacy (Loyalty)",
          dataPoints: "Campaign exposure → Page views → Add-to-cart → Purchase → Review & repeat"
        },
        {
          name: "Revenue Optimization",
          flow: "Audience segmentation → Bid optimization → Creative rotation → Conversion rate lift",
          dataPoints: "CTR monitoring → ROAS tracking → AOV trends → LTV prediction"
        },
        {
          name: "Risk Mitigation",
          flow: "QA validation → Compliance check → Performance monitoring → Automated alerts",
          dataPoints: "Ad approval status → Brand safety scores → Anomaly detection → Policy violations"
        }
      ],
      qaValidation: "Setiap campaign asset melalui rigorous QA: Messaging clarity check → Sanad compliance validation → Meta policy adherence → Performance baseline expectations. Automated testing untuk landing page load speed, mobile responsiveness, conversion tracking accuracy."
    },

    metrics: {
      marketing: [
        { metric: "Marketing ROI", target: "3.2x", achievement: "Track across all 3 phases", benchmark: "Industry avg: 2.5x" },
        { metric: "Closing Rate", target: "> 30%", achievement: "Phase 2-3 focus", benchmark: "Industry avg: 15-20%" },
        { metric: "Manual Task Automation", target: "80%", achievement: "Via n8n + AI agents", benchmark: "Current: 20%" },
        { metric: "CTR (Phase 2)", target: "> 1.0%", achievement: "Conversion-optimized creatives", benchmark: "E-commerce avg: 0.8%" }
      ],
      operational: [
        { metric: "Campaign Launch Time", target: "48 hours", achievement: "AntiGravity automation", benchmark: "Current: 2 weeks" },
        { metric: "Creative Variants", target: "50+ per phase", achievement: "AI-generated + human curated", benchmark: "Current: 5-8" },
        { metric: "Decision Making Speed", target: "Real-time", achievement: "NotebookLM instant retrieval", benchmark: "Current: Manual 2-3 days" },
        { metric: "Attribution Accuracy", target: "95%", achievement: "Multi-touch attribution modeling", benchmark: "Current: Last-click only" }
      ]
    },

    technicalStack: {
      dataCollection: ["Meta Conversion API", "Google Analytics 4", "Facebook Pixel", "Custom event tracking"],
      analysis: ["BigQuery ML", "Python ML pipelines", "Real-time dashboards (Data Studio)"],
      intelligence: ["NotebookLM (Knowledge synthesis)", "OpenAI GPT-4 (Copy generation)", "Claude API (Strategy analysis)"],
      execution: ["AntiGravity (Creative automation)", "n8n (Workflow orchestration)", "Meta Graph API", "Google Ads API"],
      monitoring: ["Cloud Monitoring", "Custom alerting", "Performance dashboards"]
    }
  };

  const tabs = [
    { id: 'roadmap', label: 'Campaign Roadmap', icon: <Target size={18} /> },
    { id: 'architecture', label: 'AI Architecture', icon: <Brain size={18} /> },
    { id: 'metrics', label: 'Success Metrics', icon: <BarChart3 size={18} /> },
    { id: 'intelligence', label: 'Business Intelligence', icon: <BookOpen size={18} /> }
  ];

  const phaseButtons = [
    { id: 'phase1', label: 'Fase 1: Munggahan', icon: '📢' },
    { id: 'phase2', label: 'Fase 2: Penetrasi', icon: '🚀' },
    { id: 'phase3', label: 'Fase 3: Peak', icon: '👑' }
  ];

  return (
    <section id="case-study-madu-muria" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]" />
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
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-600/30">
            <p className="text-yellow-600 text-sm font-semibold">Premium Campaign Architecture</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Madu Muria <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Strategic Campaign</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-6">
            {caseStudy.subtitle}
          </p>
          <p className="text-amber-300 text-base max-w-2xl mx-auto italic">
            {caseStudy.tagline}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 shadow-lg shadow-yellow-500/30'
                  : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-yellow-600/50'
              }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'roadmap' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Phase Switcher */}
              <div className="flex justify-center gap-3 flex-wrap mb-8">
                {phaseButtons.map((btn) => (
                  <motion.button
                    key={btn.id}
                    onClick={() => setActivePhase(btn.id as any)}
                    whileHover={{ scale: 1.02 }}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                      activePhase === btn.id
                        ? 'bg-yellow-500/20 border-2 border-yellow-500 text-yellow-300'
                        : 'bg-slate-800/40 border border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    <span>{btn.icon}</span>
                    {btn.label}
                  </motion.button>
                ))}
              </div>

              {/* Phase Content */}
              <AnimatePresence mode="wait">
                {activePhase === 'phase1' && (
                  <motion.div
                    key="phase1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {renderPhaseContent(caseStudy.phases.phase1)}
                  </motion.div>
                )}
                {activePhase === 'phase2' && (
                  <motion.div
                    key="phase2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {renderPhaseContent(caseStudy.phases.phase2)}
                  </motion.div>
                )}
                {activePhase === 'phase3' && (
                  <motion.div
                    key="phase3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {renderPhaseContent(caseStudy.phases.phase3)}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Reader Brain */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-yellow-600/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-blue-900/40 border border-blue-700/50">
                    <BookOpen className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">{caseStudy.aiArchitecture.readingBrain.name}</h4>
                    <p className="text-slate-300 mb-4">{caseStudy.aiArchitecture.readingBrain.role}</p>
                    <div className="space-y-2 mb-4">
                      {caseStudy.aiArchitecture.readingBrain.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-700/30">
                      <p className="text-sm text-slate-300 mb-3"><span className="font-semibold text-blue-300">Implementation: </span>{caseStudy.aiArchitecture.readingBrain.implementation}</p>
                      <p className="text-sm text-blue-300 font-semibold">📊 Impact: {caseStudy.aiArchitecture.readingBrain.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Builder Brain */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-amber-600/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-amber-900/40 border border-amber-700/50">
                    <Settings className="text-amber-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">{caseStudy.aiArchitecture.buildingBrain.name}</h4>
                    <p className="text-slate-300 mb-4">{caseStudy.aiArchitecture.buildingBrain.role}</p>
                    <div className="space-y-2 mb-4">
                      {caseStudy.aiArchitecture.buildingBrain.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Zap size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-700/30">
                      <p className="text-sm text-slate-300 mb-3"><span className="font-semibold text-amber-300">Implementation: </span>{caseStudy.aiArchitecture.buildingBrain.implementation}</p>
                      <p className="text-sm text-amber-300 font-semibold">⚡ Impact: {caseStudy.aiArchitecture.buildingBrain.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Orchestration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-r from-blue-900/30 to-amber-900/30 border border-yellow-600/30"
              >
                <h4 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                  <Brain size={20} />
                  System Orchestration & Feedback Loop
                </h4>
                <p className="text-slate-300 leading-relaxed font-mono text-sm">
                  {caseStudy.aiArchitecture.orchestration}
                </p>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Marketing Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="text-yellow-400" />
                  Marketing Performance Targets
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.metrics.marketing.map((m, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-5 rounded-lg bg-slate-900/50 border border-yellow-600/30 hover:border-yellow-500/60 transition-colors"
                    >
                      <div className="text-yellow-400 font-bold text-2xl mb-2">{m.target}</div>
                      <div className="text-white font-semibold mb-2">{m.metric}</div>
                      <div className="text-sm text-slate-400 mb-2">{m.achievement}</div>
                      <div className="text-xs text-slate-500 border-t border-slate-700 pt-2">{m.benchmark}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Operational Metrics */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="text-amber-400" />
                  Operational Efficiency Targets
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.metrics.operational.map((m, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-5 rounded-lg bg-slate-900/50 border border-amber-600/30 hover:border-amber-500/60 transition-colors"
                    >
                      <div className="text-amber-400 font-bold text-2xl mb-2">{m.target}</div>
                      <div className="text-white font-semibold mb-2">{m.metric}</div>
                      <div className="text-sm text-slate-400 mb-2">{m.achievement}</div>
                      <div className="text-xs text-slate-500 border-t border-slate-700 pt-2">{m.benchmark}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'intelligence' && (
            <motion.div
              key="intelligence"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Brand Identity JSON */}
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Brand Identity & Positioning</h3>
                <pre className="bg-slate-800/50 p-4 rounded-lg overflow-x-auto text-xs text-green-400 font-mono">
{JSON.stringify(caseStudy.brandIdentity, null, 2)}
                </pre>
              </div>

              {/* Data Flows */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Business Logic Data Flows</h3>
                <div className="space-y-4">
                  {caseStudy.businessLogic.dataFlows.map((flow, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-5 rounded-lg bg-slate-900/50 border border-slate-800"
                    >
                      <h4 className="text-yellow-400 font-bold mb-2">{flow.name}</h4>
                      <p className="text-slate-300 text-sm mb-2"><span className="font-semibold">Flow: </span>{flow.flow}</p>
                      <p className="text-slate-400 text-sm"><span className="font-semibold">Data Points: </span>{flow.dataPoints}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* QA Validation */}
              <div className="p-6 rounded-xl bg-slate-900/50 border border-amber-600/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="text-amber-400" size={20} />
                  QA Validation Framework (The Cognitive QA Architect)
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {caseStudy.businessLogic.qaValidation}
                </p>
              </div>

              {/* Technical Stack */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Technical Stack & Tools</h3>
                {Object.entries(caseStudy.technicalStack).map(([category, tools], idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 rounded-lg bg-slate-900/50 border border-slate-800"
                  >
                    <h4 className="text-cyan-400 font-bold mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, tidx) => (
                        <span key={tidx} className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
                          {tool}
                        </span>
                      ))}
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

// Helper Component to Render Phase Content
function renderPhaseContent(phase: any) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg bg-slate-900/50 border border-slate-800">
          <h4 className="text-lg font-bold text-white mb-3">📋 Duration & Objective</h4>
          <p className="text-slate-300 text-sm mb-4"><span className="font-semibold">Periode:</span> {phase.duration}</p>
          <p className="text-slate-300 text-sm"><span className="font-semibold">Tujuan:</span> {phase.objective}</p>
        </div>
        <div className="p-6 rounded-lg bg-slate-900/50 border border-yellow-600/30">
          <h4 className="text-lg font-bold text-yellow-300 mb-3">💡 Messaging Strategy</h4>
          <p className="text-slate-300 text-sm">{phase.messaging}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white">🎯 Tactical Execution</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800">
            <h5 className="text-cyan-400 font-bold mb-3 flex items-center gap-2"><Target size={16} /> Campaign Tactics</h5>
            <ul className="space-y-2">
              {phase.tactics.map((tactic: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
                  {tactic}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800">
            <h5 className="text-amber-400 font-bold mb-3 flex items-center gap-2"><Zap size={16} /> AI Automation</h5>
            <ul className="space-y-2">
              {phase.aiAutomation.map((automation: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <Zap size={14} className="text-amber-400 mt-1 flex-shrink-0" />
                  {automation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-yellow-600/30">
        <h4 className="text-lg font-bold text-yellow-300 mb-4">📊 Target Metrics</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(phase.targetMetrics).map(([key, value], idx) => (
            <div key={idx} className="text-center">
              <div className="text-yellow-400 font-bold text-lg mb-1">{value}</div>
              <div className="text-slate-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
