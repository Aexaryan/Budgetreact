import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AccountingSystem: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'LimitEdge2024!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('authenticated', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('authenticated');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">🔐 Secure Access</h1>
            <p className="text-gray-600">Enter password to access accounting system</p>
            <p className="text-sm text-gray-500 mt-2">Password: LimitEdge2024!</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Accounting System</h1>
            <p className="text-gray-600">Manage expenses and invoices for Limited Edge Budget</p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Expenses</h3>
            <p className="text-3xl font-bold text-blue-600">$0</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Expenses</h3>
            <p className="text-3xl font-bold text-yellow-600">0</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Approved Expenses</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Accounting System Ready</h3>
          <p className="text-gray-600">
            The accounting system is now accessible. You can manage expenses, create invoices, and track your budget in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingSystem;
