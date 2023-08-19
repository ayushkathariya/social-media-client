import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! It seems Page Not Found !</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-cyan-500 rounded-full hover:bg-cyan-600 hover:text-white transition duration-300 font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
