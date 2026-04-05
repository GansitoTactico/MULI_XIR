import { useForm } from "react-hook-form";
import { UseLLM } from "../context/LLMContext.jsx";
import { useEffect, useState } from "react";
import ChatBotMessagesComponent from "../components/chatBotMessagesComponent.jsx";
import { useNavigate } from "react-router-dom";
function ChatBotPage() {
  const { handleSubmit, register, reset } = useForm();
  const { createChatBotResponse, getChatBotResponses, messages } = UseLLM();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const elemento = document.getElementById("message");
      elemento.value = "";
      await createChatBotResponse(data);
      getChatBotResponses();
      reset();
    } catch (error) {
      console.log("error al crear la respuesta del ChatBot", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = () => {
    navigate("/landing");
  };

  useEffect(() => {
    getChatBotResponses();
  }, []);

  return (
    <>
      <style>{`
        .chatbot-page-container {
          display: flex;
          min-height: 100vh;
          background: var(--background-gradient);
          color: var(--accent-color-2);
          font-family: 'Poppins', sans-serif;
        }
        @media (max-width: 768px) {
          .chatbot-page-container {
            flex-direction: column;
          }
          .chatbot-sidebar {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            box-shadow: none !important;
            border-right: none !important;
            border-bottom: 2px solid rgba(255, 215, 0, 0.2);
          }
          .chatbot-main-content {
            margin-left: 0 !important;
            padding: 1rem !important;
          }
          .chatbot-messages-container {
            height: auto !important;
            min-height: 50vh;
          }
          .chatbot-form-wrapper {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            padding: 1rem 0 !important;
            box-shadow: none !important;
            background: transparent !important;
          }
        }
      `}</style>
      <div className="chatbot-page-container">
        {isLoading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              backdropFilter: "blur(5px)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  border: "4px solid rgba(255, 215, 0, 0.2)",
                  borderTop: "4px solid var(--accent-color-2)",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <p style={{ color: "var(--accent-color-2)", fontSize: "1.1rem" }}>
                Cargando...
              </p>
              <style>
                {`@keyframes spin { to { transform: rotate(360deg); } }`}
              </style>
            </div>
          </div>
        )}

        <aside
          className="chatbot-sidebar"
          style={{
            width: "300px",
            padding: "2rem",
            borderRight: "2px solid rgba(255, 215, 0, 0.2)",
            background: "var(--nav-background)",
            backdropFilter: "blur(10px)",
            boxShadow: "4px 0 15px rgba(0, 0, 0, 0.1)",
            height: "100vh",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "var(--accent-color-2)",
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              borderBottom: "2px solid var(--accent-color-2)",
              paddingBottom: "0.5rem",
            }}
          >
            Chat Bot
          </h1>
          <h2
            style={{
              color: "var(--accent-color-2)",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            Historial
          </h2>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "1rem",
              padding: "0.5rem",
            }}
          >
            <p style={{ color: "var(--text-secondary)" }}>
              "información base de datos"
            </p>
          </div>
          <button
            onClick={handleNavigate}
            style={{
              background: "var(--accent-gradient)",
              color: "var(--dark-background)",
              border: "none",
              padding: "0.8rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(255, 215, 0, 0.2)",
            }}
          >
            Regresar
          </button>
        </aside>
        <div
          className="chatbot-main-content"
          style={{
            flex: 1,
            marginLeft: "300px",
            padding: "2rem",
            position: "relative",
          }}
        >
          <div
            className="chatbot-messages-container"
            style={{
              height: "calc(100vh - 10rem)",
              overflowY: "auto",
              paddingBottom: "2rem",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 p-2">
              {messages.map((res) => (
                <ChatBotMessagesComponent
                  res={res}
                  key={res._id}
                ></ChatBotMessagesComponent>
              ))}
            </div>
          </div>
          <div
            className="chatbot-form-wrapper"
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              right: "2rem",
              background: "var(--nav-background)",
              padding: "1rem",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                name="message"
                id="message"
                {...register("prompt", { required: true })}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "var(--dark-background)",
                  border: "1px solid var(--accent-color-1)",
                  borderRadius: "8px",
                  color: "var(--text-primary)",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  opacity: isLoading ? 0.5 : 1,
                }}
                placeholder="Escribe tu mensaje..."
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent-color-2)";
                  e.target.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--accent-color-1)";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: "var(--accent-gradient)",
                  color: "var(--dark-background)",
                  border: "none",
                  padding: "1rem 1.5rem",
                  borderRadius: "8px",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(255, 215, 0, 0.2)",
                  opacity: isLoading ? 0.6 : 1,
                }}
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBotPage;
