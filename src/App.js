import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import IntroPage from './pages/IntroPage';
import FundingPage from './pages/FundingPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/main" element={<HomePage />} />
            <Route path="/funding" element={<FundingPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
