import { Sun, Sprout, TrendingUp } from "lucide-react"

export function SolutionSection() {
    return (
        <section id="solution" className="container space-y-6 py-8 md:py-12 lg:py-24 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Our Solution
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    A smart, solar-powered lamp designed to revolutionize the aquaculture industry.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <div className="relative overflow-hidden rounded-xl border bg-background p-1 shadow-lg transition-all hover:scale-105 hover:shadow-primary/20">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <Sun className="h-12 w-12 text-yellow-500 fill-yellow-100" />
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl">Solar Powered</h3>
                            <p className="text-sm text-muted-foreground">Harnessing renewable energy to provide consistent, zero-cost lighting.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-xl border bg-background p-1 shadow-lg transition-all hover:scale-105 hover:shadow-green-500/20">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 to-emerald-600" />
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <Sprout className="h-12 w-12 text-green-600 fill-green-100" />
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl">Eco-Friendly</h3>
                            <p className="text-sm text-muted-foreground">Reducing carbon footprint with sustainable materials and energy sources.</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-xl border bg-background p-1 shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/20">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600" />
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <TrendingUp className="h-12 w-12 text-blue-600 fill-blue-100" />
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl">Increased Yield</h3>
                            <p className="text-sm text-muted-foreground">Optimized lighting spectrums promote better fish growth and health.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
