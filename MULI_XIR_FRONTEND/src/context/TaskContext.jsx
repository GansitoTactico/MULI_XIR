import { createContext, useContext } from "react";
import { useState } from "react";
import {
  createTasksrequest,
  getTaskrequest,
  deleteTasksrequest,
  getTasksrequest,
  updateTasksrequest,
} from "../api/task";

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [task, setTask] = useState([]);

  const createTask = async (task) => {
    try {
      const res = await createTasksrequest(task);
      console.log(res);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  const deleteTask = async (id) => {
    try {
      const res = await deleteTasksrequest(id);
      if (res.status === 204) {
        setTask(task.filter((task) => task._id !== id));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const getTasks = async (task) => {
    try {
      const res = await getTasksrequest(task);
      setTask(res.data);
    } catch (error) {
      console.error("Error getting tasks:", error);
    }
  };
  const getTask = async (id) => {
    try {
      const res = await getTaskrequest(id);
      return res.data;
    } catch (error) {
      console.error("Error getting task:", error);
      return null; // Return null or handle the error as needed
    }
  };
  const UpdateTask = async (id, updatedTask) => {
    try {
      const res = await updateTasksrequest(id, updatedTask);
      setTask((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, ...res.data } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        getTasks,
        getTask,
        deleteTask,
        UpdateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
