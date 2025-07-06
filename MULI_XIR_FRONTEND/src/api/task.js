import axios from "./axios";

export const getTasksrequest =  () => axios.get(`/task`);

export const getTaskrequest =  (id) => axios.get(`/task/${id}`); 

export const createTasksrequest =  (task) => axios.post("/task",task);

export const updateTasksrequest =  (id,task) => axios.put(`/task/${id}`,task);

export const deleteTasksrequest =  (id) => axios.delete(`/task/${id}`);

//ref http://localhost:4000/api/task