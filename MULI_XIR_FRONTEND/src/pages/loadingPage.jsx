import { UseLLM } from "../context/LLMContext";
import { Navigate } from "react-router-dom";
import Particles from "../components/AnimateBackground";
import { useEffect } from "react";
import fondoIMG from "../assets/fondoNocturno.jpg";
import TextType from "../components/textoAnimado";

//import CircularLoader from "../components/loader";

function LoadingPage() {
  const { estado } = UseLLM();
  useEffect(() => {
    estado();
  }),
    [];

  const { pass } = UseLLM();

  if (pass != true) {
    return (
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${fondoIMG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(0.9)",
            zIndex: 0,
          }}
        />
        <div
          className="flex items-center justify-center h-screen w-full"
          id="loader"
          style={{
            position: "relative",
            display: "flex",
            zIndex: 1,
          }}
        >
          <div className="absolute">
            <div className="w-16 h-16 border-8 border-[#D6AF3C] border-t-transparent rounded-full animate-spin"></div>
            <div className="w-12 h-12 border-8 border-[#D6AF3C] border-t-transparent rounded-full animate-spin absolute top-2 left-2"></div>
            <div
              style={{
                display: "flex",
                position: "relative",
                right: "1.5rem",
                alignContent: "center",
                fontSize: "1.5rem",
                zIndex: 1,
              }}
            >
              <TextType
                text={["Cargando..."]}
                typingSpeed={50}
                pauseDuration={1000}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>
          <Particles
            particleColors={["#D6AF3C", "#D6AF3C"]}
            particleCount={250}
            particleSpread={15}
            speed={0.2}
            particleBaseSize={150}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/introduction" replace={true} />;
  }
}

export default LoadingPage;
