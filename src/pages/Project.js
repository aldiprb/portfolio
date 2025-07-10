// src/components/Project.js
import React, { useState } from 'react';
import './Project.css';
import crownImage from './images/thumbnails/crown.jpg';
import idcardImage from './images/thumbnails/idcard.jpg';
import calenderImage from './images/thumbnails/calender.jpg';
import tshirtImage from './images/thumbnails/tshirt.jpg';
import recruitmentImage from './images/thumbnails/recruitment.jpg';
import christmasImage from './images/thumbnails/christmas.jpg';
import introImage from './images/thumbnails/intro.jpg';
import tournamentImage from './images/thumbnails/tournament.jpg';
import mascotImage from './images/thumbnails/mascot.jpg';
import whiteImage from './images/thumbnails/white.jpg';
import pastorImage from './images/thumbnails/pastor.jpg';
import luffyImage from './images/thumbnails/luffy.jpg';
import ayamImage from './images/thumbnails/ayam.jpg';
import rumahsakitImage from './images/thumbnails/rumahsakit.jpg';
import santaiImage from './images/thumbnails/santai.jpg';

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});
  
  const categories = [
    { id: 'web', name: 'Web &  AI Programming' },
    { id: 'illustration', name: 'Illustration' },
    { id: 'design', name: 'Graphic Design' }
  ];
  
  // Helper function to extract Google Drive file ID from URL
  const extractGoogleDriveId = (url) => {
    const patterns = [
      /\/d\/([a-zA-Z0-9-_]+)/,
      /id=([a-zA-Z0-9-_]+)/,
      /\/file\/d\/([a-zA-Z0-9-_]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  // Helper function to get Google Drive preview URL
  const getGoogleDrivePreview = (url) => {
    const fileId = extractGoogleDriveId(url);
    if (!fileId) return url;
    
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };
  
  const projects = [
    {
      title: "SANT.AI",
      year: "2025",
      category: "web",
      description: "SANT.AI is a web application that uses the React.js framework based on AI Computer Vision designed to identify the quality of palm oil liquid waste or POME (Palm Oil Mill Effluent) and also uses a simple AI chatbot that is used for questions about palm oil.",
      mediaUrl: "https://drive.google.com/file/d/1z_4HHVuBR2pjIPHNiuFiy8EXtI-lOnCr/view?usp=sharing",
      mediaType: "video",
      thumbnail: santaiImage // Local thumbnail
    },
    {
      title: "Study Program Mascot of Software Engineering",
      year: "2024",
      category: "illustration",
      mediaUrl: "https://drive.google.com/file/d/1EhAmFkaxhW5DhXeRkeUKfYT9gvgvpyVL/view?usp=sharing",
      mediaType: "image",
      thumbnail: mascotImage // Local thumbnail
    },
    {
      title: "Fantasy Character: White Ethnic Mage",
      year: "2024",
      category: "illustration",
      mediaUrl: "https://drive.google.com/file/d/1KwtPePncuvufiryReugKwUMBrGYI19Ur/view?usp=sharing",
      mediaType: "image",
      thumbnail: whiteImage // Local thumbnail
    },
    {
      title: "Product Book (Crown)",
      year: "2022",
      category: "design",
      description: `This promotional design for Crown Textile & Tailor – Men's Collection showcases a premium men's tailoring service with a luxurious maroon and gold theme. Featuring a stylized crown logo, glowing serif fonts, and a sharp suit visual, it emphasizes elegance and exclusivity. Two package options are clearly presented: "Horse Hair Interlining" and "Regular Lining," each offering combinations of suit, trousers, vest, shirt, and tie with prices in Indonesian Rupiah. The use of gradients, shadows, and watermark branding enhances the premium feel and brand identity.`,
      mediaUrl: "https://drive.google.com/file/d/1Vo3va5s-aaWvr0JbO-BDPNmaN_3rkxmd/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: crownImage // Changed: Use the imported image directly
    },
    {
      title: "Fantasy Character: Unexpected Pastor",
      year: "2025",
      category: "illustration",
      mediaUrl: "https://drive.google.com/file/d/1dAc8gqX8nO0q2WWR9yBWchokcujHN6un/view?usp=sharing",
      mediaType: "image",
      thumbnail: pastorImage // Local thumbnail
    },
    {
      title: "Gear 5 Luffy",
      year: "2022",
      category: "illustration",
      mediaUrl: "https://drive.google.com/file/d/1DwxGZecEAGWys2wHrnBKgOJRLj1Cj3uj/view?usp=sharing",
      mediaType: "image",
      thumbnail: luffyImage // Local thumbnail
    },
    {
      title: "Website Ayam Geprek Mas Andre",
      year: "2024",
      category: "web",
      description: "This website is a CRUD website for ordering food Client-Server which is made using Native Programming in PHP, CSS, JavaScript and HTML as HyperText. In the client or user interface, you can order food which will later be entered into the database, and in the admin section, you can run CRUD on the product and see orders from the client.",
      mediaUrl: "https://drive.google.com/file/d/1iKz7kg8fUeFipjs9iiGmXlSyC43R3pJT/view?usp=sharing",
      mediaType: "video",
      thumbnail: ayamImage // Local thumbnail
    },
    {
      title: "Hospital Website",
      year: "2025",
      category: "web",
      description: "Admin website that uses CI4 Framework where the website can perform CRUD on the patient biodata page, the patient's illness and its description, and the medicine that the patient will use. Link: https://rspolmed.wuaze.com/index.php/login Username : test pass : test123",
      mediaUrl: "https://drive.google.com/file/d/150GWd3aHyaKrWNSStLLoy-d3m-8aq1Kd/view?usp=sharing",
      mediaType: "video",
      thumbnail: rumahsakitImage // Local thumbnail
    },
    {
      title: "Student Council ID Card",
      year: "2024",
      category: "design",
      description: `This poster design presents a modern and dynamic layout, highlighting a member of an organization in a bold and engaging way. The central focus is on the individual's photo, outlined in white to stand out against a vibrant purple and orange background featuring repeated text for depth. A monochromatic silhouette adds visual interest, while the large, shadowed name text draws immediate attention. The clean lower section displays the role ("Member | Publication & Documentation") within a bright orange container, accompanied by social media icons to emphasize connectivity. Overall, the design effectively combines layered typography, strong color contrast, and digital aesthetics to create a professional and appealing member profile poster.`,
      mediaUrl: "https://drive.google.com/file/d/1Y7lKQJYLbgUDUfB--ScuJ9jc2spWaksF/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: idcardImage // Changed: Use the imported image directly
    },
    {
      title: "Calender A3",
      year: "2023",
      category: "design",
      description: `The 2024 calendar design for GEKISIA Medan features a spiritually uplifting and organized aesthetic, combining a serene top banner with practical monthly layouts; the upper section showcases a powerful silhouette of a cross and a person gazing at a vast sky with birds, evoking a sense of hope and freedom, while the lower portion cleanly presents two months at a time with a clear, readable grid, accented by warm, earthy tones and subtle gradients, creating an overall impression that is both reverent and user-friendly.`,
      mediaUrl: "https://drive.google.com/file/d/1_QGlT8ZO6t6MBxT0_IJrFbarukeNk63S/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: calenderImage // Changed: Use the imported image directly
    },
    {
      title: "T-shirt Design Prototype",
      year: "2023",
      category: "design",
      description: `The design for "RETREAT PPPR KORWILA V" features a modern and inspiring aesthetic, centered around a bold dark blue sphere textured with light, flowing topographical lines, which evokes a sense of depth and journey; superimposed on this sphere are the large, impactful yellow words "PRODUCTIVE AND CREATIVE LIFE," rendered in a clear, strong typeface, suggesting the core themes of the retreat, while subtle touches like three small crosses at the top, a few scattered stars, and fluffy white clouds add spiritual and whimsical elements against a cool blue background with a subtle dotted pattern, creating an overall impression that is both motivational and spiritually grounded.`,
      mediaUrl: "https://drive.google.com/file/d/1nHaeYM5UPKy_LypajpCPTZgUaUf_2Jw8/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: tshirtImage // Changed: Use the imported image directly
    },
    {
      title: "IG Post Design",
      year: "2025",
      category: "design",
      description: `This document is an open recruitment poster for the 2025/2026 Software Student Association administrators. This poster includes a list of available divisions (Daily Management Board, Arts and Sports, Publication and Documentation, Secretariat, Public Relations, Science and Technology, Christian Religion, and Islamic Religion), general qualifications of applicants (active 3-5 semester students of POLMED, GPA min 3.00, have a Student ID Card, and attach certificates if any), as well as special requirements for the Publication & Documentation Division (ability to edit photos/videos and understand TikTok/Instagram) and the Science and Technology Division (uploading CV and portfolio). Contact information is also provided via Instagram and email.`,
      mediaUrl: "https://drive.google.com/file/d/1MOIUIu8rXjJEUWYvroik9PSu-XsrxbiH/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: recruitmentImage // Changed: Use the imported image directly
    },
    {
      title: "Christmas Banner",
      year: "2023",
      category: "design",
      description: `The "Christmas Celebration" design for GEKISIA Jemaat Medan conveys a festive yet reverent atmosphere, blending a sophisticated dark central panel with a lighter, understated gray background; the central section prominently features a cross and the elegant, celebratory text "Christmas Celebration," enhanced by falling golden confetti and sparkling stars that evoke a sense of joy and occasion, while the clear date and time on the left, along with the church's logo and address on the right, provide essential practical details, creating an overall impression that is both inviting and spiritually focused for the upcoming celebration.`,
      mediaUrl: "https://drive.google.com/file/d/1IgDjGPMse-ENHLnibSkBPwkVdheyBYoX/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: christmasImage // Changed: Use the imported image directly
    },
    {
      title: "Introduction Banner",
      year: "2024",
      category: "design",
      description: `The design for "PKKMB TRPL 24!" by Politeknik Negeri Medan presents a dynamic and engaging visual, primarily characterized by its vibrant purple background and striking 3D-rendered green text that immediately captures attention; the inclusion of elements like a flying airplane, a laptop displaying "HELLO WORLD," and a briefcase cleverly suggests themes of technology, innovation, and learning, while the prominent date "26 Agustus 2024" on a contrasting orange panel grounds the design in a specific event, creating an overall impression that is energetic, modern, and highly relevant to an academic technology program.`,
      mediaUrl: "https://drive.google.com/file/d/1r2YB9b8lFOH5M63wHRRqeclygslBg-kV/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: introImage // Changed: Use the imported image directly
    },
    {
      title: "Tournament Banner",
      year: "2025",
      category: "design",
      description: `The design for the Mobile Legends: Bang Bang tournament creates an exciting and energetic impression, primarily through its vibrant purple and pink color scheme and dynamic portrayal of two popular game characters in action poses, flanking the bold "TOURNAMENT" text; the prominent placement of the "Mobile Legends: Bang Bang" logo reinforces the event's focus, while essential details like the dates "09 | 17 MEI 2025," "CAFE BOY" location, and a QR code are integrated clearly, resulting in an overall design that is visually appealing, action-oriented, and effectively communicates the essence of an esports event.`,
      mediaUrl: "https://drive.google.com/file/d/1f60P1c0eRSnNMcA02yKJ0wtUa2fScaYN/view?usp=sharing",
      mediaType: "pdf",
      thumbnail: tournamentImage // Changed: Use the imported image directly
    }
    
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleMediaClick = (project) => {
    if (project.mediaType === 'video' || project.mediaType === 'pdf') {
      window.open(getGoogleDrivePreview(project.mediaUrl), '_blank');
    } else {
      window.open(project.mediaUrl, '_blank');
    }
  };

  const handleImageLoad = (e, projectTitle) => {
    setLoadedImages(prev => ({
      ...prev,
      [projectTitle]: true
    }));
  };

  const handleImageError = (e, projectTitle) => {
    setLoadedImages(prev => ({
      ...prev,
      [projectTitle]: false
    }));
  };

  return (
    <section id="project" className="section">
      <div className="section-container">
        <h2 className="section-title">Projects & Works</h2>
        
        <div className="project-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={`${project.category}-${index}`} className="project-card">
              <div className="project-media" onClick={() => handleMediaClick(project)}>
                {project.thumbnail && (
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="project-thumbnail"
                    onError={(e) => handleImageError(e, project.title)}
                    onLoad={(e) => handleImageLoad(e, project.title)}
                    style={{ 
                      display: loadedImages[project.title] === false ? 'none' : 'block' 
                    }}
                  />
                )}
                <div 
                  className="project-placeholder" 
                  style={{ 
                    display: (project.thumbnail && loadedImages[project.title] === true) ? 'none' : 'flex' 
                  }}
                >
                  <div className="media-icon">
                    {project.mediaType === 'video' && '🎥'}
                    {project.mediaType === 'pdf' && '📄'}
                    {project.mediaType === 'image' && '🖼️'}
                  </div>
                  <span>{project.mediaType.toUpperCase()}</span>
                </div>
                <div className="media-overlay">
                  <span className="media-type-badge">{project.mediaType}</span>
                  <span className="view-text">Click to view</span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-category">
                  {categories.find(cat => cat.id === project.category)?.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;