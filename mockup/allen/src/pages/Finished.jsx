import { useOutletContext } from "react-router-dom";
import { UserIcon, BotIcon, ShareIcon } from "../components/Icons";

export default function Finished() {
  const { messages } = useOutletContext();
  return (
    <div className="flex-1 flex flex-col">
      {/* 对话区域 */}
      <div className="flex-1 rounded-tr-lg shadow-lg bg-gray-100 pt-8">
        <div className="font-semibold text-xl text-center">Game Finished</div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`items-center py-1 flex ${
                message.isUser ? "pr-2 flex-row-reverse" : "pl-2 flex-row"
              }`}
            >
              <div className={`${message.isUser ? "pl-2" : "pr-2"}`}>
                {message.isUser ? <UserIcon /> : <BotIcon />}
              </div>
              <div
                className={`px-4 py-2 rounded-lg first-letter:uppercase ${
                  message.isUser
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-h-24 py-3 px-8 flex items-center justify-evenly shadow-inner bg-gray-200 rounded-l-none rounded-br-lg">
        <div className="flex flex-col">
          <div>You Win / You Lose</div>
          <div>Rounds: {messages.length}</div>
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
