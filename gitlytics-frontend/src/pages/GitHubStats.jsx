// src/pages/GitHubStats.jsx
import React from "react";

const GitHubStats = () => {
  const dummyData = {
    username: "ritesh-pandey",
    totalRepos: 42,
    followers: 120,
    following: 75,
    gists: 5,
    mostUsedLang: "JavaScript",
    createdAt: "2021-03-15",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">📊 GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Username", value: dummyData.username },
          { label: "Total Repositories", value: dummyData.totalRepos },
          { label: "Followers", value: dummyData.followers },
          { label: "Following", value: dummyData.following },
          { label: "Public Gists", value: dummyData.gists },
          { label: "Most Used Language", value: dummyData.mostUsedLang },
          { label: "Account Created", value: new Date(dummyData.createdAt).toDateString() },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-md shadow-md text-center"
          >
            <h3 className="text-lg font-semibold text-gray-300">{item.label}</h3>
            <p className="text-2xl font-bold text-white mt-2">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubStats;
