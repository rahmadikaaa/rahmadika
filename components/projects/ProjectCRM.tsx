import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModuleData, TabType } from '../../types';
import { LayoutList, AlertCircle, CheckCircle } from 'lucide-react';

const scenarios: Record<TabType, ModuleData> = {
  Customer: {
    name: 'Customer Module',
    cases: [
      { id: '1', scenario: 'Create new customer with valid mandatory fields', expectedResult: 'Customer created, ID generated', type: 'Positive' },
      { id: '2', scenario: 'Create customer with duplicate email', expectedResult: 'Error: Email already exists', type: 'Negative' },
      { id: '3', scenario: 'Update customer address details', expectedResult: 'Address updated in DB & UI', type: 'Positive' },
    ]
  },
  Prospect: {
    name: 'Prospect Module',
    cases: [
      { id: '4', scenario: 'Convert Prospect to Customer', expectedResult: 'Status changed, linked to Customer entity', type: 'Positive' },
      { id: '5', scenario: 'Convert Prospect without valid contact info', expectedResult: 'Validation Error displayed', type: 'Negative' },
    ]
  },
  Quotation: {
    name: 'Quotation Module',
    cases: [
      { id: '6', scenario: 'Generate Quote with standard price list', expectedResult: 'Quote created, Total calculation correct', type: 'Positive' },
      { id: '7', scenario: 'Apply expired discount code', expectedResult: 'Error: Discount invalid', type: 'Negative' },
      { id: '8', scenario: 'Approve Quote over authorized limit', expectedResult: 'Trigger approval workflow (Pending Manager)', type: 'Positive' },
    ]
  }
};

export const ProjectCRM: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Customer');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <LayoutList className="text-cyber-primary" />
          <h3 className="text-xl font-bold text-white">CRM/ERP Testing Documentation</h3>
        </div>
        <p className="text-slate-400 text-sm">Comprehensive test scenarios covering critical business logic modules.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/50">
        {(Object.keys(scenarios) as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-mono font-bold transition-all relative ${
              activeTab === tab ? 'text-cyber-primary bg-slate-900' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/50'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-cyber-primary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 min-h-[300px] bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400 font-mono">
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Scenario</th>
                    <th className="py-3 px-4">Expected Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {scenarios[activeTab].cases.map((testCase) => (
                    <tr key={testCase.id} className="hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold ${
                          testCase.type === 'Positive' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {testCase.type === 'Positive' ? <CheckCircle size={12}/> : <AlertCircle size={12}/>}
                          {testCase.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-300">{testCase.scenario}</td>
                      <td className="py-3 px-4 text-slate-400 font-mono text-xs">{testCase.expectedResult}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};