function TaskCard({ task }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <p className="text-slate-300 mb-3">{task.description}</p>
      <p className="text-cyan-400 font-medium mb-2">Budget: ${task.budget}</p>
      <p className="text-sm text-slate-400">Client: {task.client_name}</p>
    </div>
  );
}


export default TaskCard;
