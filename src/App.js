// src/App.js
import React from 'react';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Navbar from './components/Navbar';
import './App.css';

// Import abstract shape images
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';
import img10 from './assets/img10.png';
import img11 from './assets/img11.png';
import img12 from './assets/img12.png';
import img13 from './assets/img13.png';
import img14 from './assets/img14.png';
import img15 from './assets/img15.png';
import img16 from './assets/img16.png';
import img17 from './assets/img17.png';
import img18 from './assets/img18.png';
import img19 from './assets/img19.png';
import img20 from './assets/img20.png';
import img21 from './assets/img21.png';
import img22 from './assets/img22.png';

function App() {
  return (
    <div className="app">
      {/* Background Abstract Shapes */}
      <div className="background-shapes">
        <img src={img1} alt=" " className="abstract-shape shape-1" />
        <img src={img2} alt="  " className="abstract-shape shape-2" />
        <img src={img3} alt="  " className="abstract-shape shape-3" />
        <img src={img4} alt="  " className="abstract-shape shape-4" />
        <img src={img5} alt="  " className="abstract-shape shape-5" />
        <img src={img6} alt="  " className="abstract-shape shape-6" />
        <img src={img7} alt="  " className="abstract-shape shape-7" />
        <img src={img8} alt="  " className="abstract-shape shape-8" />
        <img src={img9} alt="  " className="abstract-shape shape-9" />
        <img src={img10} alt="  " className="abstract-shape shape-10" />
        <img src={img11} alt="  " className="abstract-shape shape-11" />
        <img src={img12} alt="  " className="abstract-shape shape-12" />
        <img src={img13} alt="  " className="abstract-shape shape-13" />
        <img src={img14} alt="  " className="abstract-shape shape-14" />
        <img src={img15} alt="  " className="abstract-shape shape-15" />
        <img src={img16} alt="  " className="abstract-shape shape-16" />
        <img src={img17} alt="  " className="abstract-shape shape-17" />
        <img src={img18} alt="  " className="abstract-shape shape-18" />
        <img src={img19} alt="  " className="abstract-shape shape-19" />
        <img src={img20} alt="  " className="abstract-shape shape-20" />
        <img src={img21} alt="  " className="abstract-shape shape-21" />
        <img src={img22} alt="  " className="abstract-shape shape-22" />
      </div>

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