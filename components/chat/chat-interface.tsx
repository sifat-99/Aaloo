"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./chat-message";
import { cn } from "@/lib/utils";

interface Message {
    role: "user" | "model";
    parts: { text: string }[];
}

export function ChatInterface() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "model",
            parts: [{ text: "Hello! I'm the Aaloo Assistant. Ask me anything about our Smart Solar Lamp technology or sustainable fish farming!" }]
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }
        }
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", parts: [{ text: input }] };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Transform messages for API history
            // Gemini requires the first message in history to be from 'user', so we filter out the initial model greeting
            const history = messages
                .filter((_, index) => index > 0) // Skip the first message (greeting)
                .map(m => ({
                    role: m.role,
                    parts: m.parts
                }));

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: input,
                    history: history
                }),
            });

            if (!response.ok) throw new Error("Failed to send message");

            const data = await response.json();

            const aiMessage: Message = {
                role: "model",
                parts: [{ text: data.response }]
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                role: "model",
                parts: [{ text: "I'm sorry, I'm having trouble connecting right now. Please check your API configuration." }]
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-4 z-50 w-[90vw] max-w-[400px] h-[500px] sm:h-[600px] bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-border/50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-primary/5 border-b border-border/40 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-primary/10 rounded-full">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Aaloo Assistant</h3>
                                    <p className="text-[10px] text-muted-foreground leading-tight">Powered by Team Aaloo</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsOpen(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((msg, i) => (
                                    <ChatMessage
                                        key={i}
                                        role={msg.role}
                                        content={msg.parts[0].text}
                                    />
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                                            <span className="text-xs text-muted-foreground">Thinking...</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-background border-t border-border/40">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-2"
                            >
                                <input
                                    className="flex-1 bg-muted/50 border border-border/50 hover:border-border/80 focus:border-primary/50 transition-colors rounded-full px-4 py-2 text-sm outline-none placeholder:text-muted-foreground/70"
                                    placeholder="Ask about Aaloo..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    disabled={isLoading}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={!input.trim() || isLoading}
                                    className="rounded-full h-10 w-10 shrink-0"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                layout
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-colors",
                    isOpen
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </motion.button>
        </>
    );
}
