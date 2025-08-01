import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Tech skills with icons
  const techSkills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  // Soft skills
  const softSkills = [
    'Communication', 'Teamwork', 'Problem Solving', 
    'Time Management', 'Adaptability', 'Creativity',
    'Leadership', 'Critical Thinking', 'Emotional Intelligence'
  ];

  // Tools with icons
  const tools = [
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'R Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Eclipse IDE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg' },
    { name: 'Microsoft SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Adobe Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg' },
    { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
    { name: 'DaVinci Resolve', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg' },
    { name: 'Clipchamp', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Clipchamp_Logo.png' },
    { name: 'CapCut', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/CapCut_Logo.png' }
  ];

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#1a0033',
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      padding: '8rem 2rem 4rem 2rem',
      background: 'linear-gradient(135deg, #1a0033 0%, #2d1b69 25%, #1a0033 50%, #0d001a 75%, #1a0033 100%)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        Skills & Tools
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '3rem',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Technical Skills Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            backgroundColor: 'rgba(58,26,106,0.5)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 0 30px rgba(162,89,255,0.4)',
            border: '1px solid rgba(162,89,255,0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <h2 style={{
            fontSize: '2rem',
            color: '#ff00ff',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: '600'
          }}>Technical Skills</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1.5rem'
          }}>
            {techSkills.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.2rem',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(162, 89, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid rgba(162, 89, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(162,89,255,0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.1)';
                }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  style={{
                    width: '55px',
                    height: '55px',
                    objectFit: 'contain'
                  }}
                />
                <span style={{ 
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            backgroundColor: 'rgba(58,26,106,0.5)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 0 30px rgba(162,89,255,0.4)',
            border: '1px solid rgba(162,89,255,0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <h2 style={{
            fontSize: '2rem',
            color: '#ff00ff',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: '600'
          }}>Soft Skills</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '1.2rem'
          }}>
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                style={{
                  padding: '1.2rem',
                  backgroundColor: 'rgba(162, 89, 255, 0.2)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid rgba(162, 89, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.4)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(162,89,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.2)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section - Spanning full width */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            backgroundColor: 'rgba(58,26,106,0.5)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 0 30px rgba(162,89,255,0.4)',
            border: '1px solid rgba(162,89,255,0.3)',
            backdropFilter: 'blur(10px)',
            gridColumn: '1 / -1'
          }}
        >
          <h2 style={{
            fontSize: '2rem',
            color: '#ff00ff',
            marginBottom: '2rem',
            textAlign: 'center',
            fontWeight: '600'
          }}>Development Tools & Software</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1.5rem'
          }}>
            {tools.map((tool, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.2rem',
                  borderRadius: '15px',
                  backgroundColor: 'rgba(162, 89, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid rgba(162, 89, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(162,89,255,0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.1)';
                }}
              >
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  style={{
                    width: '55px',
                    height: '55px',
                    objectFit: 'contain'
                  }}
                />
                <span style={{ 
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;