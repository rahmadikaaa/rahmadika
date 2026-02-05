import React from 'react';
import { GitMerge, ShieldAlert, FileSearch } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectRBAC: React.FC = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
      
      {/* Visual Side (Mock Flowchart) */}
      <div className="md:w-1/2 bg-slate-950 p-8 flex items-center justify-center relative overflow-hidden group cursor-pointer">
        {/* Abstract Flowchart Representation using CSS/SVG */}
        <div className="relative z-10 w-full max-w-sm">
            <div className="absolute inset-0 bg-cyber-primary/5 blur-xl"></div>
            
            <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-lg">
                {/* Nodes */}
                <rect x="150" y="20" width="100" height="40" rx="4" fill="#1e293b" stroke="#22d3ee" strokeWidth="2" />
                <text x="200" y="45" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">Admin</text>
                
                <rect x="50" y="120" width="100" height="40" rx="4" fill="#1e293b" stroke="#a78bfa" strokeWidth="2" />
                <text x="100" y="145" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">Sales</text>

                <rect x="250" y="120" width="100" height="40" rx="4" fill="#1e293b" stroke="#a78bfa" strokeWidth="2" />
                <text x="300" y="145" textAnchor="middle" fill="#fff" fontSize="12" fontFamily="monospace">Branch Mgr</text>

                <rect x="150" y="220" width="100" height="40" rx="4" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4" />
                <text x="200" y="245" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Restricted</text>

                {/* Connectors */}
                <path d="M 200 60 L 200 90 L 100 90 L 100 120" fill="none" stroke="#475569" strokeWidth="2" />
                <path d="M 200 90 L 300 90 L 300 120" fill="none" stroke="#475569" strokeWidth="2" />
                <path d="M 100 160 L 100 190 L 200 190 L 200 220" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>
        </div>
        
        <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-mono bg-slate-900/80 px-2 py-1 rounded">
          RBAC_Flow_v1.2.svg
        </div>
      </div>

      {/* Content Side */}
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
            <GitMerge className="text-purple-400" />
            <h3 className="text-xl font-bold text-white">RBAC Flowchart Analysis</h3>
        </div>
        
        <p className="text-slate-400 mb-6">
          Mapped complex Role-Based Access Control logic for Branch Managers, Sales, and Admins to identify security gaps in the approval hierarchy.
        </p>

        <div className="space-y-4">
            <h4 className="font-mono text-sm text-cyber-primary uppercase tracking-wider">QA Recommendations</h4>
            
            <motion.ul 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {[
                    "Segregate 'Approve' and 'Edit' permissions for Branch Managers.",
                    "Implement audit logs for all role changes made by Admins.",
                    "Block Sales role from accessing 'Cost Price' field in Quotations."
                ].map((rec, i) => (
                    <motion.li 
                        key={i}
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-start gap-3 text-sm text-slate-300"
                    >
                        <ShieldAlert className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span>{rec}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>

        <button className="mt-8 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors self-start flex items-center gap-2">
            <FileSearch size={16} />
            View Full Analysis
        </button>
      </div>
    </div>
  );
};