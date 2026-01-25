import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { TeamSection } from "@/components/landing/team-section";
import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <ImpactSection />
            <GallerySection />
            <TeamSection />
            <AboutSection />
            <ContactSection />
        </div>
    );
}
