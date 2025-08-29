import React from "react";
import { Link } from "react-router-dom";

export default function ResultPage() {
  return (
    <>
      <div className="bg-purple-950/70 p-10 rounded-2xl shadow-lg w-[600px] max-w-full text-center">
        <div className="text-2xl font-bold mb-4">QUIZ COMPLETED!</div>
        <div className="flex justify-around text-lg mb-6">
          <div>
            <span className="text-2xl font-bold">0%</span>
            <p className="text-sm">Skipped</p>
          </div>
          <div>
            <span className="text-2xl font-bold">43%</span>
            <p className="text-sm">Answered Correctly</p>
          </div>
          <div>
            <span className="text-2xl font-bold">57%</span>
            <p className="text-sm">Answered Incorrectly</p>
          </div>
        </div>
        <Link
          to="/"
          className="bg-pink-500 hover:bg-pink-600 py-2 px-6 rounded-xl"
        >
          Restart Quiz
        </Link>
      </div>

      <div className="bg-purple-950/70 p-10 rounded-2xl shadow-lg w-[600px] max-w-full mt-8 space-y-6">
        <div>
          <p className="text-sm">1. Which of the following definitions best describes React.js?</p>
          <p className="text-green-400 font-semibold">
            A library to build user interfaces with help of declarative code.
          </p>
        </div>
        <div>
          <p className="text-sm">2. What purpose do React hooks serve?</p>
          <p className="text-green-400 font-semibold">
            Enabling the use of state and other React features in functional components.
          </p>
        </div>
        <div>
          <p className="text-sm">3. Can you identify what JSX is?</p>
          <p className="text-red-400 font-semibold">
            A JavaScript library for building dynamic user interfaces.
          </p>
        </div>
        <div>
          <p className="text-sm">4. What is the most common way to create a component in React?</p>
          <p className="text-red-400 font-semibold">
            By using the 'new' keyword followed by the component name.
          </p>
        </div>
        <div>
          <p className="text-sm">5. What does the term 'React state' imply?</p>
          <p className="text-red-400 font-semibold">
            The lifecycle phase a React component is in.
          </p>
        </div>
        <div>
          <p className="text-sm">6. How do you typically render list content in React apps?</p>
          <p className="text-green-400 font-semibold">
            By using the map() method to iterate over an array of data and returning JSX.
          </p>
        </div>
      </div>
    </>
  );
}
