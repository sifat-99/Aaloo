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

import { ThemeProvider } from "@/components/theme-provider"
import { Particles } from "@/components/ui/particles";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen bg-background font-sans antialiased relative`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Particles
                        className="fixed inset-0 -z-10 animate-fade-in"
                        quantity={100}
                        ease={80}
                        color="#64748b" // Default slate-500, dark mode overrides via CSS if needed or dynamic prop
                        refresh
                    />
                    <SiteHeader />
                    <main className="flex-1 ">{children}</main>
                    <SiteFooter />
                    <ChatInterface />
                </ThemeProvider>
            </body>
        </html>
    );
}
