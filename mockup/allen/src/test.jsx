import { useShallow } from "zustand/react/shallow";
import { useBookStore, useCounterStore } from "./store";

const Test = () => {
  // const { count, incrementAsync, decrement } = useCounterStore();
  const { increment, count, decrement, reset } = useCounterStore();
  const { amount, title } = useBookStore(
    useShallow((state) => ({ amount: state.amount, title: state.title }))
  );

  return (
    <div className="flex-1 flex-col flex items-center justify-center">
      <div className="flex justify-evenly w-1/2">
        <div className="flex-col flex">
          <h1>Zustand : {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>

      <table className="text-center w-1/2">
        <tbody>
          <tr className="bg-gray-100">
            <th className="p-2">Book Title</th>
            <th className="p-2">Amount</th>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-2">{title}</td>
            <td className="p-2">{amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Test;
