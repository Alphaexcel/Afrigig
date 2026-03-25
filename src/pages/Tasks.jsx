import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskCard from "../components/TaskCard";


function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await getTasks();
        setTasks(res.data);
      } catch (error) {
        setMessage("Failed to load tasks");
      }
    };


    fetchTasks();
  }, []);


  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Available Tasks</h2>
      </div>


      {message && <p className="text-red-400 mb-4">{message}</p>}


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p className="text-slate-400">No tasks available yet.</p>
        )}
      </div>
    </section>
  );
}


export default Tasks;
