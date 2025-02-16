/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useStore } from "../store/store";

export default function Win({ score, onRestart, messages }) {
  const [visible, setVisible] = useState(false);
  const { resetGame } = useStore();

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

      <p className="text-2xl mt-4">
        The last word is:
        <span className="font-bold text-green-300">
          {messages[messages.length - 1].content}
        </span>
      </p>

      <div className="mt-6 flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg"
          onClick={onRestart}
        >
          Play Again
        </button>

        <Link
          to="/"
          className="bg-gray-700 hover:bg-gray-500 text-white px-6 py-3 rounded-xl text-lg"
          onClick={resetGame}
        >
          Exit
        </Link>
      </div>
    </div>
  );
}
