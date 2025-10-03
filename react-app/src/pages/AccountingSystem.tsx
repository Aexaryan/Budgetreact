import React, { useState, useEffect, useCallback } from 'react';
import PasswordProtect from '../components/PasswordProtect';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import InvoiceForm from '../components/InvoiceForm';
import InvoiceTable from '../components/InvoiceTable';
import { Expense, Invoice } from '../types';
import {
  getExpenses,
  createExpense,
  deleteExpense,
  getInvoices,
  createInvoice,
  deleteInvoice,
} from '../services/api';

const AccountingSystem: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllData = useCallback(async () => {
    try {
      setIsLoading(true);
      const [expensesRes, invoicesRes] = await Promise.all([getExpenses(), getInvoices()]);
      setExpenses(expensesRes.data);
      setInvoices(invoicesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Failed to fetch data from the server.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      if (sessionStorage.getItem('authenticated') === 'true') {
        setIsAuthenticated(true);
        fetchAllData();
      }
    };
    checkAuth();
  }, [fetchAllData]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('authenticated');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('authenticated', 'true');
    fetchAllData();
  };

  const handleAddExpense = async (expenseData: Omit<Expense, 'id'>) => {
    try {
      const res = await createExpense(expenseData);
      setExpenses(prev => [res.data, ...prev]);
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Failed to add expense.');
    }
  };

  const handleDeleteExpense = async (id: string) => {
    try {
      await deleteExpense(id);
      setExpenses(prev => prev.filter(exp => exp.id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
      alert('Failed to delete expense.');
    }
  };

  const handleAddInvoice = async (invoiceData: Omit<Invoice, 'id' | 'invoiceNumber'>) => {
    try {
      // Create a temporary invoice number for the backend to replace
      const tempInvoiceNumber = `TEMP-${Date.now()}`;
      const res = await createInvoice({ ...invoiceData, invoiceNumber: tempInvoiceNumber });
      setInvoices(prev => [res.data, ...prev]);
    } catch (error) {
      console.error('Error adding invoice:', error);
      alert('Failed to add invoice.');
    }
  };

  const handleDeleteInvoice = async (id: string) => {
    try {
      await deleteInvoice(id);
      setInvoices(prev => prev.filter(inv => inv.id !== id));
    } catch (error) {
      console.error('Error deleting invoice:', error);
      alert('Failed to delete invoice.');
    }
  };

  if (!isAuthenticated) {
    return <PasswordProtect onAuthenticated={handleLogin} />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading financial data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={handleLogout} />
      <header className="bg-[#2B2E4A] text-white p-8 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">ACCOUNTING SYSTEM</h1>
        <p className="mt-2 text-xl font-bold">FINANCIAL MANAGEMENT & TRACKING</p>
        <p className="mt-4 text-lg text-white">Secure Budget Control & Expense Management</p>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        <Dashboard expenses={expenses} />

        <section className="accounting-card">
          <h3 className="text-2xl font-bold mb-6 text-[#2B2E4A]">Expense Management</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ExpenseForm onAddExpense={handleAddExpense} />
            <ExpenseTable expenses={expenses} onDeleteExpense={handleDeleteExpense} />
          </div>
        </section>

        <section className="accounting-card">
          <h3 className="text-2xl font-bold mb-6 text-[#2B2E4A]">Invoice Management</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InvoiceForm onAddInvoice={handleAddInvoice} />
            <InvoiceTable invoices={invoices} onDeleteInvoice={handleDeleteInvoice} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountingSystem;