import React, { useState } from 'react';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSave = () => {
    console.log('프로젝트 정보:', {
      title,
      content,
      image,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="project-page">
      <h2>프로젝트 만들기</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">사진 첨부</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="button" onClick={handleSave}>저장</button>
      </form>
    </div>
  );
};

export default ProjectPage;
