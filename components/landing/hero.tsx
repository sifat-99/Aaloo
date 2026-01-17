import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_solar_pond_1768488851114.png"
                    alt="Smart Solar Lamp Fish Farm"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-background via-black/20 to-black/30 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 container flex flex-col items-center gap-6 text-center px-4">
                <Link
                    href="/resources"
                    className="rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-white px-6 py-2 text-sm font-medium hover:bg-primary/30 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700"
                >
                    ✨ Revolutionizing Aquaculture with AI & Solar
                </Link>
                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-lg max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    The Future of <span className="text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-amber-300">Fish Farming</span>
                </h1>
                <p className="max-w-[48rem] text-lg sm:text-xl text-zinc-100 drop-shadow-md sm:leading-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Team Aaloo introduces the Smart Solar Lamp—a self-sustainining, automated lighting solution that increases yield, reduces costs, and protects the ecosystem.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <Button size="xl" className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 rounded-full" asChild>
                        <Link href="#solution">Discover the Tech</Link>
                    </Button>
                    <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg h-14 px-8 rounded-full backdrop-blur-sm" asChild>
                        <Link href="/resources">Read Research</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
