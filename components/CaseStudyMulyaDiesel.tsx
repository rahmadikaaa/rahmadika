import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Brain, Zap, BarChart3, BookOpen, Settings, Target, CheckCircle2, AlertCircle, Truck, Wrench, HardHat } from 'lucide-react';

export const CaseStudyMulyaDiesel: React.FC = () => {
    const [activePhase, setActivePhase] = useState<'phase1' | 'phase2' | 'phase3'>('phase1');
    const [activeTab, setActiveTab] = useState<'roadmap' | 'architecture' | 'metrics' | 'intelligence'>('roadmap');

    const caseStudy = {
        title: "Industrial B2B Growth Engine",
        subtitle: "Hybrid Acquisition Strategy: Combining SEO Recovery with Precision Meta Ads.",
        badge: "Infrastructure & Paid Scale",

        phases: {
            phase1: {
                name: "Fase 1: Digital Foundation",
                duration: "Month 1",
                objective: "Establish professional digital presence for heavy equipment inventory.",
                messaging: "Reliable Heavy Equipment Solutions",
                tactics: [
                    "Built fast, mobile-responsive catalog using Next.js",
                    "Showcased unit availability (3 Ton - 20 Ton)",
                    "implemented schema markup for 'Forklift Rental' and 'Genset'",
                    "Optimized page load speed for industrial field connections",
                    "Structuring content for B2B procurement decision makers"
                ],
                aiAutomation: [
                    "Automated inventory sync with Google Sheets",
                    "AI-assisted technical specification writing",
                    "Image optimization for site performance"
                ],
                targetMetrics: {
                    uptime: "99.9% uptime",
                    performance: "95+ Mobile Score",
                    indexing: "100% Core Pages Indexed"
                }
            },
            phase2: {
                name: "Fase 2: Algorithmic Recovery",
                duration: "Month 2",
                objective: "Restore organic local visibility and trust.",
                messaging: "Trusted Local Partner for Industrial Needs",
                tactics: [
                    "Resolved Google Business Profile verification locks",
                    "Restored local map visibility for key industrial zones",
                    "Standardized NAP (Name, Address, Phone) data",
                    "Generated review generation campaign for trust building",
                    "Local citation building in industrial directories"
                ],
                aiAutomation: [
                    "Review sentiment analysis",
                    "Automated GMB post scheduling",
                    "Local rank tracking alerts"
                ],
                targetMetrics: {
                    mapViews: "+300% Month-over-Month",
                    calls: "+50% Direct Calls",
                    directions: "+40% Direction Requests"
                }
            },
            phase3: {
                name: "Fase 3: Paid Acceleration",
                duration: "Month 3+",
                objective: "Capture high-intent B2B leads via precision targeting.",
                messaging: "Urgent Rental Needs? Ready Units Available Now.",
                tactics: [
                    "Launched targeted Meta Ads campaigns",
                    "Focus on 'Urgent Rental Needs' messaging",
                    "Lookalike audiences based on verified B2B contacts",
                    "Retargeting catalog visitors with specific unit offers",
                    "WhatsApp Direct integration for instant B2B inquiry"
                ],
                aiAutomation: [
                    "Dynamic ad creative testing",
                    "Bid strategy optimization for Lead Quality",
                    "Automated lead routing to sales WhatsApp"
                ],
                targetMetrics: {
                    cac: "IDR 6,647 per Conversation",
                    leads: "15+ Qualified Inquiries/Week",
                    roas: "High-Value Contract Conversion"
                }
            }
        },

        architecture: {
            coreStack: ["Next.js", "Meta Ads Manager", "Google Maps API", "CRO Strategy"],
            flow: "Local SEO Signals → Google Maps Ranking → Meta Ads Retargeting → WhatsApp Lead Conversion",
            details: "The architecture prioritizes trust signals first (Google Maps/Organic) to validate the business legitimacy, then uses Meta Ads to intercept urgent demand. All traffic is funneled to WhatsApp for immediate B2B negotiation."
        },

        metrics: {
            keyPerformance: [
                { metric: "Cost Per Msg Conversation", value: "IDR 6,647", desc: "Extremely Low CAC for B2B", icon: <TrendingUp size={20} /> },
                { metric: "Qualified B2B Leads", value: "15+", desc: "Inquiries generated per campaign burst", icon: <Target size={20} /> },
                { metric: "Targeted Impressions", value: "8,500+", desc: "In Niche Market Segments", icon: <BarChart3 size={20} /> },
                { metric: "High-Intent Engagement", value: "Top Tier", desc: "Link Clicks & Organic Search Recovery", icon: <Zap size={20} /> }
            ]
        },

        intelligence: {
            insight: "By combining organic recovery of the Google Business Profile with precise Meta Ads targeting, we lowered the B2B Customer Acquisition Cost significantly while maintaining lead quality. Trust verification via Google Maps proved to be the critical conversion catalyst for cold traffic from ads.",
            architectRole: "The 'Architect' strategy here was not just building a site, but repairing the digital trust footprint to make paid ads viable."
        }
    };

    const tabs = [
        { id: 'roadmap', label: 'The Strategy', icon: <Target size={18} /> },
        { id: 'architecture', label: 'The Tech', icon: <Wrench size={18} /> },
        { id: 'metrics', label: 'Real Performance', icon: <BarChart3 size={18} /> },
        { id: 'intelligence', label: 'Architect Insight', icon: <Brain size={18} /> }
    ];

    const phaseButtons = [
        { id: 'phase1', label: 'Digital Foundation', icon: <Truck size={16} /> },
        { id: 'phase2', label: 'Algorithmic Recovery', icon: <Wrench size={16} /> },
        { id: 'phase3', label: 'Paid Acceleration', icon: <TrendingUp size={16} /> }
    ];

    return (
        <section id="case-study-mulya-diesel" className="py-20 bg-slate-950 relative overflow-hidden font-sans">
            {/* Industrial Background Theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-700/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>
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
                        <p className="text-yellow-500 text-sm font-bold tracking-wide uppercase flex items-center gap-2">
                            <HardHat size={14} /> {caseStudy.badge}
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {caseStudy.title}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-6">
                        {caseStudy.subtitle}
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
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20'
                                    : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-yellow-600/50 hover:text-yellow-500'
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
                                        className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${activePhase === btn.id
                                                ? 'bg-amber-500/20 border-2 border-amber-500 text-amber-500'
                                                : 'bg-slate-900/50 border border-slate-800 text-slate-500 hover:border-slate-600'
                                            }`}
                                    >
                                        <span>{btn.icon}</span>
                                        {btn.label}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Phase Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePhase}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative overflow-hidden group hover:border-yellow-600/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Truck size={100} />
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                                <Target className="text-yellow-500" size={20} /> Objective
                                            </h4>
                                            <p className="text-slate-300 text-base mb-6 leading-relaxed">
                                                {caseStudy.phases[activePhase].objective}
                                            </p>

                                            <div className="space-y-3">
                                                <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Key Tactics</h5>
                                                {caseStudy.phases[activePhase].tactics.map((tactic, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <CheckCircle2 size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                                                        <span className="text-slate-300 text-sm">{tactic}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-900/50">
                                                <h4 className="text-lg font-bold text-amber-500 mb-2">Messaging Focus</h4>
                                                <p className="text-xl text-white font-medium italic">"{caseStudy.phases[activePhase].messaging}"</p>
                                            </div>

                                            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                    <Zap size={16} className="text-yellow-500" /> AI & Automation
                                                </h4>
                                                <div className="space-y-2">
                                                    {caseStudy.phases[activePhase].aiAutomation.map((auto, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg">
                                                            <Zap size={12} className="text-yellow-500" /> {auto}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {Object.entries(caseStudy.phases[activePhase].targetMetrics).map(([key, value], idx) => (
                                                    <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                                                        <div className="text-yellow-500 font-bold text-lg">{value as React.ReactNode}</div>
                                                        <div className="text-slate-500 text-xs uppercase mt-1">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    )}

                    {activeTab === 'architecture' && (
                        <motion.div
                            key="architecture"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid md:grid-cols-2 gap-8"
                        >
                            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-yellow-600/30 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Settings className="text-yellow-500" /> Core Tech Stack
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {caseStudy.architecture.coreStack.map((tech, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 flex flex-col items-center justify-center text-center gap-2 hover:bg-slate-800 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500 mb-1" />
                                            <span className="text-slate-200 font-semibold">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-amber-950/20 border border-slate-800">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <TrendingUp className="text-amber-500" /> Conversion Flow
                                </h3>
                                <div className="p-6 rounded-xl bg-slate-950/50 border border-slate-800 font-mono text-sm text-yellow-500/90 leading-relaxed mb-6">
                                    {caseStudy.architecture.flow}
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    {caseStudy.architecture.details}
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'metrics' && (
                        <motion.div
                            key="metrics"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {caseStudy.metrics.keyPerformance.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-yellow-500/50 transition-all group"
                                >
                                    <div className="mb-4 p-3 rounded-xl bg-yellow-500/10 w-fit text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                                        {item.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{item.metric}</div>
                                    <div className="text-xs text-slate-500 border-t border-slate-800 pt-3">
                                        {item.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'intelligence' && (
                        <motion.div
                            key="intelligence"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950/10 to-slate-900 border border-yellow-600/30 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-5">
                                    <Brain size={200} />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 rounded-full bg-yellow-500 text-black">
                                            <Brain size={24} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">The Architect's Insight</h3>
                                    </div>

                                    <blockquote className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light italic mb-8 border-l-4 border-yellow-500 pl-6">
                                        "{caseStudy.intelligence.insight}"
                                    </blockquote>

                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <div className="h-px bg-slate-700 flex-1" />
                                        <span>Strategic Retrospective</span>
                                        <div className="h-px bg-slate-700 flex-1" />
                                    </div>

                                    <p className="text-center text-slate-400 mt-6 max-w-2xl mx-auto">
                                        {caseStudy.intelligence.architectRole}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
