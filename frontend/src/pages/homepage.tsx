import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4';
import profileImage from '../assets/image.png.jpg';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto-scroll after 20 seconds
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      overflowX: 'hidden',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
    }}>
      {/* Hero Section with Video Background */}
      <section style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Video Background Container */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundColor: '#1a0033',
        }}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 1,
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Overlay */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(0.2px)',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
          <h1 style={{
            fontSize: '4rem',
    fontWeight: 800,
    marginBottom: '1.5rem',
    letterSpacing: '2px',
    color: '#ffffff', // Solid white color for better visibility
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Added text shadow for contrast
    lineHeight: '1.2',
          }}>
            Welcome to My Portfolio
          </h1>

          <p style={{
            fontSize: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            color: '#F1F1F1',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}>
            Video Editing • Web Development • Mobile Apps • Youtuber
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}>
            <button
  onClick={() => navigate('/projects')}
  style={{
    padding: '14px 32px',
    background: 'transparent',
    border: '2px solid #6C5CE7',
    borderRadius: '50px',
    color: '#F1F1F1',
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(108, 92, 231, 0.3)',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = '#00ffff';
    e.currentTarget.style.color = '#00ffff';
    e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.5)';
    e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = '#6C5CE7';
    e.currentTarget.style.color = '#F1F1F1';
    e.currentTarget.style.boxShadow = '0 0 10px rgba(108, 92, 231, 0.3)';
    e.currentTarget.style.background = 'transparent';
  }}
>
 View projects
</button>

            <button
  onClick={() => window.open('https://youtube.com/@liasmichelle3523?si=4Z0HOYTIm6vyYK9G', '_blank')}
  style={{
    padding: '14px 32px',
    background: 'transparent',
    border: '2px solid #FF0000',
    borderRadius: '50px',
    color: '#F1F1F1',
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = '#FF0000';
    e.currentTarget.style.color = '#FF0000';
    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.5)';
    e.currentTarget.style.background = 'rgba(255, 0, 0, 0.1)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = '#FF0000';
    e.currentTarget.style.color = '#F1F1F1';
    e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
    e.currentTarget.style.background = 'transparent';
  }}
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
  YouTube Channel
</button>

            <button
  onClick={() => navigate('/contact')}
  style={{
    padding: '14px 32px',
    background: 'transparent',
    border: '2px solid #6C5CE7',
    borderRadius: '50px',
    color: '#F1F1F1',
    fontWeight: 700,
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(108, 92, 231, 0.3)',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = '#00ffff';
    e.currentTarget.style.color = '#00ffff';
    e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.5)';
    e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderColor = '#6C5CE7';
    e.currentTarget.style.color = '#F1F1F1';
    e.currentTarget.style.boxShadow = '0 0 10px rgba(108, 92, 231, 0.3)';
    e.currentTarget.style.background = 'transparent';
  }}
>
  Contact Me
</button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section style={{
        minHeight: '100vh',
        backgroundColor: '#1a0033',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 2rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '4rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {/* Photo Frame */}
          <div style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            border: '15px solid #3a1a6a',
            boxShadow: '0 0 30px rgba(162, 89, 255, 0.5)',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#3a1a6a',
          }}>
            {/* Replace with your actual photo */}
            <div style={{
              width: '100%',
              height: '100%',
              background: `url(${profileImage}) center/cover`,
              borderRadius: '50%',
            }} />
          </div>

          {/* Description */}
          <div style={{
            maxWidth: '600px',
            textAlign: 'left',
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              background: 'linear-gradient(90deg, #a259ff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              About Me
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}>
              Hi, I'm Apeksha Rathgalle, an undergraduate student specializing in Interactive Media. I'm passionate about creative technologies, especially video editing and game development. I enjoy blending design and technology to create engaging digital experiences, and I’ve worked on projects involving interactive applications, media content creation, and game design. I'm always excited to learn new tools and bring innovative ideas to life.

</p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.9)',
            }}>
              My approach combines technical precision with artistic vision, ensuring every project delivers both functionality and aesthetic appeal. When I'm not creating, you can find me exploring new technologies or mentoring aspiring developers.
            </p>
            <button
              style={{
                padding: '12px 28px',
                background: 'linear-gradient(90deg, #a259ff, #ff00ff)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 0 15px #a259ff80',
                transition: 'transform 0.2s',
              }}
            >
              Learn More About My Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;