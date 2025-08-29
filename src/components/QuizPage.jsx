import React from "react";
import { Link } from "react-router-dom";

export default function QuizPage() {
  return (
    <div className="bg-purple-950/70 p-8 rounded-2xl shadow-lg w-[600px] max-w-full">
      <h2 className="text-center text-lg mb-6">
        How do you typically render list content in React apps?
      </h2>

      <div className="space-y-4">
        <button className="w-full bg-purple-400/30 hover:bg-purple-400/50 py-3 px-4 rounded-xl transition">
          By using the loop() method to iterate over an array of data and returning JSX.
        </button>
        <button className="w-full bg-pink-500 py-3 px-4 rounded-xl">
          By using the map() method to iterate over an array of data and returning JSX.
        </button>
        <button className="w-full bg-purple-400/30 hover:bg-purple-400/50 py-3 px-4 rounded-xl transition">
          By using the for() loop to iterate over an array of data and returning JSX.
        </button>
        <button className="w-full bg-purple-400/30 hover:bg-purple-400/50 py-3 px-4 rounded-xl transition">
          By using the forEach() method to iterate over an array of data and returning JSX.
        </button>
      </div>

      {/* <div className="text-center mt-6">
        <button
          // to="/result"
          className="bg-pink-500 hover:bg-pink-600 py-2 px-6 rounded-xl"
        >
          Complete Quiz
        </button>
      </div> */}
    </div>
  );
}
