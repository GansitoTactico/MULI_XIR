import { UseLLM } from "../context/LLMContext";
import fondoIMG from "../assets/fondoNocturno.jpg";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import TextPressure from "../components/TextAnimation_1";
import TargetCursor from "../components/CursorHover";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function IntroductionPage() {
  const { response, getResponse } = UseLLM();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [hasSeenIntro, setHasSeenIntro] = useState(() => {
    return (
      localStorage.getItem(`IntroductionPage_visited_${user.id}`) === "true"
    );
  });

  useEffect(() => {
    if (hasSeenIntro) {
      navigate("/landing");
      return;
    }

    getResponse();
  }, [hasSeenIntro, getResponse, navigate]);

  const handleContinue = () => {
    localStorage.setItem(`IntroductionPage_visited_${user.id}`, "true");
    setHasSeenIntro(true);
    navigate("/landing");
  };

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={false} />
      <div
        id="wallpaper"
        style={{
          backgroundImage: `url(${fondoIMG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          id="contenedor_del_medio"
          style={{
            backgroundColor: "black",
            filter: "drop-shadow(0 0 100px rgba(255,255,255,0.2))",
            padding: "2rem",
            borderRadius: "10px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            maxHeight: "90vh",
            maxWidth: "900px",
            overflow: "auto",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "rotate(1deg)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "rotate(0deg)")
          }
        >
          <div
            id="contenido_del_contenendor"
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <div
              className="cursor-target"
              style={{
                position: "relative",
                height: "130px",
                borderBottom: "3px solid rgb(255, 215, 80)",
              }}
            >
              <TextPressure
                text="Introduccion!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                scale={false}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={72}
              />
            </div>

            <div
              className="cursor-target"
              style={{
                color: "white",
                padding: "15px",
                fontSize: "1.4rem",
                cursor: "default",
              }}
            >
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                cursor: "default",
              }}
            >
              <button
                className="cursor-target"
                onClick={handleContinue}
                style={{
                  backgroundColor: "rgb(255, 215, 80)",
                  color: "black",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginTop: "1rem",
                }}
                onMouseEnter={(b) =>
                  (b.currentTarget.style.background = "none")(
                    (b.currentTarget.style.border =
                      "3px solid rgb(255, 215, 80)")(
                      (b.currentTarget.style.color = "white")(
                        (b.currentTarget.style.transition = "all 0.5s ease")
                      )
                    )
                  )
                }
                onMouseLeave={(b) =>
                  (b.currentTarget.style.backgroundColor = "rgb(255, 215, 80)")(
                    (b.currentTarget.style.border = "none")(
                      (b.currentTarget.style.color = "black")
                    )
                  )
                }
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionPage;
