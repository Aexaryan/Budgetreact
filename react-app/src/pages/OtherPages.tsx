import React from 'react';
import { motion } from 'framer-motion';

// TeaserPilot Component
export const TeaserPilot: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">🎬 Teaser & Pilot</h1>
        <p className="text-xl text-gray-600 mb-6">Strategic Financial Blueprint for High-Impact Launch</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#0B2D48] mb-2">$20,000</div>
          <p className="text-gray-600">Total Teaser & Pilot Budget</p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <p className="max-w-4xl mx-auto text-gray-600 text-lg">
          This strategic allocation of a <strong>$20,000</strong> budget is designed to maximize production quality, ensure a polished final product, and successfully attract investors and broadcasters for a full series commission.
        </p>
      </motion.div>

      {/* Budget Allocation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#0B2D48] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Production Phase</h4>
          </div>
          <div className="text-3xl font-black text-[#0B2D48] mb-2">$12,000</div>
          <p className="text-gray-600 mb-4">60% of total budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional filming equipment</li>
            <li>• Crew salaries and talent fees</li>
            <li>• Location permits and logistics</li>
            <li>• Safety equipment and insurance</li>
            <li>• Catering and accommodation</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Post-Production</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">$5,000</div>
          <p className="text-gray-600 mb-4">25% of total budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional editing and color grading</li>
            <li>• Sound design and music licensing</li>
            <li>• Motion graphics and branding</li>
            <li>• Multiple format delivery</li>
            <li>• Quality control and review</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#39A57D] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Pre-Production</h4>
          </div>
          <div className="text-3xl font-black text-[#39A57D] mb-2">$2,000</div>
          <p className="text-gray-600 mb-4">10% of total budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Script development and storyboarding</li>
            <li>• Location scouting and permits</li>
            <li>• Equipment testing and preparation</li>
            <li>• Casting and talent selection</li>
            <li>• Production planning and scheduling</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#E3B330] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Marketing</h4>
          </div>
          <div className="text-3xl font-black text-[#E3B330] mb-2">$1,000</div>
          <p className="text-gray-600 mb-4">5% of total budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Press kit development</li>
            <li>• Social media content creation</li>
            <li>• Investor presentation materials</li>
            <li>• Festival submission fees</li>
            <li>• Distribution outreach</li>
          </ul>
        </div>
      </motion.div>

      {/* Strategic Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Strategic Goals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Production Quality</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Broadcast-ready production standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Professional cinematography and sound</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>High-quality post-production polish</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Competitive visual storytelling</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Investment Attraction</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Demonstrate production capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Showcase market potential</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Prove concept viability</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0B2D48] mr-2">✓</span>
                <span>Generate investor confidence</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// InvestorBenefits Component
export const InvestorBenefits: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">💰 Investor Benefits</h1>
        <p className="text-xl text-gray-600 mb-6">Investment opportunities and sponsorship tiers</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#E3B330] mb-2">$372,600</div>
          <p className="text-gray-600">Total Project Investment Opportunity</p>
        </div>
      </motion.div>

      {/* Investment Tiers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#5D6D93]">
          <h4 className="text-xl font-bold text-[#5D6D93] mb-4 text-center">Bronze Tier</h4>
          <div className="text-2xl font-black text-[#5D6D93] mb-4 text-center">$10,000 - $25,000</div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Logo placement in credits</li>
            <li>• Social media mentions</li>
            <li>• Basic analytics reports</li>
            <li>• Monthly progress updates</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#5D6D93]">
          <h4 className="text-xl font-bold text-[#5D6D93] mb-4 text-center">Silver Tier</h4>
          <div className="text-2xl font-black text-[#5D6D93] mb-4 text-center">$25,000 - $50,000</div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Logo placement on athlete clothing</li>
            <li>• Product placement in challenges</li>
            <li>• Detailed analytics reports</li>
            <li>• Audience engagement metrics</li>
            <li>• Post-show follow-up campaigns</li>
            <li>• Quarterly investor meetings</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#D86A36]">
          <h4 className="text-xl font-bold text-[#5D6D93] mb-4 text-center">Gold Tier</h4>
          <div className="text-2xl font-black text-[#D86A36] mb-4 text-center">$50,000+</div>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Premium logo placement and branding</li>
            <li>• Exclusive product placement</li>
            <li>• Custom marketing campaigns</li>
            <li>• Real-time performance tracking</li>
            <li>• Priority access to future seasons</li>
            <li>• Executive producer credits</li>
            <li>• Direct access to production team</li>
          </ul>
        </div>
      </motion.div>

      {/* Investment Structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Investment Structure</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#8B5A2B] text-white">
                <th className="border border-gray-300 p-3 text-left">Investment Level</th>
                <th className="border border-gray-300 p-3 text-left">Contribution (USD)</th>
                <th className="border border-gray-300 p-3 text-left">Covers / Role</th>
                <th className="border border-gray-300 p-3 text-left">Deliverables</th>
                <th className="border border-gray-300 p-3 text-left">ROI / Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#f0f4f8]">
                <td className="border border-gray-300 p-3 font-bold text-[#5D6D93]">Shared Investor (50/50)</td>
                <td className="border border-gray-300 p-3 font-bold">$175,000</td>
                <td className="border border-gray-300 p-3">50% of total costs</td>
                <td className="border border-gray-300 p-3">Executive producer credit, profit sharing</td>
                <td className="border border-gray-300 p-3">50% of net profits, full creative input</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-bold text-[#5D6D93]">Major Sponsor</td>
                <td className="border border-gray-300 p-3 font-bold">$100,000</td>
                <td className="border border-gray-300 p-3">Production phase funding</td>
                <td className="border border-gray-300 p-3">Premium branding, product placement</td>
                <td className="border border-gray-300 p-3">25% of net profits, marketing benefits</td>
              </tr>
              <tr className="bg-[#f0f4f8]">
                <td className="border border-gray-300 p-3 font-bold text-[#5D6D93]">Gold Sponsor</td>
                <td className="border border-gray-300 p-3 font-bold">$50,000</td>
                <td className="border border-gray-300 p-3">Post-production funding</td>
                <td className="border border-gray-300 p-3">Logo placement, social media</td>
                <td className="border border-gray-300 p-3">15% of net profits, brand exposure</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-3 font-bold text-[#5D6D93]">Silver Sponsor</td>
                <td className="border border-gray-300 p-3 font-bold">$25,000</td>
                <td className="border border-gray-300 p-3">Marketing phase funding</td>
                <td className="border border-gray-300 p-3">Credits, basic analytics</td>
                <td className="border border-gray-300 p-3">10% of net profits, visibility</td>
              </tr>
              <tr className="bg-[#f0f4f8]">
                <td className="border border-gray-300 p-3 font-bold text-[#5D6D93]">Bronze Sponsor</td>
                <td className="border border-gray-300 p-3 font-bold">$10,000</td>
                <td className="border border-gray-300 p-3">Pre-production funding</td>
                <td className="border border-gray-300 p-3">Logo in credits, updates</td>
                <td className="border border-gray-300 p-3">5% of net profits, association</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Benefits Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Investment Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Financial Returns</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Profit sharing based on investment level</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Revenue from streaming and broadcast deals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Merchandising and licensing opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>International distribution rights</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Brand Exposure</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Logo placement and branding opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Product placement in challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Social media and digital marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E3B330] mr-2">✓</span>
                <span>Press coverage and media mentions</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// PreProduction Component
export const PreProduction: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">🎬 Pre-Production Phase</h1>
        <p className="text-xl text-gray-600 mb-6">Foundation & Planning Phase</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#E3B330] mb-2">$33,000</div>
          <p className="text-gray-600">Total Pre-Production Budget (8.86% of overall budget)</p>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <p className="max-w-4xl mx-auto text-gray-600 text-lg">
          The pre-production phase is crucial for laying the groundwork for a successful reality show. This <strong>$33,000</strong> investment ensures proper planning, talent acquisition, location preparation, and obstacle design before filming begins.
        </p>
      </motion.div>

      {/* Detailed Budget Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#E3B330] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Set & Obstacle Design</h4>
          </div>
          <div className="text-3xl font-black text-[#E3B330] mb-2">$12,000</div>
          <p className="text-gray-600 mb-4">36.36% of pre-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Custom obstacle course design and engineering</li>
            <li>• Safety equipment and testing</li>
            <li>• Construction materials and labor</li>
            <li>• Technical specifications and blueprints</li>
            <li>• Prototype development and testing</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Travel</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">$7,000</div>
          <p className="text-gray-600 mb-4">21.21% of pre-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Location scouting trips to Torrevieja, Spain</li>
            <li>• Site visits and assessments</li>
            <li>• Local transportation and accommodation</li>
            <li>• Permit application meetings</li>
            <li>• Vendor and supplier meetings</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#39A57D] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Marketing Prep</h4>
          </div>
          <div className="text-3xl font-black text-[#39A57D] mb-2">$7,000</div>
          <p className="text-gray-600 mb-4">21.21% of pre-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Teaser video production</li>
            <li>• Promotional materials design</li>
            <li>• Brand identity development</li>
            <li>• Social media content creation</li>
            <li>• Press kit preparation</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#5D6D93] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Pre-Shoot Planning</h4>
          </div>
          <div className="text-3xl font-black text-[#5D6D93] mb-2">$5,000</div>
          <p className="text-gray-600 mb-4">15.15% of pre-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Production meetings and coordination</li>
            <li>• Administrative setup and logistics</li>
            <li>• Schedule development and timeline planning</li>
            <li>• Crew coordination and communication</li>
            <li>• Documentation and paperwork</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#9E9E9E] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Casting & Selection</h4>
          </div>
          <div className="text-3xl font-black text-[#9E9E9E] mb-2">$2,000</div>
          <p className="text-gray-600 mb-4">6.06% of pre-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Athlete recruitment and screening</li>
            <li>• Application processing and interviews</li>
            <li>• Background checks and verification</li>
            <li>• Contract negotiations and agreements</li>
            <li>• Final selection and onboarding</li>
          </ul>
        </div>
      </motion.div>

      {/* Pre-Production Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Pre-Production Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#E3B330] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Weeks 1-2</h4>
            <h5 className="font-semibold text-[#E3B330] mb-3">Initial Planning</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Project kickoff meetings</li>
              <li>• Budget finalization</li>
              <li>• Team assembly</li>
              <li>• Initial location research</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#E3B330] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Weeks 3-4</h4>
            <h5 className="font-semibold text-[#E3B330] mb-3">Location & Design</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Location scouting trips</li>
              <li>• Obstacle course design</li>
              <li>• Permit applications</li>
              <li>• Vendor negotiations</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#E3B330] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Weeks 5-6</h4>
            <h5 className="font-semibold text-[#E3B330] mb-3">Final Preparation</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Casting and selection</li>
              <li>• Marketing materials</li>
              <li>• Final logistics</li>
              <li>• Production readiness</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Production Component
export const Production: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">🎥 Production Phase</h1>
        <p className="text-xl text-gray-600 mb-6">Main filming phase with comprehensive crew and equipment</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#5D6D93] mb-2">$191,100</div>
          <p className="text-gray-600">Total Production Budget</p>
        </div>
      </motion.div>

      {/* Detailed Budget Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#5D6D93] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Crew Salaries</h4>
          </div>
          <div className="text-3xl font-black text-[#5D6D93] mb-2">$57,000</div>
          <p className="text-gray-600 mb-4">29.83% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Technical director and production manager</li>
            <li>• Cinematographers and camera operators</li>
            <li>• Sound engineers and boom operators</li>
            <li>• Lighting technicians and gaffers</li>
            <li>• Production assistants and coordinators</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Competitor Fees</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">$29,000</div>
          <p className="text-gray-600 mb-4">15.18% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Daily payment for 10 athletes</li>
            <li>• Rehearsal and filming days compensation</li>
            <li>• Performance bonuses and incentives</li>
            <li>• Travel and accommodation stipends</li>
            <li>• Insurance and liability coverage</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#E3B330] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Host Fees</h4>
          </div>
          <div className="text-3xl font-black text-[#E3B330] mb-2">$29,000</div>
          <p className="text-gray-600 mb-4">15.18% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional host compensation</li>
            <li>• Pre-production preparation time</li>
            <li>• Filming days and rehearsals</li>
            <li>• Travel and accommodation</li>
            <li>• Performance and appearance fees</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#39A57D] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Accommodation</h4>
          </div>
          <div className="text-3xl font-black text-[#39A57D] mb-2">$28,000</div>
          <p className="text-gray-600 mb-4">14.65% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Lodging for ~25 people in Torrevieja</li>
            <li>• Extended stay accommodations</li>
            <li>• Production-friendly facilities</li>
            <li>• Meeting rooms and common areas</li>
            <li>• Security and privacy considerations</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#FF6B6B] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Equipment Rental/Purchase</h4>
          </div>
          <div className="text-3xl font-black text-[#FF6B6B] mb-2">$23,100</div>
          <p className="text-gray-600 mb-4">12.09% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional cameras and lenses</li>
            <li>• Drone equipment and operators</li>
            <li>• Lighting rigs and accessories</li>
            <li>• Stabilization equipment and gimbals</li>
            <li>• Audio recording equipment</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#9E9E9E] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Transportation</h4>
          </div>
          <div className="text-3xl font-black text-[#9E9E9E] mb-2">$15,500</div>
          <p className="text-gray-600 mb-4">8.11% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Airport transfers and local transport</li>
            <li>• Production vans and vehicles</li>
            <li>• Logistics trucks for equipment</li>
            <li>• Fuel and maintenance costs</li>
            <li>• Driver services and coordination</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#8E44AD] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Catering & Food</h4>
          </div>
          <div className="text-3xl font-black text-[#8E44AD] mb-2">$15,500</div>
          <p className="text-gray-600 mb-4">8.11% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• 3 daily meals for competitors and crew</li>
            <li>• Special dietary requirements</li>
            <li>• On-location catering services</li>
            <li>• Snacks and refreshments</li>
            <li>• Hydration and energy supplements</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#E67E22] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Wardrobe & Branding</h4>
          </div>
          <div className="text-3xl font-black text-[#E67E22] mb-2">$10,000</div>
          <p className="text-gray-600 mb-4">5.23% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Logo-printed clothing and uniforms</li>
            <li>• Safety gear and protective equipment</li>
            <li>• Branded accessories and props</li>
            <li>• Multiple outfit changes and backups</li>
            <li>• Professional styling and fitting</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#2ECC71] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Insurance & Permits</h4>
          </div>
          <div className="text-3xl font-black text-[#2ECC71] mb-2">$7,000</div>
          <p className="text-gray-600 mb-4">3.66% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Filming permits and location agreements</li>
            <li>• Drone operation permits</li>
            <li>• Production insurance coverage</li>
            <li>• Liability and equipment insurance</li>
            <li>• Legal compliance and documentation</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#34495E] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Misc. On-Site Costs</h4>
          </div>
          <div className="text-3xl font-black text-[#34495E] mb-2">$6,000</div>
          <p className="text-gray-600 mb-4">3.14% of production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Security services and personnel</li>
            <li>• Props and set dressing materials</li>
            <li>• Emergency supplies and first aid</li>
            <li>• Communication equipment</li>
            <li>• Miscellaneous operational expenses</li>
          </ul>
        </div>
      </motion.div>

      {/* Production Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Production Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 1</h4>
            <h5 className="font-semibold text-[#5D6D93] mb-3">Setup & Arrival</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Crew and cast arrival</li>
              <li>• Equipment setup and testing</li>
              <li>• Location preparation</li>
              <li>• Safety briefings</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 2</h4>
            <h5 className="font-semibold text-[#5D6D93] mb-3">Rehearsals</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Obstacle course familiarization</li>
              <li>• Camera blocking and positioning</li>
              <li>• Safety protocol training</li>
              <li>• Performance optimization</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 3</h4>
            <h5 className="font-semibold text-[#5D6D93] mb-3">Main Filming</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Primary competition filming</li>
              <li>• Multiple angle coverage</li>
              <li>• Interview sessions</li>
              <li>• Behind-the-scenes content</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 4</h4>
            <h5 className="font-semibold text-[#5D6D93] mb-3">Wrap & Departure</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Additional pickup shots</li>
              <li>• Equipment breakdown</li>
              <li>• Final interviews</li>
              <li>• Location cleanup</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Production Deliverables */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Production Deliverables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Raw Footage</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Multi-camera competition coverage (4K resolution)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Drone aerial footage and establishing shots</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Interview and confession booth content</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Behind-the-scenes and B-roll footage</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Audio & Documentation</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>High-quality audio recordings and sync</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Production logs and shot lists</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Continuity notes and script supervisor reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Technical specifications and metadata</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// PostProduction Component
export const PostProduction: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">✂️ Post-Production Phase</h1>
        <p className="text-xl text-gray-600 mb-6">Editing, sound, and final delivery</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#D86A36] mb-2">$54,600</div>
          <p className="text-gray-600">Total Post-Production Budget (14.65% of overall budget)</p>
        </div>
      </motion.div>

      {/* Detailed Budget Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Editing</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">$30,000</div>
          <p className="text-gray-600 mb-4">54.95% of post-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Offline editing and story assembly</li>
            <li>• Online editing and final cut</li>
            <li>• Multi-camera synchronization</li>
            <li>• Narrative structure development</li>
            <li>• Pacing and rhythm optimization</li>
            <li>• Multiple episode versions</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#5D6D93] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Sound Mixing & Music</h4>
          </div>
          <div className="text-3xl font-black text-[#5D6D93] mb-2">$8,000</div>
          <p className="text-gray-600 mb-4">14.65% of post-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional sound mixing and mastering</li>
            <li>• Music licensing and original compositions</li>
            <li>• Sound effects and audio enhancement</li>
            <li>• Dialogue cleanup and ADR</li>
            <li>• Audio level balancing and compression</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#E3B330] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Color Grading</h4>
          </div>
          <div className="text-3xl font-black text-[#E3B330] mb-2">$7,000</div>
          <p className="text-gray-600 mb-4">12.82% of post-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional color correction and grading</li>
            <li>• Visual consistency across all footage</li>
            <li>• Mood and atmosphere enhancement</li>
            <li>• Brand color palette implementation</li>
            <li>• HDR and broadcast standard compliance</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#39A57D] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Motion Graphics</h4>
          </div>
          <div className="text-3xl font-black text-[#39A57D] mb-2">$6,000</div>
          <p className="text-gray-600 mb-4">10.99% of post-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Title sequences and graphics</li>
            <li>• Lower thirds and on-screen graphics</li>
            <li>• Logo animations and branding</li>
            <li>• Transition effects and visual elements</li>
            <li>• Social media graphics and templates</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#9E9E9E] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Final Mastering</h4>
          </div>
          <div className="text-3xl font-black text-[#9E9E9E] mb-2">$3,600</div>
          <p className="text-gray-600 mb-4">6.59% of post-production budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Final quality control and review</li>
            <li>• Multiple format mastering</li>
            <li>• Delivery package preparation</li>
            <li>• Archive and backup creation</li>
            <li>• Technical specifications compliance</li>
          </ul>
        </div>
      </motion.div>

      {/* Post-Production Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Post-Production Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D86A36] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 1-2</h4>
            <h5 className="font-semibold text-[#D86A36] mb-3">Rough Cut</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Initial footage review</li>
              <li>• Story assembly and structure</li>
              <li>• Rough cut editing</li>
              <li>• Basic timeline creation</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D86A36] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 3-4</h4>
            <h5 className="font-semibold text-[#D86A36] mb-3">Fine Cut & Sound</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Fine cut editing and pacing</li>
              <li>• Sound design and music integration</li>
              <li>• Dialogue cleanup and enhancement</li>
              <li>• Audio mixing and mastering</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D86A36] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 5-6</h4>
            <h5 className="font-semibold text-[#D86A36] mb-3">Visual Polish</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Color grading and correction</li>
              <li>• Motion graphics and branding</li>
              <li>• Visual effects and enhancements</li>
              <li>• Title sequences and graphics</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D86A36] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Week 7-8</h4>
            <h5 className="font-semibold text-[#D86A36] mb-3">Final Delivery</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Final quality control and review</li>
              <li>• Multiple format mastering</li>
              <li>• Delivery package preparation</li>
              <li>• Archive and backup creation</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Post-Production Deliverables */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Post-Production Deliverables</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Final Episodes</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Complete edited episodes (45-60 minutes each)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Broadcast-ready master files (4K/HD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Streaming platform optimized versions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Social media cutdowns and highlights</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Supporting Materials</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Professional audio tracks and stems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Motion graphics packages and templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Color correction LUTs and presets</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D86A36] mr-2">✓</span>
                <span>Technical documentation and metadata</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Quality Standards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Quality Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl mb-3">🎬</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Broadcast Quality</h4>
            <p className="text-gray-600">Professional editing standards meeting industry broadcast requirements</p>
          </div>
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl mb-3">🎵</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Audio Excellence</h4>
            <p className="text-gray-600">Crystal clear sound design with professional mixing and mastering</p>
          </div>
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Visual Polish</h4>
            <p className="text-gray-600">Consistent color grading and professional motion graphics integration</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Marketing Component
export const Marketing: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">📢 Marketing Phase</h1>
        <p className="text-xl text-gray-600 mb-6">Promotion and audience engagement strategy</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#39A57D] mb-2">$33,600</div>
          <p className="text-gray-600">Total Marketing Budget (9.02% of overall budget)</p>
        </div>
      </motion.div>

      {/* Detailed Budget Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#39A57D] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">PR & Media Buys</h4>
          </div>
          <div className="text-3xl font-black text-[#39A57D] mb-2">$15,000</div>
          <p className="text-gray-600 mb-4">44.64% of marketing budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Press releases and media outreach</li>
            <li>• Television and radio advertising</li>
            <li>• Digital display advertising</li>
            <li>• Influencer partnerships and collaborations</li>
            <li>• Media kit development and distribution</li>
            <li>• Press conference and launch events</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Trailer Production & Online Ads</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">$10,600</div>
          <p className="text-gray-600 mb-4">31.55% of marketing budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Professional trailer production and editing</li>
            <li>• YouTube and streaming platform ads</li>
            <li>• Google Ads and search marketing</li>
            <li>• Facebook and Instagram advertising</li>
            <li>• TikTok and short-form video content</li>
            <li>• Programmatic advertising campaigns</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#5D6D93] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Social Media Campaigns</h4>
          </div>
          <div className="text-3xl font-black text-[#5D6D93] mb-2">$8,000</div>
          <p className="text-gray-600 mb-4">23.81% of marketing budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Content creation and community management</li>
            <li>• Influencer collaborations and partnerships</li>
            <li>• User-generated content campaigns</li>
            <li>• Live streaming and real-time engagement</li>
            <li>• Cross-platform content adaptation</li>
            <li>• Analytics and performance tracking</li>
          </ul>
        </div>
      </motion.div>

      {/* Marketing Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Marketing Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Target Channels</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Traditional media outlets and broadcast channels</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Social media platforms (Instagram, TikTok, YouTube)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Online advertising and programmatic campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Influencer partnerships and collaborations</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Campaign Objectives</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Build anticipation and excitement for the show</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Reach target demographic of sports enthusiasts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Generate buzz and social media engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#39A57D] mr-2">✓</span>
                <span>Drive viewership and audience retention</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Marketing Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Marketing Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#39A57D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Pre-Launch</h4>
            <h5 className="font-semibold text-[#39A57D] mb-3">Teaser Campaign</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Teaser trailer production</li>
              <li>• Social media setup</li>
              <li>• Influencer outreach</li>
              <li>• Press kit preparation</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#39A57D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Launch Phase</h4>
            <h5 className="font-semibold text-[#39A57D] mb-3">Full Campaign</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Media buy execution</li>
              <li>• Social media campaigns</li>
              <li>• Influencer partnerships</li>
              <li>• Press releases</li>
            </ul>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#39A57D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Sustained</h4>
            <h5 className="font-semibold text-[#39A57D] mb-3">Engagement</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Ongoing social media</li>
              <li>• Performance tracking</li>
              <li>• Campaign optimization</li>
              <li>• Audience engagement</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Contingency Component
export const Contingency: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">🛡️ Contingency Planning</h1>
        <p className="text-xl text-gray-600 mb-6">Risk management and emergency planning</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#9E9E9E] mb-2">$50,400</div>
          <p className="text-gray-600">Total Contingency Budget (13.53% of overall budget)</p>
        </div>
      </motion.div>

      {/* Detailed Budget Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#9E9E9E] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Emergency & Unforeseen</h4>
          </div>
          <div className="text-3xl font-black text-[#9E9E9E] mb-2">$25,000</div>
          <p className="text-gray-600 mb-4">49.60% of contingency budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Weather-related delays and cancellations</li>
            <li>• Equipment failures and replacements</li>
            <li>• Personnel issues and replacements</li>
            <li>• Location access problems</li>
            <li>• Regulatory changes and compliance</li>
            <li>• Other miscellaneous unforeseen expenses</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#5D6D93] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Risk Mitigation</h4>
          </div>
          <div className="text-3xl font-black text-[#5D6D93] mb-2">$15,000</div>
          <p className="text-gray-600 mb-4">29.76% of contingency budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Production schedule overruns</li>
            <li>• Equipment rental extensions</li>
            <li>• Additional accommodation needs</li>
            <li>• Extended post-production timeline</li>
            <li>• Marketing campaign expansion</li>
            <li>• Legal and compliance requirements</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Insurance Deductibles</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">$10,400</div>
          <p className="text-gray-600 mb-4">20.64% of contingency budget</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Production insurance claim deductibles</li>
            <li>• Equipment insurance coverage</li>
            <li>• Liability insurance claims</li>
            <li>• Travel insurance deductibles</li>
            <li>• Health insurance for cast and crew</li>
            <li>• Property damage insurance</li>
          </ul>
        </div>
      </motion.div>

      {/* Risk Management Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Risk Management Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Identified Risks</h4>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <h5 className="font-semibold text-red-800">High Risk</h5>
                <p className="text-sm text-red-700">Weather delays, equipment failures, location access issues</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <h5 className="font-semibold text-yellow-800">Medium Risk</h5>
                <p className="text-sm text-yellow-700">Schedule overruns, talent availability, budget variances</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-green-800">Low Risk</h5>
                <p className="text-sm text-green-700">Marketing performance, audience engagement, content quality</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Mitigation Strategies</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#9E9E9E] mr-2">✓</span>
                <span>Comprehensive insurance coverage for all aspects</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9E9E9E] mr-2">✓</span>
                <span>Backup equipment and personnel arrangements</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9E9E9E] mr-2">✓</span>
                <span>Flexible scheduling with buffer time built-in</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9E9E9E] mr-2">✓</span>
                <span>Regular risk assessment and monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9E9E9E] mr-2">✓</span>
                <span>Emergency response protocols and procedures</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Coverage Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Coverage Areas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl mb-3">🌦️</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Weather Protection</h4>
            <p className="text-gray-600">Coverage for weather-related delays and cancellations</p>
          </div>
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl mb-3">🔧</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Equipment Backup</h4>
            <p className="text-gray-600">Backup equipment and replacement coverage</p>
          </div>
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl mb-3">👥</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Personnel Issues</h4>
            <p className="text-gray-600">Coverage for personnel changes and replacements</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// ParticipantRequirements Component
export const ParticipantRequirements: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-[#2B2E4A] mb-4">👥 Participant Requirements</h1>
        <p className="text-xl text-gray-600 mb-6">Eligibility criteria and selection process</p>
        <div className="bg-white rounded-xl shadow-xl p-6 inline-block">
          <div className="text-4xl font-black text-[#5D6D93] mb-2">10 Athletes</div>
          <p className="text-gray-600">Total Competition Participants</p>
        </div>
      </motion.div>

      {/* Demographics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#5D6D93] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Age Requirements</h4>
          </div>
          <div className="text-3xl font-black text-[#5D6D93] mb-2">20-40 Years</div>
          <p className="text-gray-600 mb-4">Prime stage of physical ability and competitive spirit</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Peak physical performance age range</li>
            <li>• Mature decision-making capabilities</li>
            <li>• Strong competitive drive and motivation</li>
            <li>• Professional attitude and commitment</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#D86A36] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Gender Balance</h4>
          </div>
          <div className="text-3xl font-black text-[#D86A36] mb-2">5 Men & 5 Women</div>
          <p className="text-gray-600 mb-4">Emphasizing gender equality and fair competition</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Equal representation and opportunity</li>
            <li>• Fair competition across all challenges</li>
            <li>• Diverse perspectives and approaches</li>
            <li>• Inclusive and representative casting</li>
          </ul>
        </div>
      </motion.div>

      {/* Athletic Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#39A57D] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Athletic Background</h4>
          </div>
          <div className="text-3xl font-black text-[#39A57D] mb-2">3+ Years Experience</div>
          <p className="text-gray-600 mb-4">Minimum athletic experience required</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Strength, endurance, or speed sports</li>
            <li>• CrossFit, martial arts, bodybuilding</li>
            <li>• Swimming, running, cycling</li>
            <li>• Competitive sports background</li>
            <li>• Demonstrated athletic achievements</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-[#E3B330] rounded-full mr-3"></div>
            <h4 className="text-xl font-bold text-[#5D6D93]">Physical Readiness</h4>
          </div>
          <div className="text-3xl font-black text-[#E3B330] mb-2">Health Screening</div>
          <p className="text-gray-600 mb-4">Professional medical and fitness assessments</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Comprehensive health examinations</li>
            <li>• Fitness assessments and evaluations</li>
            <li>• Injury history and clearance</li>
            <li>• Mental health and stress management</li>
            <li>• Safety protocol compliance</li>
          </ul>
        </div>
      </motion.div>

      {/* Personality & Media Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Personality & Media Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Personality Traits</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Strong competitive spirit and determination</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Positive attitude and team player mentality</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Resilience and ability to handle pressure</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Good communication skills and charisma</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Media Readiness</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Comfortable with cameras and interviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Ability to express thoughts clearly</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Willingness to share personal stories</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5D6D93] mr-2">✓</span>
                <span>Professional conduct and media training</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Selection Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12"
      >
        <h3 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Selection Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Application</h4>
            <p className="text-sm text-gray-700">Online application with athletic background and personal information</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Screening</h4>
            <p className="text-sm text-gray-700">Initial review of applications and background checks</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Interviews</h4>
            <p className="text-sm text-gray-700">Video interviews and personality assessments</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#5D6D93] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
            <h4 className="text-xl font-bold text-[#5D6D93] mb-2">Final Selection</h4>
            <p className="text-sm text-gray-700">Final selection based on athletic ability, personality, and media potential</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
