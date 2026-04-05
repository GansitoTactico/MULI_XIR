import axios from "./axios";

export const getProcessesRequest = () => axios.get(`/process`);

export const getProcessRequest = (id) => axios.get(`/process/${id}`);

export const createProcessRequest = (process) => axios.post("/process", process);

export const updateProcessRequest = (id, process) =>
  axios.put(`/process/${id}`, process);

export const deleteProcessRequest = (id) => axios.delete(`/process/${id}`);