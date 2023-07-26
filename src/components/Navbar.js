"use client";
import Link from "next/link";
import { useTasks } from "@/hooks/useTasks";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const { tasks } = useTasks();
  return (
    <>
      <header className="flex items-center bg-gray-800 px-10 py-3">
        <Link href="/">
          <h1 className="font-black text-3xl text-white">Task App</h1>
        </Link>

        <span className="ml-2 text-gray-400 font-bold">
          {tasks.length} tasks
        </span>

        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 px-1 py-1 text-gray font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            Add Task
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
