import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProjectSkeleton = () => (
  <div className="project-skeleton">
    <div className="project-card">
      <div className="project-image">
        <Skeleton height={200} />
      </div>
      <div className="project-details">
        <Skeleton height={30} style={{ marginBottom: 10 }} />
        <Skeleton count={3} />
      </div>
    </div>
  </div>
);

export default ProjectSkeleton;
