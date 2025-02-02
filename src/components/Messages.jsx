import { useStore } from "../store/store";
import { useEffect, useRef} from "react";

export default function Messages() {
  const { messages, scoreHistory } = useStore();
 

  let assistantIndex = -1;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col h-[calc(100vh-180px)] sm:h-auto">
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
              className={`flex items-center chat-bubble max-w-[80vw] sm:max-w-[400px] m-2 break-words ${
                message.role === "user"
                  ? "bg-blue-600"
                  : message.role === "system"
                  ? ""
                  : "chat-bubble-primary"
              }`}
            >
              {message.content}
              {message.role === "assistant" &&
                scoreHistory[assistantIndex] !== undefined && (
                  <div className="badge badge-xs ml-2">
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
