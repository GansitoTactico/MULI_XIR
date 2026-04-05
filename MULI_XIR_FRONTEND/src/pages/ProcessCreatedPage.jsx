import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

function getRoleDisplayName(role) {
  const names = {
    producer: "👨‍🌾 Productor",
    distributor: "🚚 Distribuidor",
    store: "🏪 Tienda",
    client: "👥 Cliente",
  };
  return names[role] || role;
}

function downloadQR(qrDataUrl, role) {
  const link = document.createElement("a");
  link.download = `qr-${role}-${Date.now()}.png`;
  link.href = qrDataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const roleColors = {
  producer: "from-blue-500 to-blue-600",
  distributor: "from-purple-500 to-purple-600",
  store: "from-green-500 to-green-600",
  client: "from-pink-500 to-pink-600",
};

export default function ProcessCreatedPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const createdProcess = state?.createdProcess;

  if (!createdProcess) {
    navigate("/processes", { replace: true });
    return null;
  }

  const handleCreateNew = useCallback(() => {
    navigate("/add-process");
  }, [navigate]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #232526 0%, #232526 100%)",
      }}
    >
      <style>{`
        :root {
          --background-gradient: linear-gradient(135deg, #232526 0%, #414345 100%);
          --text-primary: #fff;
          --accent-gradient: linear-gradient(90deg, #ffb347, #ffcc33, #f7971e);
          --text-secondary: #b0b3b8;
          --accent-color-1: #ffb347;
          --accent-color-2: #ffcc33;
          --accent-color-3: #f7971e;
        }

        .accent-btn {
          background: var(--accent-gradient);
          color: #1a1a1a;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .accent-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 179, 71, 0.3);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-black bg-opacity-40 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              ✅ Proceso Creado
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleCreateNew}
                className="accent-btn px-6 py-3 rounded-lg font-semibold"
              >
                + Crear Nuevo
              </button>
              <Link
                to="/processes"
                className="accent-btn px-6 py-3 rounded-lg font-semibold text-center"
              >
                Ver Procesos
              </Link>
            </div>
          </div>
        </div>

        {/* Process Info Card */}
        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white border-opacity-10 hover:border-opacity-20 transition-all">
          <h2 className="text-3xl font-bold text-white mb-3">
            {createdProcess.process.title}
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            {createdProcess.process.description}
          </p>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 inline-block">
            <p className="text-gray-400 text-sm mb-2">Código Único:</p>
            <code className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-mono text-xl font-bold">
              {createdProcess.process.processCode}
            </code>
          </div>
        </div>

        {/* QR Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              📱 Códigos QR para Compartir
            </h2>
            <p className="text-gray-400 text-lg">
              Comparte cada QR con el participante correspondiente. Al
              escanearlo, accederán al formulario específico de su rol.
            </p>
          </div>

          {/* QR Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(createdProcess.qrCodes).map(([role, qrImage]) => (
              <div
                key={role}
                className="bg-black bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden border border-white border-opacity-10 hover:border-opacity-30 transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Role Header */}
                <div
                  className={`bg-gradient-to-r ${
                    roleColors[role] || "from-gray-600 to-gray-700"
                  } p-4`}
                >
                  <h3 className="text-white font-bold text-lg text-center">
                    {getRoleDisplayName(role)}
                  </h3>
                </div>

                {/* QR Image */}
                <div className="p-6 flex justify-center bg-white bg-opacity-5">
                  <img
                    src={qrImage}
                    alt={`QR Code para ${getRoleDisplayName(role)}`}
                    className="w-full max-w-xs rounded-lg shadow-lg"
                  />
                </div>

                {/* Actions */}
                <div className="p-4 flex flex-col gap-3 border-t border-white border-opacity-10">
                  <a
                    href={createdProcess.formUrls[role]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition text-center"
                  >
                    🔗 Abrir Formulario
                  </a>
                  <button
                    onClick={() => downloadQR(qrImage, role)}
                    className="accent-btn w-full py-2 px-4 rounded-lg font-semibold"
                  >
                    📥 Descargar QR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
