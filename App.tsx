import React from 'react';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { TechnicalCredentials } from './components/TechnicalCredentials';
import { CaseStudyQA } from './components/CaseStudyQA';
import { CaseStudyAIArchitect } from './components/CaseStudyAIArchitect';
import { CaseStudyMaduMuria } from './components/CaseStudyMaduMuria';
import { FinalMissionControl } from './components/FinalMissionControl';
import { ProjectCRM } from './components/projects/ProjectCRM';
import { ProjectSQL } from './components/projects/ProjectSQL';
import { ProjectRBAC } from './components/projects/ProjectRBAC';
import { Footer } from './components/Footer';
import { SectionHeading } from './components/ui/SectionHeading';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="bg-cyber-darker text-slate-200 min-h-screen font-sans selection:bg-cyber-primary selection:text-cyber-darker">
      
      <main>
        <Hero />
        
        <Summary />
        
        <TechnicalCredentials />
        
        <CaseStudyAIArchitect />
        
        <CaseStudyMaduMuria />
        
        <section id="projects" className="py-24 bg-cyber-dark relative">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading 
                    title="Mission_Logs" 
                    subtitle="Selected technical case studies demonstrating QA architecture and automation capabilities." 
                />

                <div className="space-y-24 max-w-5xl mx-auto">
                    {/* Project 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProjectCRM />
                    </motion.div>

                    {/* Project 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProjectSQL />
                    </motion.div>

                     {/* Project 3 */}
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <ProjectRBAC />
                    </motion.div>
                </div>
            </div>
        </section>

        <CaseStudyQA />

        <FinalMissionControl />
      </main>

      <Footer />
    </div>
  );
};

export default App;