import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-cyan-400 font-semibold mb-3">Remote Work for African Tech Talent</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Find freelance tech jobs, hire fast, and pay securely.
          </h1>
          <p className="text-slate-300 text-lg mb-8">
            AfriGig connects African developers with clients looking for reliable
            talent, transparent hiring, and a simple payment flow.
          </p>
          <div className="flex gap-4">
            <Link
              to="/register"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold"
            >
              Get Started
            </Link>
            <Link
              to="/tasks"
              className="border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-xl"
            >
              Browse Tasks
            </Link>
          </div>
        </div>


        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why AfriGig?</h2>
          <div className="space-y-4 text-slate-300">
            <p>• Discover freelance opportunities across Africa</p>
            <p>• Hire frontend, backend, and product talent</p>
            <p>• Transparent applications and payment flow</p>
            <p>• Built for speed, trust, and accessibility</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;
