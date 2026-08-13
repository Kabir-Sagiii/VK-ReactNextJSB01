import React from "react";

function ContactUs() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f7fb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box",
    },
    container: {
      width: "100%",
      maxWidth: "1100px",
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    left: {
      flex: "1",
      minWidth: "320px",
      background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
      color: "#ffffff",
      padding: "50px 40px",
      boxSizing: "border-box",
    },
    right: {
      flex: "1",
      minWidth: "320px",
      padding: "50px 40px",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "34px",
      marginBottom: "15px",
    },
    subtitle: {
      fontSize: "16px",
      lineHeight: "1.8",
      opacity: "0.9",
      marginBottom: "35px",
    },
    infoBox: {
      marginBottom: "25px",
    },
    label: {
      fontWeight: "bold",
      fontSize: "17px",
      marginBottom: "6px",
    },
    text: {
      fontSize: "15px",
      opacity: "0.9",
    },
    formTitle: {
      fontSize: "28px",
      color: "#1e293b",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "18px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "14px",
      height: "130px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      resize: "none",
      fontSize: "15px",
      outline: "none",
      marginBottom: "20px",
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left Section */}
        <div style={styles.left}>
          <h1 style={styles.title}>Contact Us</h1>

          <p style={styles.subtitle}>
            We'd love to hear from you. Whether you have a question,
            feedback, or need assistance, feel free to reach out.
          </p>

          <div style={styles.infoBox}>
            <div style={styles.label}>📍 Address</div>
            <div style={styles.text}>
              123 Business Street, Pune, Maharashtra, India
            </div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.label}>📞 Phone</div>
            <div style={styles.text}>+91 98765 43210</div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.label}>✉️ Email</div>
            <div style={styles.text}>support@example.com</div>
          </div>

          <div style={styles.infoBox}>
            <div style={styles.label}>🕒 Working Hours</div>
            <div style={styles.text}>
              Monday - Friday <br />
              9:00 AM - 6:00 PM
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>Send a Message</h2>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              style={styles.input}
            />

            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />

            <input
              type="text"
              placeholder="Subject"
              style={styles.input}
            />

            <textarea
              placeholder="Your Message"
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;