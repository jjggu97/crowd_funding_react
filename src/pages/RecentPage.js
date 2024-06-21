import React from 'react';
import '../styles/FundingPage.css';

const FundingPage = () => {
  const skeletons = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="funding-page">
      <h1>신규 상품 모음🎁</h1>
      <div className="funding-list">
        {skeletons.map((_, index) => (
          <div key={index} className="funding-card skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text short"></div>
            <div className="skeleton-percentage">
              <div className="skeleton-bar"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingPage;
