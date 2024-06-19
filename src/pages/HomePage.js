import React from 'react';
import Carousel from '../components/Carousel';
import ProjectList from '../components/ProjectList';

const HomePage = () => {
  return (
    <div className="home-page">
      <Carousel />
      <ProjectList />
    </div>
  );
};

export default HomePage;
