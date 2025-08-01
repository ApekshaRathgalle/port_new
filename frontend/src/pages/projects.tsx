import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Section {
  id: number;
  title: string;
  description: string;
  icon: string;
  skills: string[];
  color: string;
  gradient: string;
}

const PortfolioSections: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const sections: Section[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Creating modern, responsive web applications with cutting-edge technologies. From interactive user interfaces to robust backend systems, I craft digital experiences that engage and perform.',
      icon: '🌐',
      skills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS', 'GraphQL'],
      color: '#a259ff',
      gradient: 'linear-gradient(135deg, #a259ff, #ff00ff)'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Building native and cross-platform mobile applications that deliver seamless user experiences. From iOS to Android, creating apps that connect and inspire.',
      icon: '📱',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo', 'Redux', 'SQLite'],
      color: '#ff00ff',
      gradient: 'linear-gradient(135deg, #ff00ff, #ff6b6b)'
    },
    {
      id: 3,
      title: 'Video Editing',
      description: 'Transforming raw footage into compelling visual stories. From promotional videos to social media content, I create engaging narratives that captivate audiences.',
      icon: '🎬',
      skills: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro', 'Motion Graphics', 'Color Grading'],
      color: '#6c5ce7',
      gradient: 'linear-gradient(135deg, #6c5ce7, #a259ff)'
    },
    {
      id: 4,
      title: 'Graphic Designing',
      description: 'Crafting visual identities and stunning designs that communicate brand messages effectively. From logos to complete brand systems, bringing creative visions to life.',
      icon: '🎨',
      skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Brand Identity', 'UI/UX Design', 'Typography'],
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b, #ffd700)'
    }
  ];

  const handleSectionClick = (section: Section) => {
    if (section.id === 1) { // Web Development section
      navigate('/webdev');
    } else {
      setSelectedSection(section);
    }
  };

  const handleCloseDetail = () => {
    setSelectedSection(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#1a0033',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      padding: '8rem 2rem 2rem 2rem', // Increased top padding
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // Changed from center to flex-start
      alignItems: 'center'
    }}>
      <AnimatePresence mode="wait">
        {!selectedSection ? (
          <motion.div
            key="sections"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            style={{ width: '100%', maxWidth: '1400px' }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              style={{
                fontSize: '3.5rem',
                marginBottom: '3rem',
                background: 'linear-gradient(90deg, #a259ff, #ff00ff, #6c5ce7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              My Expertise
            </motion.h1>
            
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                padding: '2rem 0'
              }}
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSection(section.id)}
                  onHoverEnd={() => setHoveredSection(null)}
                  onClick={() => handleSectionClick(section)}
                  style={{
                    background: hoveredSection === section.id 
                      ? section.gradient 
                      : 'rgba(58,26,106,0.5)',
                    borderRadius: '20px',
                    padding: '2rem',
                    cursor: 'pointer',
                    boxShadow: hoveredSection === section.id 
                      ? 0 20px 40px rgba(${section.color.slice(1).match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ')}, 0.4)
                      : '0 10px 30px rgba(0,0,0,0.3)',
                    border: 2px solid ${hoveredSection === section.id ? 'transparent' : section.color},
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: hoveredSection === section.id ? 1.2 : 1,
                      rotate: hoveredSection === section.id ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      fontSize: '4rem',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    {section.icon}
                  </motion.div>
                  
                  <h3 style={{
                    fontSize: '1.8rem',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    color: hoveredSection === section.id ? 'white' : section.color,
                    fontWeight: 'bold'
                  }}>
                    {section.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    opacity: hoveredSection === section.id ? 1 : 0.8
                  }}>
                    {section.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {section.skills.slice(0, 4).map(skill => (
                      <motion.span 
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        style={{
                          padding: '0.3rem 0.8rem',
                          backgroundColor: hoveredSection === section.id 
                            ? 'rgba(255,255,255,0.2)' 
                            : 'rgba(162, 89, 255, 0.2)',
                          borderRadius: '15px',
                          fontSize: '0.8rem',
                          border: 1px solid ${hoveredSection === section.id ? 'white' : section.color}
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      opacity: hoveredSection === section.id ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  >
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      Click to explore →
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '2rem'
            }}
          >
            <motion.button 
              onClick={handleCloseDetail}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: 'rgba(58,26,106,0.7)',
                border: 2px solid ${selectedSection.color},
                borderRadius: '25px',
                color: selectedSection.color,
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '2rem',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              ← Back to Sections
            </motion.button>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                background: selectedSection.gradient,
                borderRadius: '25px',
                padding: '3rem',
                boxShadow: 0 30px 60px rgba(${selectedSection.color.slice(1).match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ')}, 0.3),
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{
                    fontSize: '5rem',
                    marginRight: '2rem'
                  }}
                >
                  {selectedSection.icon}
                </motion.div>
                <div>
                  <h1 style={{
                    fontSize: '3rem',
                    marginBottom: '0.5rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {selectedSection.title}
                  </h1>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem'
                  }}>
                    {selectedSection.description}
                  </p>
                  {selectedSection.id === 3 && (
                    <motion.a
                      href="https://youtube.com/@liasmichelle3523?si=MDFQSS7ZSpDLMAU4"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.5rem',
                        backgroundColor: '#FF0000',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        boxShadow: '0 8px 16px rgba(255, 0, 0, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                      Watch on YouTube
                    </motion.a>
                  )}
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  Skills & Technologies
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem'
                }}>
                  {selectedSection.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '15px',
                        textAlign: 'center',
                        border: '1px solid rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        color: 'white'
                      }}>
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          marginTop: '4rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(255, 107, 107, 0.1))',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(162, 89, 255, 0.1)',
          border: '1px solid rgba(162, 89, 255, 0.3)'
        }}
      >
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#F1F1F1',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Let's Work Together
        </h2>
        <p style={{
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'rgba(255,255,255,0.8)'
        }}>
          Ready to bring your ideas to life? Let's create something amazing together!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(90deg, #a259ff, #ff00ff)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(162, 89, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              border: '2px solid #ff00ff',
              borderRadius: '50px',
              color: '#ff00ff',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            View Portfolio
          </motion.a>
        </div>
      </motion.div>
    </main>
  );
};

export default PortfolioSections;