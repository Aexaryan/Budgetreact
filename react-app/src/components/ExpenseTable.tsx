import React from 'react';
import { Expense } from '../types';

interface ExpenseTableProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

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

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, onDeleteExpense }) => {
  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString();
  const getStatusClass = (status: string) => `status-badge status-${status}`;

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Recent Expenses</h4>
      <div className="overflow-x-auto">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Sub-Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map(expense => (
                <tr key={expense.id}>
                  <td>{formatDate(expense.date)}</td>
                  <td>{expense.description}</td>
                  <td>{formatCurrency(expense.amount)}</td>
                  <td className="capitalize">{expense.category.replace('-', ' ')}</td>
                  <td>{subCategoryLabels[expense.category]?.[expense.subCategory] || expense.subCategory}</td>
                  <td><span className={getStatusClass(expense.status)}>{expense.status.toUpperCase()}</span></td>
                  <td>
                    <button onClick={() => alert('Edit functionality coming soon!')} className="text-blue-600 hover:underline text-sm">Edit</button>
                    <button onClick={() => onDeleteExpense(expense.id)} className="text-red-600 hover:underline ml-4 text-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4">No expenses recorded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;