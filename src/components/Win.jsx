/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Win({ score, onRestart }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-green-900 text-white transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <h1 className="text-6xl font-bold text-yellow-400 animate-bounce">
        YOU WIN!
      </h1>

      <p className="text-2xl mt-4">
        Your Score: <span className="font-bold text-green-300">{score}</span>
      </p>

      <div className="mt-6 flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg"
          onClick={onRestart}
        >
          Play Again
        </button>
        <Link to="/">
          <button className="bg-gray-700 hover:bg-gray-500 text-white px-6 py-3 rounded-xl text-lg">
            Exit
          </button>
        </Link>
      </div>
    </div>
  );
}
