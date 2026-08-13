import React from "react";

function Home() {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      boxSizing: "border-box",
    },
    card: {
      backgroundColor: "#ffffff",
      maxWidth: "700px",
      width: "100%",
      padding: "50px",
      borderRadius: "16px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
      textAlign: "center",
    },
    badge: {
      display: "inline-block",
      backgroundColor: "#2563eb",
      color: "#fff",
      padding: "8px 18px",
      borderRadius: "50px",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "20px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#64748b",
      lineHeight: "1.8",
      marginBottom: "35px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
    },
    primaryButton: {
      backgroundColor: "#2563eb",
      color: "#fff",
      padding: "14px 30px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
    },
    secondaryButton: {
      backgroundColor: "#ffffff",
      color: "#2563eb",
      padding: "14px 30px",
      border: "2px solid #2563eb",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "45px",
      borderTop: "1px solid #e5e7eb",
      paddingTop: "30px",
      flexWrap: "wrap",
      gap: "20px",
    },
    stat: {
      flex: 1,
      minWidth: "120px",
    },
    statNumber: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#2563eb",
    },
    statLabel: {
      color: "#64748b",
      marginTop: "6px",
      fontSize: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <span style={styles.badge}>Professional Dashboard</span>

        <h1 style={styles.title}>
          Build Modern Applications with Confidence
        </h1>

        <p style={styles.subtitle}>
          Create scalable, responsive, and high-performance web applications
          using modern JavaScript technologies. Start building your next
          project with a clean and professional user experience.
        </p>

        <div style={styles.buttonContainer}>
          <button style={styles.primaryButton}>
            Get Started
          </button>

          <button style={styles.secondaryButton}>
            Learn More
          </button>
        </div>

        <div style={styles.statsContainer}>
          <div style={styles.stat}>
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Projects</div>
          </div>

          <div style={styles.stat}>
            <div style={styles.statNumber}>10K+</div>
            <div style={styles.statLabel}>Users</div>
          </div>

          <div style={styles.stat}>
            <div style={styles.statNumber}>99%</div>
            <div style={styles.statLabel}>Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;