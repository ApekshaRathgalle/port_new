import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import v1 from '../assets/i.png'
import image3 from '../assets/finnce/image.png';

interface MobileProject {
  id: number;
  title: string;
  description: string;
  lightingColor: string;
  glowColor: string;
  backgroundColor: string;
  image: string;
  technologies: string[];
  link: string;
}

const MobileDev: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const mobileProjects: MobileProject[] = [
    {
      id: 1,
      title: "Finance Tracker",
      description: "A comprehensive finance tracking app with budgeting, expense tracking, and analytics features",
      lightingColor: "rgba(46, 213, 115, 0.3)",
      glowColor: "rgba(46, 213, 115, 0.6)",
      image: image3,
      backgroundColor: "rgba(46, 213, 115, 0.05)",
      technologies: ["Kotlin", "Android Studio", "Firebase", "Push Notifications"],
      link: "/taskapp"
    },
    {
      id: 2,
      title: "Trendsphere",
      description: "An develop for luxury fashion enthusiasts, featuring the latest trends, exclusive collections, and personalized recommendations.",
      lightingColor: "rgba(255, 107, 107, 0.3)",
      glowColor: "rgba(255, 107, 107, 0.6)",
      image: v1,
      backgroundColor: "rgba(255, 107, 107, 0.05)",
      technologies: ["kotlin", "Android Studio", "Firebase", "Push Notifications"],
      link: "/fitnessapp"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a0033',
      padding: '6rem 2rem 4rem 2rem',
      color: 'white'
    }}>
      <style>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
      
      <div
        style={{
          opacity: 1,
          transform: 'translateY(0)',
          textAlign: 'center',
          marginBottom: '4rem'
        }}
      >
        <h1 style={{
          fontSize: '3.5rem',
          background: 'linear-gradient(90deg, #00d2ff, #3a7bd5, #00d2ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.5rem'
        }}>
          Mobile Development Projects
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '800px',
          margin: '0 auto 2rem'
        }}>
          Cross-platform mobile applications for iOS and Android
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto 4rem',
          justifyContent: 'center'
        }}
      >
        {mobileProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: '#1a1a2e',
              borderRadius: '24px',
              padding: '3px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              transform: hoveredCard === project.id ? 'scale(1.03)' : 'scale(1)',
              height: 'auto',
              minHeight: '600px',
              maxWidth: '450px',
              margin: '0 auto',
              boxShadow: hoveredCard === project.id 
                ? `0 0 40px ${project.glowColor}, 0 0 80px ${project.lightingColor}` 
                : `0 0 20px ${project.lightingColor}`
            }}
          >
            {/* Purple border frame */}
            <div style={{
              position: 'absolute',
              inset: '0',
              background: `linear-gradient(135deg, ${project.lightingColor}, rgba(0, 210, 255, 0.4), ${project.lightingColor})`,
              borderRadius: '24px',
              padding: '3px',
              zIndex: 0
            }}>
              <div style={{
                background: '#000000',
                borderRadius: '21px',
                height: '100%',
                width: '100%'
              }} />
            </div>

            {/* Card content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              padding: '2rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'transparent'
            }}>
              {/* Image container */}
              <div style={{
                width: '100%',
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: `0 8px 32px ${project.lightingColor}`
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    transition: 'transform 0.3s ease',
                    transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Image lighting overlay */}
                {hoveredCard === project.id && (
                  <div style={{
                    position: 'absolute',
                    inset: '0',
                    background: `radial-gradient(circle at center, transparent 30%, ${project.lightingColor})`,
                    borderRadius: '16px',
                    opacity: 0.2,
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                )}
              </div>

              {/* Content container */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    fontWeight: 700,
                    textShadow: hoveredCard === project.id ? `0 0 15px ${project.lightingColor}` : 'none',
                    lineHeight: '1.2'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.85)',
                    marginBottom: '1.5rem',
                    minHeight: '48px'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.6rem 1rem',
                          backgroundColor: hoveredCard === project.id 
                            ? project.lightingColor
                            : 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '16px',
                          fontSize: '0.85rem',
                          border: hoveredCard === project.id 
                            ? `1px solid ${project.glowColor}` 
                            : '1px solid rgba(0, 210, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          color: 'white',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  onClick={() => navigate(project.link)}
                  style={{
                    textAlign: 'center',
                    opacity: hoveredCard === project.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    padding: '1rem',
                    borderTop: '1px solid rgba(0, 210, 255, 0.2)',
                    cursor: 'pointer',
                    borderRadius: '0 0 16px 16px',
                    background: hoveredCard === project.id ? `linear-gradient(135deg, ${project.lightingColor}, transparent)` : 'transparent'
                  }}
                >
                  <span style={{
                    fontSize: '1rem',
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontWeight: '600'
                  }}>
                    View Project →
                  </span>
                </div>
              </div>
            </div>

            {/* Animated lighting effect on hover */}
            {hoveredCard === project.id && (
              <div style={{
                position: 'absolute',
                inset: '-6px',
                background: `conic-gradient(from 0deg, transparent, ${project.glowColor}, transparent, ${project.glowColor}, transparent)`,
                borderRadius: '30px',
                zIndex: -1,
                animation: 'rotate 4s linear infinite',
                opacity: 0.8
              }} />
            )}

            {/* Static glow effect */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              background: `radial-gradient(800px circle at center, ${project.lightingColor}, transparent 70%)`,
              borderRadius: '27px',
              zIndex: -2,
              opacity: hoveredCard === project.id ? 0.7 : 0.3,
              transition: 'opacity 0.4s ease'
            }} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        marginTop: '3rem',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => navigate('/projects')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          }}
        >
          <ChevronLeft size={20} />
          Back to Projects
        </button>

        <button
          onClick={() => navigate('/mobileapps')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            fontWeight: '600'
          }}
        >
          More Apps & Games
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default MobileDev;
