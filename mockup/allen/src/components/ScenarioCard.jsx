/* eslint-disable react/prop-types */
import scenarioData from "../data/scenarios.json";
const scenarios = scenarioData;

export default function ScenarioCard({ handlePage}) {
  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-95";
  const cardInnerButton = "bg-slate-400 px-3  rounded text-white select-none";

  return (
    <>
      {scenarios.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col border-2 h-96 rounded-2xl transition-all ease-in-out hover:scale-110`}
        >
          <div className="font-bold mx-auto my-3">{item.title}</div>
          <div className="h-60 m-3">{item.description}</div>
          <div className="flex mx-auto p-2">
            <div className="px-2">Total won: {item.total_win}</div>
            <div className="px-2">Total lost: {item.total_lost}</div>
          </div>
          <div className="flex mx-auto p-5">
            <div className="px-2">
              <button className={`${cardInnerButton} ${buttonAnimation}`}>
                <div className="m-2" onClick={handlePage}>
                  To Challenge
                </div>
              </button>
            </div>
            <div className="px-2">
              <button className={`${cardInnerButton} ${buttonAnimation}`}>
                <div className="m-2">My history</div>
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* New Scenario */}
      <button
        className={`flex flex-col h-96 border-2 justify-center items-center rounded-2xl ${buttonAnimation}`}
      >
        <div className="text-9xl my-auto text-slate-400">+</div>
      </button>
    </>
  );
}
