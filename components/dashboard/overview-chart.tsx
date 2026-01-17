"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
    { name: "Jan", solar: 400, usage: 240 },
    { name: "Feb", solar: 300, usage: 139 },
    { name: "Mar", solar: 200, usage: 980 },
    { name: "Apr", solar: 278, usage: 390 },
    { name: "May", solar: 189, usage: 480 },
    { name: "Jun", solar: 239, usage: 380 },
    { name: "Jul", solar: 349, usage: 430 },
]

export function OverviewChart({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>Solar Gen vs Usage</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}kW`} />
                        <Tooltip />
                        <Area type="monotone" dataKey="solar" stroke="#ea580c" fill="#ea580c" fillOpacity={0.2} name="Solar Generated" />
                        <Area type="monotone" dataKey="usage" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} name="Energy Usage" />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
