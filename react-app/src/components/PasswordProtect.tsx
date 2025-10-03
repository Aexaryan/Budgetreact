import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { login } from '../services/api';

interface PasswordProtectProps {
  onAuthenticated: () => void;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login(password);
      sessionStorage.setItem('authenticated', 'true');
      onAuthenticated();
    } catch (err) {
      setError('Incorrect password. Please try again.');
      console.error(err);
      setIsLoading(false);
    }
  };

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
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PasswordProtect;