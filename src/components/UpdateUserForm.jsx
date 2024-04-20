import React, { useState } from 'react';
import axios from 'axios';

function UpdateForm() {
  const [formType, setFormType] = useState('user'); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:9000/user/${username}`, { email, phone });
      setUsername('');
      setEmail('');
      setPhone('');
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user. Please try again later.');
    }
  };

  const handleProductSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:9000/product/${name}`, { price });
      setName('');
      setPrice('');
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product. Please try again later.');
    }
  };

  const toggleForm = () => {
    setFormType(formType === 'user' ? 'product' : 'user');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={toggleForm} style={styles.toggleButton}>
          Switch to {formType === 'user' ? 'Product' : 'User'} Update
        </button>

        <h2 style={styles.heading}>{formType === 'user' ? 'Update User' : 'Update Product'}</h2>

        <form onSubmit={formType === 'user' ? handleUserSubmit : handleProductSubmit} style={styles.form}>
          {formType === 'user' ? (
            <>
              <FormGroup label="Username" value={username} onChange={setUsername} type="text" />
              <FormGroup label="Email" value={email} onChange={setEmail} type="email" />
              <FormGroup label="Phone" value={phone} onChange={setPhone} type="tel" />
            </>
          ) : (
            <>
              <FormGroup label="Name" value={name} onChange={setName} type="text" />
              <FormGroup label="Price" value={price} onChange={setPrice} type="number" />
            </>
          )}

          <button type="submit" style={styles.button}>
            Update {formType === 'user' ? 'User' : 'Product'}
          </button>
        </form>
      </div>
    </div>
  );
}

function FormGroup({ label, value, onChange, type }) {
  return (
    <div style={styles.formGroup}>
      <label style={styles.label}>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#e8eaf6', 
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '24px',
    color: '#3f51b5', 
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    color: '#333',
    fontWeight: '500',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    width: '100%',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#3f51b5',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  toggleButton: {
    display: 'block',
    marginBottom: '20px',
    padding: '8px 16px',
    backgroundColor: '#bbbbbb', 
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default UpdateForm;
