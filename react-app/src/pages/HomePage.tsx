import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Budget Tracking',
      description: 'Live budget monitoring with detailed sub-category breakdowns',
      icon: '📊',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'MongoDB Integration',
      description: 'Secure cloud database storage for all project data',
      icon: '🗄️',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Invoice Management',
      description: 'Professional invoice creation for sponsors and investors',
      icon: '📋',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Password Protection',
      description: 'Secure access control for sensitive financial information',
      icon: '🔒',
      color: 'from-red-500 to-red-600'
    }
  ];

  const navigationCards = [
    {
      title: 'Budget Overview',
      description: 'Complete budget breakdown with phase-by-phase financial planning',
      href: '/budget-overview',
      status: 'Active',
      statusColor: 'bg-green-500',
      icon: '💰'
    },
    {
      title: 'Accounting System',
      description: 'Secure expense tracking, invoice management, and real-time budget monitoring',
      href: '/accounting',
      status: 'Active',
      statusColor: 'bg-green-500',
      icon: '🔐'
    },
    {
      title: 'The Challenge',
      description: 'Detailed challenge structure, rules, and competition format',
      href: '/the-challenge',
      status: 'Active',
      statusColor: 'bg-green-500',
      icon: '🎯'
    },
    {
      title: 'Investor Benefits',
      description: 'Investment opportunities, ROI analysis, and sponsor benefits',
      href: '/investor-benefits',
      status: 'Active',
      statusColor: 'bg-green-500',
      icon: '💼'
    },
    {
      title: 'Pre-Production',
      description: 'Planning phase with set design, travel, and preparation costs',
      href: '/pre-production',
      status: 'Active',
      statusColor: 'bg-green-500',
      icon: '🎬'
    },
    {
      title: 'Production',
      description: 'Main filming phase with crew, equipment, and on-site costs',
      href: '/production',
      status: 'Active',
      statusColor: 'bg-green-500',
      icon: '🎥'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="gradient-bg text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            🏆 Limited Edge Budget
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-90"
          >
            Comprehensive Project Management & Accounting System
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/accounting"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Access Accounting System
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gradient"
        >
          Project Sections
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {navigationCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{card.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold text-white ${card.statusColor}`}>
                  {card.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <Link
                to={card.href}
                className="btn-secondary w-full text-center block group-hover:scale-105 transition-transform duration-200"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12 text-gradient"
          >
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="gradient-bg text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Access the full accounting system and start managing your project budget today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/accounting" className="btn-primary">
              Access Accounting System
            </Link>
            <Link to="/budget-overview" className="btn-secondary">
              View Budget Overview
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
