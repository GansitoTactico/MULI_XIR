import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CursorFollowerModel from "../components/Comportamiento_Mulix.jsx";
import fondoImg from "../assets/fondo.jpg";
import { error } from "cros/common/logger.js";

function Homepage() {
  const mainRef = useRef(null);
  const buttonRefs = [useRef(null), useRef(null), useRef(null)];
  const ctaRef = useRef(null);
  const bgRef = useRef(null);
  const gradientRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for main content
    if (mainRef.current) {
      mainRef.current.animate(
        [
          { opacity: 0, transform: "translateY(40px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 900, easing: "ease-out", fill: "forwards" }
      );
    }
    // Animate nav buttons with stagger
    buttonRefs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.animate(
          [
            { opacity: 0, transform: "translateY(-20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 600,
            delay: 200 + i * 120,
            fill: "forwards",
            easing: "ease-out",
          }
        );
      }
    });
    // CTA pulse animation
    if (ctaRef.current) {
      ctaRef.current.animate(
        [
          { boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
          { boxShadow: "0 8px 32px 2px #fff5, 0 4px 20px rgba(0,0,0,0.2)" },
          { boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
        ],
        { duration: 1800, iterations: Infinity, easing: "ease-in-out" }
      );
    }

    // Parallax effect
    const handleParallax = () => {
      const scrollY = window.scrollY;
      // Fondo imagen
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${
          scrollY * 0.25
        }px) scale(1.03)`;
      }
      // Gradiente overlay
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
      // Canvas 3D
      if (canvasRef.current) {
        canvasRef.current.style.transform = `translateY(${scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "130vh",
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Canvas 3D con parallax */}
      <div
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          pointerEvents: "none",
          willChange: "transform",
          transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
        }}
      >
        <Canvas
          camera={{ position: [2, 2, 2], fov: 50 }}
          style={{ pointerEvents: "none" }}
        >
          <ambientLight intensity={3.5} />
          <spotLight position={[3, 3, 3]} angle={-4} penumbra={1.22} />
          <CursorFollowerModel />
          <OrbitControls />
        </Canvas>
      </div>

      <nav
        style={{
          width: "100%",
          padding: "1rem 2rem",
          background: "rgba(24,25,26,0.98)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(4px)",
        }}
      >
        {/* ...nav content... */}
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.7rem",
            letterSpacing: "2px",
            background: "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradient-move 3s linear infinite alternate",
            transition: "transform 0.35s cubic-bezier(.4,2,.6,1)",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-8px) scale(1.08)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "none";
          }}
        >
          MULI_XIR
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* ...buttons... */}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              ref={buttonRefs[0]}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                borderRadius: "20px",
                fontSize: "1rem",
                cursor: "pointer",
                transition:
                  "background 0.25s, transform 0.25s, box-shadow 0.25s, color 0.25s",
                outline: "none",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 0 0 #ffcc33",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)";
                e.target.style.color = "#232526";
                e.target.style.transform = "scale(1.13) rotate(-2deg)";
                e.target.style.boxShadow = "0 6px 24px 2px #ffcc3355";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "none";
                e.target.style.color = "#fff";
                e.target.style.transform = "none";
                e.target.style.boxShadow = "0 0 0 0 #ffcc33";
              }}
            >
              Iniciar sesion
            </button>
          </Link>
          <Link to="/proyectos" style={{ textDecoration: "none" }}>
            <button
              ref={buttonRefs[1]}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                borderRadius: "20px",
                fontSize: "1rem",
                cursor: "pointer",
                transition:
                  "background 0.25s, transform 0.25s, box-shadow 0.25s, color 0.25s",
                outline: "none",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 0 0 #ffcc33",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #f7971e, #ffb347)";
                e.target.style.color = "#232526";
                e.target.style.transform = "scale(1.13) rotate(2deg)";
                e.target.style.boxShadow = "0 6px 24px 2px #f7971e55";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "none";
                e.target.style.color = "#fff";
                e.target.style.transform = "none";
                e.target.style.boxShadow = "0 0 0 0 #ffcc33";
              }}
            >
              Documentacion
            </button>
          </Link>
          <Link to="/contacto" style={{ textDecoration: "none" }}>
            <button
              ref={buttonRefs[2]}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                padding: "0.5rem 1.2rem",
                borderRadius: "20px",
                fontSize: "1rem",
                cursor: "pointer",
                transition:
                  "background 0.25s, transform 0.25s, box-shadow 0.25s, color 0.25s",
                outline: "none",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 0 0 0 #ffcc33",
              }}
              onMouseOver={(e) => {
                e.target.style.background =
                  "linear-gradient(90deg, #ffcc33, #ffb347)";
                e.target.style.color = "#232526";
                e.target.style.transform = "scale(1.13) rotate(-2deg)";
                e.target.style.boxShadow = "0 6px 24px 2px #ffb34755";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "none";
                e.target.style.color = "#fff";
                e.target.style.transform = "none";
                e.target.style.boxShadow = "0 0 0 0 #ffcc33";
              }}
            >
              Contacto
            </button>
          </Link>
        </div>
      </nav>
      <main
        ref={mainRef}
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Fondo con parallax */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${fondoImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(0.9)",
            pointerEvents: "none",
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
          }}
        />

        {/* Gradiente overlay con parallax */}
        <div
          ref={gradientRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #232526cc 0%, #414345cc 100%)",
            zIndex: 1,
            pointerEvents: "none",
            willChange: "transform",
            transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient-move 3s linear infinite alternate",
              textAlign: "center",
            }}
          >
            ¡Bienvenido a MULI_XIR!
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              maxWidth: 600,
              color: "#b0b3b8",
              opacity: 0.92,
              transition: "color 0.3s",
              textAlign: "center",
            }}
          >
            Descubre la mejor experiencia para gestionar tus proyectos y
            potenciar tu productividad.
          </p>
          <Link
            to={"/register"}
            style={{
              padding: "1rem 2.2rem",
              background: "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)",
              color: "#232526",
              borderRadius: "30px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              transition:
                "background 0.3s, color 0.3s, transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
              marginTop: "0.5rem",
              letterSpacing: "1px",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(90deg, #232526 0%, #414345 100%)";
              e.target.style.color = "#ffcc33";
              e.target.style.transform = "scale(1.06)";
              e.target.style.boxShadow = "0 8px 32px 2px #ffcc3355";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(90deg, #ffb347, #ffcc33, #f7971e)";
              e.target.style.color = "#232526";
              e.target.style.transform = "none";
              e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
            }}
          >
            Comenzar ahora
          </Link>
        </div>
      </main>

      <div></div>
      <footer
        style={{
          width: "100%",
          background: "#18191a",
          padding: "2rem 0",
          textAlign: "center",
          color: "#b0b3b8",
          borderTop: "1px solid #333",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            maxWidth: 700,
            margin: "0 auto",
            fontSize: "1.1rem",
            transition: "color 0.3s",
            background: "rgba(36,37,38,0.85)",
            borderRadius: "14px",
            padding: "1.1rem 1.7rem",
            color: "#e4e6eb",
            boxShadow: "0 1px 8px 0 #23252622",
            marginTop: "1.2rem",
            marginBottom: "0",
            lineHeight: 1.6,
            textAlign: "center",
          }}
          className="footer-description"
        >
          MULI XIR es una plataforma innovadora diseñada para ayudarte a
          organizar, planificar y ejecutar tus proyectos de manera eficiente.
          Nuestro objetivo es ofrecerte herramientas intuitivas y potentes para
          que puedas alcanzar tus metas y mejorar tu productividad día a día.
        </p>
        {/* Animated floating shapes for subtle visual interest */}
        <span
          style={{
            position: "absolute",
            left: "10%",
            top: "30%",
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ffb347, #ffcc33)",
            opacity: 0.18,
            filter: "blur(2px)",
            animation:
              "float1 7s ease-in-out infinite alternate, pulse-glow 2.2s infinite alternate",
          }}
        />
        <span
          style={{
            position: "absolute",
            right: "12%",
            bottom: "18%",
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f7971e, #ffb347)",
            opacity: 0.13,
            filter: "blur(1.5px)",
            animation: "float2 6s ease-in-out infinite alternate",
          }}
        />
      </footer>
      {/* Keyframes for gradient and floating shapes */}
      <style>
        {`
                                                    @keyframes gradient-move {
                                                            0% { background-position: 0% 50%; }
                                                            100% { background-position: 100% 50%; }
                                                    }
                                                    @keyframes float1 {
                                                            0% { transform: translateY(0) scale(1);}
                                                            100% { transform: translateY(-18px) scale(1.15);}
                                                    }
                                                    @keyframes float2 {
                                                            0% { transform: translateY(0) scale(1);}
                                                            100% { transform: translateY(14px) scale(1.09);}
                                                    }
                                                    @keyframes pulse-glow {
                                                            0% {
                                                                    box-shadow: 0 0 0 0 #ffcc3355, 0 0 0 0 #fff0;
                                                                    filter: blur(2px) brightness(1);
                                                            }
                                                            60% {
                                                                    box-shadow: 0 0 24px 12px #ffcc3388, 0 0 0 0 #fff0;
                                                                    filter: blur(3.5px) brightness(1.2);
                                                            }
                                                            100% {
                                                                    box-shadow: 0 0 0 0 #ffcc3355, 0 0 0 0 #fff0;
                                                                    filter: blur(2px) brightness(1);
                                                            }
                                                    }
                                                    .footer-description {
                                                            transition: color 0.3s, letter-spacing 0.3s;
                                                            cursor: pointer;
                                                    }
                                                    .footer-description:hover {
                                                            color: #ffcc33;
                                                            letter-spacing: 1.5px;
                                                            animation: text-pop 0.5s;
                                                    }
                                                    @keyframes text-pop {
                                                            0% { transform: scale(1);}
                                                            40% { transform: scale(1.06);}
                                                            100% { transform: scale(1);}
                                                    }
                                                    `}
      </style>
      <style>
        {`
                            @keyframes gradient-move {
                                    0% { background-position: 0% 50%; }
                                    100% { background-position: 100% 50%; }
                            }
                            @keyframes float1 {
                                    0% { transform: translateY(0) scale(1);}
                                    100% { transform: translateY(-18px) scale(1.15);}
                            }
                            @keyframes float2 {
                                    0% { transform: translateY(0) scale(1);}
                                    100% { transform: translateY(14px) scale(1.09);}
                            }
                            `}
      </style>
    </div>
  );
}

export default Homepage;
