// import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router";
import { UserIcon, SendIcon } from "../components/Icons";
import { useMessageStore } from "../store";
import { useRef } from "react";
import Dialogue from "../components/Dialogue";

export default function Challenge() {
  // const { messages, setMessages } = useOutletContext();
  // const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);

  const messages = useMessageStore((state) => state.messages);
  const setMessages = useMessageStore((state) => state.setMessages);
  const userInput = useMessageStore((state) => state.userInput);
  const resetUserInput = useMessageStore((state) => state.resetUserInput);
  const setUserInput = useMessageStore((state) => state.setUserInput);
  const changeline = useMessageStore((state) => state.changeline);
  // console.log(inputRef);

  function sendMessage() {
    if (userInput.trim() !== "") {
      setMessages([...messages, { text: userInput, isUser: true }]);
      resetUserInput();
      console.log(messages);
    }
  }

  // console.log(JSON.stringify(messages, null, 2));

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault(); // 阻止默认行为
        changeline();
        if (inputRef.current) {
          // 确保光标滚动到最底部
          setTimeout(() => {
            inputRef.current.scrollTop = inputRef.current.scrollHeight;
          }, 0);
        }
      } else {
        e.preventDefault();
        sendMessage(); // 按下 Enter 发送消息
      }
    }
  }

  // console.log(userInput);

  const sId = Number(useParams().scenarioId);
  const currentMessages = messages.filter((message) => message.id === sId);
  // console.log(currentMessages);

  return (
    <div className="flex-1 flex flex-col">
      {/* 对话区域 */}
      <div className="flex-1 rounded-tr-lg shadow-lg bg-gray-100 pt-8">
        <div className="font-semibold text-xl text-center">Chat</div>
        <Dialogue currentMessages={currentMessages} />
      </div>
      {/* 输入框 */}
      <div className="max-h-24 p-3 flex justify-center items-center shadow-inner bg-gray-200 rounded-l-none rounded-br-lg">
        <div className="pr-3 ">
          <UserIcon />
        </div>
        <textarea
          className="border border-slate-950 min-h-8 max-h-24 w-96 pt-1 pl-1 rounded tracking-wider"
          placeholder="Here we go..."
          value={userInput || ""}
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="px-3 flex">
          <button
            className="hover:scale-110 active:scale-95"
            onClick={sendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
      {/* ------------- */}
    </div>
  );
}
