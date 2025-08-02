import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import finance1 from '../assets/finnce/IMG-20250801-WA0025.jpg';
import finance2 from '../assets/finnce/IMG-20250801-WA0026.jpg';
import finance3 from '../assets/finnce/IMG-20250801-WA0027.jpg';
import finance4 from '../assets/finnce/IMG-20250801-WA0028.jpg';
import finance5 from '../assets/finnce/IMG-20250801-WA0029.jpg';
import finance6 from '../assets/finnce/IMG-20250801-WA0030.jpg';
import finance7 from '../assets/finnce/IMG-20250801-WA0031.jpg';
import finance8 from '../assets/finnce/IMG-20250801-WA0032.jpg';
import finance9 from '../assets/finnce/IMG-20250801-WA0033.jpg';
import finance10 from '../assets/finnce/IMG-20250801-WA0034.jpg';
import finance11 from '../assets/finnce/IMG-20250801-WA0035.jpg';
import finance12 from '../assets/finnce/IMG-20250801-WA0036.jpg';
import finance13 from '../assets/finnce/IMG-20250801-WA0037.jpg';
import image3 from '../assets/finnce/image.png';
import financeVideo from '../assets/finnce/finance.mp4';

const TaskApp: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Screenshots for the finance tracking app
  const appScreenshots = [
    image3, // Main dashboard screenshot
    finance2, // Transaction list view
    finance3, // Budget overview
    finance4 , // Analytics/Reports
    finance5,
    finance6,
    finance7,
    finance8,
    finance9,
    finance10,
    finance11,
    finance12,
    finance13,
    finance1
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % appScreenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '6rem 2rem 4rem 2rem'
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Header Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        animation: 'fadeIn 0.8s ease-out'
      }}>
        <button
          onClick={() => navigate('/mobile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: 'rgba(46, 213, 115, 0.2)',
            border: '1px solid rgba(46, 213, 115, 0.4)',
            borderRadius: '25px',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '3rem',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(46, 213, 115, 0.3)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(46, 213, 115, 0.2)';
          }}
        >
          <ChevronLeft size={18} />
          Back to Mobile Projects
        </button>

        {/* App Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            background: 'linear-gradient(135deg, #2ed573, #1e90ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            fontWeight: '800'
          }}>
            Finance Tracker App
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            A comprehensive personal finance tracking mobile application with expense management, budget planning, and financial analytics
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '4rem'
        }}>
          {/* Screenshots Section */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              color: '#2ed573'
            }}>
              App Screenshots
            </h2>
            
            {/* Mobile Phone Frame */}
            <div style={{
              width: '300px',
              height: '600px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: '40px',
              border: '12px solid #222',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(46, 213, 115, 0.3)',
              background: '#000'
            }}>
              <img 
                src={appScreenshots[currentImageIndex]} 
                alt={`Finance App Screenshot ${currentImageIndex + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '2px solid #2ed573',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '2px solid #2ed573',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicators */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {appScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: index === currentImageIndex ? '#2ed573' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              color: '#2ed573'
            }}>
              Key Features
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Expense Tracking",
                  description: "Track daily expenses across multiple categories with automatic categorization and receipt scanning"
                },
                {
                  title: "Budget Management",
                  description: "Set monthly budgets, monitor spending limits, and receive alerts when approaching budget thresholds"
                },
                {
                  title: "Financial Analytics",
                  description: "Comprehensive charts and reports showing spending patterns, trends, and financial insights"
                },
                {
                  title: "Multi-Account Support",
                  description: "Manage multiple bank accounts, credit cards, and digital wallets in one unified interface"
                },
                {
                  title: "Secure & Private",
                  description: "Bank-level security with encrypted data storage and biometric authentication"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(46, 213, 115, 0.1)',
                    borderRadius: '16px',
                    border: '1px solid rgba(46, 213, 115, 0.2)',
                    animation: `fadeIn 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    color: '#2ed573'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.5'
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div style={{
          marginBottom: '4rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: '#2ed573'
          }}>
            Built With
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {["Android Studio", "Kotlin", "Room Database", "Firebase", "Chart.js", "Biometric API"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.8rem 1.5rem',
                  background: 'linear-gradient(135deg, rgba(46, 213, 115, 0.2), rgba(30, 144, 255, 0.2))',
                  border: '1px solid rgba(46, 213, 115, 0.3)',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <a
            href="https://github.com/yourusername/finance-tracker-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(46, 213, 115, 0.3)',
              borderRadius: '30px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            <Github size={20} />
            View Source Code
          </a>
        </div>

        {/* Demo Video Section */}
        <div style={{
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: '#2ed573'
          }}>
            App Demo Video
          </h2>
          
          {/* Mobile Phone Frame for Video */}
          <div style={{
            width: '300px',
            height: '600px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '40px',
            border: '12px solid #222',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(46, 213, 115, 0.3)',
            background: '#000'
          }}>
            <video 
              src={financeVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
