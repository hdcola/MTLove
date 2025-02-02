import { useStore } from "../store/store";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import Messages from "../components/Messages";
import GameOver from "../components/GameOver";
import Win from "../components/Win";
import Description from "../components/Description";

export default function ChatPage() {
  const {
    userInput,
    setUserInput,
    sendMessage,
    score,
    fetchScenario,
    scoreHistory,
  } = useStore();
  const params = useParams();
  const currentId = parseInt(params.sid);

  const [isWin, setIsWin] = useState(null);

  useEffect(() => {
    if (currentId) {
      fetchScenario(currentId);
    }
  }, [currentId, fetchScenario]);

  useEffect(() => {
    if (score <= -10 || scoreHistory.length >= 11) {
      setIsWin(false); // 游戏失败
    } else if (score >= 10) {
      setIsWin(true); // 游戏胜利
    }
  }, [score, scoreHistory]);

  const handleClick = () => {
    if (userInput.trim() === "") return;
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // 阻止默认换行行为
      handleClick();
    }
  };

  if (isWin === false) {
    return <GameOver score={score} onRestart={onRestart} />;
  }

  if (isWin === true) {
    return <Win score={score} onRestart={onRestart} />;
  }

  function onRestart() {
    setIsWin(null);
    fetchScenario(currentId);
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
      <Description />
      <nav className="sticky top-0 bg-white shadow-sm py-4 px-6 w-full z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">
            MTLove Score: <span className="text-blue-600">{score}</span>
          </h1>
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Challenge Description
          </button>
          <Link to="/">
            <button className="btn btn-neutral">Home</button>
          </Link>
        </div>
      </nav>

      <div className="flex-1 w-full max-w-4xl mx-auto px-4 overflow-y-auto">
        <Messages />
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 py-4 z-10">
        <div className="max-w-4xl mx-auto px-4 flex gap-3">
          <textarea
            placeholder="Type your message here..."
            className="flex-1 min-h-[60px] max-h-[120px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button
            onClick={handleClick}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
