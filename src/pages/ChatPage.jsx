import { useStore } from "../store/store";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Messages from "../components/Messages";
import GameOver from "../components/GameOver";

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
    } else if (score > 10) {
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

  function onRestart() {
    setIsWin(null);
    fetchScenario(currentId);
  }

  return (
    <div className="flex-1 flex flex-col items-center h-screen">
      <nav className="sticky top-0 m-8 w-full flex justify-center h-10 p-2 z-999">
        MTLove Score: {score}
      </nav>
      <Messages />
      <div className="flex p-5 gap-2">
        <textarea
          placeholder="type here..."
          className="border stickey bottom-0 w-96 h-20"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button
          onClick={handleClick}
          className="hover:scale-110 hover:bg-gray-200 "
        >
          Send
        </button>
      </div>
    </div>
  );
}
