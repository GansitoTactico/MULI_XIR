import { useEffect, useState, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import TargetCursor from "../components/CursorHover";
import icono from "../assets/iconoMas.png";
import { useMessages } from "../context/messageContext.jsx";
import { useForm } from "react-hook-form";
import MessageCard from "../components/MessageCard.jsx";
import { Navigate, Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const topNavLinks = [""];
  const sideNavLinks = [
    { to: "/processes", text: "Sistema de seguimiento" },
    { to: "/chatBot", text: "Asistente de seguimiento" },
  ];

  return (
    <div className="landing-page">
      <TargetCursor spinDuration={2} hideDefaultCursor={false} />

      <nav className="landing-nav">
        <h1 className="landing-nav-brand">Bienvenido {user.username}</h1>
        <ul className="landing-nav-links">
          {topNavLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {topNavLinks.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={toggleMenu}>
                  {item}
                </a>
              </li>
            ))}
            {sideNavLinks.map((item) => (
              <li key={item.text}>
                <Link to={item.to} onClick={toggleMenu}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="landing-layout">
        <aside className="landing-sidebar">
          <h2>Seguimiento</h2>
          <ul>
            {sideNavLinks.map((item) => (
              <li key={item.text}>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <main className="landing-main">
          <div className="landing-main-background" />
          <div
            ref={messagesContainerRef}
            className="landing-messages-container"
          >
            <div
              className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#D6AF3C]/20 cursor-target"
              style={{
                background: "var(--nav-background)",
                borderColor: "var(--accent-color-1)",
              }}
            >
              <h2
                className="text-2xl mb-4 cursor-target font-semibold"
                style={{ color: "var(--accent-color-2)" }}
              >
                Foro de la Comunidad
              </h2>
              <p
                className="text-gray-300 cursor-target"
                style={{ color: "var(--text-secondary)" }}
              >
                Comparte tus ideas y conecta con otros miembros de la comunidad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 p-2">
              {mensajes.map((res) => (
                <MessageCard res={res} key={res._id}></MessageCard>
              ))}
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="sticky bottom-0 mt-8 flex gap-4 items-center bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-[#D6AF3F]/20"
              style={{
                marginTop: "10vh",
                background: "var(--nav-background)",
                borderColor: "var(--accent-color-1)",
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
                  flex: 1,
                  backgroundColor: "var(--dark-background)",
                }}
                className="flex-1 text-white p-3 rounded-lg border border-gray-600 focus:border-[#ffffff] focus:ring-1 focus:ring-[#D6AF3C] transition-all outline-none"
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
                className="text-black px-6 py-3 rounded-lg transition-colors font-semibold cursor-target"
                style={{
                  background: "var(--accent-gradient)",
                  color: "var(--dark-background)",
                }}
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
