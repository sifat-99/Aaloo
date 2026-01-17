import { OverviewChart } from "@/components/dashboard/overview-chart"
import { BatteryLevelChart } from "@/components/dashboard/battery-level-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">System Analytics</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <OverviewChart />
                <BatteryLevelChart />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Efficiency Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-green-500">94%</div>
                        <p className="text-xs text-muted-foreground mt-2">Based on theoretical max vs actual output</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Uptime</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-blue-500">99.8%</div>
                        <p className="text-xs text-muted-foreground mt-2">Last 30 days</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>CO2 Saved</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-yellow-500">1.2T</div>
                        <p className="text-xs text-muted-foreground mt-2">Total project lifetime</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
