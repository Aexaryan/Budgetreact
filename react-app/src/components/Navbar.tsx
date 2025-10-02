import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductionDropdownOpen, setIsProductionDropdownOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const location = useLocation();

  const mainNavigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Budget Overview', href: '/budget-overview', icon: '📊' },
    { name: 'Accounting System', href: '/accounting', icon: '💰' },
    { name: 'The Challenge', href: '/the-challenge', icon: '🏆' },
  ];

  const productionNavigation = [
    { name: 'Teaser Pilot', href: '/teaser-pilot', icon: '🎬' },
    { name: 'Pre-Production', href: '/pre-production', icon: '📋' },
    { name: 'Production', href: '/production', icon: '🎥' },
    { name: 'Post-Production', href: '/post-production', icon: '✂️' },
  ];

  const businessNavigation = [
    { name: 'Investor Benefits', href: '/investor-benefits', icon: '💼' },
    { name: 'Marketing', href: '/marketing', icon: '📢' },
    { name: 'Contingency', href: '/contingency', icon: '⚠️' },
    { name: 'Participant Requirements', href: '/participant-requirements', icon: '👥' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#2B2E4A] via-[#5D6D93] to-[#2B2E4A] shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  className="h-12 w-12 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                  src="/images/logo.jpg"
                  alt="Limited Edge Budget"
                />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-[#E3B330] rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl group-hover:text-[#E3B330] transition-colors duration-300">
                  LIMIT EDGE
                </span>
                <span className="text-white/80 text-sm font-medium">
                  Persian Sports Reality Show
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main Navigation */}
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.href
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Production Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductionDropdownOpen(!isProductionDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-lg">🎬</span>
                <span>Production</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isProductionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductionDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {productionNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'bg-[#2B2E4A] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsProductionDropdownOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Business Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBusinessDropdownOpen(!isBusinessDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-lg">💼</span>
                <span>Business</span>
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBusinessDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {businessNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'bg-[#2B2E4A] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsBusinessDropdownOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#E3B330] focus:outline-none focus:text-[#E3B330] transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg mt-2 border border-white/20">
              {/* Main Navigation */}
              <div className="px-3 py-2">
                <h3 className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">Main</h3>
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'bg-white/20 text-white'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Production Section */}
              <div className="px-3 py-2">
                <h3 className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">Production</h3>
                {productionNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'bg-white/20 text-white'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Business Section */}
              <div className="px-3 py-2">
                <h3 className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">Business</h3>
                {businessNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'bg-white/20 text-white'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;