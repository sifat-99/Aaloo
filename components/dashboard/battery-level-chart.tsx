"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts"

const data = [
    { name: "Unit A", level: 85 },
    { name: "Unit B", level: 45 },
    { name: "Unit C", level: 90 },
    { name: "Unit D", level: 20 },
    { name: "Unit E", level: 60 },
    { name: "Unit F", level: 75 },
]

export function BatteryLevelChart({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>Battery Levels (Top Units)</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="level" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.level < 30 ? "#ef4444" : "#22c55e"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
