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
      padding: '6rem 2rem 4rem 2rem'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '3rem',
          marginBottom: '2rem',
          background: 'linear-gradient(90deg, #a259ff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center'
        }}
      >
        Skills & Tools
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Technical Skills Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            backgroundColor: 'rgba(58,26,106,0.5)',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 0 20px rgba(162,89,255,0.3)'
          }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            color: '#ff00ff',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>Technical Skills</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {techSkills.map((skill, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain'
                  }}
                />
                <span style={{ fontSize: '0.9rem' }}>{skill.name}</span>
              </div>
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
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 0 20px rgba(162,89,255,0.3)'
          }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            color: '#ff00ff',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>Soft Skills</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {softSkills.map((skill, index) => (
              <div key={index} style={{
                padding: '0.5rem',
                backgroundColor: 'rgba(162, 89, 255, 0.2)',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '0.9rem'
              }}>
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            backgroundColor: 'rgba(58,26,106,0.5)',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 0 20px rgba(162,89,255,0.3)'
          }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            color: '#ff00ff',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>Tools</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '1rem'
          }}>
            {tools.map((tool, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain'
                  }}
                />
                <span style={{ fontSize: '0.9rem' }}>{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Skills;