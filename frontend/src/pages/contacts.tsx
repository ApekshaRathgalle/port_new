import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, Eye, EyeOff, Send, CheckCircle } from 'lucide-react';

const Contacts: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const phoneNumber = '+94 702660480';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = emailForm;
    const mailtoUrl = `mailto:apeksharathgalle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
    setEmailSent(true);
    setEmailForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setEmailSent(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0014 0%, #1a0033 25%, #2d1b4e 50%, #1a0033 75%, #0a0014 100%)',
      color: 'white',
      fontFamily: "'Inter', 'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden'
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
        padding: '2rem',
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
            
            <button
              onClick={() => {
                const subject = encodeURIComponent('Project Inquiry - Let\'s Work Together!');
                const body = encodeURIComponent('Hi Apeksha,\n\nI came across your portfolio and I\'m interested in discussing a potential project.\n\nBest regards,');
                const mailtoUrl = `mailto:apeksharathgalle@gmail.com?subject=${subject}&body=${body}`;
                window.location.href = mailtoUrl;
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #a259ff, #ff00ff)',
                borderRadius: '50px',
                color: 'white',
                border: 'none',
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
              <Send />
              Quick Email
            </button>
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

        {/* Enhanced Email Form */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto 4rem',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '3rem',
          border: '1px solid rgba(162,89,255,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #a259ff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700',
            textAlign: 'center'
          }}>Send a Detailed Message</h2>
          
          <p style={{
            textAlign: 'center',
            color: '#d9c7ff',
            fontSize: '1.1rem',
            marginBottom: '2.5rem'
          }}>
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          {emailSent && (
            <div style={{
              background: 'rgba(0,255,0,0.1)',
              border: '1px solid rgba(0,255,0,0.3)',
              borderRadius: '12px',
              padding: '1rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#00ff88'
            }}>
              <CheckCircle />
              Email client opened! Please send your message.
            </div>
          )}

          <form onSubmit={handleEmailSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#a259ff',
                  fontWeight: '600'
                }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={emailForm.name}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(162,89,255,0.3)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a259ff';
                    e.target.style.boxShadow = '0 0 20px rgba(162,89,255,0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(162,89,255,0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#a259ff',
                  fontWeight: '600'
                }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={emailForm.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(162,89,255,0.3)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a259ff';
                    e.target.style.boxShadow = '0 0 20px rgba(162,89,255,0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(162,89,255,0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#a259ff',
                fontWeight: '600'
              }}>Subject *</label>
              <input
                type="text"
                name="subject"
                required
                value={emailForm.subject}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(162,89,255,0.3)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a259ff';
                  e.target.style.boxShadow = '0 0 20px rgba(162,89,255,0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(162,89,255,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#a259ff',
                fontWeight: '600'
              }}>Message *</label>
              <textarea
                name="message"
                required
                rows={6}
                value={emailForm.message}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(162,89,255,0.3)',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#a259ff';
                  e.target.style.boxShadow = '0 0 20px rgba(162,89,255,0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(162,89,255,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '1.2rem 2rem',
                background: 'linear-gradient(135deg, #a259ff, #ff00ff)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(162,89,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                margin: '1rem auto 0'
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
              <Send />
              Send Message
            </button>
          </form>
        </div>

        {/* Phone Section */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '2.5rem',
          border: '1px solid rgba(162,89,255,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255,193,7,0.3), rgba(255,152,0,0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            boxShadow: '0 10px 30px rgba(255,193,7,0.3)'
          }}>
            <Phone style={{ fontSize: '2rem', color: '#ffc107' }} />
          </div>

          <h3 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffc107, #ff9800)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700'
          }}>Phone Number</h3>
          
          <p style={{
            marginBottom: '2rem',
            color: '#d9c7ff',
            fontSize: '1.1rem'
          }}>For urgent matters, feel free to give me a call</p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(255,193,7,0.1)',
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              border: '1px solid rgba(255,193,7,0.3)',
              fontSize: '1.2rem',
              letterSpacing: '1px',
              filter: showPhone ? 'none' : 'blur(5px)',
              userSelect: showPhone ? 'text' : 'none',
              transition: 'filter 0.3s ease'
            }}>
              {phoneNumber}
            </div>
            
            <button 
              onClick={() => setShowPhone(!showPhone)}
              style={{
                background: 'rgba(255,193,7,0.2)',
                border: '1px solid rgba(255,193,7,0.3)',
                borderRadius: '12px',
                padding: '1rem',
                color: '#ffc107',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,193,7,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,193,7,0.2)';
              }}
            >
              {showPhone ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <button 
            onClick={copyToClipboard}
            style={{
              padding: '1rem 2rem',
              background: copied ? 'rgba(0,255,0,0.2)' : 'rgba(255,193,7,0.2)',
              border: `1px solid ${copied ? 'rgba(0,255,0,0.3)' : 'rgba(255,193,7,0.3)'}`,
              borderRadius: '50px',
              color: copied ? '#00ff88' : '#ffc107',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              margin: '0 auto'
            }}
            onMouseEnter={(e) => {
              if (!copied) {
                e.currentTarget.style.background = 'rgba(255,193,7,0.3)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                e.currentTarget.style.background = 'rgba(255,193,7,0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            {copied ? (
              <>
                <CheckCircle style={{ marginRight: '0.5rem' }} />
                Copied!
              </>
            ) : (
              'Copy Number'
            )}
          </button>
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