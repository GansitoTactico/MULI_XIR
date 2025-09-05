import React, { createContext, useContext, useState } from "react";
import { CreateMessage, getMessage } from "../api/messages.js";

// eslint-disable-next-line react-refresh/only-export-components
export const messageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMessages = () => {
  const context = useContext(messageContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del contexto");
  }
  return context;
};

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [mensajes, setMensajes] = useState([]);

  const createMessage = async (messageData) => {
    try {
      console.log(messageData);
      const response = await CreateMessage(messageData);
      setMessages(response.data);
    } catch (error) {
      console.error("Error al crear el mensaje:", error);
      throw error; // Propagar el error para manejarlo en el componente que llama
    }
  };
  const getMessages = async () => {
    try {
      const response = await getMessage();
      console.log(response.data);
      setMensajes(response.data);
    } catch (error) {
      console.error("Error al obtener los mensajes:", error);
    }
  };

  return (
    <messageContext.Provider
      value={{
        createMessage,
        setMessages,
        messages,
        mensajes,
        getMessages,
      }}
    >
      {children}
    </messageContext.Provider>
  );
};
