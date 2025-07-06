import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createContextFromUser,
  getContextFromUser,
} from "../api/regional_context_usr";
import { useAuth } from "./AuthContext";

// eslint-disable-next-line react-refresh/only-export-components
export const RegionalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useRegionalContext = () => {
  const context = useContext(RegionalContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del contexto");
  }
  return context;
};

export const RegionalProvider = ({ children }) => {
  const { user } = useAuth();
  const [contextRegional, saveContext] = useState(null);
  const [errors, setErrors] = useState([]);
  const [ContextTrue, setContextTrue] = useState(false);
  const [loader, setloader] = useState(true);

  const CreateContext = async (data) => {
    try {
      const res = await createContextFromUser(data);
      setloader(false);
      setContextTrue(true);
      console.log(res);
    } catch {
      setErrors(["Error al crear el contexto del usuario"]);
      //contextTrue(false);
    }
  };
  useEffect(() => {
    async function checkContext() {
      try {
        const res = await getContextFromUser();
        console.log(res);

        setloader(false);
        setContextTrue(true);
        saveContext(res.data);
        console.log("se obtuvo el contexto del usuario");
      } catch (error) {
        setErrors(["Error al obtener el contexto del usuario", errors]);
        setloader(false);
        setContextTrue(false);
        saveContext(false);

        if (error.response && error.response.status === 404) {
          console.log("No hay contexto del usuario");
        } else {
          setErrors(["Error al obtener el contexto del usuario", error]);
        }
      }
    }
    checkContext();
  }, [user, setloader]);

  return (
    <RegionalContext.Provider
      value={{
        contextRegional,
        CreateContext,
        ContextTrue,
        setContextTrue,
        errors,
        loader,
        saveContext,
      }}
    >
      {children}
    </RegionalContext.Provider>
  );
};
