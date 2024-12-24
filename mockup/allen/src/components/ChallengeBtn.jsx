/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ChallengeBtn({ id, name }) {
  const location = useLocation();
  const isFinished = location.pathname.includes("finished");
  const buttonAnimation =
    "transition-all ease-in-out hover:scale-110 active:scale-100";
  const cardInnerButton = "bg-slate-400 px-3 rounded text-white select-none";
  return (
    <Link
      to={`${
        name === "home" || name === "submit"
          ? "/"
          : isFinished
          ? id
          : `${id}/finished`
      }`}
    >
      <button
        className={`h-8 rounded bg-slate-400 text-center text-white shadow-lg ${cardInnerButton} ${buttonAnimation}`}
      >
        {`${
          name === "home"
            ? "Home"
            : name === "submit"
            ? "Submit"
            : isFinished
            ? "Back"
            : "Finish"
        }`}
      </button>
    </Link>
  );
}
