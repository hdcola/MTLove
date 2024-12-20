import { SendIcon } from "../components/Icons";
import { useOutletContext } from "react-router-dom";

export default function Challenge() {
  const { sendMessage, handleChange, userInput } = useOutletContext();
  return (
    <>
      <textarea
        className="border border-slate-950 min-h-8 max-h-24 w-96 pt-1 pl-1 rounded tracking-wider"
        placeholder="Here we go..."
        value={userInput}
        onChange={handleChange}
      />
      <div className="px-3 flex">
        <button
          className="hover:scale-110 active:scale-95"
          onClick={sendMessage}
        >
          <SendIcon />
        </button>
      </div>
    </>
  );
}
