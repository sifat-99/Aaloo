
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export function GallerySection() {
    const items = [
        {
            image: "/solar_lamp_product_1768488870381.png",
            title: "The Smart Lamp",
            desc: "Compact, floating design with integrated solar panel and LED arrays."
        },
        {
            image: "/fish_farm_daylight_1768488923499.png",
            title: "Sustainable Ecosystem",
            desc: "Enhancing the natural environment without pollutants or external power."
        },
        {
            image: "/hero_solar_pond_1768488851114.png",
            title: "24/7 Automation",
            desc: "Intelligent monitoring and lighting control day and night."
        }
    ]

    return (
        <section id="gallery" className="py-24 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">See It In Action</h2>
                    <p className="text-muted-foreground text-lg max-w-[800px]">
                        From the lab to the lake, see how our technology fits perfectly into the aquaculture landscape.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Carousel className="w-full max-w-4xl">
                        <CarouselContent>
                            {items.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                                    <div className="p-1">
                                        <Card className="overflow-hidden border-0 shadow-lg">
                                            <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                                />
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 text-white">
                                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                                    <p className="text-sm opacity-90">{item.desc}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
