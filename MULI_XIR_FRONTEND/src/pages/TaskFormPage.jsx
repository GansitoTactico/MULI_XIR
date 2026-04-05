import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, UpdateTask } = useTask();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("descripcion", task.descripcion);
        setValue("date", dayjs.utc(task.date).format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, [getTask, params.id, setValue]);

  const onSubmit = handleSubmit((data) => {
    const dataValidated = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };
    if (data.date) dataValidated.date = dayjs.utc(data.date).format();
    console.log(dataValidated);

    if (params.id) {
      UpdateTask(params.id, dataValidated);
    } else {
      createTask(dataValidated);
    }
    navigate("/tasks");
  });
  return (
    <div
      style={{ background: "var(--background-gradient)", minHeight: "100vh" }}
    >
      <Navbar></Navbar>
      <div
        style={{
          maxWidth: "480px",
          margin: "2rem auto",
          padding: "1.5rem",
          border: "none",
          borderRadius: "16px",
          background: "var(--nav-background)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.32), 0 1.5px 4px rgba(0,0,0,0.18)",
        }}
      >
        <form onSubmit={onSubmit}>
          <label
            htmlFor="title"
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "600",
              color: "var(--text-primary)",
              letterSpacing: "0.5px",
            }}
          >
            Título
          </label>
          <input
            id="title"
            type="text"
            placeholder="Título"
            {...register("title", { required: true })}
            autoFocus
            style={{
              width: "100%",
              padding: "10px 14px",
              marginBottom: "18px",
              borderRadius: "8px",
              border: "1.5px solid #444950",
              background: "var(--dark-background)",
              color: "var(--text-primary)",
              fontSize: "1rem",
              transition: "border 0.2s, background 0.2s",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) =>
              (e.target.style.border = "1.5px solid var(--accent-color-2)")
            }
            onBlur={(e) => (e.target.style.border = "1.5px solid #444950")}
          />
          <label
            htmlFor="descripcion"
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "600",
              color: "var(--text-primary)",
              letterSpacing: "0.5px",
            }}
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            rows={4}
            placeholder="Descripción"
            {...register("descripcion", { required: true })}
            style={{
              width: "100%",
              padding: "10px 14px",
              marginBottom: "22px",
              borderRadius: "8px",
              border: "1.5px solid #444950",
              background: "var(--dark-background)",
              color: "var(--text-primary)",
              fontSize: "1rem",
              resize: "vertical",
              transition: "border 0.2s, background 0.2s",
              outline: "none",
              boxSizing: "border-box",
            }}
            onFocus={(e) =>
              (e.target.style.border = "1.5px solid var(--accent-color-2)")
            }
            onBlur={(e) => (e.target.style.border = "1.5px solid #444950")}
          ></textarea>
          <label
            htmlFor="date"
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "600",
              color: "var(--text-primary)",
              letterSpacing: "0.5px",
            }}
          >
            Fecha
          </label>
          <input
            type="date"
            {...register("date")}
            className="w-full p-2 mb-4 rounded-lg border border-gray-600 bg-gray-800 text-white text-sm focus:border-blue-500 focus:outline-none"
            style={{
              background: "var(--dark-background)",
              color: "var(--text-primary)",
            }}
          ></input>
          <button
            navigate="/tasks"
            style={{
              width: "100%",
              padding: "12px",
              background: "var(--accent-gradient)",
              color: "var(--dark-background)",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "1.08rem",
              letterSpacing: "0.5px",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              transition: "background 0.2s, transform 0.1s",
            }}
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
