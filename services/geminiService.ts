
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMarketInsight = async (crop: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `भारत में ${crop} की फसल के वर्तमान बाजार रुझान और भविष्य के भाव की संभावनाओं के बारे में संक्षिप्त में बताएं। केवल हिंदी भाषा का प्रयोग करें।`,
      config: {
        systemInstruction: "You are an expert Indian agriculture market analyst. Provide insights in formal Hindi.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "बाजार के रुझान लोड करने में असमर्थ। कृपया बाद में प्रयास करें।";
  }
};
