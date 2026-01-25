export function AboutSection() {
    return (
        <section id="about" className="container py-8 md:py-12 lg:py-24 mx-auto bg-primary/5 rounded-3xl my-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-8 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold text-primary">
                    About Us
                </h2>
                <div className="mx-auto max-w-[800px] text-lg text-muted-foreground leading-relaxed">
                    <p className="mb-6">
                        At Team Aaloo, we believe in the power of technology to transform traditional industries.
                        Our journey began with a simple observation: fish farmers needed reliable, cost-effective,
                        and sustainable lighting solutions.
                    </p>
                    <p>
                        Our mission is to empower aquaculture communities with smart, solar-powered automation
                        that reduces costs and improves yield, all while protecting the environment.
                    </p>
                </div>
            </div>
        </section>
    )
}
