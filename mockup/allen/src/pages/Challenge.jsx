import { UserIcon, BotIcon, SendIcon } from "../components/Icons";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

export default function Challenge() {
  const { messages, setMessages } = useOutletContext();

  const [userInput, setUserInput] = useState("");

  function sendMessage() {
    if (userInput.trim() !== "") {
      setMessages([...messages, { text: userInput, isUser: true }]);
      setUserInput("");
      console.log(messages);
    }
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* 对话区域 */}
      <div className="flex-1 rounded-tr-lg shadow-lg bg-gray-100 pt-8">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="undefined"
                >
                  {message.isUser ? <UserIcon /> : <BotIcon />}
                </svg>
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
      {/* 输入框 */}
      <div className="max-h-24 p-3 flex justify-center items-center shadow-inner bg-gray-200 rounded-l-none rounded-br-lg">
        <textarea
          className="border border-slate-950 min-h-8 max-h-24 w-96 pt-1 pl-1 rounded tracking-wider"
          placeholder="Here we go..."
          value={userInput}
          onChange={handleChange}
        />
        <div className="px-3 flex">
          <button
            className="hover:scale-110 active:scale-95"
            onClick={sendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
      {/* ------------- */}
    </div>
  );
}