import React, { useState, useEffect } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contacts: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0014 0%, #1a0033 25%, #2d1b4e 50%, #1a0033 75%, #0a0014 100%)',
      color: 'white',
      fontFamily: "'Inter', 'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(162,89,255,0.1) 0%, transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.3s ease'
      }} />
      
      {/* Floating orbs */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(162,89,255,0.3) 0%, transparent 70%)',
        top: '10%',
        right: '10%',
        animation: 'float 6s ease-in-out infinite',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,0,255,0.2) 0%, transparent 70%)',
        bottom: '20%',
        left: '5%',
        animation: 'float 8s ease-in-out infinite reverse',
        filter: 'blur(30px)'
      }} />

      <main style={{
        padding: '8rem 2rem 2rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          paddingTop: '2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #a259ff 0%, #ff00ff 50%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            textShadow: '0 0 40px rgba(162,89,255,0.5)',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}>
            Let's Create Magic Together
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: '#d9c7ff',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.7',
            fontWeight: '300'
          }}>
            Ready to bring your vision to life? I'm passionate about crafting exceptional digital experiences that leave lasting impressions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto 4rem',
          padding: '0 1rem'
        }}>
          {/* Email Card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(162,89,255,0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(162,89,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #a259ff, #ff00ff, #00d4ff)',
              borderRadius: '24px 24px 0 0'
            }} />
            
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(162,89,255,0.3), rgba(255,0,255,0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 10px 30px rgba(162,89,255,0.3)'
            }}>
              <Mail style={{ fontSize: '2.2rem', color: '#a259ff' }} />
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ff00ff, #a259ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700',
              textAlign: 'center'
            }}>Send Me an Email</h3>
            
            <p style={{
              marginBottom: '1.5rem',
              color: '#d9c7ff',
              textAlign: 'center',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Got a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            
            <div style={{
              background: 'rgba(162,89,255,0.1)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '2rem',
              border: '1px dashed rgba(162,89,255,0.3)',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#a259ff',
                fontSize: '1rem',
                fontWeight: '500',
                margin: 0
              }}>apeksharathgalle@gmail.com</p>
            </div>
            
            <a
              href="mailto:apeksharathgalle@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Apeksha,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A%0ABest%20regards,"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #a259ff, #ff00ff)',
                borderRadius: '50px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(162,89,255,0.4)',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(162,89,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(162,89,255,0.4)';
              }}
            >
              <Mail />
              Send Email
            </a>
          </div>

          {/* LinkedIn Card */}
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1px solid rgba(162,89,255,0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,212,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #0077b5, #00d4ff)',
              borderRadius: '24px 24px 0 0'
            }} />
            
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(0,119,181,0.3), rgba(0,212,255,0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              boxShadow: '0 10px 30px rgba(0,212,255,0.3)'
            }}>
              <Linkedin style={{ fontSize: '2.2rem', color: '#00d4ff' }} />
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #00d4ff, #0077b5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700',
              textAlign: 'center'
            }}>Professional Network</h3>
            
            <p style={{
              marginBottom: '2rem',
              color: '#d9c7ff',
              textAlign: 'center',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Connect with me professionally and explore my career journey.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/apeksha-rathgalle-831190314/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #0077b5, #00d4ff)',
                borderRadius: '50px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,212,255,0.4)',
                width: '100%',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,212,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,212,255,0.4)';
              }}
            >
              <Linkedin />
              Visit Profile
            </a>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0% { text-shadow: 0 0 40px rgba(162,89,255,0.5); }
          100% { text-shadow: 0 0 80px rgba(162,89,255,0.8), 0 0 120px rgba(255,0,255,0.5); }
        }

        input::placeholder, textarea::placeholder {
          color: rgba(217,199,255,0.5);
        }

        input:focus, textarea:focus {
          outline: none;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contacts;