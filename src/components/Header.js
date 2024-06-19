import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Logo</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/funding">Funding</Link>
        <Link to="/preorder">Preorder</Link>
        <input type="text" placeholder="Search..." className="search" />
        <div className="nav-buttons">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/create">Create Project</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
