"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 rounded-full h-24 w-24 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="size-8" strokeWidth={4} color="black" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 border-r-primary/20 bg-background/95 backdrop-blur-2xl">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pl-6 pr-6 pb-6 pt-10">
                    <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setOpen(false)}>
                        <img src="/Aaloo.png" alt="Team Aaloo Logo" className="h-28 w-28 object-contain" />
                    </Link>
                    <nav className="flex flex-col space-y-6 flex-1">
                        <Link
                            href="#problem"
                            className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:translate-x-1 duration-200"
                            onClick={() => setOpen(false)}
                        >
                            The Problem
                        </Link>
                        <Link
                            href="#solution"
                            className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:translate-x-1 duration-200"
                            onClick={() => setOpen(false)}
                        >
                            Our Solution
                        </Link>
                        <Link
                            href="#impact"
                            className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:translate-x-1 duration-200"
                            onClick={() => setOpen(false)}
                        >
                            Impact
                        </Link>
                        <Link
                            href="#operations"
                            className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:translate-x-1 duration-200"
                            onClick={() => setOpen(false)}
                        >
                            Operations
                        </Link>
                        <Link
                            href="#team"
                            className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:translate-x-1 duration-200"
                            onClick={() => setOpen(false)}
                        >
                            Team
                        </Link>
                        <Link
                            href="#about"
                            className="text-2xl font-medium text-foreground/80 transition-colors hover:text-primary hover:translate-x-1 duration-200"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                    </nav>
                    <div className="mt-auto pb-8">
                        <div className="h-px w-full bg-gradient-to-r from-border to-transparent mb-6" />
                        <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/20 text-xl py-6" asChild>
                            <Link href="#contact" onClick={() => setOpen(false)}>
                                Contact Us
                            </Link>
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            &copy; 2026 Team Aaloo
                        </p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
