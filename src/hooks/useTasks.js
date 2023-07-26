"use client";
import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

export const useTasks = () => {
  const constext = useContext(TaskContext);
  if (!constext)
    throw new Error("Usetask deverias estar sendo usado dentro de un provider");
  return constext;
};
