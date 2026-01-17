"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

const PdfViewer = dynamic(() => import("@/components/pdf-viewer").then((mod) => mod.PdfViewer), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-full w-full bg-muted/30 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
            <span>Loading Viewer...</span>
        </div>
    ),
})

interface PdfViewerWrapperProps {
    file: string
}

export function PdfViewerWrapper({ file }: PdfViewerWrapperProps) {
    return <PdfViewer file={file} />
}
