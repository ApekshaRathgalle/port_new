import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import salomain from '../assets/salomain.jpg';
import salo1 from '../assets/salo1.jpg';
import salo2 from '../assets/salo2.jpg';
import salo3 from '../assets/salo3.jpg';
import salo5 from '../assets/salo5.jpg';
import salo6 from '../assets/salo6.jpg';
import salo7 from '../assets/salo7.jpg';
import salo8 from '../assets/salo8.jpg';
import salo9 from '../assets/salo9.jpg';
import salo34 from '../assets/salo34.jpg';

interface ProjectImage {
  url: string;
  caption: string;
}

const Salogame: React.FC = () => {
  const navigate = useNavigate();

  // You can replace these with actual project details
  const project = {
    title: "Salo Game Management System",
    description: "A comprehensive full-stack web application for managing game data, player profiles, and match statistics. Features include user authentication, real-time updates, comprehensive dashboard for game analytics, and an intuitive interface for game management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Socket.io", "Redux", "Material-UI"],
    liveDemo: "https://salo-game-management.vercel.app",
    github: "https://github.com/yourusername/salo-game-management",
    images: [
      {
        url: salomain,
        caption: "Main Dashboard - Salo Game Overview"
      },
      {
        url: salo1,
        caption: "Game Registration Interface"
      },
      {
        url: salo2,
        caption: "Player Profile Management"
      },
      {
        url: salo3,
        caption: "Match Statistics Display"
      },
      {
        url: salo5,
        caption: "Game Analytics Dashboard"
      },
      {
        url: salo6,
        caption: "Team Management Panel"
      },
      {
        url: salo7,
        caption: "Tournament Bracket View"
      },
      {
        url: salo8,
        caption: "Score Tracking Interface"
      },
      {
        url: salo9,
        caption: "Real-time Game Updates"
      },
      {
        url: salo34,
        caption: "Advanced Game Configuration"
      }
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0033 0%, #2d1b69 25%, #1a0033 50%, #0d001a 75%, #1a0033 100%)',
      padding: '8rem 2rem 4rem 2rem',
      color: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Back Button */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
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
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.2)';
            e.currentTarget.style.transform = 'translateX(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.1)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        {/* Project Title */}
        <h1 style={{
          fontSize: '3.5rem',
          background: 'linear-gradient(90deg, #a259ff, #ff00ff, #6c5ce7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2rem',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          {project.title}
        </h1>

        {/* Project Description */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            {project.description}
          </p>
        </div>

      {/* Technologies */}
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

      {/* Links */}
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

      {/* Project Images */}
      <div>
        <h2 style={{
          fontSize: '1.8rem',
          color: '#ff00ff',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Project Gallery
        </h2>
        <p style={{
          fontSize: '1rem',
          color: 'rgba(255, 255, 255, 0.7)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Explore the different features and interfaces of the Salo Game Management System
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {project.images.map((image, index) => (
            <div
              key={index}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid rgba(162, 89, 255, 0.3)',
                backgroundColor: 'rgba(162, 89, 255, 0.05)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(162, 89, 255, 0.4)';
                e.currentTarget.style.borderColor = 'rgba(162, 89, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(162, 89, 255, 0.3)';
              }}
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={image.url}
                  alt={image.caption}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(162, 89, 255, 0.8)',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  #{index + 1}
                </div>
              </div>
              <div style={{
                padding: '1.5rem'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textAlign: 'center',
                  fontWeight: '500',
                  lineHeight: '1.4'
                }}>
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Salogame;