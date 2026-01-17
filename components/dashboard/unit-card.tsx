"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Battery, Signal, Sun, Wifi } from "lucide-react"

interface UnitCardProps {
    id: string
    name: string
    location: string
    batteryLevel: number
    isOnline: boolean
    initialBrightness: number
    initialIsOn: boolean
}

export function UnitCard({
    id,
    name,
    location,
    batteryLevel,
    isOnline,
    initialBrightness,
    initialIsOn,
}: UnitCardProps) {
    const [isOn, setIsOn] = useState(initialIsOn)
    const [brightness, setBrightness] = useState(initialBrightness)

    return (
        <Card className={!isOnline ? "opacity-75" : ""}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                    <CardTitle className="text-base font-semibold">{name}</CardTitle>
                    <div className="text-sm text-muted-foreground">{location}</div>
                </div>
                <div className={`flex items-center gap-1 text-xs ${isOnline ? "text-green-500" : "text-gray-400"}`}>
                    {isOnline ? <Wifi className="h-4 w-4" /> : <Signal className="h-4 w-4" />}
                    {isOnline ? "Online" : "Offline"}
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Status Row */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <Battery className={`h-4 w-4 ${batteryLevel < 20 ? "text-red-500" : "text-green-500"}`} />
                        <span>{batteryLevel}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4 text-orange-500" />
                        <span>{isOn ? `${brightness}%` : "Off"}</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor={`power-${id}`} className="text-sm font-medium">Power</label>
                        <Switch
                            id={`power-${id}`}
                            checked={isOn}
                            onCheckedChange={setIsOn}
                            disabled={!isOnline}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium">Brightness</label>
                            <span className="text-xs text-muted-foreground">{brightness}%</span>
                        </div>
                        <Slider
                            value={[brightness]}
                            onValueChange={(val) => setBrightness(val[0])}
                            max={100}
                            step={1}
                            disabled={!isOn || !isOnline}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
