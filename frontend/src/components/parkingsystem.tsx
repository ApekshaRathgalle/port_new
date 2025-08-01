import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import automated from '../assets/automated.jpeg';

interface ProjectImage {
  url: string;
  caption: string;
}

const ParkingSystem: React.FC = () => {
  const navigate = useNavigate();

  const project = {
    title: "Automated Parking System",
    description: "A comprehensive web application for managing parking spaces, reservations, and payments. Features include real-time space availability, automated billing, and a user-friendly booking system.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap", "AJAX"],
    liveDemo: "https://parking-system-demo.com",
    github: "https://github.com/yourusername/parking-system",
    images: [
      {
        url: automated,
        caption: "Parking Dashboard"
      },
      
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a0033',
      padding: '6rem 2rem',
      color: 'white'
    }}>
      <button
        onClick={() => navigate('/webdev')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'rgba(162, 89, 255, 0.1)',
          border: '1px solid rgba(162, 89, 255, 0.3)',
          borderRadius: '50px',
          color: 'white',
          cursor: 'pointer',
          marginBottom: '2rem',
          transition: 'all 0.3s ease'
        }}
      >
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <h1 style={{
        fontSize: '3rem',
        background: 'linear-gradient(90deg, #a259ff, #ff00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem'
      }}>
        {project.title}
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: 'rgba(255, 255, 255, 0.8)',
        maxWidth: '800px',
        marginBottom: '3rem',
        lineHeight: '1.6'
      }}>
        {project.description}
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#ff00ff',
          marginBottom: '1rem'
        }}>
          Technologies Used
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(162, 89, 255, 0.2)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                border: '1px solid rgba(162, 89, 255, 0.3)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#a259ff',
            borderRadius: '50px',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <Globe size={20} />
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            color: 'white',
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease'
          }}
        >
          <Github size={20} />
          View Code
        </a>
      </div>

      <div>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#ff00ff',
          marginBottom: '1.5rem'
        }}>
          Project Gallery
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {project.images.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: '1px solid rgba(162, 89, 255, 0.3)',
                backgroundColor: 'rgba(162, 89, 255, 0.1)'
              }}
            >
              <img
                src={image.url}
                alt={image.caption}
                style={{
                  width: '100%',
                  height: '900px',
                  objectFit: 'cover'
                }}
              />
              <p style={{
                padding: '1rem',
                margin: 0,
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center'
              }}>
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingSystem;