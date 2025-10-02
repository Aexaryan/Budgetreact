import React from 'react';
import { motion } from 'framer-motion';

const BudgetOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-black text-[#2B2E4A] tracking-tight mb-4">LIMIT EDGE</h1>
          <p className="text-xl md:text-2xl font-bold text-[#D86A36] mb-2">PERSIAN SPORTS REALITY SHOW</p>
          <p className="text-lg text-gray-600 mb-8">Complete Budget Breakdown</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black text-[#5D6D93] tracking-tighter my-4">$372,600</h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg">
            This comprehensive budget breakdown for the "Limit Edge" reality show allocates a total of <strong>$372,600</strong> across all production phases.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Production</h3>
            <p className="text-3xl font-bold text-blue-600">$33,000</p>
            <p className="text-sm text-gray-500">8.9% of total budget</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Production</h3>
            <p className="text-3xl font-bold text-green-600">$191,000</p>
            <p className="text-sm text-gray-500">51.3% of total budget</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Post-Production</h3>
            <p className="text-3xl font-bold text-purple-600">$54,600</p>
            <p className="text-sm text-gray-500">14.7% of total budget</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
