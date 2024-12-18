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
      setMessages([...messages, { text: userInput, isUser: false }]);
      setUserInput("");
    }
  }

  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-95";
  const cardInnerButton = "bg-slate-400 px-3  rounded text-white select-none";

  return (
    <>
      <div className="flex flex-1 pt-[88px] max-w-7xl mx-auto">
        <div className="flex flex-1">
          <div className="w-1/3 text-wrap flex flex-col">
            <div className="font-semibold m-4">{currentScenario[0].title}</div>
            <div className="min-h-96 m-4 border border-gray-950">
              <div className="p-5">{currentScenario[0].description}</div>
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
            <div className="flex-1 border border-gray-950">
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
                        {message.isUser ? (
                          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        ) : (
                          <path d="M360-390q-21 0-35.5-14.5T310-440q0-21 14.5-35.5T360-490q21 0 35.5 14.5T410-440q0 21-14.5 35.5T360-390Zm240 0q-21 0-35.5-14.5T550-440q0-21 14.5-35.5T600-490q21 0 35.5 14.5T650-440q0 21-14.5 35.5T600-390ZM480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93Zm0 80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5ZM177-581q51-29 89-75t57-103q-51 29-89 75t-57 103Zm249-214Zm-103 36Z" />
                        )}
                      </svg>
                    </div>
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
                </div>
              ))}
            </div>
            <div className="max-h-24 p-3 flex justify-center items-center">
              <textarea
                className="border border-slate-950 min-h-8 max-h-24 w-96 pt-1 pl-1 rounded tracking-wider"
                placeholder="Here we go..."
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
