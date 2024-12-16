import { useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router-dom";
import scenarioData from "../data/scenarios.json";

export default function Challenge() {
  const scenarios = scenarioData;
  const params = useParams();
  const currentId = parseInt(params.scenarioId); // 此处小坑，url中的id是字符，必须转换为数字以后才能用于筛选
  const currentScenario = scenarios.filter((item) => item.id === currentId); // filter 返回的是[{...}]，如果需要返回{}可使用find

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    if (userInput.trim() !== "") {
      setMessages([...messages, { text: userInput, isUser: true }]);
      setUserInput("");
    }
  }

  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-95";
  const cardInnerButton = "bg-slate-400 px-3  rounded text-white select-none";

  return (
    <>
      <div className="flex flex-1 border pt-[88px] max-w-7xl mx-auto">
        <div className="flex flex-1">
          <div className="w-1/3 text-wrap flex flex-col">
            <div className="font-semibold m-4">{currentScenario[0].title}</div>
            <div className="max-h-fit m-4">
              {currentScenario[0].description}
            </div>
            <Link className="m-auto" to="/">
              <button
                className={`w-16 h-8 rounded bg-slate-400 text-white ${cardInnerButton} ${buttonAnimation}`}
              >
                Back
              </button>
            </Link>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 m-4 overflow-y-scroll">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.isUser
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="max-h-24 p-3 flex justify-center items-center">
              <textarea
                className="border border-slate-950 min-h-8 max-h-24 w-96"
                placeholder="Type a message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
              <div className="px-3 flex">
                <button
                  className="hover:scale-110 active:scale-95"
                  onClick={sendMessage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="currentColor"
                    className="w-8 h-8"
                  >
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
