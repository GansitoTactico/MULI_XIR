import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import TargetCursor from "../components/CursorHover";
import fondoIMG from "../assets/fondoNocturno.jpg";
import icono from "../assets/iconoMas.png";
import { useMessages } from "../context/messageContext.jsx";
import { useForm } from "react-hook-form";
import MessageCard from "../components/MessageCard.jsx";

function LandingPage() {
  const { user } = useAuth();

  const [imagen, setImagen] = useState(null);
  const [img, setImg] = useState(null);

  const { createMessage, mensajes, getMessages } = useMessages();

  const { handleSubmit, register, reset } = useForm();

  const manejarCambio = (e) => {
    const archivo = e.target.files[0];
    setImg(archivo);
    if (archivo) {
      const urlTemporal = URL.createObjectURL(archivo);
      setImagen(urlTemporal);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("user", user);
    formData.append("message", data.message);

    if (img) {
      formData.append("image", img);
    }

    try {
      await createMessage(formData);
      setImagen(null);
      setImg(null);
      reset();
      getMessages();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    if (imagen === null) {
      const imagenPreview = document.getElementById("imagenPreview");
      if (imagenPreview) imagenPreview.style.display = "none";
    }
    if (imagen) {
      const imagenPreview = document.getElementById("imagenPreview");
      if (imagenPreview) imagenPreview.style.display = "block";
    }
  }, [imagen]);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight;
      }
    };

    setTimeout(scrollToBottom, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <TargetCursor spinDuration={2} hideDefaultCursor={false} />

      <nav className="bg-black/90 backdrop-blur-sm p-4 flex justify-between items-center border-b border-[#ffffff] sticky top-0 z-50">
        <h1 className="text-[#D6AF3C] text-2xl font-bold cursor-target hover:scale-105 transition-transform">
          Bienvenido {user.username}
        </h1>
        <ul className="flex gap-6">
          {["Inicio", "Foro", "Perfil", "Configuración"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#D6AF3C] transition-colors cursor-target relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6AF3C] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex">
        <aside className="w-1/4 bg-black/80 backdrop-blur-sm min-h-[calc(100vh-64px)] p-6 border-r border-[#ffffff] cursor-target">
          <h2 className="text-[#D6AF3C] text-xl mb-6 font-semibold">
            Funciones
          </h2>
          <ul className="space-y-4">
            {["Mensajes", "Grupos", "Archivos", "Calendario"].map((item) => (
              <li
                key={item}
                className="text-gray-300 hover:text-[#D6AF3C] transition-colors cursor-pointer p-2 rounded hover:bg-gray-800/50"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 relative min-h-[calc(100vh-64px)]">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${fondoIMG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px) brightness(0.7)",
            }}
          />

          <div
            ref={messagesContainerRef}
            className="relative z-10 p-8 overflow-y-auto h-[calc(100vh-64px)]"
          >
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#D6AF3C]/20 cursor-target">
              <h2 className="text-[#D6AF3C] text-2xl mb-4 cursor-target font-semibold">
                Foro de la Comunidad
              </h2>
              <p className="text-gray-300 cursor-target">
                Comparte tus ideas y conecta con otros miembros de la comunidad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 p-2">
              {mensajes.map((res) => (
                <MessageCard res={res} key={res._id}></MessageCard>
              ))}
            </div>

            {/* Elemento loader para el scroll infinito */}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="sticky bottom-0 mt-8 flex gap-4 items-center bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-[#D6AF3F]/20"
              style={{
                marginTop: "10vh",
              }}
            >
              <img
                src={imagen}
                alt="imagen subida"
                id="imagenPreview"
                className="max-w-[50px] border border-gray-600 rounded"
              />

              <input
                type="text"
                {...register("message", { required: true })}
                style={{
                  flex: 1, // Para que ocupe el espacio restante
                }}
                className="flex-1 bg-gray-700/50 text-white p-3 rounded-lg border border-gray-600 focus:border-[#ffffff] focus:ring-1 focus:ring-[#D6AF3C] transition-all outline-none"
                placeholder="Escribe un mensaje a la comunidad..."
              />

              <label htmlFor="fileInput" className="cursor-pointer">
                <img
                  src={icono}
                  alt="Subir imagen"
                  className="cursor-target w-[30px] h-[30px] rounded-full transition-transform hover:scale-110"
                />
              </label>

              <input
                {...register("image")}
                type="file"
                onChange={manejarCambio}
                style={{ display: "none" }}
                id="fileInput"
              ></input>

              <button
                type="submit"
                className="bg-[#D6AF3C] text-black px-6 py-3 rounded-lg hover:bg-[#B89632] transition-colors font-semibold cursor-target"
              >
                Enviar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
