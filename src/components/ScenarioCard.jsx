import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function ScenarioCard() {
  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-100";
  const cardInnerButton = "bg-slate-400 px-3 rounded text-white select-none";
  const host = "https://mtloveapi.huangdong.workers.dev";
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    fetch(`${host}/api/scenarios`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // 打印返回的数据
        setScenarios(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
      {scenarios.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
        >
          <div className="text-xl font-semibold text-gray-800 text-center px-6 py-5 border-b border-gray-100">
            {item.title}
          </div>
          <div className="flex-1 px-6 py-4 text-gray-600 text-sm leading-relaxed overflow-y-auto">
            {item.description}
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <Link to={`game/${item.id}`}>
              <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:bg-blue-700 active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Start Challenge
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
