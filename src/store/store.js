import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const api = import.meta.env.VITE_API_KEY;

export const useStore = create(
  persist(
    (set, get) => ({
      apiKey: api,
      //   setApiKey: (newKey) => set({ apiKey: newKey }),

      userInput: '',
      setUserInput: (input) => set({ userInput: input }),

      systemPrompt: '',
      setSystemPrompt: (prompt) => set({ systemPrompt: prompt }),

      messages: [
        {
          role: 'system',
          content:
            "Right now, your role is my girlfriend, and we need to play a game, the rules is: I have to convince you to do something that you don't want to do, and you are responding according to my response. You will give an interger score whether it is positive or negative from -10 to 10 for each response.",
        },
      ],
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
          apiKey,
          messages,
          setScore,
          setScoreHistory,
        } = get();
        if (!userInput) return;

        addMessage({ role: 'user', content: userInput }); // 添加用户对话
        setUserInput(''); // 清空输入框

        const requestBody = {
          model: 'gemini-2.0-flash-exp',
          messages: [...messages, { role: 'user', content: userInput }],
          response_format: {
            type: 'json_schema',
            json_schema: {
              name: 'compliance_result',
              schema: {
                type: 'object',
                properties: {
                  text: {
                    type: 'string',
                    description: 'Response text.',
                  },
                  score: {
                    type: 'number',
                    description: 'Score of the response.',
                  },
                },
                required: ['text', 'score'],
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
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
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
        addMessage({ role: 'assistant', content: jsonObj.text });
      },
    }),
    { name: 'mtlove' }
  )
);
