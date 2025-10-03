import React, { useState, useEffect } from 'react';
import { Expense } from '../types';

interface ExpenseFormProps {
  onAddExpense: (expense: Omit<Expense, 'id'>) => void;
}

const subCategories: { [key: string]: { [key: string]: string } } = {
  'pre-production': {
    'set-obstacle-design': 'Set & Obstacle Design ($12,000)',
    'travel': 'Travel ($7,000)',
    'marketing-prep': 'Marketing Prep ($7,000)',
    'pre-shoot-planning': 'Pre-Shoot Planning ($5,000)',
    'casting-selection': 'Casting & Selection ($2,000)'
  },
  'production': {
    'crew-salaries': 'Crew Salaries ($57,000)',
    'competitor-fees': 'Competitor Fees ($29,000)',
    'host-fees': 'Host Fees ($29,000)',
    'accommodation': 'Accommodation ($28,000)',
    'equipment-rental': 'Equipment Rental/Purchase ($23,100)',
    'transportation': 'Transportation ($15,500)',
    'catering-food': 'Catering & Food ($15,500)',
    'wardrobe-branding': 'Wardrobe & Branding ($10,000)',
    'insurance-permits': 'Insurance & Permits ($7,000)',
    'misc-onsite': 'Misc. On-Site Costs ($6,000)'
  },
  'post-production': {
    'editing': 'Editing ($30,000)',
    'sound-mixing-music': 'Sound Mixing & Music ($8,000)',
    'color-grading': 'Color Grading ($7,000)',
    'motion-graphics-branding': 'Motion Graphics & Branding ($6,000)',
    'final-mastering-delivery': 'Final Mastering & Delivery ($3,600)'
  },
  'marketing': {
    'pr-media-buys': 'PR & Media Buys ($15,000)',
    'trailer-production-ads': 'Trailer Production & Online Ads ($10,600)',
    'social-media-campaigns': 'Social Media Campaigns ($8,000)'
  },
  'contingency': {
    'emergency-unforeseen': 'Emergency & Unforeseen Costs',
  },
  'prize-fund': {
    'winner-prize': 'Winner Prize Money',
  }
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | ''>('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [vendor, setVendor] = useState('');
  const [receipt, setReceipt] = useState('');
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [notes, setNotes] = useState('');
  const [currentSubCategories, setCurrentSubCategories] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (category) {
      setCurrentSubCategories(subCategories[category] || {});
      setSubCategory('');
    } else {
      setCurrentSubCategories({});
      setSubCategory('');
    }
  }, [category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !subCategory) {
      alert('Please fill out all required fields.');
      return;
    }
    onAddExpense({
      description,
      amount: Number(amount),
      category,
      subCategory,
      date,
      vendor,
      receipt,
      status,
      notes,
    });
    // Reset form
    setDescription('');
    setAmount('');
    setCategory('');
    setSubCategory('');
    setDate(new Date().toISOString().split('T')[0]);
    setVendor('');
    setReceipt('');
    setStatus('pending');
    setNotes('');
  };

  return (
    <div className="expense-form">
      <h4 className="text-xl font-semibold mb-4 text-[#5D6D93]">Add New Expense</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Description</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-input" placeholder="Enter expense description" required />
        </div>
        <div className="form-group">
          <label className="form-label">Amount</label>
          <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="form-input" placeholder="0.00" step="0.01" required />
        </div>
        <div className="form-group">
          <label className="form-label">Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="form-input" required>
            <option value="">Select category</option>
            <option value="pre-production">Pre-Production</option>
            <option value="production">Production</option>
            <option value="post-production">Post-Production</option>
            <option value="marketing">Marketing</option>
            <option value="contingency">Contingency</option>
            <option value="prize-fund">Prize Fund</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Sub-Category</label>
          <select value={subCategory} onChange={e => setSubCategory(e.target.value)} className="form-input" required disabled={!category}>
            <option value="">Select sub-category</option>
            {Object.entries(currentSubCategories).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Vendor/Supplier</label>
          <input type="text" value={vendor} onChange={e => setVendor(e.target.value)} className="form-input" placeholder="Enter vendor name" />
        </div>
        <div className="form-group">
          <label className="form-label">Receipt/Invoice Number</label>
          <input type="text" value={receipt} onChange={e => setReceipt(e.target.value)} className="form-input" placeholder="Enter receipt number" />
        </div>
        <div className="form-group">
          <label className="form-label">Status</label>
          <select value={status} onChange={e => setStatus(e.target.value as any)} className="form-input" required>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Notes</label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} className="form-input" rows={3} placeholder="Additional notes"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;