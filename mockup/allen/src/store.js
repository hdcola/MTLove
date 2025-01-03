import { create } from "zustand";

// Test store
export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  reset: () => {
    set({ count: 0 });
  },
}));

export const useBookStore = create(() => ({
  amount: 40,
  title: "Harry Potter and the Philosopher's Stone",
}));
// Test store end

export const useMessageStore = create((set) => ({
  messages: [],
  userInput: "",
  id: 0,
  setMessages: () => {
    set((state) => ({
      messages: [
        ...state.messages,
        { id: state.id, text: state.userInput, isUser: true },
      ],
    }));
  },
  setId: (value) => {
    set({ id: value });
  },
  setUserInput: (value) => {
    set({ userInput: value });
  },
  changeline: () => {
    set((state) => ({
      userInput: state.userInput + "\n",
    }));
  },
  resetUserInput: () => {
    set({ userInput: "" });
  },
}));
