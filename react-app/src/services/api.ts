import axios from 'axios';
import { Expense, Invoice } from '../types';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Auth API
export const login = (password: string) => api.post('/login', { password });

// Expense APIs
export const getExpenses = () => api.get<Expense[]>('/expenses');
export const createExpense = (expenseData: Omit<Expense, 'id'>) => api.post<Expense>('/expenses', expenseData);
export const updateExpense = (id: string, expenseData: Partial<Expense>) => api.put<Expense>(`/expenses/${id}`, expenseData);
export const deleteExpense = (id: string) => api.delete(`/expenses/${id}`);

// Invoice APIs
export const getInvoices = () => api.get<Invoice[]>('/invoices');
export const createInvoice = (invoiceData: Omit<Invoice, 'id' | 'invoiceNumber'>) => api.post<Invoice>('/invoices', invoiceData);
export const updateInvoice = (id: string, invoiceData: Partial<Invoice>) => api.put<Invoice>(`/invoices/${id}`, invoiceData);
export const deleteInvoice = (id: string) => api.delete(`/invoices/${id}`);

export default api;