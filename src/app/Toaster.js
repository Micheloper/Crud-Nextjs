"use client";
import dynamic from "next/dynamic";

//ESTE CODIGO ES DE FRONT NO NECESITA PROCESAR CON CODIGO SSR
export const Toaster = dynamic(
  async () => {
    const { Toaster } = await import("react-hot-toast");
    return Toaster;
  },
  {
    ssr: false,
  }
);
