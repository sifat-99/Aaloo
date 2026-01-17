import { StatCard } from "@/components/dashboard/stat-card"
import { OverviewChart } from "@/components/dashboard/overview-chart"
import { BatteryLevelChart } from "@/components/dashboard/battery-level-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Activity, Battery, Sun, Zap } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Active Units"
                    value="156"
                    icon={<Zap className="h-4 w-4 text-yellow-500" />}
                    description="+12 from last month"
                />
                <StatCard
                    title="Total Energy Generated"
                    value="2.4 MWh"
                    icon={<Sun className="h-4 w-4 text-orange-500" />}
                    description="+18% from last month"
                />
                <StatCard
                    title="CO2 Offset"
                    value="1.2 Tons"
                    icon={<Activity className="h-4 w-4 text-green-500" />}
                    description="Eq. to 120 trees planted"
                />
                <StatCard
                    title="Active Alerts"
                    value="3"
                    icon={<Battery className="h-4 w-4 text-red-500" />}
                    description="2 Low Battery, 1 Offline"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <OverviewChart className="col-span-4" />
                <BatteryLevelChart className="col-span-3" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RecentActivity className="col-span-7" />
            </div>
        </div>
    )
}
