import { UnitCard } from "@/components/dashboard/unit-card"

const units = [
    { id: "1", name: "Unit A - North Pond", location: "Sector 1", batteryLevel: 85, isOnline: true, initialBrightness: 80, initialIsOn: true },
    { id: "2", name: "Unit B - South Pond", location: "Sector 1", batteryLevel: 45, isOnline: true, initialBrightness: 60, initialIsOn: true },
    { id: "3", name: "Unit C - Hatchery", location: "Sector 2", batteryLevel: 92, isOnline: true, initialBrightness: 100, initialIsOn: true },
    { id: "4", name: "Unit D - Storage", location: "Sector 2", batteryLevel: 15, isOnline: true, initialBrightness: 40, initialIsOn: false },
    { id: "5", name: "Unit E - Perimeter", location: "Sector 3", batteryLevel: 0, isOnline: false, initialBrightness: 0, initialIsOn: false },
    { id: "6", name: "Unit F - Guest House", location: "Sector 3", batteryLevel: 78, isOnline: true, initialBrightness: 50, initialIsOn: true },
]

export default function UnitsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Unit Controls</h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {units.map((unit) => (
                    <UnitCard key={unit.id} {...unit} />
                ))}
            </div>
        </div>
    )
}
