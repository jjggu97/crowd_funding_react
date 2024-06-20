import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">🌐</Link>
      <nav>
        <div className="nav-left">
          <Link to="/main">홈</Link>
          <Link to="/funding">인기</Link>
          <Link to="/preorder">신규</Link>
        </div>
        <input type="text" placeholder="검색..." className="search" />
        <div className="nav-right">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/create">프로젝트 만들기</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
