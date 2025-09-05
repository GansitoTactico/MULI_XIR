import axios from "./axios";

export const CreateLLMResponse = () => axios.post(`/createResponse` );

export const GetLLMResponse = () => axios.get(`/getResponse`);
