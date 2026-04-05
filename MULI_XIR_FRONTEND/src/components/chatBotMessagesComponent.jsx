import ReactMarkdown from "react-markdown";

function ChatBotMessagesComponent({ res }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        backgroundColor: "#121212",
        borderRadius: "12px",
        boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.1)", // Agregado borde blanco sutil
        margin: "1rem 0",
        maxWidth: "1200px",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          background: "rgba(26, 26, 26, 0.95)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#ffffff",
            margin: "0",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <ReactMarkdown>{res.prompt}</ReactMarkdown>
        </p>
      </div>
      <div
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "8px",
          backgroundColor: "rgba(26, 26, 26, 0.95)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.5",
            color: "#ffffff",
            margin: "0",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <ReactMarkdown>{res.AI_Response}</ReactMarkdown>
        </p>
      </div>
    </div>
  );
}

export default ChatBotMessagesComponent;
