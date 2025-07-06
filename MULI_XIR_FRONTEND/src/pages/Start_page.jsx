import { useRegionalContext } from "../context/RegionalContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Start_page() {
  const onSubmit = (data) => {
    CreateContext(data);
    console.log(data);
  };
  const { CreateContext, ContextTrue } = useRegionalContext();

  const countries = [
    { name: "Argentina", flag: "🇦🇷" },
    { name: "Brasil", flag: "🇧🇷" },
    { name: "Chile", flag: "🇨🇱" },
    { name: "Colombia", flag: "🇨🇴" },
    { name: "España", flag: "🇪🇸" },
    { name: "Estados Unidos", flag: "🇺🇸" },
    { name: "Francia", flag: "🇫🇷" },
    { name: "México", flag: "🇲🇽" },
    { name: "Perú", flag: "🇵🇪" },
    { name: "Venezuela", flag: "🇻🇪" },
  ];
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (ContextTrue) {
      navigate("/tasks"); // O la ruta que corresponda
    }
  }, [ContextTrue, navigate]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          background: "#18191a",
          padding: "2.5rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          minWidth: "320px",
          color: "#f1f1f1",
        }}
      >
        <label style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
          Selecciona tu país
          <select
            required
            id="pais"
            name="pais"
            {...register("pais", { required: "este dato es necesario" })}
            style={{
              marginTop: "0.5rem",
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "#232526",
              color: "#f1f1f1",
              outline: "none",
              fontSize: "1rem",
              appearance: "none",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              -- Selecciona un país --
            </option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
        </label>
        <label style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
          ¿De qué estado nos visitas?
          <input
            type="text"
            id="estado"
            {...register("estado", { required: "este dato es necesario" })}
            placeholder="Ingresa tu estado"
            required
            style={{
              marginTop: "0.5rem",
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "#232526",
              color: "#f1f1f1",
              outline: "none",
              fontSize: "1rem",
            }}
          />
        </label>
        <label style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
          De qué municipio provienes
          <input
            type="text"
            id="municipio"
            {...register("municipio", { required: "este dato es necesario" })}
            placeholder="Ingresa tu municipio"
            required
            style={{
              marginTop: "0.5rem",
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "#232526",
              color: "#f1f1f1",
              outline: "none",
              fontSize: "1rem",
            }}
          />
        </label>
        <label style={{ fontWeight: 500, marginBottom: "0.5rem" }}>
          ¿Qué tanta experiencia tienes en el campo agrícola?
          <input
            type="text"
            id="experiencia"
            {...register("experiencia", { required: "este dato es necesario" })}
            placeholder="Ingresa tu conocimiento"
            required
            style={{
              marginTop: "0.5rem",
              width: "100%",
              padding: "0.75rem",
              borderRadius: "8px",
              border: "1px solid #333",
              background: "#232526",
              color: "#f1f1f1",
              outline: "none",
              fontSize: "1rem",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Start_page;
