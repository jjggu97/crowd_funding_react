import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import FundingPage from './pages/FundingPage';
import './App.css';
import RecentPage from './pages/RecentPage';

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
            <Route path='/new' element={<RecentPage />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
