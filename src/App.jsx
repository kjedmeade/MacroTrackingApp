import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import FoodLog from './components/FoodLog';
import MacroGoals from './components/MacroGoals';
import { logoutUser } from './firebase';
import './App.css';

const AppContent = () => {
  const { user, loading } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If user is not logged in, show authentication
  if (!user) {
    return (
      <div className="auth-container">
        {showRegister ? (
          <Register onSwitchToLogin={() => setShowRegister(false)} />
        ) : (
          <Login onSwitchToRegister={() => setShowRegister(true)} />
        )}
      </div>
    );
  }

  // If user is logged in, show main app
  return (
    <div className="app">
      {/* Navigation Header */}
      <nav className="nav-bar">
        <div className="nav-brand">
          <h1>MacroTracker</h1>
        </div>
        <div className="nav-links">
          <button 
            className={currentView === 'dashboard' ? 'active' : ''}
            onClick={() => setCurrentView('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={currentView === 'foodlog' ? 'active' : ''}
            onClick={() => setCurrentView('foodlog')}
          >
            Food Log
          </button>
          <button 
            className={currentView === 'goals' ? 'active' : ''}
            onClick={() => setCurrentView('goals')}
          >
            Goals
          </button>
          <button 
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'foodlog' && <FoodLog />}
        {currentView === 'goals' && <MacroGoals />}
      </main>
    </div>
  );
};

// Main App Component with Auth Provider
const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;