import React from "react";

function Profile() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f7fb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      padding: "30px",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      maxWidth: "900px",
      backgroundColor: "#fff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    },
    cover: {
      height: "180px",
      background: "linear-gradient(135deg, #2563eb, #1e40af)",
      position: "relative",
    },
    avatar: {
      width: "130px",
      height: "130px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      border: "5px solid #fff",
      position: "absolute",
      bottom: "-65px",
      left: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "46px",
      fontWeight: "bold",
      color: "#2563eb",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
    body: {
      padding: "80px 40px 40px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
    },
    name: {
      margin: 0,
      fontSize: "30px",
      color: "#1e293b",
    },
    role: {
      color: "#64748b",
      marginTop: "8px",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "12px 24px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
    },
    section: {
      marginTop: "35px",
    },
    heading: {
      color: "#1e293b",
      marginBottom: "12px",
      fontSize: "20px",
    },
    text: {
      color: "#64748b",
      lineHeight: "1.8",
      fontSize: "15px",
    },
    infoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    infoCard: {
      backgroundColor: "#f8fafc",
      padding: "18px",
      borderRadius: "10px",
    },
    label: {
      color: "#64748b",
      fontSize: "13px",
      marginBottom: "6px",
    },
    value: {
      color: "#1e293b",
      fontWeight: "600",
      fontSize: "16px",
    },
    stats: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      marginTop: "30px",
      flexWrap: "wrap",
    },
    statCard: {
      flex: 1,
      minWidth: "150px",
      backgroundColor: "#2563eb",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      textAlign: "center",
    },
    statNumber: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    statLabel: {
      marginTop: "8px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.cover}>
          <div style={styles.avatar}>JD</div>
        </div>

        <div style={styles.body}>
          <div style={styles.header}>
            <div>
              <h1 style={styles.name}>John Doe</h1>
              <p style={styles.role}>Senior Full Stack Developer</p>
            </div>

            <button style={styles.button}>Edit Profile</button>
          </div>

          <div style={styles.section}>
            <h2 style={styles.heading}>About</h2>
            <p style={styles.text}>
              Passionate Full Stack Developer with experience in React,
              JavaScript, Node.js, and modern web technologies. Focused on
              building scalable, secure, and user-friendly applications with
              clean code and responsive design.
            </p>
          </div>

          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <div style={styles.label}>Email</div>
              <div style={styles.value}>john@example.com</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.label}>Phone</div>
              <div style={styles.value}>+91 98765 43210</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.label}>Location</div>
              <div style={styles.value}>Pune, India</div>
            </div>

            <div style={styles.infoCard}>
              <div style={styles.label}>Experience</div>
              <div style={styles.value}>5+ Years</div>
            </div>
          </div>

          <div style={styles.stats}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>120</div>
              <div style={styles.statLabel}>Projects</div>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statNumber}>8K+</div>
              <div style={styles.statLabel}>Followers</div>
            </div>

            <div style={styles.statCard}>
              <div style={styles.statNumber}>250</div>
              <div style={styles.statLabel}>Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;