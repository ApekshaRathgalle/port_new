import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      position: 'fixed', // Changed from sticky to fixed
      top: '0.5rem', // Reduced from 1rem to 0.5rem
      zIndex: 100,
    }}>
    <nav style={{ 
        background: 'rgba(26, 0, 51, 0.8)',
        padding: '0.8rem 2rem',
        backdropFilter: 'blur(10px)',
        margin: '0', // Changed from 1rem 2rem
        borderRadius: '50px',
        boxShadow: '0 0 20px rgba(162, 89, 255, 0.5), inset 0 0 10px rgba(162, 89, 255, 0.3)',
        border: '1px solid rgba(162, 89, 255, 0.3)',
        transition: 'all 0.3s ease-in-out',
        maxWidth: '800px', 
        width: '90%',
      }}>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        margin: 0, 
        padding: 0, 
        gap: '2rem',
        justifyContent: 'center',
      }}>
        {[
          { path: '/', name: 'Home' },
          { path: '/about', name: 'About' },
          { path: '/projects', name: 'Projects' },
          { path: '/skills', name: 'Skills' },
          { path: '/contact', name: 'Contact' }
        ].map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              style={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(162, 89, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(162, 89, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;