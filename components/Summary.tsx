import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle2, Database, Cloud, Code2, Zap } from 'lucide-react';

export const Summary: React.FC = () => {
  const skills = {
    professional_roles: [
      "Technical Quality Strategist",
      "Automation & AI System Architect",
      "DevOps Specialist"
    ],
    core_competencies: [
      "SQL Backend Validation & Data Integrity",
      "System Analysis (Flowchart, DFD, ERD)",
      "End-to-End & API Automation Testing",
      "Prompt Engineering for App Development",
      "Full-Funnel Digital Marketing Strategy",
      "RBAC & Security Analysis"
    ],
    technical_stack: {
      qa_methodology: ["Manual Testing", "Functional Testing", "API Automation", "Database Testing"],
      system_design: ["Flowchart", "DFD (Data Flow Diagram)", "ERD (Entity Relationship Diagram)"],
      qa_tools: ["Postman", "Selenium", "JIRA", "Katalon Studio", "SQL Query Analyzer"],
      cloud_devops: ["GCP (VM, Cloud Run)", "Firebase", "Linux Admin"],
      ai_automation: ["n8n", "LLM Integration", "Prompt Engineering"],
      development: ["Laravel (API)", "React & Tailwind", "Meta Ads Manager"]
    }
  };

  const highlights = [
    {
      icon: <CheckCircle2 className="text-cyber-primary" />,
      text: "SQL Backend Validation & Data Integrity: Expert dalam merancang test cases untuk validasi data, query optimization, dan database integrity assurance pada sistem enterprise."
    },
    {
      icon: <Database className="text-green-400" />,
      text: "System Analysis Documentation: Profisien dalam membuat Flowchart, DFD (Data Flow Diagram), dan ERD (Entity Relationship Diagram) untuk analisis alur kerja dan integritas sistem."
    },
    {
      icon: <CheckCircle2 className="text-cyan-400" />,
      text: "End-to-End & API Automation: Expert dalam otomasi testing (Selenium, Postman) untuk CRM/ERP systems dengan focus pada functional testing scenarios."
    },
    {
      icon: <Cloud className="text-cyan-400" />,
      text: "GCP Infrastructure Orchestration: Mengelola VM, Cloud Run, dan Firebase untuk deployment scalable dengan cost optimization expertise."
    },
    {
      icon: <BrainCircuit className="text-purple-400" />,
      text: "Prompt-Based Development & LLM Integration: Akselerasi app development melalui AI-driven architecture design dan API integration strategy."
    },
    {
      icon: <Zap className="text-yellow-400" />,
      text: "Data-Driven Digital Marketing: Optimalkan strategi full-funnel Meta Ads campaigns dengan measurable ROI dan automation workflows via n8n."
    }
  ];

  return (
    <section id="summary" className="py-20 bg-cyber-darker relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-cyber-primary">The Architect</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
              <p>
                Saya adalah seorang <span className="text-cyan-400 font-semibold">Technical Quality Strategist</span> dengan pengalaman komprehensif dalam pengujian manual dan automasi untuk sistem enterprise kompleks (CRM/ERP). Memiliki spesialisasi dalam merancang skenario pengujian fungsional, validasi SQL backend, serta analisis alur kerja sistem melalui <span className="text-green-400 font-mono text-sm">Flowchart</span>, <span className="text-green-400 font-mono text-sm">DFD</span>, dan <span className="text-green-400 font-mono text-sm">ERD</span> untuk menjamin integritas data dan kualitas produk.
              </p>
              <p>
                Sebagai <span className="text-purple-400 font-semibold">Pendiri Solusi MasaDepan</span>, saya menghadirkan transformasi digital bagi UMKM melalui kapasitas sebagai Automation Architect dan spesialis DevOps. Saya mempunyai kemampuan untuk mengorkestrasi infrastruktur pada Google Cloud Platform (GCP) serta mempercepat pengembangan aplikasi melalui metode Prompt-Based Development. Dengan mengintegrasikan AI ke dalam alur kerja, saya mampu membangun sistem pemrosesan data otomatis melalui n8n serta mengoptimalkan strategi Digital Marketing melalui Meta Ads untuk memastikan pertumbuhan bisnis yang berkelanjutan dan berbasis data.
              </p>
            </div>
            
            <div className="mt-8 grid gap-3">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary to-cyber-secondary rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl overflow-hidden max-h-[600px] overflow-y-auto">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4 sticky top-0 bg-slate-900">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto font-mono text-xs text-slate-500">skills.json</span>
              </div>
              
              <div className="font-mono text-sm space-y-1">
                {/* Professional Roles */}
                <div className="text-slate-400">{'{' /* opening brace */}</div>
                <div className="pl-4 text-purple-400">"professional_roles"<span className="text-slate-400">: [</span></div>
                {skills.professional_roles.map((role, idx) => (
                  <div key={idx} className="pl-8 text-green-400">
                    "{role}"{idx < skills.professional_roles.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-4 text-slate-400">],</div>

                {/* Core Competencies */}
                <div className="pl-4 text-purple-400">"core_competencies"<span className="text-slate-400">: [</span></div>
                {skills.core_competencies.map((comp, idx) => (
                  <div key={idx} className="pl-8 text-green-400">
                    "{comp}"{idx < skills.core_competencies.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-4 text-slate-400">],</div>

                {/* Technical Stack */}
                <div className="pl-4 text-purple-400">"technical_stack"<span className="text-slate-400">: {'{' /* opening brace */}</span></div>
                
                {/* QA Methodology */}
                <div className="pl-8 text-purple-400">"qa_methodology"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.qa_methodology.map((method, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{method}"{idx < skills.technical_stack.qa_methodology.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-8 text-slate-400">],</div>

                {/* System Design */}
                <div className="pl-8 text-purple-400">"system_design"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.system_design.map((design, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{design}"{idx < skills.technical_stack.system_design.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-8 text-slate-400">],</div>

                {/* QA Tools */}
                <div className="pl-8 text-purple-400">"qa_tools"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.qa_tools.map((tool, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{tool}"{idx < skills.technical_stack.qa_tools.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-8 text-slate-400">],</div>

                {/* Cloud & DevOps */}
                <div className="pl-8 text-purple-400">"cloud_devops"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.cloud_devops.map((tech, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{tech}"{idx < skills.technical_stack.cloud_devops.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-8 text-slate-400">],</div>

                {/* AI Automation */}
                <div className="pl-8 text-purple-400">"ai_automation"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.ai_automation.map((ai, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{ai}"{idx < skills.technical_stack.ai_automation.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-8 text-slate-400">],</div>

                {/* Development */}
                <div className="pl-8 text-purple-400">"development"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.development.map((dev, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{dev}"{idx < skills.technical_stack.development.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div className="pl-8 text-slate-400">]</div>

                <div className="pl-4 text-slate-400">{'}' /* closing brace */}</div>
                <div className="text-slate-400">{'}' /* closing brace */}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};