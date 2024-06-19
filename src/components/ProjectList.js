import React from 'react';
import '../styles/ProjectList.css';

const ProjectList = () => {
  // 프로젝트 목록을 나타내는 더미 데이터
  const projects = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    description: `Description of Project ${i + 1}`
  }));

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
