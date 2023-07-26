import { TaskProvider } from "@/context/TasksContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "./Toaster";
import { Layout } from "@/components/Layout";

export const metadata = {
  title: "CRUD",
  description: "CRUD APP ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <Layout>{children}</Layout>
        </TaskProvider>
        <Toaster />
      </body>
    </html>
  );
}
