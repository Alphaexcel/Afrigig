import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
      <Link to="/" className="text-2xl font-bold text-cyan-400">
        AfriGig
      </Link>


      <div className="flex gap-4 text-sm md:text-base">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/tasks" className="hover:text-cyan-400">Tasks</Link>
        <Link to="/register" className="hover:text-cyan-400">Register</Link>
        <Link to="/login" className="hover:text-cyan-400">Login</Link>
        <Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link>
      </div>
    </nav>
  );
}


export default Navbar;
