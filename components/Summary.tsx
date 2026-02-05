import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle2, Database, Cloud, Code2, Zap } from 'lucide-react';

export const Summary: React.FC = () => {
  const skills = {
    professional_roles: [
      "The Cognitive QA Architect",
      "Automation & AI System Architect",
      "DevOps Specialist"
    ],
    core_competencies: [
      "End-to-End & API Automation",
      "SQL Backend Data Validation",
      "Prompt Engineering for App Dev",
      "Full-Funnel Digital Marketing",
      "RBAC & Security Analysis"
    ],
    technical_stack: {
      cloud_devops: ["GCP (VM, Cloud Run)", "Linux Admin", "Firebase"],
      qa_tools: ["Postman", "Selenium", "JIRA", "Katalon Studio"],
      ai_automation: ["n8n", "LLM Integration", "FFmpeg Automation"],
      development: ["Laravel (API)", "React & Tailwind", "Meta Ads Manager"]
    }
  };

  const highlights = [
    {
      icon: <CheckCircle2 className="text-cyber-primary" />,
      text: "Expert in end-to-end testing & API automation for enterprise CRM/ERP systems."
    },
    {
      icon: <Cloud className="text-cyan-400" />,
      text: "Orchestrate GCP infrastructure (VM, Cloud Run) with cost optimization expertise."
    },
    {
      icon: <BrainCircuit className="text-purple-400" />,
      text: "Leverage LLMs for prompt-based development—accelerating architecture design & API integration."
    },
    {
      icon: <Database className="text-cyber-primary" />,
      text: "SQL backend validation & synthetic test data generation via AI-driven automation."
    },
    {
      icon: <Zap className="text-yellow-400" />,
      text: "Full-funnel digital marketing strategy via Meta Ads with measurable ROI optimization."
    },
    {
      icon: <Code2 className="text-green-400" />,
      text: "Build automation workflows (n8n, FFmpeg) for large-scale content processing."
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
                Sebagai <span className="text-cyan-400 font-semibold">Professional Quality Assurance Architect</span>, saya spesialis dalam pengujian menyeluruh—dari end-to-end testing hingga API automation—untuk sistem enterprise kompleks (CRM/ERP) dengan fokus pada SQL backend validation dan data integrity assurance.
              </p>
              <p>
                Sebagai <span className="text-purple-400 font-semibold">Founder Solusi MasaDepan</span>, saya menghadirkan transformasi digital komprehensif bagi UMKM melalui orchestration infrastruktur GCP (Virtual Machines, Cloud Run, Firebase) dengan optimasi cost-efficiency, serta akselerasi development via Prompt-Based Development menggunakan LLM canggih untuk menyusun arsitektur sistem & integrasi API secara presisi.
              </p>
              <p>
                Keahlian saya mencakup: automation workflows (n8n, FFmpeg) untuk large-scale content processing, full-funnel digital marketing strategy via Meta Ads dengan pengukuran ROI terukur, serta RBAC & security analysis untuk memastikan sistem yang tangguh dan siap masa depan.
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
                
                {/* Cloud & DevOps */}
                <div className="pl-8 text-purple-400">"cloud_devops"<span className="text-slate-400">: [</span></div>
                {skills.technical_stack.cloud_devops.map((tech, idx) => (
                  <div key={idx} className="pl-12 text-green-400">
                    "{tech}"{idx < skills.technical_stack.cloud_devops.length - 1 ? ',' : ''}
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