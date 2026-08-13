const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      date: "2026-07-15",
      amount: "$120.00",
      method: "Credit Card",
      status: "Paid",
    },
    {
      id: 2,
      date: "2026-07-01",
      amount: "$85.50",
      method: "UPI",
      status: "Paid",
    },
    {
      id: 3,
      date: "2026-06-20",
      amount: "$45.99",
      method: "Net Banking",
      status: "Pending",
    },
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
      <h2 style={{ textAlign: "center", color: "#333" }}>
        Payment History
      </h2>

      {payments.map((payment) => (
        <div
          key={payment.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "12px",
            marginBottom: "12px",
            backgroundColor: "#fff",
          }}
        >
          <p><strong>Date:</strong> {payment.date}</p>
          <p><strong>Amount:</strong> {payment.amount}</p>
          <p><strong>Method:</strong> {payment.method}</p>
          <p><strong>Status:</strong> {payment.status}</p>
        </div>
      ))}
    </div>
  );
};

export default PaymentHistory;