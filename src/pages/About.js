// src/components/About.js
import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScrollToPortfolio = () => {
    // Adjust scroll distance based on device
    const scrollDistance = isMobile ? 600 : 800;
    window.scrollBy({
      top: scrollDistance,
      behavior: 'smooth'
    });
  };

  return (
    <section id="about" className="section">
      <div className="about-container">
        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image">
              <img 
                src={process.env.PUBLIC_URL + "/pfp.jpg"} 
                alt="Aldi Beneditc Purba"
                loading="lazy"
              />
            </div>
            <div className="decorative-circles">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>
          </div>
          
          <div className="info-section">
            <div className="name-header">
              <h1>ALDI BENEDITC PURBA</h1>
              <div className="roles">
                <p>Character Designer/ Illustrator</p>
                <p>Graphic Designer</p>
                <p>Web & AI Enthusiast</p>
              </div>
            </div>
            
            <div className="description">
              <p>
                I am an undergraduate student from Medan State Polytechnic majoring in 
                Computer Engineering and Informatics and Software Engineering Technology 
                study program, still practicing using PHP, CSS, SQL, and HTML programming 
                languages and experienced in using Design and Illustration software as a 
                freelance illustrator through various media.
              </p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span>Medan, Indonesia</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Contact:</span>
                <span>aldipurba141@gmail.com</span>
              </div>
            </div>
            
            <button className="portfolio-btn" onClick={handleScrollToPortfolio}>
              VIEW PORTOFOLIO
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;