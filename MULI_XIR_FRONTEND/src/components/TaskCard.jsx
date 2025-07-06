import { useTask } from "../context/TaskContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TaskCard({ res }) {
  const { deleteTask } = useTask();
  return (
    <div
      className="task-card"
      style={{
        background: "#232529",
        color: "#fff",
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
      <h1 style={{ fontSize: "1.25rem", margin: "0 0 12px 0", color: "#fff" }}>
        {res.title}
      </h1>
      <p style={{ color: "#fff", margin: 0 }}>{res.descripcion}</p>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Link
          to={`/tasks/${res._id}`}
          style={{
            border: "2px solid #2563eb",
            color: "#2563eb",
            background: "transparent",
            textAlign: "center",
            borderRadius: "6px",
            padding: "8px 0",
            fontWeight: "bold",
            transition: "background 0.2s, border-color 0.2s, color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#000";
            e.currentTarget.style.borderColor = "#60a5fa";
            e.currentTarget.style.color = "#60a5fa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "#2563eb";
            e.currentTarget.style.color = "#2563eb";
          }}
        >
          Editar
        </Link>
        <button
          onClick={() => {
            {
              deleteTask(res._id);
            }
          }}
          style={{
            border: "2px solid #2563eb",
            color: "#2563eb",
            background: "transparent",
            borderRadius: "6px",
            padding: "8px 0",
            fontWeight: "bold",
            transition: "background 0.2s, border-color 0.2s, color 0.2s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#000";
            e.currentTarget.style.borderColor = "#60a5fa";
            e.currentTarget.style.color = "#60a5fa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "#2563eb";
            e.currentTarget.style.color = "#2563eb";
          }}
        >
          Borrar
        </button>
        <p>{dayjs(res.date).utc().format("DD/MM/YYYY")}</p>
      </div>
    </div>
  );
}

export default TaskCard;
