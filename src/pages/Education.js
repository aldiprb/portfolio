// src/components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  const educations = [
    {
      institution: "High School Santo Thomas 3 Medan, 2019",
      description: "Santo Thomas 3 Medan is a school that is in the den banco foundation, participated in several activities while studying here, such as competitions, being the head of extra-curricular art, and being a member of the student council.",
      score: "91/100",
      scoreLabel: "Average Score",
      type: "school",
      image: "/santomas.jpg" // Path relatif dari folder public
    },
    {
      institution: "Medan State Polytechnic, 2023",
      description: "Politeknik Negeri Medan is a State Polytechnic established in 1967 (Polytechnic University of North Sumatra). Currently I am pursuing a D4 level of education in semester 3 with the Software Engineering Technology study program, with a GPA of 3.83. I also participated in student organizations, namely the Study Program Student Association.",
      score: "3.83 / 4.00",
      scoreLabel: "GPA (Under-Graduate)",
      type: "college",
      image: "/polmed.jpg" // Path relatif dari folder public
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-container">
        <h2 className="section-title">Educations</h2>
        
        <div className="education-container">
          {educations.map((edu, index) => (
            <div key={index} className={`education-card ${edu.type}`}>
              <img 
                src={edu.image} 
                alt={edu.institution}
                className="education-image"
              />
              
              <div className="education-content">
                <div className="education-header">
                  <h3>{edu.institution} {edu.date}</h3>
                  <div className="education-meta">
                  </div>
                </div>
                <p className="education-description">{edu.description}</p>
                <div className="education-score">
                  {edu.scoreLabel}: <span>{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;