
export function TeamSection() {
    const teamMembers = [
        {
            name: "MD SIRAJUL ISLAM",
            image: "/resources/team images/Siraj.png",
        },
        {
            name: "Fazla Rabbi",
            image: "/resources/team images/Fazla.png",
        },
        {
            name: "Md Sajidul Islam Samin",
            image: "/resources/team images/Sajid.png",
        },
        {
            name: "Md Abdur Rahman Sifat",
            image: "/resources/team images/Sifat.png",
        },
    ]
    return (
        <section id="team" className="container py-8 md:py-12 lg:py-24 mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold text-primary">
                    Meet The Team
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    The passionate minds behind the Aaloo revolution.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                {teamMembers.map((member, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-4">
                        <div className="h-32 w-32 rounded-full overflow-hidden bg-muted">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl">{member.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
