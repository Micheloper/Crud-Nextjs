"use client";
import { createContext, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext(); //Ejecutando el import

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const generateUniqueId = () => {
    const maxId = tasks.reduce(
      (max, task) => (task.id > max ? task.id : max),
      0
    );
    return maxId + 1;
  };
  const createTask = (title, description) =>
    setTasks([...tasks, { id: uuid(), title, description }]);

  /*  
  updateTask sera el objeto. "...task, ...updateTask" toma la tarea y combina com updateTask.Basicamente se reemplaza un valor encima de otro
   */
  const updateTask = (id, updatedTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);
  };

  const deleteTask = (id) =>
    setTasks(
      [...tasks.filter((task) => task.id !== id)] //AGARRO TODO EL ARREGLO QUE TENGO Y FILTRO SACANDO TODOS QUE NO TENGA EL ID IGUAL
    );

  return (
    <TaskContext.Provider
      value={{
        //Exportando un objeto
        tasks,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
