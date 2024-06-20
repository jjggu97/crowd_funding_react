import React, { useState, useEffect } from 'react';
import '../styles/ProjectList.css';

const ProjectCard = ({ project, isLoading, toggleBookmark, isBookmarked }) => {
  return (
    <div className="project-card">
      <div className={`project-image ${isLoading ? 'loading' : ''}`}>
        {isLoading ? <div className="loading-spinner"></div> : null}
      </div>
      <div className="project-details">
        <h2>{isLoading ? <div className="skeleton-loader"></div> : project.title}</h2>
        <p>{isLoading ? <div className="skeleton-loader"></div> : project.description}</p>
        <div className="funding-info">
          <div className={`funding-bar ${isLoading ? 'loading' : ''}`}>
            <div className="funding-bar-inner"></div>
          </div>
          <div className="funding-percentage">
            {isLoading ? <div className="skeleton-loader"></div> : '0%'}
            <button
              className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`}
              onClick={toggleBookmark}
            >
              {isBookmarked ? '★' : '☆'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const [bookmarked, setBookmarked] = useState(Array(100).fill(false)); // Assuming 100 projects
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate a 2-second delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const fetchedProjects = Array.from({ length: 100 }, (_, i) => ({
          id: i + 1,
          title: `프로젝트 ${i + 1}`,
          description: `설명 ${i + 1}`,
        }));
        setProjects(fetchedProjects);
        setIsLoading(false);
      } catch (error) {
        console.error('프로젝트 데이터 가져오기 실패:', error);
      }
    };

    fetchProjects();
  }, []);

  const toggleBookmark = (index) => {
    const newBookmarked = [...bookmarked];
    newBookmarked[index] = !newBookmarked[index];
    setBookmarked(newBookmarked);
  };

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          isLoading={isLoading}
          toggleBookmark={() => toggleBookmark(index)}
          isBookmarked={bookmarked[index]}
        />
      ))}
    </div>
  );
};

export default ProjectList;
