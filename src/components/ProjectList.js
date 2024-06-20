import React, { useState } from 'react';
import '../styles/ProjectList.css';

const ProjectList = () => {
  const [bookmarked, setBookmarked] = useState(Array(18).fill(false));

  const projects = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `프로젝트 ${i + 1}`,
    description: `설명 ${i + 1}`,
  }));

  const toggleBookmark = (index) => {
    const newBookmarked = [...bookmarked];
    newBookmarked[index] = !newBookmarked[index];
    setBookmarked(newBookmarked);
  };

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <div className="loading-spinner"></div>
          </div>
          <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="funding-info">
              <div className="funding-bar">
                <div className="funding-bar-inner"></div>
              </div>
              <div className="funding-percentage">
                0%
                <button
                  className={`bookmark-button ${bookmarked[index] ? 'bookmarked' : ''}`}
                  onClick={() => toggleBookmark(index)}
                >
                  {bookmarked[index] ? '★' : '☆'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
