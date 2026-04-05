import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function ProcessCard({ process }) {
  return (
    <div
      className="process-card"
      style={{
        background: "var(--nav-background)",
        color: "var(--text-primary)",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "20px",
        margin: "16px",
        minWidth: "250px",
        maxWidth: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition:
          "transform 0.2s cubic-bezier(.25,.8,.25,1), box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "perspective(600px) rotateY(6deg) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <h1
        style={{
          fontSize: "1.25rem",
          margin: "0 0 12px 0",
          color: "var(--text-primary)",
        }}
      >
        {process.title}
      </h1>
      <p style={{ color: "var(--text-secondary)", margin: 0 }}>
        {process.description}
      </p>
      <p style={{ color: "var(--text-secondary)", margin: "12px 0 0 0" }}>
        Estado: {process.status}
      </p>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <p>{dayjs(process.createdAt).utc().format("DD/MM/YYYY")}</p>
      </div>
    </div>
  );
}

export default ProcessCard;
