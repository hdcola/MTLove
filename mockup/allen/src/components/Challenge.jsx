import { useState } from "react";

export default function Challenge() {
  const [userInput, setUserInput] = useState("");

  function handleInput(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="flex flex-1">
      <div className="w-1/3 text-wrap">
        <div className="font-semibold m-4">Scenario Name</div>
        <div className="max-h-fit m-4">
          Lorem ipsum dolor sit amet, nibh malis efficiendi eam id. Clita
          labores his ea, omnium impedit mei ad, an partiendo salutandi eam. Ea
          nam alii dolor dolorem, ne iudico vivendo duo. Eruditi fabulas
          platonem sit et, his et veritus offendit expetenda, zril dissentiunt
          ea mel. Putent efficiantur mel ea, ius ex civibus aliquando. Ei nec
          euismod insolens hendrerit, at nam wisi veritus sapientem. Ludus
          fastidii vis at. Erat fierent dissentiunt mei et, in duo iisque
          sanctus detraxit, sea id tantas laboramus. Id nulla munere tincidunt
          per, an minim utinam fabellas vis. Ad vocent commodo albucius eam, ex
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 m-4">dialog {userInput}</div>
        <div className="max-h-24 p-3 flex justify-center items-center">
          <textarea className="border border-slate-950 min-h-8 max-h-24 w-96" onChange={handleInput}></textarea>
          <div className="px-3 flex">
            <button className="hover:scale-110 active:scale-95">
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
  );
}
