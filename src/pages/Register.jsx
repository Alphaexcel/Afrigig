import { useState } from "react";
import { registerUser } from "../services/api";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "developer",
  });
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await registerUser(formData);
      setMessage(res.data.message || "Registration successful");
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "developer",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };


  return (
    <section className="max-w-xl mx-auto px-6 py-12">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6">Create an account</h2>


        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
            required
          />


          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700"
          >
            <option value="developer">Developer</option>
            <option value="client">Client</option>
          </select>


          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-3 rounded-xl font-semibold"
          >
            Register
          </button>
        </form>


        {message && <p className="mt-4 text-sm text-cyan-400">{message}</p>}
      </div>
    </section>
  );
}


export default Register;
