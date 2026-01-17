"use client"

import { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PdfViewerProps {
    file: string
}

export function PdfViewer({ file }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [scale, setScale] = useState<number>(1.0)
    const [containerWidth, setContainerWidth] = useState<number>(0)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
    }

    return (
        <div className="flex flex-col items-center w-full h-full bg-muted/30 rounded-lg border p-4">
            <div className="flex items-center justify-between w-full mb-4 px-2">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">
                        Page {pageNumber} of {numPages}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
                        disabled={pageNumber >= numPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.5))}
                    >
                        <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium w-12 text-center">
                        {Math.round(scale * 100)}%
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setScale((prev) => Math.min(prev + 0.1, 2.0))}
                    >
                        <ZoomIn className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div
                className="flex-1 w-full overflow-auto flex justify-center border rounded-md bg-white shadow-sm scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-muted"
                ref={(el) => {
                    if (el) {
                        setContainerWidth(el.clientWidth)
                    }
                }}
            >
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="flex flex-col items-center"
                    loading={
                        <div className="flex items-center justify-center h-full min-h-[400px]">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </div>
                    }
                    error={
                        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-destructive">
                            <p>Failed to load PDF.</p>
                            <p className="text-sm text-muted-foreground mt-2">Please try downloading instead.</p>
                        </div>
                    }
                >
                    <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        width={containerWidth ? Math.min(containerWidth - 48, 800) : undefined}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                        className="shadow-md my-4"
                    />
                </Document>
            </div>
        </div>
    )
}
