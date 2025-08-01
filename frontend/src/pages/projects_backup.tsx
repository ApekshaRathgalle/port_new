import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projectSections = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies",
      path: "/webdev"
    },
    {
      id: 2,
      title: "Game Development", 
      description: "Interactive games and entertainment applications",
      path: "/webdev"
    },
    {
      id: 3,
      title: "Mobile Development",
      description: "Cross-platform mobile applications", 
      path: "/webdev"
    }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0033 0%, #2d1b69 50%, #1a0033 100%)',
      padding: '6rem 2rem 4rem 2rem',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '2rem',
          background: 'linear-gradient(90deg, #a259ff, #ff00ff, #6c5ce7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          My Projects
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.8)',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem'
        }}>
          Explore my portfolio of projects across different domains
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {projectSections.map((section) => (
            <div
              key={section.id}
              onClick={() => navigate(section.path)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2rem',
                cursor: 'pointer',
                border: '1px solid rgba(162, 89, 255, 0.3)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(162, 89, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#a259ff'
              }}>
                {section.title}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6'
              }}>
                {section.description}
              </p>
              
              <div style={{
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: '#a259ff'
              }}>
                Explore Projects →
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
