import React from 'react';
import ProjectList from '../components/ProjectList';

const HomePage = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectList projects={projects} />
    </div>
  );
};

export default HomePage;
