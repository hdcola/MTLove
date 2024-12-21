import { useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import scenarioData from "../../data/scenarios.json";
import ErrorPage from "../../components/ErrorPage";
import ChallengeBtn from "../../components/ChallengeBtn";

export default function ChallengeLayout() {
  const scenarios = scenarioData;
  const params = useParams(); // 解析URL中的参数字段
  const currentId = parseInt(params.scenarioId); // 此处小坑，url中的参数是字符，必须转换为数字以后才能用于筛选
  const currentScenario = scenarios.filter((item) => item.id === currentId); // filter 返回的是[{...}]，如果需要返回{}可使用find

  const [messages, setMessages] = useState([]);

  if (!params.scenarioId || isNaN(currentId) || !currentScenario[0]) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className="flex flex-1 pt-24 pb-2 max-w-7xl mx-auto">
        <div className="flex flex-1">
          {/* 左侧区域 */}
          <div className="w-1/3 text-wrap flex flex-col bg-gray-200 rounded-lg rounded-r-none shadow-inner">
            <div className="font-semibold m-4">{currentScenario[0].title}</div>
            <div className="min-h-96 m-4 shadow-lg rounded-lg bg-white">
              <div className="p-5">{currentScenario[0].description}</div>
            </div>
            <div className="flex justify-evenly m-4">
              <ChallengeBtn name="home" />
              <ChallengeBtn id={`${currentId}`} />
            </div>
          </div>
          {/* 右侧区域 */}
          <Outlet context={{ messages, setMessages }} />
        </div>
      </div>
    </>
  );
}
