import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Database, BarChart3, Shield } from 'lucide-react';

export const CaseStudyQA: React.FC = () => {
  const caseStudy = {
    title: "Enterprise CRM/ERP Testing Framework",
    company: "Multi-Industry Client",
    challenge: "Complex enterprise system dengan 200+ test scenarios dan database integrity concerns",
    solution: [
      "Designed comprehensive SQL backend validation strategy",
      "Created DFD & ERD documentation untuk system analysis",
      "Implemented end-to-end automation dengan Selenium & Postman",
      "Established functional testing framework dengan JIRA integration"
    ],
    metrics: [
      { label: "Test Coverage", value: "95%", icon: <BarChart3 className="text-cyber-primary" /> },
      { label: "Bug Detection Rate", value: "87%", icon: <CheckCircle2 className="text-green-400" /> },
      { label: "Automation Efficiency", value: "3.5x", icon: <Database className="text-cyan-400" /> },
      { label: "Data Integrity Score", value: "99.8%", icon: <Shield className="text-purple-400" /> }
    ],
    technologies: ["Selenium", "Postman", "SQL", "JIRA", "Katalon Studio"]
  };

  return (
    <section id="case-study-qa" className="py-20 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            QA Excellence <span className="text-cyber-primary">Case Study</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transformasi pengujian enterprise dengan SQL validation dan system documentation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Challenge & Solution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Challenge</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Solution Approach</h3>
                <ul className="space-y-3">
                  {caseStudy.solution.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <CheckCircle2 className="text-cyber-primary flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {caseStudy.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {caseStudy.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 font-mono text-sm hover:border-cyber-primary transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
