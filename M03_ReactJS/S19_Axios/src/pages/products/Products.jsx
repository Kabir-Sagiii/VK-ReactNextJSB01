import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$149",
      category: "Electronics",
      image: "🎧",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      category: "Wearables",
      image: "⌚",
    },
    {
      id: 3,
      name: "Laptop",
      price: "$999",
      category: "Computers",
      image: "💻",
    },
    {
      id: 4,
      name: "Camera",
      price: "$549",
      category: "Photography",
      image: "📷",
    },
    {
      id: 5,
      name: "Gaming Console",
      price: "$499",
      category: "Gaming",
      image: "🎮",
    },
    {
      id: 6,
      name: "Smartphone",
      price: "$799",
      category: "Mobile",
      image: "📱",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f6f9",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
    },
    heading: {
      textAlign: "center",
      fontSize: "36px",
      color: "#1e293b",
      marginBottom: "10px",
    },
    subHeading: {
      textAlign: "center",
      color: "#64748b",
      marginBottom: "40px",
      fontSize: "16px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "25px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "14px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "0.3s",
    },
    image: {
      fontSize: "70px",
      marginBottom: "15px",
    },
    category: {
      color: "#2563eb",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "8px",
    },
    name: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1e293b",
      marginBottom: "12px",
    },
    price: {
      fontSize: "24px",
      color: "#16a34a",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "12px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      width: "100%",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Our Products</h1>
      <p style={styles.subHeading}>
        Explore our premium collection of quality products.
      </p>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.image}>{product.image}</div>

            <div style={styles.category}>{product.category}</div>

            <h2 style={styles.name}>{product.name}</h2>

            <div style={styles.price}>{product.price}</div>

            <button style={styles.button}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;