import axios from "./axios";

export const CreateMessage = (messageData) => axios.post(`/createMessage`, messageData );

export const getMessage = () => axios.get(`/getMessages`);