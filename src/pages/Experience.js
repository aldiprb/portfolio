// src/components/Experience.js
import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [openItems, setOpenItems] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const workExperiences = [
    {
      title: "Graphic Designer",
      duration: "Dec 2022 - Dec 2023",
      organization: "Mari Pro Photo Studio",
      description: "I specialize in creating innovative design concepts tailored to client needs, encompassing everything from photo albums and invitations to promotional materials and cohesive studio branding. My expertise extends to enhancing and editing high-quality photos using industry-standard software like Adobe Photoshop and Lightroom, as well as developing engaging graphic materials for social media, websites, and digital marketing campaigns. I excel at collaborating closely with photographers, videographers, and the creative team to ensure all designs seamlessly align with the studio's overarching vision, consistently delivering top-quality work within specified deadlines. Furthermore, I am committed to staying abreast of the latest design trends, ensuring a continuous influx of fresh and relevant ideas.",
      responsibilities: [
        "Designed marketing materials and promotional content",
        "Created photo editing and retouching work",
        "Collaborated with photographers on visual concepts",
        "Maintained brand consistency across all designs"
      ]
    },
    {
      title: "Kitchen Staff",
      duration: "Aug 2022 - Dec 2022",
      organization: "Mie Gacoan",
      description: "As a Kitchen Staff at Mie Gacoan, my responsibility is to prepare and cook various menu items, such as frying cheese prawns and rambutan prawns, steaming dim sum, and cooking noodles according to the given recipes and standards. I am also responsible for maintaining cleanliness in the workspace, ensuring proper management of food ingredients, and adhering to health and safety procedures. In this role, I collaborate with the team to ensure smooth kitchen operations while remaining flexible to handle work pressure and a shift-based schedule.",
      responsibilities: [
        "Prepared ingredients and cooking processes",
        "Maintained kitchen cleanliness and hygiene standards",
        "Assisted in food presentation and plating",
        "Supported team coordination during busy periods"
      ]
    },
    {
      title: "Freelance Illustrator",
      duration: "May 2021 - Present",
      organization: "Independent",
      description: "As a freelance illustrator specializing in character design, my role is to create unique, visually appealing characters tailored to the needs of clients across various industries, including gaming, animation, publishing, and advertising. I collaborate closely with clients to understand their vision, develop sketches, and refine designs that align with their creative direction. This involves mastering various illustration styles, utilizing digital tools like Adobe Photoshop or Procreate, and delivering high-quality work within deadlines. I also ensure open communication to incorporate feedback effectively, maintaining client satisfaction and fostering long-term professional relationships.",
      responsibilities: [
        "Created custom illustrations for digital and print media",
        "Developed character designs and concept art",
        "Worked with clients to understand project requirements",
        "Delivered high-quality artwork within deadlines"
      ]
    }
  ];

  const organizationExperiences = [
    {
      title: "Part of Decoration, Publication, and Documentation (DPD) Division",
      duration: "Aug 2024 - Present",
      organization: "Student Association of Software Engineering Technology Study Program",
      description: "The Decoration, Publication, and Documentation (DPD) Division of the Student Association for the Software Engineering Technology Study Program at Medan State Polytechnic plays a vital role in supporting various student activities through creativity and visual communication. This division is responsible for creating aesthetic decorations for events, managing publications such as posters, social media content, and other promotional materials to enhance participation, and documenting activities through photos, videos, and reports as archives and promotional tools. With a focus on developing skills in design, communication, and collaboration, this division is essential in strengthening the program's identity, improving event quality, and creating memorable experiences for all participants.",
      responsibilities: [
        "Designed promotional materials for student events",
        "Documented organization activities and meetings",
        "Coordinated decoration for various student programs",
        "Supported publication of student association materials"
      ]
    }
  ];

  const renderExperienceItem = (exp, index, category) => {
    const key = `${category}-${index}`;
    const isOpen = openItems[key];

    return (
      <div key={index} className="experience-wrapper">
        <div 
          className={`experience-card ${isOpen ? 'expanded' : ''}`}
          onClick={() => toggleItem(category, index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleItem(category, index);
            }
          }}
        >
          <div className="experience-header">
            <h4>{exp.title}</h4>
            <div className="experience-meta">
              <span className="duration">{exp.duration}</span>
              <span className="organization">{exp.organization}</span>
            </div>
            <div className="dropdown-arrow">
              {isOpen ? '▲' : '▼'}
            </div>
          </div>
        </div>
        
        <div className={`experience-details ${isOpen ? 'show' : ''}`}>
          <p className="experience-description">{exp.description}</p>
          
          <div className="responsibilities">
            <h5>Key Responsibilities:</h5>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-section">
          <h3 className="experience-category">WORK</h3>
          <div className="experience-container">
            {workExperiences.map((exp, index) => 
              renderExperienceItem(exp, index, 'work')
            )}
          </div>
        </div>

        <div className="experience-section">
          <h3 className="experience-category">ORGANIZATION</h3>
          <div className="experience-container">
            {organizationExperiences.map((exp, index) => 
              renderExperienceItem(exp, index, 'organization')
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;