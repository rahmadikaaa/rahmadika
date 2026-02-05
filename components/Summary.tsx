import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle2, Database } from 'lucide-react';

export const Summary: React.FC = () => {
  const highlights = [
    {
      icon: <CheckCircle2 className="text-cyber-primary" />,
      text: "Expert in manual & automated testing for complex CRM/ERP systems."
    },
    {
      icon: <Database className="text-cyber-primary" />,
      text: "Proficient in SQL validation and data integrity assurance."
    },
    {
      icon: <BrainCircuit className="text-purple-400" />,
      text: "AI Integration: Leveraging LLMs to automatically generate comprehensive edge-case scenarios and synthetic test data."
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
                I am a dedicated Quality Assurance Professional with a specialized focus on architectural integrity and automated efficiency. My approach goes beyond simple bug hunting; I design robust testing strategies that align with business logic, specifically within CRM and ERP environments.
              </p>
              <p>
                As technology evolves, so do my methods. I integrate Artificial Intelligence into the QA lifecycle, utilizing Generative AI to predict potential failure points that traditional methods often miss. This hybrid approach ensures software is not just functional, but resilient.
              </p>
            </div>
            
            <div className="mt-8 grid gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <span className="text-slate-300">{item.text}</span>
                </div>
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
            <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto font-mono text-xs text-slate-500">skills.json</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-purple-400">"core_competencies" <span className="text-slate-400">:</span> <span className="text-yellow-300"> [</span></div>
                <div className="pl-4 text-green-400">"End-to-End Testing",</div>
                <div className="pl-4 text-green-400">"SQL Data Validation",</div>
                <div className="pl-4 text-green-400">"API Automation",</div>
                <div className="pl-4 text-green-400">"Prompt Engineering for QA"</div>
                <div className="text-yellow-300">],</div>
                <div className="text-purple-400">"tools" <span className="text-slate-400">:</span> <span className="text-yellow-300"> [</span></div>
                <div className="pl-4 text-green-400">"Postman", "Selenium", "JIRA", "Google Cloud Platform"</div>
                <div className="text-yellow-300">]</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};