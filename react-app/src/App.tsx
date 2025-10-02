import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar.tsx';
import HomePage from './pages/HomePage.tsx';
import BudgetOverview from './pages/BudgetOverview.tsx';
import AccountingSystem from './pages/AccountingSystem.tsx';
import TheChallenge from './pages/TheChallenge.tsx';
import { 
  TeaserPilot, 
  InvestorBenefits, 
  PreProduction, 
  Production, 
  PostProduction, 
  Marketing, 
  Contingency, 
  ParticipantRequirements 
} from './pages/OtherPages.tsx';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/budget-overview" element={<BudgetOverview />} />
            <Route path="/accounting" element={<AccountingSystem />} />
            <Route path="/the-challenge" element={<TheChallenge />} />
            <Route path="/teaser-pilot" element={<TeaserPilot />} />
            <Route path="/investor-benefits" element={<InvestorBenefits />} />
            <Route path="/pre-production" element={<PreProduction />} />
            <Route path="/production" element={<Production />} />
            <Route path="/post-production" element={<PostProduction />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/contingency" element={<Contingency />} />
            <Route path="/participant-requirements" element={<ParticipantRequirements />} />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
