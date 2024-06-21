import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const randomMessages = [
    '어떤 프로젝트를 찾아볼까요?', '새로운 아이디어를 찾아보세요!', '새로운 일상을 검색해볼까요?'
  ];

  const recentSearches = ['최근 검색어 1', '최근 검색어 2', '최근 검색어 3'];
  const recommendedSearches = ['추천 검색어 1', '추천 검색어 2', '추천 검색어 3'];

  const [searchPlaceholder, setSearchPlaceholder] = useState(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">🍅</Link>
        <div className="search-container">
          <input 
            type="text" 
            className="search" 
            placeholder={searchPlaceholder} 
            onFocus={() => setShowSuggestions(true)} 
            onBlur={() => setShowSuggestions(false)}
          />
          {showSuggestions && (
            <div className="suggestions">
              <div className="recent-searches">
                <p>최근 검색어</p>
                <ul>
                  {recentSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                  ))}
                </ul>
              </div>
              <div className="recommended-searches">
                <p>추천 검색어</p>
                <ul>
                  {recommendedSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <nav className="nav-left">
          <Link to="/main">홈</Link>
          <Link to="/funding">인기</Link>
          <Link to="/new">신규</Link>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/create">프로젝트 만들기</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
