import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Leaf, Target } from "lucide-react"

export function AboutSection() {
    return (
        <section id="about" className="container py-12 md:py-24 mx-auto space-y-12">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold text-primary">
                    About Team Aaloo
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Innovating at the intersection of aquaculture, renewable energy, and IoT.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Mission Card */}
                <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-primary/10 shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                            <Target className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            To empower aquaculture communities in Bangladesh and beyond with smart, solar-powered automation. We aim to reduce operational costs, increase fish yield, and eliminate the reliance on harmful chemicals in fish farming.
                        </p>
                    </CardContent>
                </Card>

                {/* Innovation Card */}
                <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-secondary/10 shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <div className="p-3 rounded-full bg-secondary/10 dark:bg-secondary/20">
                            <Lightbulb className="w-6 h-6 text-secondary" />
                        </div>
                        <CardTitle className="text-xl">The Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            The "Aaloo" Smart Solar Lamp is a self-sustaining ecosystem. By utilizing specific light spectrums to attract natural feed (insects) and IoT sensors for monitoring, we've created a solution that pays for itself in energy savings alone.
                        </p>
                    </CardContent>
                </Card>

                {/* Sustainability Card */}
                <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-green-500/10 shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <div className="p-3 rounded-full bg-green-100 dark:bg-green-500/20">
                            <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <CardTitle className="text-xl">Sustainability First</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Constructed from recycled PET bottles and powered entirely by the sun, our device reduces plastic waste and offsets over 1.2 tons of CO2 per farm annually. We believe technology should heal the planet, not harm it.
                        </p>
                    </CardContent>
                </Card>

                {/* Team Card */}
                <Card className="bg-white/50 dark:bg-card/40 backdrop-blur-md border-blue-500/10 shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-500/20">
                            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <CardTitle className="text-xl">Who We Are</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            We are a team of passionate engineers and problem-solvers from Bangladesh. With expertise in robotics, software, and agricultural science, we are dedicated to building scalable solutions for real-world problems.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
