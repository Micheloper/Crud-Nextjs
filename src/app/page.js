"use client";
import { TaskCard } from "@/components/TaskCard";
import { useTasks } from "@/hooks/useTasks";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Home() {
  const { tasks } = useTasks();
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1, // Add stagger to animate each card separately
    });
  }, []);

  return (
    <div className="flex justify-center">
      {tasks.length === 0 ? (
        <div className="block">
          <h2 className="text-2xl">There are no tasks</h2>
        </div>
      ) : (
        <div className="w-7/10">
          {tasks.map((task, i) => (
            <div key={i} ref={(element) => (cardRefs.current[i] = element)}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
