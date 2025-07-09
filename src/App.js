// src/App.js
import React from 'react';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <About />
        <Education />
        <Experience />
        <Project />
        <Certificate />
      </div>
    </div>
  );
}

export default App;