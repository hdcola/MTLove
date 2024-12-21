/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ChallengeBtn({ id, name }) {
  const location = useLocation();
  const isFinished = location.pathname.includes("finished");
  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-95";
  const cardInnerButton = "bg-slate-400 px-3 rounded text-white select-none";
  return (
    <Link to={`${name === "home" ? "/" : isFinished ? id : `${id}/finished`}`}>
      <button
        className={`w-16 h-8 rounded bg-slate-400 text-white shadow-lg ${cardInnerButton} ${buttonAnimation}`}
      >
        {`${name === "home" ? "Home" : isFinished ? "Back" : "Finish"}`}
      </button>
    </Link>
  );
}
