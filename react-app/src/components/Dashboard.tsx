import React, { useMemo } from 'react';
import { Expense } from '../types';
import FinancialReports from './FinancialReports';

interface DashboardProps {
  expenses: Expense[];
}

const categoryBudgets = {
  'pre-production': 33000,
  'production': 191000,
  'post-production': 54600,
  'marketing': 33600,
  'contingency': 50400,
};

const subCategoryBudgets = {
  'pre-production': {
    'set-obstacle-design': 12000,
    'travel': 7000,
    'marketing-prep': 7000,
    'pre-shoot-planning': 5000,
    'casting-selection': 2000,
  },
  'production': {
    'crew-salaries': 57000,
    'competitor-fees': 29000,
    'host-fees': 29000,
    'accommodation': 28000,
    'equipment-rental': 23100,
    'transportation': 15500,
    'catering-food': 15500,
    'wardrobe-branding': 10000,
    'insurance-permits': 7000,
    'misc-onsite': 6000,
  },
  'post-production': {
    'editing': 30000,
    'sound-mixing-music': 8000,
    'color-grading': 7000,
    'motion-graphics-branding': 6000,
    'final-mastering-delivery': 3600,
  },
  'marketing': {
    'pr-media-buys': 15000,
    'trailer-production-ads': 10600,
    'social-media-campaigns': 8000,
  },
  'contingency': {
      'emergency-unforeseen': 50400,
  },
  'prize-fund': {
      'winner-prize': 10000,
  }
};

const subCategoryLabels: { [key: string]: { [key: string]: string } } = {
  'pre-production': {
    'set-obstacle-design': 'Set & Obstacle Design',
    'travel': 'Travel',
    'marketing-prep': 'Marketing Prep',
    'pre-shoot-planning': 'Pre-Shoot Planning',
    'casting-selection': 'Casting & Selection'
  },
  'production': {
    'crew-salaries': 'Crew Salaries',
    'competitor-fees': 'Competitor Fees',
    'host-fees': 'Host Fees',
    'accommodation': 'Accommodation',
    'equipment-rental': 'Equipment Rental/Purchase',
    'transportation': 'Transportation',
    'catering-food': 'Catering & Food',
    'wardrobe-branding': 'Wardrobe & Branding',
    'insurance-permits': 'Insurance & Permits',
    'misc-onsite': 'Misc. On-Site Costs'
  },
  'post-production': {
    'editing': 'Editing',
    'sound-mixing-music': 'Sound Mixing & Music',
    'color-grading': 'Color Grading',
    'motion-graphics-branding': 'Motion Graphics & Branding',
    'final-mastering-delivery': 'Final Mastering & Delivery'
  },
  'marketing': {
    'pr-media-buys': 'PR & Media Buys',
    'trailer-production-ads': 'Trailer Production & Ads',
    'social-media-campaigns': 'Social Media Campaigns'
  },
  'contingency': {
    'emergency-unforeseen': 'Emergency & Unforeseen',
  },
  'prize-fund': {
    'winner-prize': 'Winner Prize',
  }
};


const totalBudget = Object.values(categoryBudgets).reduce((acc, budget) => acc + budget, 0);

const Dashboard: React.FC<DashboardProps> = ({ expenses }) => {
  const totalSpent = useMemo(() => {
    return expenses
      .filter(e => e.status === 'approved')
      .reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const remainingBudget = totalBudget - totalSpent;

  const categorySpending = useMemo(() => {
    const spending: { [key: string]: number } = {};
    for (const category in categoryBudgets) {
      spending[category] = expenses
        .filter(e => e.category === category && e.status === 'approved')
        .reduce((sum, e) => sum + e.amount, 0);
    }
    return spending;
  }, [expenses]);

  const subCategorySpending = useMemo(() => {
      const spending: { [key: string]: { [key: string]: number } } = {};
      for (const category in subCategoryBudgets) {
          spending[category] = {};
          for (const subKey in subCategoryBudgets[category as keyof typeof subCategoryBudgets]) {
              spending[category][subKey] = expenses
                  .filter(e => e.category === category && e.subCategory === subKey && e.status === 'approved')
                  .reduce((sum, e) => sum + e.amount, 0);
          }
      }
      return spending;
  }, [expenses]);

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  const getProgressBarClass = (percentage: number) => {
    if (percentage > 90) return 'budget-progress-bar danger';
    if (percentage > 75) return 'budget-progress-bar warning';
    return 'budget-progress-bar';
  };

  return (
    <>
      <section className="accounting-card">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#2B2E4A]">Budget Overview Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl font-black text-[#2B2E4A] mb-2">{formatCurrency(totalBudget)}</div>
            <h3 className="text-xl font-bold text-[#5D6D93] mb-2">Total Budget</h3>
            <p className="text-gray-600">Complete project allocation</p>
          </div>
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl font-black text-[#E3B330] mb-2">{formatCurrency(totalSpent)}</div>
            <h3 className="text-xl font-bold text-[#5D6D93] mb-2">Total Spent</h3>
            <p className="text-gray-600">Actual expenses incurred</p>
          </div>
          <div className="text-center p-6 bg-[#f9f5f1] rounded-lg">
            <div className="text-4xl font-black text-[#39A57D] mb-2">{formatCurrency(remainingBudget)}</div>
            <h3 className="text-xl font-bold text-[#5D6D93] mb-2">Remaining</h3>
            <p className="text-gray-600">Available funds</p>
          </div>
        </div>
      </section>

      <section className="accounting-card">
        <h3 className="text-2xl font-bold mb-6 text-[#2B2E4A]">Budget Categories Progress</h3>
        <div className="space-y-6">
          {Object.entries(categoryBudgets).map(([key, budget]) => {
            const spent = categorySpending[key] || 0;
            const percentage = budget > 0 ? (spent / budget) * 100 : 0;
            return (
              <div key={key}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-[#5D6D93] capitalize">{key.replace('-', ' ')}</span>
                  <span className="text-sm text-gray-600">{formatCurrency(spent)} / {formatCurrency(budget)}</span>
                </div>
                <div className="budget-progress">
                  <div className={getProgressBarClass(percentage)} style={{ width: `${percentage}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="accounting-card">
          <h3 className="text-2xl font-bold mb-6 text-[#2B2E4A]">Detailed Expense Breakdown by Sub-Category</h3>
          <div className="space-y-6">
              {Object.entries(subCategoryBudgets).map(([categoryKey, subCategories]) => (
                  <div key={categoryKey}>
                      <h4 className="text-xl font-semibold mb-4 text-[#E3B330] capitalize">{categoryKey.replace('-', ' ')} Sub-Categories</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {Object.entries(subCategories).map(([subKey, subBudget]) => {
                              const spent = subCategorySpending[categoryKey]?.[subKey] || 0;
                              const percentage = subBudget > 0 ? (spent / subBudget) * 100 : 0;
                              return (
                                  <div key={subKey} className="p-4 bg-[#f9f5f1] rounded-lg">
                                      <div className="flex justify-between items-center mb-2">
                                          <span className="font-medium">{subCategoryLabels[categoryKey]?.[subKey] || subKey}</span>
                                          <span className="text-sm text-gray-600">{formatCurrency(spent)} / {formatCurrency(subBudget)}</span>
                                      </div>
                                      <div className="budget-progress">
                                          <div className={getProgressBarClass(percentage)} style={{ width: `${percentage}%` }}></div>
                                      </div>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              ))}
          </div>
      </section>
      <FinancialReports />
    </>
  );
};

export default Dashboard;