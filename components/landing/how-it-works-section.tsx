"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Wrench, Sun, Moon, Wifi, Activity, Lightbulb, Fish, Smartphone, BrainCircuit, ArrowRight, ArrowDown, ArrowLeft } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Install & Deploy Aaloo",
        description: "• Install Aaloo on pond\n• Floating or fixed setup",
        icon: Wrench,
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: 2,
        title: "Solar Charging (Daytime)",
        description: "• Solar panel charges battery\n• Off-grid operation",
        icon: Sun,
        color: "bg-amber-100 text-amber-600",
    },
    {
        id: 3,
        title: "Automatic Activation",
        description: "• LDR detects sunset\n• Light turns ON automatically",
        icon: Moon,
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        id: 4,
        title: "Data Transmission",
        description: "• Sends data to cloud\n• Works with low bandwidth",
        icon: Wifi,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        id: 5,
        title: "Water & Fish Monitoring",
        description: "• Temperature\n• pH\n• Water level",
        icon: Activity,
        color: "bg-teal-100 text-teal-600",
    },
    {
        id: 6,
        title: "Smart LED Illumination",
        description: "• Warm insect-attracting\n• Stable night illumination",
        icon: Lightbulb,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        id: 7,
        title: "Natural Fish Feeding",
        description: "• Insects fall into pond\n• Extended feeding hours",
        icon: Fish,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        id: 8,
        title: "Auto Shutdown",
        description: "• Light turns OFF\n• Energy saved",
        icon: Smartphone,
        color: "bg-slate-100 text-slate-600",
    },
]

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="relative container space-y-6 py-8 md:py-12 lg:py-24 mx-auto bg-white/20 backdrop-blur-md rounded-3xl my-8 border border-white/10 shadow-lg dark:bg-slate-950/20">
            <div className="text-center space-y-4 mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
                    HOW AALOO WORKS
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A seamless, automated cycle of energy, monitoring, and impact.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Desktop Layout - Snake Flow */}
                <div className="hidden md:grid grid-cols-3 gap-8 relative z-10">
                    {/* Row 1: 1 -> 2 -> 3 */}
                    {steps.slice(0, 3).map((step, index) => (
                        <StepCard key={step.id} step={step} index={index} />
                    ))}

                    {/* Row 2: 6 <- 5 <- 4 */}
                    {steps.slice(3, 6).reverse().map((step, index) => (
                        <StepCard key={step.id} step={step} index={index + 3} />
                    ))}

                    {/* Row 3: 7 -> 8  */}
                    <div className="col-span-3 grid grid-cols-3 gap-8">
                        <StepCard step={steps[6]} index={6} />
                        <StepCard step={steps[7]} index={7} />

                        {/* Feedback Loop (Step 9) placed visually */}
                        <div className="relative flex items-center justify-center w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="w-full aspect-[21/9] flex flex-row items-center justify-start p-6 gap-4 rounded-xl bg-green-50/50 border-2 border-dashed border-green-200 text-left"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
                                    <BrainCircuit className="h-8 w-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-green-800 mb-1 leading-tight">Feedback & Intelligence Loop</h3>
                                    <p className="text-xs text-green-700 leading-relaxed">Data stored. AI-ready predictions (future).</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Connecting Lines (Desktop only visuals) */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 650" preserveAspectRatio="none">
                        <defs>
                            <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                                <polygon points="0 0, 12 4, 0 8" fill="#94a3b8" />
                            </marker>
                            <marker id="arrowhead-green" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                                <polygon points="0 0, 12 4, 0 8" fill="#4ade80" />
                            </marker>
                        </defs>

                        {/* Main Workflow Path: Ends at H (Step 8) */}
                        <motion.path
                            d="M 200 80 L 1000 80 C 1100 80 1100 265 1000 265 L 200 265 C 100 265 100 450 200 450 L 580 450"
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth="3"
                            strokeDasharray="10 10"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            markerEnd="url(#arrowhead)"
                        />

                        {/* Feedback Loop Path: G(7) -> I(Feedback) -> H(8) */}
                        <motion.path
                            d="M 200 530 Q 600 630 1000 530"
                            fill="none"
                            stroke="#4ade80"
                            strokeWidth="3"
                            strokeDasharray="8 8"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            markerEnd="url(#arrowhead-green)"
                        />
                        <motion.path
                            d="M 1000 370 Q 800 320 600 370"
                            fill="none"
                            stroke="#4ade80"
                            strokeWidth="3"
                            strokeDasharray="8 8"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            markerEnd="url(#arrowhead-green)"
                        />
                    </svg>
                </div>

                {/* Mobile Layout - Linear */}
                <div className="md:hidden space-y-8 relative z-10">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative">
                            <StepCard step={step} index={index} />
                            {index < steps.length - 1 && (
                                <div className="flex justify-center my-2">
                                    <ArrowDown className="w-6 h-6 text-slate-300" />
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex justify-center my-2">
                        <ArrowDown className="w-6 h-6 text-slate-300" />
                    </div>
                    <Card className="border-green-200 bg-green-50/50">
                        <CardContent className="p-6 text-center">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                                <BrainCircuit className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-green-800 mb-2">Feedback & Intelligence Loop</h3>
                            <p className="text-sm text-green-700">Data stored. AI-ready predictions (future).</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

function StepCard({ step, index }: { step: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
        >
            <Card className="aspect-[21/9] hover:shadow-lg transition-all border-slate-100 group">
                <CardContent className="p-6 flex flex-row items-center text-left h-full gap-4">
                    <div className={`shrink-0 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{step.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 whitespace-pre-line">{step.description}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
