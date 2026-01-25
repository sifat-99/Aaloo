import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const systemPrompt = `You are the AI assistant for Team Aaloo, dedicated to revolutionizing aquaculture with the Smart Solar Lamp. Your goal is to explain how this self-sustaining, automated lighting solution increases fish yield, reduces operational costs, and protects the ecosystem.

Key Information to know:
- **Problem**: Traditional farming has high energy costs, requires manual operation, and incurs frequent maintenance.
- **Solution**: The Aaloo Smart Solar Lamp is automated, solar-powered, and reliable.
- **Tone**: Professional, encouraging, and innovative.
- **Prototype**: Mention the 'Prototype v1.0' if asked about current status.

Answer questions about fish farming efficiency and solar technology contextually. Keep responses concise and helpful.`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Construct the full conversation history for the model
    // The SDK expects contents to be an array of parts with role
    // We'll prepend the system prompt as a user message or system instruction if supported
    // For this preview model and SDK, we might need to manually construct the history array

    // Map existing history to the format expected by the new SDK if needed,
    // or simply pass the history if it matches.
    // The previous history format was { role: 'user'|'model', parts: [{ text: '...' }] }
    // The new SDK usually takes config with 'contents'

    // Let's create a simplified content array
    // Note: 'systemInstruction' property is available in generateContent config for some models

    const contents = history.map((msg: any) => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: msg.parts.map((p: any) => ({ text: p.text }))
    }));

    // Add the new user message
    contents.push({
        role: "user",
        parts: [{ text: message }]
    });

    const result = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
            systemInstruction: {
                parts: [{ text: systemPrompt }]
            }
        },
        contents: contents
    });

    const text = result.text;
    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
