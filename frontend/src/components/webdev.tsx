import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project4 from '../assets/project4.png';
import melody1 from '../assets/melody1.jpeg.jpg';
import automated from '../assets/automated.jpeg.jpg';

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const projectsPerPage = 3;
  
  // Add navigate function
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
      project1,
      project4,
      project1, // You can replace these with actual different images
      project4
  ];

  // Auto slideshow effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project1Images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, project1Images.length]);

  // Pause auto slideshow when hovering over the first project card
  useEffect(() => {
    if (hoveredCard === 1) {
      setIsAutoPlaying(false);
    } else {
      setIsAutoPlaying(true);
    }
  }, [hoveredCard]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Game Management System",
      description: "A full-stack web application for managing game data, player profiles, and match statistics",
      lightingColor: "rgba(112, 255, 107, 0.3)",
      glowColor: "rgba(119, 255, 107, 0.6)",
      image: project1Images, // Array of images for slideshow
      backgroundColor: "rgba(229, 70, 86, 0.05)",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A simple social media dashboard with user authentication ",
      lightingColor: "rgba(72, 52, 212, 0.3)",
      glowColor: "rgba(72, 52, 212, 0.6)",
      image: characterImages[1],
      backgroundColor: "rgba(238, 222, 222, 0.93)",
      technologies: ["Next.js", "JavaScript", "MongoDB", "Material-UI"],
      link: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Online Music Platform",
      description: "Music platform with music instrumentation, Artist profiles",
      lightingColor: "rgba(0, 210, 211, 0.3)",
      glowColor: "rgba(0, 210, 211, 0.6)",
      backgroundColor: "rgba(79, 70, 229, 0.05)",
      image: characterImages[2],
      technologies: ["MVC", "Java", "MySQL", "Servlet"],
      link: "https://github.com/yourusername/project3"
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
      link: "https://github.com/yourusername/project4"
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
    setIsAutoPlaying(false); // Pause auto slideshow when manually navigating
    if (Array.isArray(projects[0].image)) {
      setCurrentImageIndex((prev) => (prev + 1) % projects[0].image.length);
    }
    // Resume auto slideshow after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false); // Pause auto slideshow when manually navigating
    if (Array.isArray(projects[0].image)) {
      setCurrentImageIndex((prev) => (prev - 1 + projects[0].image.length) % projects[0].image.length);
    }
    // Resume auto slideshow after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setIsAutoPlaying(false); // Pause auto slideshow when manually selecting
    setCurrentImageIndex(index);
    // Resume auto slideshow after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto 4rem',
          justifyContent: 'space-between'
        }}
      >
        {currentProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: '#ddd0d0ff',
              borderRadius: '20px',
              padding: '2px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              transform: hoveredCard === project.id ? 'scale(1.02)' : 'scale(1)',
              height: '900px',
              width: '450px',
              minWidth: '280px',
              maxWidth: '100%',
              marginLeft: project.id === 1 ? '0' : project.id === 3 ? 'auto' : 'auto',
              marginRight: project.id === 3 ? '0' : 'auto',
              boxShadow: hoveredCard === project.id 
                ? `0 0 30px ${project.glowColor}, 0 0 60px ${project.lightingColor}` 
                : `0 0 15px ${project.lightingColor}`
            }}
          >
            {/* Purple border frame */}
            <div style={{
              position: 'absolute',
              inset: '0',
              background: `linear-gradient(135deg, ${project.lightingColor}, rgba(162, 89, 255, 0.4), ${project.lightingColor})`,
              borderRadius: '20px',
              padding: '2px',
              zIndex: 0
            }}>
              <div style={{
                background: '#000000',
                borderRadius: '18px',
                height: '100%',
                width: '100%'
              }} />
            </div>

            {/* Card content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              padding: '1.5rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              background: 'transparent'
            }}>
              {/* Image container */}
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '15px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: `0 4px 20px ${project.lightingColor}`
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
                        borderRadius: '15px',
                        transition: 'transform 0.3s ease',
                        transform: hoveredCard === project.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Slideshow navigation buttons */}
                    <button
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: `1px solid ${project.lightingColor}`,
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
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
                      <ChevronLeft size={20} />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: `1px solid ${project.lightingColor}`,
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
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
                      <ChevronRight size={20} />
                    </button>
                    
                    {/* Slideshow indicators */}
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '8px',
                      opacity: hoveredCard === project.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 3
                    }}>
                      {project.image.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => goToImage(e, index)}
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: index === currentImageIndex ? project.glowColor : 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: index === currentImageIndex ? `0 0 8px ${project.lightingColor}` : 'none'
                          }}
                        />
                      ))}
                    </div>

                    {/* Auto slideshow indicator */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(0, 0, 0, 0.7)',
                      padding: '5px 10px',
                      borderRadius: '15px',
                      opacity: hoveredCard === project.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 3
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: isAutoPlaying ? '#00ff00' : '#ff6b6b',
                        animation: isAutoPlaying ? 'pulse 1s ease-in-out infinite' : 'none'
                      }} />
                      <span style={{
                        fontSize: '10px',
                        color: 'white',
                        fontWeight: '500'
                      }}>
                        {isAutoPlaying ? 'AUTO' : 'PAUSED'}
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
                      borderRadius: '15px',
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
                    borderRadius: '15px',
                    opacity: 0.3,
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                )}
              </div>

              {/* Content container */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: 'white',
                    fontWeight: 600,
                    textShadow: hoveredCard === project.id ? `0 0 10px ${project.lightingColor}` : 'none'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '1rem',
                    minHeight: '60px'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: 'auto'
                  }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.4rem 0.8rem',
                          backgroundColor: hoveredCard === project.id 
                            ? project.lightingColor
                            : 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          border: hoveredCard === project.id 
                            ? `1px solid ${project.glowColor}` 
                            : '1px solid rgba(162, 89, 255, 0.2)',
                          transition: 'all 0.3s ease',
                          color: 'white'
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
                    padding: '0.5rem',
                    borderTop: '1px solid rgba(162, 89, 255, 0.2)',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'white',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
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
                inset: '-4px',
                background: `conic-gradient(from 0deg, transparent, ${project.glowColor}, transparent, ${project.glowColor}, transparent)`,
                borderRadius: '24px',
                zIndex: -1,
                animation: 'rotate 3s linear infinite',
                opacity: 0.8
              }} />
            )}

            {/* Static glow effect */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              background: `radial-gradient(600px circle at center, ${project.lightingColor}, transparent 70%)`,
              borderRadius: '22px',
              zIndex: -2,
              opacity: hoveredCard === project.id ? 0.6 : 0.3,
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