import { useStore } from "../store/store";
import { useEffect } from "react";
import { useParams } from "react-router";
import Messages from "../components/Messages";

export default function ChatPage() {
  const { userInput, setUserInput, sendMessage, score } = useStore();


  useEffect(() => {
    if (scenarioId) {
      fetchScenario(scenarioId);
    }
  }, [scenarioId]);

  const handleClick = (e) => {
    e.preventDefault();
    sendMessage();
  };

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
