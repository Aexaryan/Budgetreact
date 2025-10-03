import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="professional-nav text-white p-4">
      <div className="nav-container flex justify-between items-center">
        <NavLink to="/" className="nav-brand">
          <img src="/logo.jpg" alt="Limit Edge Logo" className="h-8 w-auto mr-3" />
          Limit Edge Reality Show
        </NavLink>

        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <div className="nav-item">
            <NavLink to="/" className="nav-link-pro home-link">Home</NavLink>
          </div>

          <div className="nav-item dropdown">
            <div className="nav-link-pro dropdown-toggle">Budget</div>
            <div className="dropdown-menu">
              <div className="dropdown-header">Budget Management</div>
              <NavLink to="/budget-overview" className="dropdown-item">Overview</NavLink>
              <NavLink to="/accounting" className="dropdown-item">Accounting System</NavLink>
            </div>
          </div>

          <div className="nav-item">
            <button onClick={onLogout} className="nav-link-pro">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;