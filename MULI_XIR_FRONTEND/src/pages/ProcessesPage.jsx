import { useEffect } from "react";
import { useProcess } from "../context/ProcessContext";
import ProcessCard from "../components/ProcessCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProcessesPage() {
  const { processes, getProcesses } = useProcess();

  useEffect(() => {
    getProcesses();
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/landing");
  };
  const handleProcess = () => {
    navigate("/add-process");
  };

  if (processes.length === 0) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold">No hay procesos aún</h1>
          <p className="mt-2">
            Crea un nuevo proceso para empezar a monitorear.
          </p>
          <button
            onClick={handleProcess}
            style={{
              color: "#ffcc33",
              cursor: "pointer",
              fontSize: "22px",
            }}
          >
            Crear seguimiento +
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-4 py-12"
      style={{
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#fff" }}>
              Mis Procesos
            </h1>
            <p style={{ color: "#b0b3b8" }}>
              Monitorea y gestiona tus procesos
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={handleNavigate}
              className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full"
              style={{
                background: "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)",
                boxShadow: "0 0 20px rgba(255, 179, 71, 0.5)",
              }}
            >
              Regresar
            </button>
            <Link
              to="/add-process"
              className="px-6 py-3 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center w-full"
              style={{
                background: "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)",
                boxShadow: "0 0 20px rgba(255, 179, 71, 0.5)",
              }}
            >
              + Nuevo Proceso
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.map((process) => (
            <ProcessCard process={process} key={process._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProcessesPage;
