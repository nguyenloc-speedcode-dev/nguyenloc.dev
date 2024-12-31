'use client'

import ProfileCard from '@/components/elements/ProfileCard'
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const resumeLink =
    "files/nguyenthanhloc_frontend.pdf";

const Resume = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <section className="content-box-area mt-4">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-8">
                        <div className="card content-box-card ">
                            <Document
                                onLoadSuccess={onDocumentLoadSuccess}
                                file={resumeLink}
                                className="d-flex justify-content-center">
                                <Page pageNumber={pageNumber} renderMode='canvas' renderTextLayer={false} />
                            </Document>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume