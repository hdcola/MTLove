import { UserIcon, BotIcon } from "./Icons";

/* eslint-disable react/prop-types */
export default function Dialogue({ currentMessages }) {
  return (
    <>
      {currentMessages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
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
              {message.text.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
