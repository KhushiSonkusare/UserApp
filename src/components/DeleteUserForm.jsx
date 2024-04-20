import React, { useState } from "react";
import axios from "axios";

const DeleteForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("user"); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:9000/${type}/${name}`;
    try {
      await axios.delete(url);
      setName("");
      alert(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`);
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      alert(`Error deleting ${type}. Please try again later.`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Delete {type.charAt(0).toUpperCase() + type.slice(1)}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="type" style={styles.label}>Choose Type:</label><br /><br />
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={styles.input}
            >
              <option value="user">User</option>
              <option value="product">Product</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              {type.charAt(0).toUpperCase() + type.slice(1)} Name:
            </label><br /><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Delete {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#333",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#555",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#61dafb",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "1rem",
    color: "#fff",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#ddd",
    color: "#333",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    backgroundColor: "#61dafb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
  },
  buttonHover: {
    backgroundColor: "#0078d4",
  },
  buttonActive: {
    transform: "scale(0.98)",
  },
};

export default DeleteForm;
