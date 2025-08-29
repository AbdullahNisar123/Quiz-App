import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-purple-950/70 p-10 rounded-2xl shadow-lg w-[500px] max-w-full text-center">
      <h2 className="text-2xl font-semibold mb-6">Welcome to the React Quiz</h2>
      <button
        // to="/"
        className="bg-pink-500 hover:bg-pink-600 py-3 px-6 rounded-xl text-lg font-medium transition"
      >
        Start Quiz
      </button>
    </div>
  );
}
