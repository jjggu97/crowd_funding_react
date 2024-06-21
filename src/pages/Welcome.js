import React from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="welcome-content">
        <span className="emoji" role="img" aria-label="Confetti Ball">🎉</span>
        <h2>토마토에 오신 걸 환영합니다!</h2>
        <p>한번 둘러볼까요?</p>
        <Link to="/main" className="main-link">Go!</Link>
      </div>
    </div>
  );
};

export default Welcome;
