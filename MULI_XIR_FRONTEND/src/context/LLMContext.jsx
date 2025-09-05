import { createContext, useContext, useState } from "react";
import { CreateLLMResponse, GetLLMResponse } from "../api/LLM";

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
  const [response, setResponse] = useState(null);
  const [pass, setPass] = useState(false);
  const [pase, setPase] = useState(false);

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
      setResponse(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const controlador = async () => {
    setPase(true);
    console.log(pase);
  };

  return (
    <LLMContext.Provider
      value={{
        pass,
        data,
        estado,
        pase,
        controlador,
        createResponse,
        response,
        getResponse,
      }}
    >
      {children}
    </LLMContext.Provider>
  );
};
