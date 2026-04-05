function MessageCard({ res }) {
  if (!res) return null;

  const BASE_URL = "http://localhost:5000";

  return (
    <div
      className="card"
      style={{
        padding: "1.5rem",
        backgroundColor: "#121212",
        borderRadius: "12px",
        boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.1)", // Agregado borde blanco sutil
        margin: "1rem 0",
        maxWidth: "600px",
        transition: "transform 0.2s ease",
        cursor: "pointer",
        ":hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.5",
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          background: "rgba(26, 26, 26, 0.95)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
          color: "#ffffff",
          margin: "0 0 1rem 0",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {res.message}
      </p>
      {res.image && (
        <img
          src={`${BASE_URL}${res.image}`}
          alt="uploaded"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.02)",
            },
          }}
        />
      )}
      <p
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          background: "rgba(26, 26, 26, 0.95)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
          fontSize: "1rem",
          lineHeight: "1.5",
          color: "#ffd700",
        }}
      >
        Usuario: {res.username}
      </p>
    </div>
  );
}

export default MessageCard;
