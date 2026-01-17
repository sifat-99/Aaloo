import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full lg:px-48 mx-auto border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
            <div className="container flex h-16 items-center px-4 md:px-8">
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="mr-8 hidden md:flex w-full justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <img src="/Aaloo.png" alt="Team Aaloo Logo" className="h-28 w-28 object-contain" />
                        </Link>
                        <nav className="flex items-center space-x-8 text-sm font-medium text-black">
                            <Link
                                href="#problem"
                                className="transition-all hover:text-primary hover:scale-105 text-foreground/70"
                            >
                                The Problem
                            </Link>
                            <Link
                                href="#solution"
                                className="transition-all hover:text-primary hover:scale-105 text-foreground/70"
                            >
                                Our Solution
                            </Link>
                            <Link
                                href="#team"
                                className="transition-all hover:text-primary hover:scale-105 text-foreground/70"
                            >
                                Team
                            </Link>
                        </nav>
                    </div>
                    <nav className="flex items-center">
                        <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-md hover:shadow-lg transition-all" asChild>
                            <Link href="#contact">Contact Us</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
