import React, { useState } from "react";
import axios from "axios";

const CreateForm = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = type === "user" ? { username: name, email, phone } : { name, price };
      await axios.post(`http://localhost:9000/${type}/`, formData);

      setName("");
      setEmail("");
      setPhone("");
      setPrice("");

      alert(`${type === "user" ? "User" : "Product"} created successfully!`);
    } catch (error) {
      console.error(`Error creating ${type}:`, error);
      alert(`Error creating ${type}. Please try again later.`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create {type === "user" ? "User" : "Product"}</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {type === "user" && (
            <>
              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="phone" style={styles.label}>
                  Phone:
                </label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={styles.input}
                />
              </div>
            </>
          )}
          {type === "product" && (
            <div style={styles.formGroup}>
              <label htmlFor="price" style={styles.label}>
                Price:
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                style={styles.input}
              />
            </div>
          )}
          <button type="submit" style={styles.button}>
            Create {type === "user" ? "User" : "Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
