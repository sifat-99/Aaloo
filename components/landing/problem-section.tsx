import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BatteryWarning, Zap, DollarSign } from "lucide-react"

export function ProblemSection() {
    return (
        <section id="problem" className="container space-y-6 bg-gradient-to-b from-slate-50 to-blue-50/50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto rounded-3xl my-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold text-primary">
                    The Challenge
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Traditional fish farming faces significant hurdles in energy consumption and operational efficiency.
                </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                <Card className="border-secondary/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                        <Zap className="h-12 w-12 mb-2 text-secondary fill-secondary/20" />
                        <CardTitle>High Energy Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Conventional lighting systems consume excessive electricity, driving up operational expenses for farmers.
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="border-destructive/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                        <BatteryWarning className="h-12 w-12 mb-2 text-destructive fill-destructive/20" />
                        <CardTitle>Manual Operation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Lack of automation requires manual intervention, leading to inefficiencies and inconsistent lighting.
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="border-primary/20 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <CardHeader>
                        <DollarSign className="h-12 w-12 mb-2 text-primary fill-primary/20" />
                        <CardTitle>Maintenance Costs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Frequent replacements and maintenance of traditional bulbs add to the financial burden.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
