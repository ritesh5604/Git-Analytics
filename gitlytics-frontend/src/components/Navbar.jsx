// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-60 backdrop-blur-md border-b border-gray-700 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">GitHub Dashboard</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
        <Link to="/stats" className="text-white hover:text-gray-300">Stats</Link>
      </div>
    </nav>
  );
};

export default Navbar;
