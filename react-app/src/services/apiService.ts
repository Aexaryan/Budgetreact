import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Expense {
  _id?: string;
  description: string;
  amount: number;
  category: string;
  subCategory: string;
  date: string;
  vendor?: string;
  receipt?: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Invoice {
  _id?: string;
  invoiceNumber: string;
  type: 'sponsorship' | 'investment' | 'advertising' | 'other';
  clientName: string;
  contactPerson?: string;
  clientEmail?: string;
  clientPhone?: string;
  clientAddress?: string;
  amount: number;
  currency: string;
  paymentTerms?: string;
  customTerms?: string;
  description?: string;
  dueDate?: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BudgetSummary {
  totalSpent: number;
  categoryBreakdown: Record<string, number>;
  subCategoryBreakdown: Record<string, number>;
}

export const apiService = {
  // Expense operations
  async getExpenses(): Promise<Expense[]> {
    const response = await api.get('/expenses');
    return response.data;
  },

  async createExpense(expense: Omit<Expense, '_id'>): Promise<Expense> {
    const response = await api.post('/expenses', expense);
    return response.data;
  },

  async updateExpense(id: string, expense: Partial<Expense>): Promise<Expense> {
    const response = await api.put(`/expenses/${id}`, expense);
    return response.data;
  },

  async deleteExpense(id: string): Promise<void> {
    await api.delete(`/expenses/${id}`);
  },

  // Invoice operations
  async getInvoices(): Promise<Invoice[]> {
    const response = await api.get('/invoices');
    return response.data;
  },

  async createInvoice(invoice: Omit<Invoice, '_id'>): Promise<Invoice> {
    const response = await api.post('/invoices', invoice);
    return response.data;
  },

  async updateInvoice(id: string, invoice: Partial<Invoice>): Promise<Invoice> {
    const response = await api.put(`/invoices/${id}`, invoice);
    return response.data;
  },

  async deleteInvoice(id: string): Promise<void> {
    await api.delete(`/invoices/${id}`);
  },

  // Budget operations
  async getBudgetSummary(): Promise<BudgetSummary> {
    const response = await api.get('/budget-summary');
    return response.data;
  },
};

export default apiService;
