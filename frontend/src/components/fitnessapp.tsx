import React from 'react';
import { ChevronLeft, Github, Star, Download, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import trendVideo from '../assets/finnce/trend.mp4';

const FitnessApp: React.FC = () => {
  const navigate = useNavigate();

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
            backgroundColor: 'rgba(255, 107, 107, 0.2)',
            border: '1px solid rgba(255, 107, 107, 0.4)',
            borderRadius: '25px',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '3rem',
            transition: 'all 0.3s ease',
            fontSize: '0.9rem'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(255, 107, 107, 0.3)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';
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
            background: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            fontWeight: '800'
          }}>
            Luxury Brand Mobile App
          </h1>
          
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Exclusive mobile application development for luxury brands with premium design, seamless user experience, and high-end functionality
          </p>

          {/* App Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
                marginBottom: '0.5rem'
              }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} fill="#ffd700" color="#ffd700" />
                ))}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                5.0 Rating
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#ff6b6b',
                marginBottom: '0.3rem'
              }}>
                50+
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Luxury Clients
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#ffa726',
                marginBottom: '0.3rem'
              }}>
              Premium
              </div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                Quality
              </div>
            </div>
          </div>
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
              color: '#ff6b6b'
            }}>
              App Demo Video
            </h2>
            
            {/* Video Player */}
            <div style={{
              width: '100%',
              maxWidth: '350px',
              margin: '0 auto',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(255, 107, 107, 0.3)',
              background: '#000',
              aspectRatio: '9/16' // 9:16 aspect ratio for mobile video
            }}>
              <video
                width="100%"
                height="100%"
                controls
                style={{
                  borderRadius: '20px',
                  objectFit: 'cover'
                }}
                poster="" // You can add a poster image if needed
              >
                <source src={trendVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Info Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '2rem 1.5rem 1rem',
                color: 'white',
                pointerEvents: 'none' // Allow clicking through to video controls
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginBottom: '0.5rem'
                }}>
                  <Play size={24} color="#ff6b6b" />
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    Watch Full Demo
                  </span>
                </div>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: '0.8',
                  margin: '0'
                }}>
                  See the luxury app in action with premium features
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              color: '#ff6b6b'
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
                  title: "Premium UI/UX Design",
                  description: "Sophisticated and elegant user interface designed specifically for luxury brand aesthetics and premium user experience"
                },
                {
                  title: "Custom Brand Integration",
                  description: "Seamless integration of brand identity, colors, typography, and visual elements that reflect luxury brand values"
                },
                {
                  title: "High-End Features",
                  description: "Exclusive features including VIP memberships, personalized recommendations, and premium customer service integration"
                },
                {
                  title: "Secure Transactions",
                  description: "Bank-grade security for luxury purchases with encrypted payment processing and fraud protection"
                },
                {
                  title: "Personalized Experience",
                  description: "AI-driven personalization that adapts to individual customer preferences and shopping behaviors"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255, 107, 107, 0.1)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 107, 107, 0.2)',
                    animation: `fadeIn 0.8s ease-out ${index * 0.1}s both`
                  }}
                >
                  <h3 style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    color: '#ff6b6b'
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
            color: '#ff6b6b'
          }}>
            Built With
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {["React Native", "TypeScript", "Redux", "Stripe API", "Firebase", "Push Notifications"].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.8rem 1.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 167, 38, 0.2))',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
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
            href="https://github.com/yourusername/luxury-brand-mobile-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 107, 107, 0.3)',
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
          
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
              border: 'none',
              borderRadius: '30px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
            }}
          >
            <Download size={20} />
            Download App
          </a>
        </div>
      </div>
    </div>
  );
};

export default FitnessApp;
