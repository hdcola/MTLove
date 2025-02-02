import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchDb } from "./fetch";

// const api = import.meta.process.GEMINI_API_KEY;

export const useStore = create(
  persist(
    (set, get) => ({
      // 获取当前的 scenario
      fetchScenario: async (sid) => {
        try {
          const scenarioData = await fetchDb(sid);
          set({
            scoreHistory: [0],
            score: 0,
            systemPrompt: scenarioData.system,
            messages: [
              { role: "system", content: scenarioData.system },
              { role: "assistant", content: scenarioData.start },
            ],
          });
        } catch (error) {
          console.error("Failed to fetch scenario:", error);
        }
      },

      userInput: "",
      setUserInput: (input) => set({ userInput: input }),

      token: "",
      setToken: (newToken) => set({ token: newToken }),

      systemPrompt: "",
      setSystemPrompt: (prompt) => set({ systemPrompt: prompt }),

      messages: [],
      addMessage: (newMessage) =>
        set((state) => ({ messages: [...state.messages, newMessage] })),

      score: 0,
      setScore: (newScore) =>
        set((state) => ({ score: state.score + newScore })),

      scoreHistory: [],
      setScoreHistory: (newScore) =>
        set((state) => ({
          scoreHistory: [...state.scoreHistory, newScore],
        })),

      sendMessage: async () => {
        const {
          userInput,
          addMessage,
          setUserInput,
          messages,
          setScore,
          setScoreHistory,
        } = get();
        if (!userInput) return;

        addMessage({ role: "user", content: userInput }); // 添加用户对话
        setUserInput(""); // 清空输入框

        // console.log(api);

        const requestBody = {
          model: "gemini-2.0-flash-exp",
          messages: [...messages, { role: "user", content: userInput }],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "compliance_result",
              schema: {
                type: "object",
                properties: {
                  text: {
                    type: "string",
                    description: "Response text.",
                  },
                  score: {
                    type: "number",
                    description: "Score of the response.",
                  },
                },
                required: ["text", "score"],
                additionalProperties: false,
              },
              strict: true,
            },
          },
        };

        console.log(requestBody);

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/openai/chat/completions`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer `,
            },
            body: JSON.stringify(requestBody),
          }
        );

        console.log(response);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        console.log(aiResponse);
        const jsonObj = JSON.parse(aiResponse);

        const curScore = jsonObj.score;
        setScore(curScore);
        setScoreHistory(curScore);
        addMessage({ role: "assistant", content: jsonObj.text });
      },
    }),
    { name: "mtlove" }
  )
);
