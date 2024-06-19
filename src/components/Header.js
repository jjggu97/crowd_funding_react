import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Crowdfunding App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Project</Link>
      </nav>
    </header>
  );
};

export default Header;
