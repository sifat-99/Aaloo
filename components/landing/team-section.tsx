
export function TeamSection() {
    const teamMembers = [
        {
            name: "Fazla Rabbi",
            role: "Founder and CEO",
            image: "/resources/team images/Fazla.png",
        },
        {
            name: "Md Aslam Hossain",
            role: "Chief Marketing Officer (CMO)",
            image: "/resources/team images/Aslam.png",
        },
        {
            name: "Noman Khan",
            role: "Public Relations and Documents",
            image: "/resources/team images/Noman.png",
        },
        {
            name: "Md Alvi Reshad",
            role: "Market Analysis",
            image: "/resources/team images/Alvi.png",
        },
        {
      name: "MD SIRAJUL ISLAM",
             role: "Co-Founder",
             image: "/resources/team images/Siraj.png",
         },
         {
            name: "Md Abdur Rahman Sifat",
            role: "Research Analyst",
             image: "/resources/team images/Sifat.png",
         },
         {
            name: "Md Sajidul Islam Samin",
             role: "Creative analyst and Designer",
            image: "/resources/team images/Sajid.png",
        },
    ]

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
    }

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
                        <div className="h-32 w-32 rounded-full overflow-hidden bg-muted flex items-center justify-center border-2 border-slate-100 shadow-sm">
                            {member.image ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl font-bold text-slate-400">
                                    {getInitials(member.name)}
                                </span>
                            )}
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-bold text-xl">{member.name}</h3>
                            {member.role && (
                                <p className="text-sm font-medium text-primary/80 uppercase tracking-wide">
                                    {member.role}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
