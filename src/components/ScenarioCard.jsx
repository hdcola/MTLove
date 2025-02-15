import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function ScenarioCard() {
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
          className="flex flex-col bg-orange-50 border border-gray-300 rounded-2xl shadow-[20px_20px_10px_rgba(0,0,0,0.5)] hover:  transition-transform duration-300 ease-out hover:scale-110 font-semibold "
        >
          <div className="text-2xl font-bold text-gray-900 text-center px-6 py-6 border-b border-gray-200">
            {item.title}
          </div>

          <div className="flex-1 px-6 py-5 text-gray-700 text-base leading-relaxed overflow-y-auto ">
            {item.description}
          </div>

          <div className="px-6 py-5 bg-orange-50  flex justify-center rounded-2xl">
            <Link to={`game/${item.id}`}>
              <button className="p-5 w-full py-3 bg-blue-400 text-white text-lg rounded-2xl font-semibold transition-all duration-200 hover:bg-blue-500 active:scale-90 focus:ring-4 focus:ring-blue-400 ">
                Start Challenge
              </button>
            </Link>
          </div>
        </div>

      ))}
    </>
  );
}
