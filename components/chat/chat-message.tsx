import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
    role: "user" | "model";
    content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
    const isUser = role === "user";

    return (
        <div
            className={cn(
                "flex w-full",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            <div
                className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                    isUser
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-muted text-muted-foreground rounded-tl-sm border border-border/50"
                )}
            >
                {isUser ? (
                    <p>{content}</p>
                ) : (
                    <div className="prose prose-sm dark:prose-invert prose-p:my-1 prose-ul:my-1 prose-li:my-0 break-words">
                        <ReactMarkdown
                            components={{
                                a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
}
