import { Hero } from "@/components/landing/hero";
import { ProblemSection } from "@/components/landing/problem-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { GallerySection } from "@/components/landing/gallery-section";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <GallerySection />
        </div>
    );
}
