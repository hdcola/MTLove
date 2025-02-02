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
          className={`flex flex-col border-2 h-96 rounded-2xl transition-all ease-in-out shadow-lg hover:scale-110`}
        >
          <div className="font-bold mx-auto my-3">{item.title}</div>
          <div className="h-60 m-3">{item.description}</div>
          <div className="flex mx-auto p-2">
            <div className="px-2">Total won: {item.total_win}</div>
            <div className="px-2">Total lost: {item.total_lost}</div>
          </div>
          <div className="flex mx-auto p-5">
            <div className="px-2">
              <Link to={`game/${item.id}`}>
                <button className={`${cardInnerButton} ${buttonAnimation}`}>
                  <div className="m-2">To Challenge</div>{" "}
                </button>
              </Link>
            </div>
            <div className="px-2">
              <button className={`${cardInnerButton} ${buttonAnimation}`}>
                <div className="m-2">My history</div>
              </button>
            </div>
          </div>
        </div>
      ))}
    
    </>
  );
}
