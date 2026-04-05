import { createContext, useContext, useEffect, useState } from "react";
import {
  CreateLLMResponse,
  GetLLMResponse,
  CreateChatBotResponse,
  getChatBotResponse,
} from "../api/LLM";

// eslint-disable-next-line react-refresh/only-export-components
export const LLMContext = createContext();

export const UseLLM = () => {
  const context = useContext(LLMContext);
  if (!context) {
    throw new Error("UseLLM debe estar dentro del contexto LLM");
  }
  return context;
};

export const LLMProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [information, setInformation] = useState([]);
  const [pass, setPass] = useState(false);
  const [IAResponse, setIAResponse] = useState([]);
  const [pase, setPase] = useState(false);
  const [messages, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(information);
  }, [information]);

  const createResponse = async () => {
    try {
      const response = await CreateLLMResponse();
      setData(response);
      setPass(true);
    } catch (error) {
      console.log(error);
    }
  };
  const estado = async () => {
    const res = await GetLLMResponse();
    if (res !== null) {
      setPass(true);
    }
  };
  const getResponse = async () => {
    try {
      const response = await GetLLMResponse();
      if (response.data && response.data.length > 0) {
        setInformation(response.data[0]);
      } else {
        setInformation(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const controlador = async () => {
    setPase(true);
    console.log(pase);
  };

  const createChatBotResponse = async (prompt) => {
    setLoading(true);
    try {
      const response = await CreateChatBotResponse(prompt);
      setIAResponse(response.data);
    } catch (error) {
      console.log(error, "fallo al crear el mensaje");
    } finally {
      setLoading(false);
    }
  };

  const getChatBotResponses = async () => {
    setLoading(true);
    try {
      const response = await getChatBotResponse();
      console.log(response.data);
      setMessage(response.data);
    } catch (error) {
      console.log("fallo al obtener el mensaje del chat bot", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <LLMContext.Provider
      value={{
        pass,
        getChatBotResponses,
        messages,
        data,
        estado,
        IAResponse,
        pase,
        createChatBotResponse,
        controlador,
        createResponse,
        information,
        getResponse,
        loading,
      }}
    >
      {children}
    </LLMContext.Provider>
  );
};
