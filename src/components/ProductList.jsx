import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/product/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PRODUCT LIST</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td style={styles.tableCell}>{product.name}</td>
              <td style={styles.tableCell}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.buttonContainer}>
        <Link to="/products/update" style={styles.link}>
          <button style={styles.button}>Update Product</button>
        </Link>
        <Link to="/products/remove" style={styles.link}>
          <button style={styles.button}>Delete Product</button>
        </Link>
        <Link to="/products/create" style={styles.link}>
          <button style={styles.button}>Create Product</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff", // Lighter and cleaner background color
    color: "#333",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.2rem", // Slightly larger font size
    marginBottom: "30px", // Increased space below heading
    color: "#0056b3", // Consistent theme color
  },
  table: {
    width: "90%", // Wider table for better data visibility
    borderCollapse: "collapse",
    marginBottom: "20px",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  },
  tableHeader: {
    backgroundColor: "#f0f0f0", // Light grey background for headers
    padding: "15px",
    borderBottom: "2px solid #ddd", // Thicker border for definition
    textAlign: "center",
    fontWeight: "bold", // Bold font for headers
  },
  tableCell: {
    padding: "15px",
    textAlign: "center",
    borderBottom: "1px solid #eee", // Lighter for a more refined look
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center", 
    gap: "15px", 
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
};


styles.button[':hover'] = {
  backgroundColor: '#0056b3', 
  transform: 'scale(1.05)', 
};

export default ProductList;
