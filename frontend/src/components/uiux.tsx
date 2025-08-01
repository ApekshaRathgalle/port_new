import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import images (you'll need to add actual UI/UX project images)
import designSystem from '../assets/ewaste.png';
import mobileAppDesign from '../assets/heal.png';

interface UIUXProject {
  id: number;
  title: string;
  description: string;
  lightingColor: string;
  glowColor: string;
  backgroundColor: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
  duration: string;
}

const UIUX: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const uiuxProjects: UIUXProject[] = [
    {
      id: 1,
      title: "Heal Soul",
      description: "A comprehensive design system for cancer patients .",
      lightingColor: "rgba(74, 222, 128, 0.3)",
      glowColor: "rgba(74, 222, 128, 0.6)",
      image: mobileAppDesign,
      backgroundColor: "rgba(74, 222, 128, 0.05)",
      technologies: ["Figma", "Design System", "Prototyping", "User Research"],
      link: "/ecoliving-design",
      category: "Web Design",
      duration: "3 months"
    },
    {
      id: 2,
      title: "Rcycly",
      description: "E waste management app.",
      lightingColor: "rgba(59, 130, 246, 0.3)",
      glowColor: "rgba(59, 130, 246, 0.6)",
      image: designSystem,
      backgroundColor: "rgba(59, 130, 246, 0.05)",
      technologies: ["Figma", "Mobile UI", "User Testing", "Wireframing"],
      link: "/financeflow-design",
      category: "Mobile Design",
      duration: "4 months"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #0a0a0a 100%)',
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

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .shimmer-text {
          background: linear-gradient(90deg, #4facfe, #00f2fe, #4facfe);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
        <h1 className="shimmer-text" style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          letterSpacing: '-2px'
        }}>
          UI/UX Design Portfolio
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: '1.6'
        }}>
          Crafting beautiful, intuitive user experiences through thoughtful design and user-centered research
        </p>

        {/* Design Process Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { number: '15+', label: 'Design Projects' },
            { number: '98%', label: 'User Satisfaction' },
            { number: '50+', label: 'UI Components' }
          ].map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '0.5rem'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem',
          maxWidth: '1400px',
          margin: '0 auto 4rem',
          justifyContent: 'center'
        }}
      >
        {uiuxProjects.map((project) => (
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
              transform: hoveredCard === project.id ? 'scale(1.02)' : 'scale(1)',
              height: 'auto',
              minHeight: '700px',
              maxWidth: '500px',
              margin: '0 auto',
              boxShadow: hoveredCard === project.id 
                ? `0 0 40px ${project.glowColor}, 0 0 80px ${project.lightingColor}` 
                : `0 0 20px ${project.lightingColor}`
            }}
          >
            {/* Animated border frame */}
            <div style={{
              position: 'absolute',
              inset: '0',
              background: `linear-gradient(135deg, ${project.lightingColor}, rgba(75, 172, 254, 0.4), ${project.lightingColor})`,
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
              padding: '2.5rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'transparent'
            }}>
              {/* Project Category Badge */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: project.lightingColor,
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'white'
              }}>
                {project.category}
              </div>

              {/* Image container */}
              <div style={{
                width: '100%',
                height: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: `0 8px 32px ${project.lightingColor}`,
                marginTop: '2rem'
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

                  {/* Duration badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '0.3rem 0.8rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '1rem'
                  }}>
                    Duration: {project.duration}
                  </div>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.85)',
                    marginBottom: '1.5rem',
                    minHeight: '72px'
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
                            : '1px solid rgba(75, 172, 254, 0.2)',
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
                    borderTop: '1px solid rgba(75, 172, 254, 0.2)',
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
                    View Case Study →
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
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'translateY(-3px)';
            target.style.boxShadow = '0 10px 20px rgba(75, 172, 254, 0.3)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'translateY(0)';
            target.style.boxShadow = 'none';
          }}
        >
          <ChevronLeft size={20} />
          Back to Projects
        </button>

        <button
          onClick={() => navigate('/design-process')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            fontWeight: '600'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'translateY(-3px)';
            target.style.boxShadow = '0 10px 20px rgba(75, 172, 254, 0.5)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'translateY(0)';
            target.style.boxShadow = 'none';
          }}
        >
          Design Process
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default UIUX;
