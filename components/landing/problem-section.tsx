import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BatteryWarning, Zap, DollarSign } from "lucide-react"
import { Particles } from "@/components/ui/particles"

export function ProblemSection() {
    return (
        <section id="problem" className="relative container space-y-6 bg-gradient-to-b from-slate-50 to-blue-50/50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto rounded-3xl my-8 overflow-hidden">
            {/* Particles Effect */}
            <Particles
                className="absolute inset-0 pointer-events-none"
                quantity={80}
                ease={80}
                color="#64748b"
                refresh
                speed={0.4}
                staticity={40}
            />

            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center relative z-10">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold text-primary">
                    The Challenge
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Traditional fish farming faces significant hurdles in energy consumption and operational efficiency.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 relative z-10">
                <Card className="border-secondary/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                        <Zap className="h-12 w-12 mb-2 text-secondary fill-secondary/20" />
                        <CardTitle>High Energy Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Conventional lighting systems consume excessive electricity, driving up operational expenses for farmers.
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="border-destructive/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                        <BatteryWarning className="h-12 w-12 mb-2 text-destructive fill-destructive/20" />
                        <CardTitle>Manual Operation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Lack of automation requires manual intervention, leading to inefficiencies and inconsistent lighting.
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="border-primary/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                        <DollarSign className="h-12 w-12 mb-2 text-primary fill-primary/20" />
                        <CardTitle>Maintenance Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Frequent replacements and maintenance of traditional bulbs add to the financial burden.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            {/* Section Divider */}
            <div className="relative z-10 py-12 flex items-center justify-center opacity-50">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-2xl"></div>
            </div>

            {/* Human Risk Section */}
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center relative z-10 mb-8">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
                    Beyond the Plate: <span className="text-destructive">Human Risk</span>
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    When fish health is compromised, it becomes a direct threat to human consumers.
                </p>
            </div>

            <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[72rem] md:grid-cols-3 relative z-10 pb-12">
                {/* Heavy Metals */}
                <Card className="border-orange-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><circle cx="12" cy="17" r="1" /></svg>
                        </div>
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Heavy Metals</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 marker:text-orange-500">
                            <li><span className="font-semibold text-slate-900 dark:text-white">Safe limit:</span> Mercury ≤ 0.5 mg/kg in fish (EU/FAO standard).</li>
                            <li><span className="font-semibold text-slate-900 dark:text-white">Current situation:</span> Lead and cadmium bioaccumulate in farmed fish over time, especially from contaminated feed and water.</li>
                        </ul>
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Source</p>
                                <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold">FAO; NIH (2022)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FAO_logo.svg/330px-FAO_logo.svg.png" alt="FAO Logo" className="h-16 w-auto opacity-80" />
                                <img src="https://www.cvpcorp.com/wp-content/uploads/2022/12/NIH-Logo_White_Sticker-1.png" alt="NIH Logo" className="h-16 w-auto opacity-80" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Microplastics */}
                <Card className="border-blue-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                        </div>
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Microplastics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 marker:text-blue-500">
                            <li><span className="font-semibold text-slate-900 dark:text-white">Contamination:</span> Fishmeal contains 0–526 particles/kg.</li>
                            <li><span className="font-semibold text-slate-900 dark:text-white">Current scale:</span> 5–12 million tons of microplastics enter oceans each year.</li>
                            <li><span className="font-semibold text-slate-900 dark:text-white">Risk:</span> Microplastics (0.15–5 mm) enter fish via feed and water.</li>
                        </ul>
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Source</p>
                                <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold">(2021) Env. Tox. & Chem.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="https://onlinelibrary.wiley.com/pb-assets/hub-assets/pericles/logo-header-1690978619437.png" alt="Wiley Logo" className="h-16 w-auto opacity-70" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Chemical Residues */}
                <Card className="border-red-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                        </div>
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-100">Chemical Residues</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 marker:text-red-500">
                            <li>Pesticides, PCBs, and dioxins accumulate in farmed fish.</li>
                            <li><span className="font-semibold text-slate-900 dark:text-white">EPA tolerable dioxin limit:</span> 0.7 picograms/kg body weight/day.</li>
                            <li>Fish consumption alone can exceed safe daily limits.</li>
                        </ul>
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Source</p>
                                <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold">EPA; Nutrition Res. (2025)</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Seal_of_the_United_States_Environmental_Protection_Agency.svg/960px-Seal_of_the_United_States_Environmental_Protection_Agency.svg.png" alt="EPA Logo" className="h-16 w-auto opacity-80" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
