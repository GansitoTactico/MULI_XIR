import React, { useEffect } from "react";
import { useTask } from "../context/TaskContext";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const { getTasks, task } = useTask();
  useEffect(() => {
    getTasks();
  }, []);
  if (!task || task.length === 0) {
    return (
      <div>
        <Navbar></Navbar>
        <h1 className="text-2xl text-center text-gray-300 mt-8">
          No hay tareas disponibles
        </h1>
        <p className="text-center text-gray-400 mt-4">
          Crea una nueva tarea para comenzar.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {task.map((res) => (
          <TaskCard res={res} key={res._id}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default TaskPage;
