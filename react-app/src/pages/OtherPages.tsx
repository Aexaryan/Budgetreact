import React from 'react';
import { motion } from 'framer-motion';

const PageTemplate: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h3>
            <p className="text-gray-600">This section is under development and will be available soon.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Features</h3>
            <p className="text-gray-600">Detailed information and functionality will be added here.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Updates</h3>
            <p className="text-gray-600">Regular updates and improvements are planned.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeaserPilot: React.FC = () => (
  <PageTemplate 
    title="Teaser Pilot" 
    description="Pilot episode production and teaser content creation" 
  />
);

export const InvestorBenefits: React.FC = () => (
  <PageTemplate 
    title="Investor Benefits" 
    description="Investment opportunities and sponsor benefits for the Limit Edge show" 
  />
);

export const PreProduction: React.FC = () => (
  <PageTemplate 
    title="Pre-Production" 
    description="Planning phase with set design, travel, and preparation costs" 
  />
);

export const Production: React.FC = () => (
  <PageTemplate 
    title="Production" 
    description="Main filming phase with crew, equipment, and on-site costs" 
  />
);

export const PostProduction: React.FC = () => (
  <PageTemplate 
    title="Post-Production" 
    description="Editing, sound mixing, visual effects, and final delivery" 
  />
);

export const Marketing: React.FC = () => (
  <PageTemplate 
    title="Marketing" 
    description="Promotion strategy, media buys, and audience engagement" 
  />
);

export const Contingency: React.FC = () => (
  <PageTemplate 
    title="Contingency" 
    description="Risk management and emergency fund allocation" 
  />
);

export const ParticipantRequirements: React.FC = () => (
  <PageTemplate 
    title="Participant Requirements" 
    description="Eligibility criteria and participant selection process" 
  />
);
