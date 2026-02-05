import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-darker border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-slate-500 hover:text-cyber-primary transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="#" className="text-slate-500 hover:text-cyber-secondary transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@rahmadika.dev" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-600 font-mono text-sm">
          &copy; {new Date().getFullYear()} Rahmadika Tri Putera. Deployed on Google Cloud.
        </p>
      </div>
    </footer>
  );
};