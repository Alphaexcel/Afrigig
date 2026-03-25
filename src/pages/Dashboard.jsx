import { useEffect, useState } from "react";
import { getProfile } from "../services/api";


function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");


      if (!token) {
        setMessage("Please login first");
        return;
      }


      try {
        const res = await getProfile(token);
        setProfile(res.data);
      } catch (error) {
        setMessage("Failed to load profile");
      }
    };


    fetchProfile();
  }, []);


  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>


      {message && <p className="text-red-400 mb-4">{message}</p>}


      {profile && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
          <p><span className="font-semibold">Name:</span> {profile.name}</p>
          <p><span className="font-semibold">Email:</span> {profile.email}</p>
          <p><span className="font-semibold">Role:</span> {profile.role}</p>
          <p><span className="font-semibold">Bio:</span> {profile.bio || "No bio yet"}</p>
          <p><span className="font-semibold">Skills:</span> {profile.skills || "No skills added yet"}</p>
        </div>
      )}
    </section>
  );
}


export default Dashboard;
