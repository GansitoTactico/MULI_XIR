import { createContext, useContext, useState } from "react";
import {
  getProcessesRequest,
  getProcessRequest,
  createProcessRequest,
  updateProcessRequest,
  deleteProcessRequest,
} from "../api/process";

export const ProcessContext = createContext();

export const useProcess = () => {
  const context = useContext(ProcessContext);
  if (!context) {
    throw new Error("useProcess must be used within a ProcessProvider");
  }
  return context;
};

export function ProcessProvider({ children }) {
  const [processes, setProcesses] = useState([]);

  const getProcesses = async () => {
    try {
      const res = await getProcessesRequest();
      setProcesses(res.data);
    } catch (error) {
      console.error("Error getting processes:", error);
    }
  };

  const createProcess = async (process) => {
    try {
      const res = await createProcessRequest(process);
      console.log(res);
    } catch (error) {
      console.error("Error creating process:", error);
    }
  };

  const deleteProcess = async (id) => {
    try {
      const res = await deleteProcessRequest(id);
      if (res.status === 204) {
        setProcesses(processes.filter((process) => process._id !== id));
      }
    } catch (error) {
      console.error("Error deleting process:", error);
    }
  };

  const getProcess = async (id) => {
    try {
      const res = await getProcessRequest(id);
      return res.data;
    } catch (error) {
      console.error("Error getting process:", error);
      return null;
    }
  };

  const updateProcess = async (id, updatedProcess) => {
    try {
      const res = await updateProcessRequest(id, updatedProcess);
      setProcesses((prevProcesses) =>
        prevProcesses.map((process) =>
          process._id === id ? { ...process, ...res.data } : process
        )
      );
    } catch (error) {
      console.error("Error updating process:", error);
    }
  };

  return (
    <ProcessContext.Provider
      value={{
        processes,
        getProcesses,
        createProcess,
        deleteProcess,
        getProcess,
        updateProcess,
      }}
    >
      {children}
    </ProcessContext.Provider>
  );
}
