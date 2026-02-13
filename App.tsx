import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { TechnicalCredentials } from './components/TechnicalCredentials';
import { CaseStudyQA } from './components/CaseStudyQA';
import { CaseStudyAIArchitect } from './components/CaseStudyAIArchitect';
import { CaseStudyMaduMuria } from './components/CaseStudyMaduMuria';
import { CaseStudyMulyaDiesel } from './components/CaseStudyMulyaDiesel';
import { CaseStudyTemplate } from './components/CaseStudyTemplate';
import { FinalMissionControl } from './components/FinalMissionControl';
import { ProjectCRM } from './components/projects/ProjectCRM';
import { ProjectSQL } from './components/projects/ProjectSQL';
import { ProjectRBAC } from './components/projects/ProjectRBAC';
import { Footer } from './components/Footer';
import { SectionHeading } from './components/ui/SectionHeading';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { motion } from 'framer-motion';
import { translations } from './i18n/translations';

const App: React.FC = () => {
    const [language, setLanguage] = useState<'en' | 'id'>('id');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as 'en' | 'id' | null;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleSetLanguage = (lang: 'en' | 'id') => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        const keys = key.split('.');
        let value: any = language === 'en' ? translations.en : translations.id;
        
        for (const k of keys) {
            value = value?.[k];
            if (!value) return key;
        }
        
        return value;
    };

    return (
        <div className="bg-cyber-darker text-slate-200 min-h-screen font-sans selection:bg-cyber-primary selection:text-cyber-darker">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={handleSetLanguage} />

            <main>
                <Hero language={language} t={t} />

                <Summary language={language} t={t} />

                <TechnicalCredentials language={language} t={t} />

                <CaseStudyAIArchitect language={language} t={t} />

                <CaseStudyMaduMuria />

                <CaseStudyMulyaDiesel />

                {/* <CaseStudyTemplate /> */}

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