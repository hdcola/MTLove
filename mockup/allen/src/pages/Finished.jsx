// import { useOutletContext } from "react-router-dom";
import { useMessageStore } from "../store";
import { useParams } from "react-router";
import { ShareIcon } from "../components/Icons";
import Dialogue from "../components/Dialogue";

export default function Finished() {
  // const { messages } = useOutletContext();
  const messages = useMessageStore((state) => state.messages);

  const sId = Number(useParams().scenarioId);
  const currentMessages = messages.filter((message) => message.id === sId);

  return (
    <div className="flex-1 flex flex-col">
      {/* 对话区域 */}
      <div className="flex-1 rounded-tr-lg shadow-lg bg-gray-100 pt-8">
        <div className="font-semibold text-xl text-center">Game Finished</div>
        <Dialogue currentMessages={currentMessages} />
      </div>
      <div className="max-h-24 py-3 px-8 flex items-center justify-evenly shadow-inner bg-gray-200 rounded-l-none rounded-br-lg">
        <div className="flex flex-col">
          <div>You Win / You Lose</div>
          <div>Rounds: {currentMessages.length}</div>
        </div>
        <div className="ml-auto flex">
          <div className="cursor-pointer pr-5 hover:text-cyan-400 hover:font-semibold">
            Others&apos; Result
          </div>
          <span className="cursor-pointer hover:scale-105">
            <ShareIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
