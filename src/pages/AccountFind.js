import React, { useState } from 'react';
import '../styles/AccountFind.css';

const AccountFind = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleFindId = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('이름과 전화번호를 모두 입력해주세요.');
    }
  };

  const handleFindPassword = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('이름과 전화번호를 모두 입력해주세요.');
    }
  };

  return (
    <div className="account-find">
      <h2>아이디 / 비밀번호 찾기</h2>
      <form>
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
          <label htmlFor="phone">전화번호</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleFindId}>
            아이디 찾기
          </button>
          <button type="submit" onClick={handleFindPassword}>
            비밀번호 찾기
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountFind;
