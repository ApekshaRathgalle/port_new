import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projectSections = [
    {
      id: 1,
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks like React, Node.js, and cutting-edge technologies",
      icon: "🌐",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      path: "/webdev",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      projects: "12+ Projects"
    },
    {
      id: 2,
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android using React Native and native technologies",
      icon: "📱",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      path: "/mobile",
      technologies: ["React Native", "Kotlin", "Swift", "Firebase"],
      projects: "8+ Projects"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design solutions with beautiful interfaces and seamless user experiences",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      path: "/uiux",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      projects: "15+ Designs"
    }
  ];

  const handleCardClick = (path: string, id?: number) => {
    if (id === 2) {
      // Mobile Development - show options or navigate to first page
      navigate(path);
    } else {
      navigate(path);
    }
  };

  const FloatingParticle = ({ delay }: { delay: number }) => (
    <div
      style={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        background: 'rgba(162, 89, 255, 0.6)',
        borderRadius: '50%',
        animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
          }
          
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          .card-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          
          .card-hover:hover {
            transform: translateY(-15px) rotateX(5deg);
            box-shadow: 0 25px 50px rgba(162, 89, 255, 0.4);
          }
          
          .shimmer-text {
            background: linear-gradient(90deg, #a259ff, #ff00ff, #6c5ce7, #a259ff);
            background-size: 200% auto;
            animation: shimmer 3s linear infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .tech-tag {
            transition: all 0.3s ease;
          }
          
          .tech-tag:hover {
            transform: scale(1.1);
            background: rgba(162, 89, 255, 0.3) !important;
          }
        `}
      </style>

      <main style={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, rgba(162, 89, 255, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #0a0a0a 100%)
        `,
        padding: '8rem 2rem 4rem 2rem',
        color: 'white',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '60px'
        }}>
          {/* Hero Section */}
          <div style={{
            animation: 'fadeInUp 1s ease-out',
            marginBottom: '4rem'
          }}>
            <h1 className="shimmer-text" style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              marginBottom: '1.5rem',
              fontWeight: '800',
              letterSpacing: '-2px'
            }}>
              My Creative Projects
            </h1>
            
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '2rem',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: '1.6',
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}>
              Discover my portfolio of innovative projects spanning web development, 
              mobile applications, and stunning UI/UX designs
            </p>

            {/* Stats Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              marginTop: '3rem',
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              {[
                { number: '35+', label: 'Projects Completed' },
                { number: '3', label: 'Specializations' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(45deg, #a259ff, #ff00ff)',
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

          {/* Project Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            marginTop: '5rem'
          }}>
            {projectSections.map((section, index) => (
              <div
                key={section.id}
                className="card-hover"
                onClick={() => handleCardClick(section.path, section.id)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '25px',
                  padding: '2.5rem',
                  cursor: 'pointer',
                  border: '1px solid rgba(162, 89, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2 + 0.6}s both`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: section.gradient,
                  borderRadius: '25px 25px 0 0'
                }} />

                {/* Icon */}
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${index * 0.3}s`
                }}>
                  {section.icon}
                </div>

                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  background: section.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '700'
                }}>
                  {section.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  {section.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem',
                  justifyContent: 'center'
                }}>
                  {section.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag"
                      style={{
                        background: 'rgba(162, 89, 255, 0.2)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#a259ff',
                        border: '1px solid rgba(162, 89, 255, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Count */}
                <div style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '1.5rem'
                }}>
                  {section.projects}
                </div>

                {/* CTA Button */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  background: section.gradient,
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(162, 89, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  Explore Projects
                  <span style={{
                    transition: 'transform 0.3s ease'
                  }}>→</span>
                </div>

                {/* Hover Effect Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)`,
                  transition: 'left 0.6s ease',
                  pointerEvents: 'none'
                }} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: '5rem',
            animation: 'fadeInUp 1s ease-out 1.2s both'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '2rem'
            }}>
              Ready to bring your ideas to life?
            </p>
            <button style={{
              background: 'linear-gradient(45deg, #a259ff, #ff00ff)',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '30px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(162, 89, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.transform = 'translateY(-3px)';
              target.style.boxShadow = '0 15px 40px rgba(162, 89, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 10px 30px rgba(162, 89, 255, 0.3)';
            }}
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;