import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <DashboardSidebar />
            <div className="flex flex-1 flex-col">
                <DashboardHeader />
                <main className="flex-1 p-4 md:p-6 bg-muted/20">
                    {children}
                </main>
            </div>
        </div>
    )
}
