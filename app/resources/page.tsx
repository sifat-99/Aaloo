
import fs from "fs"
import path from "path"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { PdfViewerWrapper } from "@/components/pdf-viewer-wrapper"

export default function ResourcesPage() {
    const resourcesDir = path.join(process.cwd(), "public", "resources")
    let files: string[] = []

    try {
        files = fs.readdirSync(resourcesDir).filter(file => file === "Team Aaloo -COMPUTING, AI & DIGITAL INNOVATION -Bangladesh - The Smart Solar Lamp.pdf")
    } catch (err) {
        console.error("Error reading resources directory:", err)
    }

    return (
        <div className="container py-10 px-4 mx-auto">
            <div className="mb-8 space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Research & Resources</h1>
                <p className="text-muted-foreground">
                    Explore the technical details and research behind our Smart Solar Lamp technology.
                </p>
            </div>

            <div className="w-full h-[85vh] mx-auto">
                {files.map((file) => (
                    <Card key={file} className="flex flex-col w-full">
                        <CardHeader>
                            <FileText className="h-10 w-10 mb-2 text-primary" />
                            <CardTitle className="text-2xl" title={file}>
                                {file.replace(".pdf", "").replace(/-/g, " ")}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 p-4 sm:p-6">
                            <p className="text-base text-muted-foreground mb-6">
                                Detailed project presentation covering our AI-driven solar lamp technology, implementation plan, and impact analysis for sustainable aquaculture in Bangladesh.
                            </p>
                            <div className="w-full h-[85vh] rounded-md border bg-muted/50 overflow-hidden">
                                <PdfViewerWrapper file={`/resources/${file}`} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/resources/${file}`} target="_blank" prefetch={false}>
                                    <Download className="mr-2 h-4 w-4" /> Download
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                {files.length === 0 && (
                    <p className="text-muted-foreground">No resources found.</p>
                )}
            </div>
        </div>
    )
}
