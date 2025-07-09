// src/components/Certificate.js
import React from 'react';
import './Certificate.css';
import webbasicImage from './images/thumbnails/webbasic.jpg';
import cloudImage from './images/thumbnails/cloud.jpg';
import cyberxploreImage from './images/thumbnails/cyberxplore.jpg';

const Certificate = () => {
  const certificates = [
    {
      title: "Learn Web Programming Basics",
      issuer: "Dicoding",
      date: "2025",
      description: "This class thoroughly covers the basics of HTML and CSS, the three foundations of website creation. This foundation is essential for those who want to develop their website development skills to a more advanced level. Compiled and verified by Dicoding's team of experts, the material presented is structured and comprehensive.",
      thumbnail: webbasicImage, // Ganti dengan path gambar Anda
      pdfLink: "https://drive.google.com/file/d/1xxk9K1h72EYRwxjqQE413ZpcIrgKvgSj/view?usp=sharing" // Ganti dengan link Google Drive Anda
    },
    {
      title: "Learn Cloud and Gen AI on AWS",
      issuer: "Dicoding",
      date: "2025",
      description: "The class is intended for beginners who want to start their career in cloud computing by referring to AWS's international competency standards. At the end of the class, students can understand AWS Cloud with all types of services, global infrastructure, and prices.",
      thumbnail: cloudImage, // Ganti dengan path gambar Anda
      pdfLink: "https://drive.google.com/file/d/10fGYNjPqm67vu8LcNzaAnamsL3hecHaA/view?usp=sharing" // Ganti dengan link Google Drive Anda
    },
    {
      title: "Cyber Security",
      issuer: "CyberXplore",
      date: "2025",
      description: "the 'CyberXplore Security 2025' webinar likely covered foundational topics in cybersecurity, including the importance of digital security, common cyber threats such as malware and phishing, and ethical practices in the digital world. The event may have also introduced basic tools and techniques used in cybersecurity, such as penetration testing, network analysis, and secure software development practices. Aimed at students and beginners, the webinar was designed to raise awareness and provide practical insights into the latest trends and challenges in the field of cybersecurity.",
      thumbnail: cyberxploreImage, // Ganti dengan path gambar Anda
      pdfLink: "https://drive.google.com/file/d/1PZH7ZWR5xvZpXkN_yg-cUUZ3S77ul6YF/view?usp=sharing" // Ganti dengan link Google Drive Anda
    }
  ];

  const handleCertificateClick = (pdfLink) => {
    window.open(pdfLink, '_blank');
  };

  return (
    <section id="certificate" className="section">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>
        
        <div className="certificates-container">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="certificate-card"
              onClick={() => handleCertificateClick(cert.pdfLink)}
            >
              <div className="certificate-thumbnail">
                <img 
                  src={cert.thumbnail} 
                  alt={`${cert.title} certificate`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="certificate-icon-fallback">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
                <div className="certificate-overlay">
                  <div className="certificate-type-badge">Certificate</div>
                  <div className="view-text">Click to view PDF</div>
                </div>
              </div>
              <div className="certificate-content">
                <div className="certificate-header">
                  <h3>{cert.title}</h3>
                  <div className="certificate-date">{cert.date}</div>
                </div>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;