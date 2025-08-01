import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/image.png.jpg';
import ApekshaRathgalle_Resume from '../assets/ApekshaRathgalle_Resume.pdf';

// Custom hook for typewriter effect
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = React.useState('');
  
  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayText;
};

// Icons remain the same as before
const LaptopCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
  </svg>
);

const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
  </svg>
);

const MobileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20H10v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
  </svg>
);

const About: React.FC = () => {
  // Education data
  const education = [
    {
      year: "2023-Present",
      degree: "BSc Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      description: "Specialized in Interactive Media and Creative Technologies",
      percentage: "85%"
    },
    {
      year: "2013-2021",
      degree: "Advanced Level Examination",
      institution: "Anuradapura Central College",
      description: "Biological Sciences",
      percentage: "100%"
    }
  ];

  type Skill = {
    name: string;
    icon: React.ComponentType;
    level: number;
    color: string;
  };

  const skills: Skill[] = [
    { name: "Video Editing", icon: VideoIcon, level: 90, color: "#FF6EC7" },
    { name: "Web Development", icon: LaptopCodeIcon, level: 85, color: "#6EC8FF" },
    { name: "App Development", icon: MobileIcon, level: 80, color: "#A66EFF" }
  ];

  

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #1a0033 0%, #0d001a 100%)',
      minHeight: '100vh',
      padding: '6rem 2rem 2rem 2rem',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '80vh',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 0'
        }}
      >
        {/* Left Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              color: '#ff6ec7',
              fontSize: '1.2rem',
              marginBottom: '1rem',
              fontWeight: '500'
            }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '4rem',
              fontWeight: '800',
              color: '#1a0033',
              marginBottom: '1rem',
              lineHeight: '1.1'
            }}
          >
            Your Name
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: '1.5rem',
              color: '#6ec8ff',
              marginBottom: '2rem',
              fontWeight: '600'
            }}
          >
            Creative Developer & Video Editor
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.6',
              marginBottom: '2.5rem',
              maxWidth: '500px',
              minHeight: '120px' // Added to prevent layout shift
            }}
          >
            {useTypewriter(
              "I specialize in creating stunning digital experiences through innovative web development and compelling video content. Let's bring your ideas to life with cutting-edge technology and creative vision.",
              30
            )}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              style={{ marginLeft: '2px' }}
            >
              |
            </motion.span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              display: 'flex',
              gap: '1rem'
            }}
          >
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = ApekshaRathgalle_Resume;
                link.download = 'ApekshaRathgalle_Resume.pdf'; // 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              style={{
                background: 'linear-gradient(135deg, #ff6ec7, #a66eff)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(255, 110, 199, 0.3)'
              }}
            >
              Download CV
            </button>
            
            <button style={{
              background: 'transparent',
              color: '#6ec8ff',
              border: '2px solid #6ec8ff',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Contact
            </button>
          </motion.div>
        </div>
        
        {/* Right Side - Photo Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Background Shapes */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff6ec7, #a66eff)',
            zIndex: 1,
            opacity: 0.3,
            filter: 'blur(50px)',
          }} />
          
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(110, 200, 255, 0.3)',
            top: '-50px',
            right: '-50px',
            zIndex: 0
          }} />
          
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 110, 199, 0.1)',
            bottom: '-30px',
            left: '-30px',
            zIndex: 0
          }} />
          
          {/* Photo Placeholder */}
          <div style={{
  width: '450px',
  height: '450px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  border: '3px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  overflow: 'hidden', // Added to keep image within border radius
}}>
  <img 
    src={image}
    alt="Profile"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%',
    }}
  />
</div>
        </motion.div>
      </motion.section>

   

      {/* Services Section */}
      <section style={{ margin: '5rem 0' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: '1.2rem',
            color: '#ff6ec7',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Services
          </h2>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#1a0033',
            marginBottom: '1rem',
            fontWeight: '800'
          }}>
            I Provide Wide Range of Digital Services
          </h3>
        </motion.div>

        {/* Skills Section */}
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={{
                  background: `linear-gradient(145deg, rgba(26,0,51,0.7), rgba(26,0,51,0.9))`,
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: `0 10px 30px -5px ${skill.color}40`,
                  border: `1px solid ${skill.color}30`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '200%',
                  background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                  zIndex: 0
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: skill.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'white'
                  }}>
                    <IconComponent />
                  </div>
                  <h3 style={{ 
                    margin: 0, 
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}>
                    {skill.name}
                  </h3>
                </div>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Professional {skill.name.toLowerCase()} services with modern techniques and creative approaches to deliver exceptional results.
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Educational Journey */}
      <section style={{ margin: '5rem 0' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: '1.2rem',
            color: '#ff6ec7',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Educational Journey
          </h2>
          <h3 style={{
            fontSize: '2.5rem',
            color: '#1a0033',
            marginBottom: '1rem',
            fontWeight: '800'
          }}>
            My Academic Background
          </h3>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              style={{
                background: 'rgba(26, 0, 51, 0.5)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(110, 200, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${index === 0 ? '#ff6ec7' : '#6ec8ff'}20 0%, transparent 70%)`,
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  color: '#ff6ec7',
                  fontWeight: '600',
                  fontSize: '1rem',
                  marginBottom: '0.5rem'
                }}>{edu.year}</div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  margin: '0.5rem 0',
                  color: 'white',
                  fontWeight: '700'
                }}>
                  {edu.degree}
                </h3>
                
                <div style={{
                  color: '#6ec8ff',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }}>
                  {edu.institution}
                </div>
                
                <p style={{ 
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {edu.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <div style={{
                    height: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    flex: 1,
                    marginRight: '1rem'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: edu.percentage }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.5, duration: 1.5 }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${index === 0 ? '#ff6ec7' : '#6ec8ff'}, #a66eff)`,
                        borderRadius: '4px'
                      }}
                    />
                  </div>
                  <div style={{
                    color: index === 0 ? '#ff6ec7' : '#6ec8ff',
                    fontWeight: '600',
                    fontSize: '1rem'
                  }}>{edu.percentage}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Bio */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: '800px',
          margin: '5rem auto',
          padding: '3rem',
          background: 'rgba(26, 0, 51, 0.5)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(110, 200, 255, 0.1)',
          boxShadow: '0 10px 30px -10px rgba(110, 200, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(166, 110, 255, 0.1) 0%, transparent 70%)',
          zIndex: 0
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 110, 199, 0.1) 0%, transparent 70%)',
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ 
              color: '#a66eff',
              fontSize: '2.5rem',
              marginBottom: '1.5rem'
            }}
          >
            My Creative Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            style={{ 
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)',
              marginBottom: '1.5rem'
            }}
          >
            I'm a passionate creative technologist with expertise in video production, 
            web development, and mobile applications. My journey began in digital arts 
            and evolved into full-stack development, allowing me to bridge the gap 
            between technical implementation and artistic vision.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            style={{ 
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.8)'
            }}
          >
            What drives me is the intersection of technology and creativity - finding 
            innovative ways to bring ideas to life through code and design. I believe 
            the best digital experiences are those that engage both the mind and the senses.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;