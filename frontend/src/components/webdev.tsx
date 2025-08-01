import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project4 from '../assets/project4.png';
import melody1 from '../assets/melody1.jpeg.jpg';
import automated from '../assets/automated.jpeg.jpg';
import salomain from '../assets/salomain.jpg';
import salo1 from '../assets/salo1.jpg';
import salo2 from '../assets/salo2.jpg';
import salo3 from '../assets/salo3.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  lightingColor: string;
  glowColor: string;
  backgroundColor: string;
  image: string | string[]; 
  technologies: string[];
  link: string;
}

const WebDev: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsPerPage = 3;
  
  const navigate = useNavigate();

  // Sample character images for demonstration
  const characterImages = [
      project1, 
      melody1,
      project1,
      project4,
      automated
  ];

  // Slideshow images for first project
  const project1Images = [
      salomain,
      salo1,
      salo2,
      salo3
  ];

  // Auto slideshow effect - only for project 1
  useEffect(() => {
    if (hoveredCard === 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project1Images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [hoveredCard, project1Images.length]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Game Management System",
      description: "A full-stack web application for managing game data, player profiles, and match statistics",
      lightingColor: "rgba(112, 255, 107, 0.3)",
      glowColor: "rgba(119, 255, 107, 0.6)",
      image: project1Images,
      backgroundColor: "rgba(229, 70, 86, 0.05)",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/Imadh-Ifham/SaloGame"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A simple social media dashboard with user authentication ",
      lightingColor: "rgba(72, 52, 212, 0.3)",
      glowColor: "rgba(72, 52, 212, 0.6)",
      image: characterImages[0],
      backgroundColor: "rgba(238, 222, 222, 0.93)",
      technologies: ["Next.js", "JavaScript", "MongoDB", "Material-UI"],
      link: "https://github.com/ApekshaRathgalle/Sociopedia2"
    },
    {
      id: 3,
      title: "Online Music Platform",
      description: "Music platform with music instrumentation, Artist profiles",
      lightingColor: "rgba(0, 210, 211, 0.3)",
      glowColor: "rgba(0, 210, 211, 0.6)",
      backgroundColor: "rgba(79, 70, 229, 0.05)",
      image: characterImages[1],
      technologies: ["MVC", "Java", "MySQL", "Servlet"],
      link: "https://github.com/ApekshaRathgalle/Melody_Mart"
    },
    {
      id: 4,
      title: "Automated parking system",
      description: "A web application for managing parking spaces, reservations, and payments",
      lightingColor: "rgba(254, 202, 87, 0.3)",
      backgroundColor: "rgba(79, 70, 229, 0.05)",
      glowColor: "rgba(254, 202, 87, 0.6)",
      image: characterImages[4],
      technologies: ["html", "css", "php", "javascript"],
      link: "http://github.com/ApekshaRathgalle/Auto-Park-Navigator"
    }
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Slideshow functions
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project1Images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project1Images.length) % project1Images.length);
  };

  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

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
          background: 'linear-gradient(90deg, #a259ff, #ff00ff, #6c5ce7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.5rem'
        }}>
          Web Development Projects
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: 'rgba(255, 255, 255, 0.8)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Exploring the digital frontier with modern web solutions
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          maxWidth: '1400px',
          margin: '0 auto 4rem',
          justifyContent: 'center'
        }}
      >
        {currentProjects.map((project) => (
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
              background: `linear-gradient(135deg, ${project.lightingColor}, rgba(162, 89, 255, 0.4), ${project.lightingColor})`,
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
                {/* Render slideshow for first project, single image for others */}
                {project.id === 1 && Array.isArray(project.image) ? (
                  <>
                    <img 
                      src={project.image[currentImageIndex]} 
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        transition: 'transform 0.3s ease',
                        transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Slideshow navigation buttons */}
                    <button
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: `2px solid ${project.lightingColor}`,
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: hoveredCard === project.id ? 1 : 0,
                        zIndex: 3,
                        color: 'white'
                      }}
                    >
                      <ChevronLeft size={22} />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.8)',
                        border: `2px solid ${project.lightingColor}`,
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        opacity: hoveredCard === project.id ? 1 : 0,
                        zIndex: 3,
                        color: 'white'
                      }}
                    >
                      <ChevronRight size={22} />
                    </button>
                    
                    {/* Slideshow indicators */}
                    <div style={{
                      position: 'absolute',
                      bottom: '16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '10px',
                      opacity: hoveredCard === project.id ? 1 : 0.7,
                      transition: 'opacity 0.3s ease',
                      zIndex: 3
                    }}>
                      {project.image.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => goToImage(e, index)}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: index === currentImageIndex ? project.glowColor : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: index === currentImageIndex ? `0 0 12px ${project.lightingColor}` : 'none'
                          }}
                        />
                      ))}
                    </div>

                    {/* Auto slideshow indicator */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(0, 0, 0, 0.8)',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      opacity: 0.8,
                      zIndex: 3
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: hoveredCard !== project.id ? '#00ff88' : '#ff6b6b',
                        animation: hoveredCard !== project.id ? 'pulse 1.5s ease-in-out infinite' : 'none'
                      }} />
                      <span style={{
                        fontSize: '11px',
                        color: 'white',
                        fontWeight: '600'
                      }}>
                        {hoveredCard !== project.id ? 'AUTO' : 'PAUSED'}
                      </span>
                    </div>
                  </>
                ) : (
                  <img 
                    src={Array.isArray(project.image) ? project.image[0] : project.image} 
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
                )}
                
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
                            : '1px solid rgba(162, 89, 255, 0.2)',
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
                  onClick={() => {
                    switch(project.id) {
                      case 1:
                        navigate('/salogame');
                        break;
                      case 2:
                        navigate('/socialmedia');
                        break;
                      case 3:
                        navigate('/musicplatform');
                        break;
                      case 4:
                        navigate('/parkingsystem');
                        break;
                    }
                  }}
                  style={{
                    textAlign: 'center',
                    opacity: hoveredCard === project.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    padding: '1rem',
                    borderTop: '1px solid rgba(162, 89, 255, 0.2)',
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
        marginTop: '3rem'
      }}>
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: currentPage === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50px',
            color: currentPage === 0 ? 'rgba(255, 255, 255, 0.5)' : 'white',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          }}
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: i === currentPage ? '#a259ff' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            backgroundColor: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50px',
            color: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.5)' : 'white',
            cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            fontSize: '1rem'
          }}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default WebDev;