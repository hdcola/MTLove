import { useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import { useParams } from "react-router-dom";
import scenarioData from "../../data/scenarios.json";
import ErrorPage from "../../components/ErrorPage";
import { UserIcon, BotIcon } from "../../components/Icons";

export default function ChallengeLayout() {
  const scenarios = scenarioData;
  const params = useParams(); // 解析URL中的参数字段
  const currentId = parseInt(params.scenarioId); // 此处小坑，url中的参数是字符，必须转换为数字以后才能用于筛选
  const currentScenario = scenarios.filter((item) => item.id === currentId); // filter 返回的是[{...}]，如果需要返回{}可使用find

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  if (!params.scenarioId || isNaN(currentId) || !currentScenario[0]) {
    return <ErrorPage />;
  }

  function sendMessage() {
    if (userInput.trim() !== "") {
      setMessages([...messages, { text: userInput, isUser: true }]);
      setUserInput("");
    }
  }

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-95";
  const cardInnerButton = "bg-slate-400 px-3 rounded text-white select-none";

  return (
    <>
      <div className="flex flex-1 pt-24 pb-2 max-w-7xl mx-auto">
        <div className="flex flex-1">
          {/* 左侧区域 */}
          <div className="w-1/3 text-wrap flex flex-col border border-gray-950">
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
          {/* 右侧区域 */}
          <div className="flex-1 flex flex-col">
            {/* 对话区域 */}
            <div className="flex-1 border-y border-e border-gray-950">
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
            <div className="max-h-24 p-3 flex justify-center items-center border-e border-b border-gray-900">
              {/*  */}
              <Outlet context={{ sendMessage, handleChange, userInput }} />
            </div>
            {/* ------------- */}
          </div>
        </div>
      </div>
    </>
  );
}
