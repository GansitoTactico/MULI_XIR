import axios from "./axios";

export const CreateLLMResponse = () => axios.post(`/createResponse` );

export const GetLLMResponse = () => axios.get(`/getResponse`);

export const CreateChatBotResponse = (data) => axios.post(`/createChatBotResponse`,data);

export const getChatBotResponse = () => axios.get(`/getChatBotResponse`);