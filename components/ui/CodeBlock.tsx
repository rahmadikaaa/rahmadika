import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  label?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, label }) => {
  return (
    <div className="relative rounded-lg overflow-hidden bg-[#0d1117] border border-slate-700 shadow-xl my-4 group">
      {label && (
        <div className="bg-slate-800/50 px-4 py-1 text-xs text-cyber-primary font-mono border-b border-slate-700 flex justify-between items-center">
          <span>{label}</span>
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50"></span>
          </span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap break-all">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};