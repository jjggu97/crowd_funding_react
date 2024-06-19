import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
