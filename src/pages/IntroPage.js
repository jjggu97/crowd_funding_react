import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/IntroPage.css';

const productNames = ['Product A', 'Product B', 'Product C'];
const IntroPage = () => {
  const [productName, setProductName] = useState(productNames[0]);
  const [viewerCount, setViewerCount] = useState(100);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setProductName(productNames[Math.floor(Math.random() * productNames.length)]);
    }, 2000);

    const countInterval = setInterval(() => {
      setViewerCount(Math.floor(Math.random() * 901) + 100);
    }, 2000);

    return () => {
      clearInterval(nameInterval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <div className="intro-page">
      <div className="intro-left">
        <h2>지금, 이 곳에서는</h2>
        <h1>{productName}</h1>
        <p>{viewerCount} 명이 보고 있어요.</p>
        <Link to="/main" className="start-button">지금 시작하기</Link>
      </div>
      <div className="intro-right">
        <div className="placeholder">이미지 영역</div>
      </div>
    </div>
  );
};

export default IntroPage;