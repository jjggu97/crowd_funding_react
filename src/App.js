import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import FundingPage from './pages/FundingPage';
import './App.css';
import RecentPage from './pages/RecentPage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import AccountFind from './pages/AccountFind';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/main" element={<HomePage />} />
            <Route path="/funding" element={<FundingPage />} />
            <Route path='/new' element={<RecentPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="/account-find" element={<AccountFind />} />
            <Route path="/signup" element={<AccountPage />} />
            <Route path="/welcome" element={<Welcome />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
