import React, { useState } from 'react';
import '../styles/AccountPage.css';

const AccountPage = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const calculatePasswordStrength = (password) => {
    if (password.length === 0) return '안전도 표시';
    if (/\d/.test(password) && /[a-zA-Z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
      return '높음';
    } else if (/\d/.test(password) || /[a-zA-Z]/.test(password)) {
      return '보통';
    } else {
      return '낮음';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAgreed) {
      alert('약관에 동의해주세요.');
      return;
    }
    console.log('회원가입 정보:', {
      name,
      username,
      password,
      email,
      phone,
      address,
    });
    // 회원가입 성공 후 다음 페이지로 넘어가는 로직을 추가할 수 있습니다.
  };

  return (
    <div className="account-page">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="button">중복확인</button>
          <small>최소 4자 이상 12자 이하로 입력 가능합니다.</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <small>최소 8자 이상 16자 이하로 입력 가능합니다.</small>
          <div className="password-strength">{calculatePasswordStrength(password)}</div>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="button">비밀번호 확인</button>
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small>예: example@example.com</small>
        </div>
        <div className="form-group">
          <label htmlFor="phone">전화번호</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <small> - 없이 입력해주세요.</small>
        </div>
        <div className="form-group">
          <label htmlFor="address">주소</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button type="button">주소검색</button>
          <div>
            <input type="text" placeholder="기본주소" />
            <input type="text" placeholder="상세주소" />
          </div>
        </div>
        <div className="form-group terms">
          <input
            type="checkbox"
            id="termsAgreed"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            required
          />
          <label htmlFor="termsAgreed">약관동의</label>
          <button type="button">약관보기</button>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default AccountPage;
