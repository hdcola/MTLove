import { useStore } from "../store/store";
import { useEffect } from "react";

export default function Messages() {
  const { messages, scoreHistory, fetchScenario } = useStore();

  useEffect(() => {
    if (scenarioId) {
      fetchScenario(scenarioId);
    }
  }, [scenarioId]);

  let assistantIndex = -1;

  return (
    <div className="flex-1 overflow-y-auto flex flex-col">
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
              className={`flex items-center chat-bubble w-96 m-2 ${
                message.role === "user"
                  ? ""
                  : message.role === "system"
                  ? ""
                  : "chat-bubble chat-bubble-primary"
              }`}
            >
              {message.content}
              {message.role === "assistant" &&
                scoreHistory[assistantIndex] !== undefined && (
                  <div className="badge badge-xs">
                    {scoreHistory[assistantIndex]}
                  </div>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
