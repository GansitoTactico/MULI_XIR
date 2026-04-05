import { useState } from "react";
import { createProcessRequest } from "../api/process.js";
import { useNavigate } from "react-router-dom";

const CreateProcessPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const colors = {
    bgGradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    accentGradient: "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)",
    textPrimary: "#fff",
    textSecondary: "#b0b3b8",
    accentColor1: "#ffb347",
    darkBg: "#232526",
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const createProcess = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await createProcessRequest(formData);
      navigate("/process-created", {
        state: { createdProcess: response.data },
      });
      setFormData({ title: "", description: "" });
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Error al crear el proceso. Intenta nuevamente.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.bgGradient,
        padding: "2rem 1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            paddingBottom: "1.5rem",
            borderBottom: `2px solid ${colors.accentColor1}`,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.8em, 5vw, 2.5em)",
              background: colors.accentGradient,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "0 0 1rem 0",
              fontWeight: "700",
            }}
          >
            Crear Nuevo Proceso
          </h1>
          <p
            style={{
              color: colors.textSecondary,
              fontSize: "1.05em",
              margin: 0,
              lineHeight: "1.6",
            }}
          >
            Genera un proceso productivo y obtén códigos QR para cada
            participante
          </p>
        </header>

        {error && (
          <div
            style={{
              background: "rgba(255, 67, 54, 0.1)",
              border: `1px solid #ff4336`,
              color: "#ff9800",
              padding: "1rem 1.25rem",
              borderRadius: "8px",
              marginBottom: "25px",
              fontSize: "0.95em",
            }}
          >
            {error}
          </div>
        )}

        <form
          onSubmit={createProcess}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: `1px solid rgba(255, 179, 71, 0.2)`,
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <label
              htmlFor="title"
              style={{
                display: "block",
                color: colors.textPrimary,
                fontSize: "1em",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Título del Proceso{" "}
              <span style={{ color: colors.accentColor1 }}>*</span>
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ej: Cultivo de Tomates Orgánicos Lote #A-45"
              required
              maxLength={100}
              style={{
                width: "100%",
                padding: "12px 15px",
                background: "rgba(255, 255, 255, 0.08)",
                border: `1px solid rgba(255, 179, 71, 0.3)`,
                borderRadius: "8px",
                color: colors.textPrimary,
                fontSize: "0.95em",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.accentColor1;
                e.target.style.boxShadow = `0 0 10px rgba(255, 179, 71, 0.3)`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 179, 71, 0.3)";
                e.target.style.boxShadow = "none";
              }}
            />
            <small
              style={{
                display: "block",
                color: colors.textSecondary,
                fontSize: "0.85em",
                marginTop: "8px",
              }}
            >
              Un nombre claro y descriptivo para el proceso.
            </small>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              htmlFor="description"
              style={{
                display: "block",
                color: colors.textPrimary,
                fontSize: "1em",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Descripción del Proceso{" "}
              <span style={{ color: colors.accentColor1 }}>*</span>
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe las características, origen, fechas clave, y otros detalles relevantes del proceso productivo."
              required
              rows={5}
              style={{
                width: "100%",
                padding: "12px 15px",
                background: "rgba(255, 255, 255, 0.08)",
                border: `1px solid rgba(255, 179, 71, 0.3)`,
                borderRadius: "8px",
                color: colors.textPrimary,
                fontSize: "0.95em",
                fontFamily: "inherit",
                boxSizing: "border-box",
                transition: "all 0.3s ease",
                outline: "none",
                resize: "vertical",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.accentColor1;
                e.target.style.boxShadow = `0 0 10px rgba(255, 179, 71, 0.3)`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 179, 71, 0.3)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px 30px",
              background: loading
                ? "rgba(255, 179, 71, 0.5)"
                : colors.accentGradient,
              color: colors.darkBg,
              border: "none",
              borderRadius: "8px",
              fontSize: "1.05em",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow: loading
                ? "none"
                : "0 4px 15px rgba(255, 179, 71, 0.4)",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(255, 179, 71, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(255, 179, 71, 0.4)";
              }
            }}
          >
            {loading ? "⏳ Generando..." : "🎯 Crear Proceso y Generar QRs"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProcessPage;
