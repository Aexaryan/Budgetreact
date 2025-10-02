import React from 'react';
import { motion } from 'framer-motion';

const BudgetOverview: React.FC = () => {
  const budgetData = {
    total: 372600,
    categories: [
      {
        name: 'Pre-Production',
        amount: 33000,
        percentage: 8.9,
        color: 'from-blue-500 to-blue-600',
        items: [
          { name: 'Set & Obstacle Design', amount: 12000 },
          { name: 'Travel', amount: 7000 },
          { name: 'Marketing Prep', amount: 7000 },
          { name: 'Pre-Shoot Planning', amount: 5000 },
          { name: 'Casting & Selection', amount: 2000 }
        ]
      },
      {
        name: 'Production',
        amount: 191000,
        percentage: 51.3,
        color: 'from-green-500 to-green-600',
        items: [
          { name: 'Crew Salaries', amount: 57000 },
          { name: 'Competitor Fees', amount: 29000 },
          { name: 'Host Fees', amount: 29000 },
          { name: 'Accommodation', amount: 28000 },
          { name: 'Equipment Rental', amount: 23100 },
          { name: 'Transportation', amount: 15500 },
          { name: 'Catering & Food', amount: 15500 },
          { name: 'Wardrobe & Branding', amount: 10000 },
          { name: 'Insurance & Permits', amount: 7000 },
          { name: 'Misc. On-Site Costs', amount: 6000 }
        ]
      },
      {
        name: 'Post-Production',
        amount: 54600,
        percentage: 14.7,
        color: 'from-purple-500 to-purple-600',
        items: [
          { name: 'Editing', amount: 30000 },
          { name: 'Sound Mixing & Music', amount: 8000 },
          { name: 'Color Grading', amount: 7000 },
          { name: 'Motion Graphics & Branding', amount: 6000 },
          { name: 'Final Mastering & Delivery', amount: 3600 }
        ]
      },
      {
        name: 'Marketing',
        amount: 33600,
        percentage: 9.0,
        color: 'from-yellow-500 to-yellow-600',
        items: [
          { name: 'PR & Media Buys', amount: 15000 },
          { name: 'Trailer Production & Online Ads', amount: 10600 },
          { name: 'Social Media Campaigns', amount: 8000 }
        ]
      },
      {
        name: 'Contingency',
        amount: 50400,
        percentage: 13.5,
        color: 'from-gray-500 to-gray-600',
        items: [
          { name: 'Emergency & Unforeseen Costs', amount: 25000 },
          { name: 'Risk Mitigation', amount: 15000 },
          { name: 'Insurance Claim Deductibles', amount: 10400 }
        ]
      },
      {
        name: 'Prize Fund',
        amount: 10000,
        percentage: 2.7,
        color: 'from-red-500 to-red-600',
        items: [
          { name: 'Winner Prize Money', amount: 10000 }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-black text-[#2B2E4A] tracking-tight mb-4">LIMIT EDGE</h1>
          <p className="text-xl md:text-2xl font-bold text-[#D86A36] mb-2">PERSIAN SPORTS REALITY SHOW</p>
          <p className="text-lg text-gray-600 mb-8">Complete Budget Breakdown</p>
          
          {/* Hero Image */}
          <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-xl shadow-2xl mb-8">
            <img 
              src="/images/limit-edge-hero.jpg" 
              alt="Limit Edge - Persian Sports Reality Show featuring athletic competitors on beach at sunset" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-black mb-4">LIMIT EDGE</h2>
                <p className="text-xl md:text-2xl font-bold mb-2">PERSIAN SPORTS REALITY SHOW</p>
                <p className="text-lg md:text-xl">Where Champions Are Made</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Total Budget Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-7xl font-black text-[#5D6D93] tracking-tighter my-4">$372,600</h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg">
            This comprehensive budget breakdown for the "Limit Edge" reality show allocates a total of <strong>$372,600</strong> across all production phases. The strategy prioritizes high-quality production while ensuring adequate funding for pre-production planning, post-production polish, marketing reach, and essential contingency planning.
          </p>
        </motion.div>

        {/* Budget Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {budgetData.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="text-center">
                <div className={`text-4xl font-black mb-2 ${
                  category.name === 'Pre-Production' ? 'text-[#E3B330]' :
                  category.name === 'Production' ? 'text-[#5D6D93]' :
                  category.name === 'Post-Production' ? 'text-[#D86A36]' :
                  category.name === 'Marketing' ? 'text-[#39A57D]' :
                  category.name === 'Contingency' ? 'text-[#9E9E9E]' :
                  'text-[#FF6B6B]'
                }`}>
                  ${category.amount.toLocaleString()}
                </div>
                <h4 className="text-xl font-bold text-[#5D6D93] mb-3">{category.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{category.percentage}% of total budget</p>
                <p className="text-gray-700 text-sm mb-4">
                  {category.name === 'Pre-Production' && 'Casting, permits, obstacle design, location scouting, and initial planning.'}
                  {category.name === 'Production' && 'Full filming operations: crew, cast, equipment, transport, lodging, catering.'}
                  {category.name === 'Post-Production' && 'Editing, sound mixing, visual effects, color grading, motion graphics.'}
                  {category.name === 'Marketing' && 'Media buys, PR campaigns, trailer production, social promotion.'}
                  {category.name === 'Contingency' && 'Insurance, legal, and unexpected costs to ensure project completion.'}
                  {category.name === 'Prize Fund' && 'Winner\'s prize money to incentivize competition and engagement.'}
                </p>
                <a 
                  href={`/${category.name.toLowerCase().replace(' ', '-')}`} 
                  className={`inline-block px-4 py-2 rounded-lg text-white transition-colors ${
                    category.name === 'Pre-Production' ? 'bg-[#E3B330] hover:bg-[#D4A02A]' :
                    category.name === 'Production' ? 'bg-[#5D6D93] hover:bg-[#4A5A7A]' :
                    category.name === 'Post-Production' ? 'bg-[#D86A36] hover:bg-[#C55A2A]' :
                    category.name === 'Marketing' ? 'bg-[#39A57D] hover:bg-[#2E8B5F]' :
                    category.name === 'Contingency' ? 'bg-[#9E9E9E] hover:bg-[#7A7A7A]' :
                    'bg-[#FF6B6B] hover:bg-[#E55A5A]'
                  }`}
                >
                  {category.name === 'Prize Fund' ? 'Prize Fund' : 'View Details'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Budget Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Budget Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Key Investment Areas</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Production Operations</span>
                  <span className="font-bold">$191,000 (51.26%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Post-Production Polish</span>
                  <span className="font-bold">$54,600 (14.65%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Contingency & Safety</span>
                  <span className="font-bold">$50,400 (13.53%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Pre-Production Planning</span>
                  <span className="font-bold">$33,000 (8.86%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing & Distribution</span>
                  <span className="font-bold">$33,600 (9.02%)</span>
                </li>
                <li className="flex justify-between">
                  <span>Prize Fund</span>
                  <span className="font-bold">$10,000 (2.68%)</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Strategic Allocation</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5D6D93] mr-2">✓</span>
                  <span>Production receives the largest allocation (51.26%) ensuring high-quality filming operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5D6D93] mr-2">✓</span>
                  <span>Significant investment in post-production (14.65%) for polished final product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5D6D93] mr-2">✓</span>
                  <span>Robust contingency fund (13.53%) for risk mitigation and unexpected costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5D6D93] mr-2">✓</span>
                  <span>Comprehensive marketing budget (9.02%) for audience reach and engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5D6D93] mr-2">✓</span>
                  <span>Strategic pre-production planning (8.86%) for smooth execution</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Track Your Budget?
            </h3>
            <p className="text-gray-600 mb-6">
              Access the accounting system to start tracking expenses and managing your budget in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/accounting" className="btn-primary">
                Access Accounting System
              </a>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BudgetOverview;
