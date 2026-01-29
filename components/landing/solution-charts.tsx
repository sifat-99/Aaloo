"use client"

import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart, ComposedChart } from "recharts"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const waterQualityData = [
    { name: "DO (mg/L)", Traditional: 5.0, Aaloo: 5.6 },
    { name: "pH", Traditional: 7.1, Aaloo: 7.3 },
    { name: "Ammonia", Traditional: 0.4, Aaloo: 0.2 },
]

const growthData = [
    { name: "Growth Rate", Traditional: 11.2, Aaloo: 13.1 },
]

const feedData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    Traditional: 4.2 + Math.random() * 0.2 - 0.1,
    Aaloo: 3.5 + Math.random() * 0.1 - 0.05,
}))

const co2Data = [
    { name: "CO2 Emissions", Traditional: 1.0, Aaloo: 0.0 },
]

export function SolutionCharts() {
    return (
        <div className="space-y-8 mt-12 w-full max-w-[64rem] mx-auto">
            <div className="text-center space-y-4">
                <h3 className="font-heading text-2xl font-bold">Data-Driven Results</h3>
                <p className="text-muted-foreground">Comparative analysis showing Aaloo's superior performance.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Water Quality Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-blue-100 shadow-md overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
                        <CardHeader>
                            <CardTitle className="text-lg">Water Quality Comparison</CardTitle>
                            <CardDescription>Optimized parameters for fish health.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={waterQualityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            </linearGradient>
                                            <linearGradient id="colorAaloo" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#eab308" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#eab308" stopOpacity={0.3} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend iconType="circle" />
                                        <Bar dataKey="Traditional" fill="url(#colorTrad)" radius={[4, 4, 0, 0]} animationDuration={1500} />
                                        <Bar dataKey="Aaloo" fill="url(#colorAaloo)" radius={[4, 4, 0, 0]} animationDuration={1500} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Growth Rate Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full border-green-100 shadow-md overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
                        <CardHeader>
                            <CardTitle className="text-lg">Growth Rate (Monthly)</CardTitle>
                            <CardDescription>Faster maturation with natural feeding.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorTradGrowth" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#10b981" stopOpacity={0.3} />
                                            </linearGradient>
                                            <linearGradient id="colorAalooGrowth" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.3} />
                                            </linearGradient>
                                            <filter id="shadow" height="130%">
                                                <feDropShadow dx="2" dy="4" stdDeviation="2" floodOpacity="0.1" />
                                            </filter>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} hide />
                                        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} unit="%" />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend />
                                        <Bar name="Traditional" dataKey="Traditional" fill="url(#colorTradGrowth)" radius={[4, 4, 0, 0]} animationDuration={1500} filter="url(#shadow)" />
                                        <Bar name="Aaloo" dataKey="Aaloo" fill="url(#colorAalooGrowth)" radius={[4, 4, 0, 0]} animationDuration={1500} filter="url(#shadow)" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Feed Consumption Chart - Spanning 2 cols on medium screens if desired, but sticking to comparison for now */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:col-span-2"
                >
                    <Card className="h-full border-purple-100 shadow-md overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
                        <CardHeader>
                            <CardTitle className="text-lg">Feed Consumption (30 Days)</CardTitle>
                            <CardDescription>Consistent reduction in feed usage.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[250px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={feedData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorTradFeed" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorAalooFeed" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                                        <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} interval={4} />
                                        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} domain={['dataMin - 1', 'dataMax + 0.5']} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend />
                                        <Area type="monotone" name="Traditional (kg)" dataKey="Traditional" stroke="#6366f1" fillOpacity={1} fill="url(#colorTradFeed)" strokeWidth={2} />
                                        <Area type="monotone" name="Aaloo (kg)" dataKey="Aaloo" stroke="#eab308" fillOpacity={1} fill="url(#colorAalooFeed)" strokeWidth={2} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* CO2 Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="md:col-span-2"
                >
                    <Card className="h-full border-red-100 shadow-md overflow-hidden bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
                        <CardHeader>
                            <CardTitle className="text-lg">CO2 Emissions (Tons/Year)</CardTitle>
                            <CardDescription>Zero emissions with 100% solar power.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[200px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={co2Data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorTradCO2" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#ef4444" stopOpacity={0.3} />
                                            </linearGradient>
                                            <linearGradient id="colorAalooCO2" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
                                                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.3} />
                                            </linearGradient>
                                        </defs> // turbo
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} hide />
                                        <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                        <Tooltip
                                            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        />
                                        <Legend />
                                        <Bar name="Traditional" dataKey="Traditional" fill="url(#colorTradCO2)" radius={[4, 4, 0, 0]} animationDuration={1500} />
                                        <Bar name="Aaloo" dataKey="Aaloo" fill="url(#colorAalooCO2)" radius={[4, 4, 0, 0]} animationDuration={1500} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}
