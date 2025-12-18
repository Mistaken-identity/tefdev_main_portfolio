import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize client
// Note: In a real production app, you might proxy this through a backend to protect the key,
// or use Firebase App Check. For this demo, we assume the env var is present.
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (history: { role: string; parts: string }[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API_KEY is missing in the environment. I cannot function without my neural link.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the chat history for the API
    // We only keep the last 10 messages to manage context window efficiency if needed
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300, 
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.parts }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "System malfunction: Empty response received.";
    
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. My neural network is currently unreachable. Please try again later.";
  }
};
