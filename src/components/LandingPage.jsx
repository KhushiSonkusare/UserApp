import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Admin Panel</h1>
      <div style={styles.buttonsContainer}>
        <Link to="/users" style={styles.link}>
          <button style={styles.button}>User Management</button>
        </Link>
        <Link to="/products" style={styles.link}>
          <button style={styles.button}>Product Management</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e8f4f8', 
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px', 
    color: '#0056b3', 
    textTransform: 'uppercase',
    letterSpacing: '1px', 
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-around', 
    width: '100%',
    maxWidth: '600px', 
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease', 
    boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.25)', 
  },
};

;

export default LandingPage;
