import React from 'react';
import { motion } from 'framer-motion';

const TheChallenge: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            THE CHALLENGE
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            An Interactive 10-Day Professional & Entertainment Plan
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Endurance Challenges</h3>
            <p className="text-gray-600">Marathon events, rowing, cycling, and stamina tests</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Speed Challenges</h3>
            <p className="text-gray-600">Sprint races, agility tests, and reaction time competitions</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Strength Challenges</h3>
            <p className="text-gray-600">Weight lifting, obstacle courses, and power demonstrations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheChallenge;
