import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Brain, Zap, BarChart3, BookOpen, Settings, Target, CheckCircle2, AlertCircle } from 'lucide-react';

export const CaseStudyTemplate: React.FC = () => {
    const [activePhase, setActivePhase] = useState<'phase1' | 'phase2' | 'phase3'>('phase1');
    const [activeTab, setActiveTab] = useState<'roadmap' | 'architecture' | 'metrics' | 'intelligence'>('roadmap');

    const caseStudy = {
        title: "New Strategic Campaign: [Project Name]",
        subtitle: "[Project Subtitle - e.g. Data-Driven Marketing Excellence]",
        tagline: "[Project Tagline - e.g. Transforming Business with AI]",

        brandIdentity: {
            legacy: "[Previous Brand State]",
            premium: "[New Brand State]",
            narrative: "[Core Narrative]",
            positioning: "[Market Positioning]",
            targetAudience: "[Target Audience]"
        },

        phases: {
            phase1: {
                name: "Fase 1: [Phase Name]",
                duration: "[Month 1-2]",
                objective: "[Primary Objective]",
                messaging: "[Core Message]",
                tactics: [
                    "[Tactic 1]",
                    "[Tactic 2]",
                    "[Tactic 3]",
                    "[Tactic 4]",
                    "[Tactic 5]"
                ],
                aiAutomation: [
                    "[Automation 1]",
                    "[Automation 2]",
                    "[Automation 3]",
                    "[Automation 4]"
                ],
                targetMetrics: {
                    reach: "[1M+ impressions]",
                    ctr: "[0.7-0.9%]",
                    cpc: "[$0.15-0.25]",
                    conversionRate: "[12-15%]"
                }
            },
            phase2: {
                name: "Fase 2: [Phase Name]",
                duration: "[Month 2-3]",
                objective: "[Scaling Objective]",
                messaging: "[Scaling Message]",
                tactics: [
                    "[Scaling Tactic 1]",
                    "[Scaling Tactic 2]",
                    "[Scaling Tactic 3]",
                    "[Scaling Tactic 4]",
                    "[Scaling Tactic 5]"
                ],
                aiAutomation: [
                    "[Scaling Automation 1]",
                    "[Scaling Automation 2]",
                    "[Scaling Automation 3]",
                    "[Scaling Automation 4]",
                    "[Scaling Automation 5]"
                ],
                targetMetrics: {
                    reach: "[3M+ impressions]",
                    ctr: "[> 1.0%]",
                    cpc: "[$0.10-0.18]",
                    conversionRate: "[25-30%]",
                    roas: "[3.0x - 4.5x]"
                }
            },
            phase3: {
                name: "Fase 3: [Phase Name]",
                duration: "[Month 3-4]",
                objective: "[Optimization Objective]",
                messaging: "[Optimization Message]",
                tactics: [
                    "[Optimization Tactic 1]",
                    "[Optimization Tactic 2]",
                    "[Optimization Tactic 3]",
                    "[Optimization Tactic 4]",
                    "[Optimization Tactic 5]"
                ],
                aiAutomation: [
                    "[Optimization Automation 1]",
                    "[Optimization Automation 2]",
                    "[Optimization Automation 3]",
                    "[Optimization Automation 4]",
                    "[Optimization Automation 5]"
                ],
                targetMetrics: {
                    reach: "[2M+ impressions]",
                    ctr: "[0.8-1.2%]",
                    avgOrderValue: "[+40% vs phase 2]",
                    conversionRate: "[28-35%]",
                    roas: "[4.0x - 5.5x]"
                }
            }
        },

        aiArchitecture: {
            readingBrain: {
                name: "[AI Component Name - e.g. NotebookLM]",
                role: "[Role - e.g. Strategy Knowledge Base]",
                responsibilities: [
                    "[Responsibility 1]",
                    "[Responsibility 2]",
                    "[Responsibility 3]",
                    "[Responsibility 4]",
                    "[Responsibility 5]"
                ],
                implementation: "[Implementation Details]",
                impact: "[Measurable Impact]"
            },
            buildingBrain: {
                name: "[AI Component Name - e.g. AntiGravity]",
                role: "[Role - e.g. Execution Hub]",
                responsibilities: [
                    "[Responsibility 1]",
                    "[Responsibility 2]",
                    "[Responsibility 3]",
                    "[Responsibility 4]",
                    "[Responsibility 5]"
                ],
                implementation: "[Implementation Details]",
                impact: "[Measurable Impact]"
            },
            orchestration: "[Start] ↔ [Middle] ↔ [End]. Bi-directional feedback loop: [Flow Description]."
        },

        businessLogic: {
            dataFlows: [
                {
                    name: "[Flow Name 1]",
                    flow: "[Step A] → [Step B] → [Step C]",
                    dataPoints: "[Metric A] → [Metric B] → [Metric C]"
                },
                {
                    name: "[Flow Name 2]",
                    flow: "[Step A] → [Step B] → [Step C]",
                    dataPoints: "[Metric A] → [Metric B] → [Metric C]"
                },
                {
                    name: "[Flow Name 3]",
                    flow: "[Step A] → [Step B] → [Step C]",
                    dataPoints: "[Metric A] → [Metric B] → [Metric C]"
                }
            ],
            qaValidation: "[QA Process Description]"
        },

        metrics: {
            marketing: [
                { metric: "[Metric 1]", target: "[Target 1]", achievement: "[Achievement 1]", benchmark: "[Benchmark 1]" },
                { metric: "[Metric 2]", target: "[Target 2]", achievement: "[Achievement 2]", benchmark: "[Benchmark 2]" },
                { metric: "[Metric 3]", target: "[Target 3]", achievement: "[Achievement 3]", benchmark: "[Benchmark 3]" },
                { metric: "[Metric 4]", target: "[Target 4]", achievement: "[Achievement 4]", benchmark: "[Benchmark 4]" }
            ],
            operational: [
                { metric: "[Ops Metric 1]", target: "[Target 1]", achievement: "[Achievement 1]", benchmark: "[Benchmark 1]" },
                { metric: "[Ops Metric 2]", target: "[Target 2]", achievement: "[Achievement 2]", benchmark: "[Benchmark 2]" },
                { metric: "[Ops Metric 3]", target: "[Target 3]", achievement: "[Achievement 3]", benchmark: "[Benchmark 3]" },
                { metric: "[Ops Metric 4]", target: "[Target 4]", achievement: "[Achievement 4]", benchmark: "[Benchmark 4]" }
            ]
        },

        technicalStack: {
            dataCollection: ["[Tool 1]", "[Tool 2]", "[Tool 3]"],
            analysis: ["[Tool 1]", "[Tool 2]"],
            intelligence: ["[Tool 1]", "[Tool 2]", "[Tool 3]"],
            execution: ["[Tool 1]", "[Tool 2]", "[Tool 3]"],
            monitoring: ["[Tool 1]", "[Tool 2]"]
        }
    };

    const tabs = [
        { id: 'roadmap', label: 'Campaign Roadmap', icon: <Target size={18} /> },
        { id: 'architecture', label: 'AI Architecture', icon: <Brain size={18} /> },
        { id: 'metrics', label: 'Success Metrics', icon: <BarChart3 size={18} /> },
        { id: 'intelligence', label: 'Business Intelligence', icon: <BookOpen size={18} /> }
    ];

    const phaseButtons = [
        { id: 'phase1', label: 'Fase 1: [Name]', icon: '📢' },
        { id: 'phase2', label: 'Fase 2: [Name]', icon: '🚀' },
        { id: 'phase3', label: 'Fase 3: [Name]', icon: '👑' }
    ];

    return (
        <section id="case-study-template" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
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
                    <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-600/30">
                        <p className="text-blue-400 text-sm font-semibold">New Premium Project</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        [Your Project] <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Strategic Overview</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-6">
                        {caseStudy.subtitle}
                    </p>
                    <p className="text-blue-300 text-base max-w-2xl mx-auto italic">
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
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-blue-600/50'
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
                                                ? 'bg-blue-500/20 border-2 border-blue-500 text-blue-300'
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
                                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-600/30 transition-colors"
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
                                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-600/30 transition-colors"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-purple-900/40 border border-purple-700/50">
                                        <Settings className="text-purple-400" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-2xl font-bold text-white mb-2">{caseStudy.aiArchitecture.buildingBrain.name}</h4>
                                        <p className="text-slate-300 mb-4">{caseStudy.aiArchitecture.buildingBrain.role}</p>
                                        <div className="space-y-2 mb-4">
                                            {caseStudy.aiArchitecture.buildingBrain.responsibilities.map((resp, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <Zap size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                                                    <span className="text-slate-300 text-sm">{resp}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-700/30">
                                            <p className="text-sm text-slate-300 mb-3"><span className="font-semibold text-purple-300">Implementation: </span>{caseStudy.aiArchitecture.buildingBrain.implementation}</p>
                                            <p className="text-sm text-purple-300 font-semibold">⚡ Impact: {caseStudy.aiArchitecture.buildingBrain.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Orchestration */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-600/30"
                            >
                                <h4 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
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
                                    <TrendingUp className="text-blue-400" />
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
                                            className="p-5 rounded-lg bg-slate-900/50 border border-blue-600/30 hover:border-blue-500/60 transition-colors"
                                        >
                                            <div className="text-blue-400 font-bold text-2xl mb-2">{m.target}</div>
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
                                    <Zap className="text-purple-400" />
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
                                            className="p-5 rounded-lg bg-slate-900/50 border border-purple-600/30 hover:border-purple-500/60 transition-colors"
                                        >
                                            <div className="text-purple-400 font-bold text-2xl mb-2">{m.target}</div>
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
                                            <h4 className="text-blue-400 font-bold mb-2">{flow.name}</h4>
                                            <p className="text-slate-300 text-sm mb-2"><span className="font-semibold">Flow: </span>{flow.flow}</p>
                                            <p className="text-slate-400 text-sm"><span className="font-semibold">Data Points: </span>{flow.dataPoints}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* QA Validation */}
                            <div className="p-6 rounded-xl bg-slate-900/50 border border-blue-600/30">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <AlertCircle className="text-blue-400" size={20} />
                                    QA Validation Framework
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
                                        <h4 className="text-purple-400 font-bold mb-3 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tools.map((tool, tidx) => (
                                                <span key={tidx} className="px-3 py-1 rounded-full bg-slate-800 text-purple-300 text-xs font-mono border border-slate-700">
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
                <div className="p-6 rounded-lg bg-slate-900/50 border border-blue-600/30">
                    <h4 className="text-lg font-bold text-blue-300 mb-3">💡 Messaging Strategy</h4>
                    <p className="text-slate-300 text-sm">{phase.messaging}</p>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">🎯 Tactical Execution</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800">
                        <h5 className="text-purple-400 font-bold mb-3 flex items-center gap-2"><Target size={16} /> Campaign Tactics</h5>
                        <ul className="space-y-2">
                            {phase.tactics.map((tactic: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                    <CheckCircle2 size={14} className="text-purple-400 mt-1 flex-shrink-0" />
                                    {tactic}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800">
                        <h5 className="text-blue-400 font-bold mb-3 flex items-center gap-2"><Zap size={16} /> AI Automation</h5>
                        <ul className="space-y-2">
                            {phase.aiAutomation.map((automation: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                    <Zap size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                                    {automation}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-600/30">
                <h4 className="text-lg font-bold text-blue-300 mb-4">📊 Target Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(phase.targetMetrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-blue-400 font-bold text-lg mb-1">{value as string}</div>
                            <div className="text-slate-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
