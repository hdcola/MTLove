/* eslint-disable react/prop-types */
// import { useMessages } from "../hooks/useMessages";
// import { useStore } from "../store/store";

import { useEffect, useRef } from "react";

export default function Messages({ messages, scoreHistory }) {
  // const { messages, scoreHistory } = useStore();

  let assistantIndex = -1;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="overflow-y-auto flex flex-col pb-4">
      {messages.map((message, index) => {
        if (message.role === "assistant") {
          assistantIndex++; // 只在 assistant 消息时递增
        }

        return (
          <div
            key={index}
            className={`chat ${
              message.role === "user"
                ? "chat-end"
                : message.role === "system"
                ? "hidden"
                : "chat-start"
            }`}
          >
            <div
              className={`flex items-center chat-bubble min-w-0 max-w-[85vw] sm:max-w-[400px] m-2 
              break-words whitespace-pre-wrap text-pretty ${
                message.role === "user"
                  ? "bg-blue-600"
                  : message.role === "system"
                  ? ""
                  : "chat-bubble-primary"
              }`}
              style={{
                wordBreak: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
              }}
            >
              <div className="flex-1 overflow-hidden text-sm sm:text-base">
                {message.content}
              </div>
              {message.role === "assistant" &&
                scoreHistory[assistantIndex] !== undefined && (
                  <div className="badge badge-xs ml-2 flex-shrink-0">
                    {scoreHistory[assistantIndex]}
                  </div>
                )}
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} className="h-4" />
    </div>
  );
}
