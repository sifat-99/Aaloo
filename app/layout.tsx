import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatInterface } from "@/components/chat/chat-interface";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Team Aaloo - Smart Solar Lamp",
    description: "Revolutionizing Fish Farming with Smart Solar Lamps",
    icons: {
        icon: "/Aaloo.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
                <SiteHeader />
                <main className="flex-1 ">{children}</main>
                <SiteFooter />
                <ChatInterface />
            </body>
        </html>
    );
}
