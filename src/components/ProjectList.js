import React, { useState } from 'react';
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
  const [bookmarked, setBookmarked] = useState(Array(18).fill(false));
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // 임의의 지연 시간 추가
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
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
