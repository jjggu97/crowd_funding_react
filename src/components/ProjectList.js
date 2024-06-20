import React from 'react';
import '../styles/ProjectList.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="funding-info">
          <div className="funding-bar">
            <div className="funding-bar-inner"></div>
          </div>
          <div className="funding-percentage">0%</div>
          <button className="bookmark-button">☆</button>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const projects = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `프로젝트 ${i + 1}`,
    description: `설명 ${i + 1}`
  }));

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image"></div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
