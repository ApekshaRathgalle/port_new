import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Globe, X } from 'lucide-react';
import melody1 from '../assets/melody1.jpeg.jpg';
import melody2 from '../assets/melody2.jpg';
import melody3 from '../assets/melody3.jpg';
import melody4 from '../assets/melody4.jpg';

interface ProjectImage {
  url: string;
  caption: string;
}

const MusicPlatform: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({});

  const project = {
    title: "Online Music Platform",
    description: "A comprehensive music platform featuring artist profiles, music instrumentation, and a rich library of tracks. Users can create playlists, follow artists, and enjoy personalized recommendations.",
    technologies: ["MVC", "Java", "MySQL", "Servlet", "JSP", "HTML/CSS", "JavaScript", "RESTful APIs"],
    liveDemo: "https://music-platform-demo.herokuapp.com",
    github: "https://github.com/yourusername/music-platform",
    images: [
      {
        url: melody1,
        caption: "Homepage Dashboard"
      },
      {
        url: melody2, 
        caption: "Music Player Interface"
      },
      {
        url: melody3,
        caption: "Artist Profile View"
      },
      {
        url: melody4,
        caption: "Recording Studio Bookings"
      }
    ]
  };

  const openImageModal = (image: ProjectImage) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleHover = (id: string, isHovering: boolean) => {
    setHoverStates(prev => ({ ...prev, [id]: isHovering }));
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
          backgroundColor: hoverStates['backButton'] ? 'rgba(162, 89, 255, 0.2)' : 'rgba(162, 89, 255, 0.1)',
          border: '1px solid rgba(162, 89, 255, 0.3)',
          borderRadius: '50px',
          color: 'white',
          cursor: 'pointer',
          marginBottom: '2rem',
          transition: 'all 0.3s ease',
          transform: hoverStates['backButton'] ? 'translateY(-2px)' : 'none'
        }}
        onMouseEnter={() => handleHover('backButton', true)}
        onMouseLeave={() => handleHover('backButton', false)}
      >
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      <h1 style={{
        fontSize: '3rem',
        background: 'linear-gradient(90deg, #a259ff, #ff00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem',
        animation: 'fadeIn 0.8s ease-out'
      }}>
        {project.title}
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: 'rgba(255, 255, 255, 0.8)',
        maxWidth: '800px',
        marginBottom: '3rem',
        lineHeight: '1.6',
        animation: 'fadeIn 1s ease-out'
      }}>
        {project.description}
      </p>

      <div style={{ marginBottom: '3rem', animation: 'fadeIn 1.2s ease-out' }}>
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
                backgroundColor: hoverStates[`tech-${tech}`] ? 'rgba(162, 89, 255, 0.3)' : 'rgba(162, 89, 255, 0.2)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                border: '1px solid rgba(162, 89, 255, 0.3)',
                transition: 'all 0.3s ease',
                transform: hoverStates[`tech-${tech}`] ? 'scale(1.05)' : 'none'
              }}
              onMouseEnter={() => handleHover(`tech-${tech}`, true)}
              onMouseLeave={() => handleHover(`tech-${tech}`, false)}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '3rem',
        animation: 'fadeIn 1.4s ease-out'
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
            transition: 'all 0.3s ease',
            transform: hoverStates['liveDemo'] ? 'translateY(-2px)' : 'none',
            boxShadow: hoverStates['liveDemo'] ? '0 5px 15px rgba(162, 89, 255, 0.4)' : 'none'
          }}
          onMouseEnter={() => handleHover('liveDemo', true)}
          onMouseLeave={() => handleHover('liveDemo', false)}
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
            backgroundColor: hoverStates['github'] ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            color: 'white',
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.3s ease',
            transform: hoverStates['github'] ? 'translateY(-2px)' : 'none'
          }}
          onMouseEnter={() => handleHover('github', true)}
          onMouseLeave={() => handleHover('github', false)}
        >
          <Github size={20} />
          View Code
        </a>
      </div>

      <div style={{ animation: 'fadeIn 1.6s ease-out' }}>
        <h2 style={{
          fontSize: '1.5rem',
          color: '#ff00ff',
          marginBottom: '1.5rem'
        }}>
          Project Gallery
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {project.images.map((image, index) => (
            <div
              key={index}
              onClick={() => openImageModal(image)}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                border: hoverStates[`image-${index}`] ? '2px solid #a259ff' : '2px solid rgba(162, 89, 255, 0.5)',
                backgroundColor: 'rgba(162, 89, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: hoverStates[`image-${index}`] ? '0 8px 20px rgba(162, 89, 255, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
                transform: hoverStates[`image-${index}`] ? 'translateY(-5px)' : 'none'
              }}
              onMouseEnter={() => handleHover(`image-${index}`, true)}
              onMouseLeave={() => handleHover(`image-${index}`, false)}
            >
              <img
                src={image.url}
                alt={image.caption}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  transform: hoverStates[`image-${index}`] ? 'scale(1.05)' : 'none'
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

      {/* Image Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <div style={{
            position: 'relative',
            maxWidth: '90%',
            maxHeight: '90%'
          }}>
            <button
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '10px',
                border: '3px solid #a259ff',
                boxShadow: '0 0 30px rgba(162, 89, 255, 0.5)'
              }}
            />
            <p style={{
              color: 'white',
              textAlign: 'center',
              marginTop: '1rem',
              fontSize: '1.2rem'
            }}>
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}

      {/* Global styles for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default MusicPlatform;