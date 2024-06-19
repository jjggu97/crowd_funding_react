import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Title</h1>
      <nav>
        <a href="/">Home</a>

        <a href="/create">Create Project</a>
      </nav>
    </header>
  );
};

export default Header;
