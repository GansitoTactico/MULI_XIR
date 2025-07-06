import axios from "./axios";

export const createContextFromUser =  (data) => axios.post(`/user/context`,data);
export const getContextFromUser =  () => axios.get(`/user/context`);