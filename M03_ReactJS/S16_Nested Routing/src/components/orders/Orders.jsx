const Orders = () => {
  const orders = [
    { id: 101, item: "Laptop", price: "$1200", status: "Delivered" },
    { id: 102, item: "Headphones", price: "$80", status: "Shipped" },
    { id: 103, item: "Keyboard", price: "$50", status: "Processing" },
  ];

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Orders</h2>

      {orders.map((order) => (
        <div
          key={order.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "#fff",
          }}
        >
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Item:</strong> {order.item}</p>
          <p><strong>Price:</strong> {order.price}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;