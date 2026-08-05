const Details = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Personal Details
      </h2>

      <p>
        <strong>Name:</strong> John Doe
      </p>

      <p>
        <strong>Age:</strong> 28
      </p>

      <p>
        <strong>Email:</strong> john.doe@example.com
      </p>

      <p>
        <strong>Phone:</strong> +1 234 567 8901
      </p>

      <p>
        <strong>Address:</strong> 123 Main Street, New York, USA
      </p>
    </div>
  );
};

export default Details;