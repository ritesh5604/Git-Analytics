import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch GitHub user info from backend
    fetch("http://127.0.0.1:5000/api/user", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        navigate("/"); // redirect to Home if not logged in
      });
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-lg">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-md w-full text-center border border-white/20">
        <h1 className="text-4xl font-bold mb-4 text-white">
          👋 Welcome, {user?.name || user?.login || "Guest"}!
        </h1>
        <p className="text-gray-300 mb-8">
          Choose an option below to explore your GitHub stats.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/stats")}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            View Analytics
          </button>

          <button
            onClick={() => alert("This will go to profile details later!")}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            View Details
          </button>

          <button
            onClick={() => alert("This will show your repositories soon!")}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            View Repositories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
