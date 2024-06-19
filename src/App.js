// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CreateProject from './components/CreateProject';

const App = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
        <Route path="/create" element={<CreateProject addProject={addProject} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
