"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp, Leaf, Battery, Droplet, Globe, MapPin } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { motion } from "framer-motion"

const globalTargetData = [
    { name: "Bangladesh", value: 300000, color: "var(--color-chart-1)" },
    { name: "India", value: 150000, color: "var(--color-chart-2)" },
    { name: "Vietnam", value: 75000, color: "var(--color-chart-3)" },
    { name: "Thailand", value: 50000, color: "var(--color-chart-4)" },
    { name: "Nigeria", value: 50000, color: "var(--color-chart-5)" },
    { name: "Kenya", value: 25000, color: "#8b5cf6" }, // Violet
]

const bdMarketSegments = [
    { name: "Small Rural Ponds", value: 55, color: "var(--color-chart-1)" },
    { name: "Semi-Commercial", value: 27, color: "var(--color-chart-2)" },
    { name: "Cooperatives", value: 10, color: "var(--color-chart-3)" },
    { name: "Hatcheries", value: 5, color: "var(--color-chart-4)" },
    { name: "NGO/Govt", value: 3, color: "var(--color-chart-5)" },
]

export function ImpactSection() {
    return (
        <section id="impact" className="container bg-slate-50 py-12 dark:bg-transparent lg:py-24 mx-auto my-8 rounded-3xl overflow-hidden">
            <div className="text-center space-y-4 -mt-20 mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
                    Real World Impact
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Data-driven solutions for a sustainable aquaculture future.
                </p>
            </div>

            {/* Existing Impact Stats Row - Kept for continuity but styled to match */}
            <div className="grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mx-auto px-4">
                <Card className="hover:-translate-y-1 transition-transform duration-300">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center justify-between">
                            Energy Saved <Battery className="h-4 w-4 text-green-500" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">+45%</div>
                        <p className="text-xs text-muted-foreground mt-1">Compared to traditional lighting</p>
                    </CardContent>
                </Card>
                <Card className="hover:-translate-y-1 transition-transform duration-300">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center justify-between">
                            Fish Growth <TrendingUp className="h-4 w-4 text-blue-500" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">+20%</div>
                        <p className="text-xs text-muted-foreground mt-1">Faster maturation rate</p>
                    </CardContent>
                </Card>
                <Card className="hover:-translate-y-1 transition-transform duration-300">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center justify-between">
                            Carbon Offset <Leaf className="h-4 w-4 text-emerald-500" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">1.2 Tons</div>
                        <p className="text-xs text-muted-foreground mt-1">Per farm annually</p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center space-y-4 mt-16 mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">
                    Market Size
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    The global aquaculture market size projection.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mb-16 px-4">
                {/* Global Opportunity */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-blue-100 shadow-md">
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <Globe className="h-6 w-6 text-primary" />
                                <CardTitle className="text-2xl">Global Opportunity</CardTitle>
                            </div>
                            <CardDescription>Targeting ~500k ponds in Phase 2-3</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="p-4 rounded-xl bg-blue-50 dark:bg-slate-900 border border-blue-100">
                                    <div className="text-3xl font-bold text-blue-600">35-40M</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Total Ponds Worldwide</div>
                                </div>
                                <div className="p-4 rounded-xl bg-green-50 dark:bg-slate-900 border border-green-100">
                                    <div className="text-3xl font-bold text-green-600">10-14M</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Suitable for Solar</div>
                                </div>
                            </div>

                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={globalTargetData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={2}
                                            dataKey="value"
                                        >
                                            {globalTargetData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => `${(Number(value) / 1000).toFixed(0)}K Ponds`}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="text-xs text-center text-muted-foreground">
                                Sources: FAO, WorldFish, IRENA
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Bangladesh Market */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-amber-100 shadow-md">
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center p-1.5 shadow-sm">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Government_Seal_of_Bangladesh.svg" alt="BD" className="invert brightness-0 filter" />
                                </div>
                                <CardTitle className="text-2xl">Bangladesh Market</CardTitle>
                            </div>
                            <CardDescription>Department of Fisheries (DoF) Data</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100">
                                <div>
                                    <div className="text-4xl font-bold text-orange-600">4.7M</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Total Addressable Market</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">300K</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Phase 1 Target (10% of TAM)</div>
                                </div>
                            </div>

                            <div className="h-[300px] w-full">
                                <h4 className="text-sm font-semibold text-center mb-2 text-muted-foreground">Market Segmentation</h4>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={bdMarketSegments}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={100}
                                            dataKey="value"
                                            label={({ name, percent }) => `${((percent || 0) * 100).toFixed(0)}%`}
                                            labelLine={false}
                                        >
                                            {bdMarketSegments.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={1} stroke="#fff" />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            formatter={(value) => `${value}%`}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>


        </section>
    )
}
