import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg text-center w-[90%] max-w-md border border-white/20">
        <div className="text-4xl font-bold mb-4 flex justify-center items-center gap-2">
          <span>🚀</span> Gitlytics
        </div>
        <p className="mb-6 text-gray-300">
          Visualize your GitHub journey with clean insights and stats.
        </p>
        <a
          href="http://localhost:5000/github"
          className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Login with GitHub
        </a>
        <p className="mt-4 text-xs opacity-80">No data saved. 100% GitHub powered.</p>
      </div>
    </div>
  );
};

export default Home;
