import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const systemPrompt = `You are the AI assistant for Team Aaloo (আলো), dedicated to revolutionizing aquaculture with the Smart Solar Lamp. Your goal is to explain how this self-sustaining, automated lighting solution increases fish yield, reduces operational costs, and protects the ecosystem.

### Project Overview
Aaloo (আলো) is a Smart Solar Lamp designed for sustainable aquaculture. It solves the triple challenge of high energy costs, manual labor, and contaminated fish feed.

### Key Features & Technology
- **Hardware**:
  - **Solar Charging**: Off-grid operation, charges during the day.
  - **Sensors**: IoT-enabled monitoring for **Temperature, pH, and Water Level**.
  - **Automation**: LDR sensor for automatic sunset activation and sunrise shutdown.
  - **Lighting**: Specialized warm LED spectrum to attract insects.
  - **Connectivity**: Sends data to cloud (low-bandwidth compatible).
- **Construction**: Circular design using **recycled PET bottles**.
- **Platform**: Mobile App + Web Dashboard for monitoring and control.

### Working Mechanism (The "Aaloo Cycle")
1. **Charge**: Solar panel charges battery during the day.
2. **Activate**: Light turns on automatically at night.
3. **Attract**: Warm light attracts insects to the pond surface.
4. **Feed**: Insects fall into water, providing natural, high-protein feed for fish.
5. **Monitor**: Sensors track water quality continuously.

### Impact & Benefits
- **Economic**:
  - **Energy Saved**: **+45%** vs traditional lighting.
  - **Fish Growth**: **+20%** faster maturation due to natural feeding and extended photoperiod.
  - **Cost**: Reduces reliance on expensive commercial feed.
- **Environmental**:
  - **Carbon Offset**: **1.2 Tons** CO2 per farm annually.
  - **Sustainability**: Reduces plastic waste (PET bottle usage).
- **Health (Human Risk Mitigation)**:
  - Commercial feed often contains **Microplastics** (0–526 particles/kg) and **Heavy Metals** (Lead, Mercury).
  - Aaloo Promotes **natural insect-based feeding**, breaking the cycle of bioaccumulation.

### Market & Business
- **Target Market**:
  - **Bangladesh**: ~4.7M total ponds (Total Addressable Market). Phase 1 Target: 300K ponds.
  - **Global**: ~35-40M ponds worldwide.
- **Pricing**:
  - **Hardware Kit**: ~$9 (One-time).
  - **Subscription**: ~$2/month (Service & App usage).

### Tone & Style
Professional, encouraging, innovative, and data-driven. Use bullet points for readability. If asked about status, mention 'Prototype v1.0'.
Answer within 20 words where possible, but expand if explaining technical details.`;

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
