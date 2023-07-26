import { useTasks } from "@/hooks/useTasks";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { gsap } from "gsap";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  const router = useRouter();

  const handleDelete = (e) => {
    e.stopPropagation();
    const accept = confirm("Are you sure you want to delete this task?");
    if (accept) {
      gsap.to(e.target, {
        duration: 0.3,
        scale: 0.5,
        opacity: 0,
        onComplete: () => {
          deleteTask(task.id);
          toast.success("Task deleted successfully");
        },
      });
    }
  };

  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-5 py-3 m-2 md:px-20 md:py-5 flex flex-col md:flex-row justify-between"
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <h1 className="font-bold mb-2 md:mb-0 md:mr-3">{task.title}</h1>
          <p className="text-gray-300 mb-2">{task.description}</p>
          <button
            className="bg-red-700 hover:bg-red-600 mx-5 p-2 inline-flex items-center"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
