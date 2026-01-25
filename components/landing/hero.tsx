import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative w-full min-h-screen lg:px-48 mx-auto flex items-center pt-20 pb-10 overflow-hidden bg-slate-950">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-90">
                <img
                    src="/hero_solar_pond_1768488851114.png"
                    alt="Background"
                    className="w-full h-full object-cover blur-xs"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60"></div>
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4">
                {/* Text Content */}
                <div className="flex flex-col items-start gap-6 text-left">
                    <Link
                        href="/resources"
                        className="rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-white px-6 py-2 text-sm font-medium hover:bg-primary/30 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700"
                    >
                        ✨ Revolutionizing Aquaculture with AI & Solar
                    </Link>
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        The Future of <span className="text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-amber-300">Fish Farming</span>
                    </h1>
                    <p className="max-w-[40rem] text-lg sm:text-xl text-zinc-200 sm:leading-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        Team Aaloo introduces the Smart Solar Lamp—a self-sustaining, automated lighting solution that increases yield, reduces costs, and protects the ecosystem.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <Button size="xl" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-full" asChild>
                            <Link href="#solution">Discover the Tech</Link>
                        </Button>
                        <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg h-14 px-8 rounded-full backdrop-blur-sm" asChild>
                            <Link href="/resources">Read Research</Link>
                        </Button>
                    </div>
                </div>

                {/* Product Image Highlight */}
                <div className="relative w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                        <img
                            src="/resources/product-prototype.jpeg"
                            alt="Aaloo Smart Solar Lamp Prototype"
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Floating Label */}
                        <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                            <p className="text-sm font-semibold text-white">Smart Solar Lamp</p>
                            <p className="text-xs text-zinc-300">Prototype v1.0</p>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10"></div>
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px] -z-10"></div>
                </div>
            </div>
        </section>
    )
}
