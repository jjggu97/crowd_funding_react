import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="login-page">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">로그인</button>
        <div className="links">
          <Link to="/account-find">로그인 정보를 잊으셨나요?</Link>
          <Link to="/signup">아직 토마토 회원이 아닌가요?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
