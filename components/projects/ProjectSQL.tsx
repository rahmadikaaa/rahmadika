import React from 'react';
import { Database, Search, ArrowRight } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

const queryUpdate = `UPDATE product_pricelist 
SET ktg_business_category_id = NULL, 
    ktg_is_pricelist_spss = TRUE 
WHERE id = 123;`;

const queryValidation = `SELECT name->>'en_US' AS name, * 
FROM product_pricelist 
WHERE name->>'en_US' LIKE '%Sparepart%';`;

export const ProjectSQL: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-6 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-6">
      
      {/* Description Side */}
      <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
        <div className="flex items-center gap-3">
          <Database className="text-cyber-secondary" />
          <h3 className="text-xl font-bold text-white">SQL Data Validation</h3>
        </div>
        <p className="text-slate-400">
          Direct database manipulation and verification is crucial for ensuring backend integrity when UI actions fail or require mass updates.
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-yellow-500">
            <h4 className="text-yellow-400 font-bold text-sm mb-1">Scenario</h4>
            <p className="text-xs text-slate-400">Correcting misclassified pricelists for the 'Sparepart' category required a direct update to nullify business category and enforce SPSS flag.</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-cyber-primary">
            <Search size={16} />
            <span>Verification technique: JSONB Query</span>
          </div>
        </div>
      </div>

      {/* Code Side */}
      <div className="lg:col-span-3 space-y-2">
        <div className="relative">
            <div className="absolute -left-3 top-6 bottom-6 w-px bg-slate-800 hidden lg:block"></div>
            
            {/* Step 1 */}
            <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-mono text-white">1</span>
                    <span className="text-sm font-semibold text-slate-300">Execute Data Correction</span>
                </div>
                <CodeBlock code={queryUpdate} label="PostgreSQL: Update Transaction" />
            </div>

            <div className="flex justify-center my-2">
                <ArrowRight className="text-slate-600 rotate-90" />
            </div>

            {/* Step 2 */}
             <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-xs font-mono text-white">2</span>
                    <span className="text-sm font-semibold text-slate-300">Validate Result</span>
                </div>
                <CodeBlock code={queryValidation} label="PostgreSQL: Validation Query" />
            </div>
        </div>
      </div>
    </div>
  );
};