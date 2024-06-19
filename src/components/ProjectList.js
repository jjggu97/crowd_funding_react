import React from 'react';
import '../styles/ProjectList.css';

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
