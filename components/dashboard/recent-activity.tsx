import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, RefreshCw } from "lucide-react"

const activity = [
    {
        type: "success",
        message: "Unit A fully charged",
        time: "2 mins ago",
        icon: CheckCircle2,
        color: "text-green-500",
    },
    {
        type: "warning",
        message: "Unit D battery low (20%)",
        time: "15 mins ago",
        icon: AlertCircle,
        color: "text-red-500",
    },
    {
        type: "info",
        message: "Firmware update scheduled for Unit B",
        time: "1 hour ago",
        icon: RefreshCw,
        color: "text-blue-500",
    },
    {
        type: "success",
        message: "Unit F reconnected",
        time: "2 hours ago",
        icon: CheckCircle2,
        color: "text-green-500",
    },
]

export function RecentActivity({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activity.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <item.icon className={`mr-4 h-4 w-4 ${item.color}`} />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">{item.message}</p>
                                <p className="text-sm text-muted-foreground">{item.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
