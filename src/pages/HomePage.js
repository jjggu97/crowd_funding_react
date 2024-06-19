import React from 'react';
import ProjectList from '../components/ProjectList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Projects</h2>
      <ProjectList />
    </div>
  );
};

export default HomePage;
