'use client'

import ProfileCard from '@/components/elements/ProfileCard'
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';


// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.min.mjs`;

pdfjs.GlobalWorkerOptions.workerSrc = `/files/cdnjs/pdf.worker.min.mjs`;

const resumeLink =
    "files/FrontEndDev_CV.pdf";

const Resume = () => {


    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    const breakpoint = useBreakpoint()

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
                        <div className="card content-box-card p-4">
                            <div className='row my-3' style={{ justifyContent: "center", position: "relative" }}>
                                <a className='btn btn-dark'
                                    style={{
                                        width: "150px"
                                    }}
                                    href={resumeLink}
                                    target="_blank"
                                >
                                    &nbsp;Download CV
                                </a>
                            </div>
                            <Document
                                onLoadSuccess={onDocumentLoadSuccess}
                                file={resumeLink}

                                className="d-flex justify-content-center">
                                <Page
                                    width={breakpoint === 'mobile' ? 350 :
                                        breakpoint == 'tablet' ? 650 : 750
                                    }
                                    pageNumber={pageNumber} renderTextLayer={false} />
                            </Document>
                            {
                                numPages &&
                                <div className='d-flex justify-content-center align-items-center'>
                                    <svg
                                        onClick={() => {
                                            if (pageNumber <= 1) return
                                            setPageNumber((prev) => prev <= 1 ? prev - 1 : 1)
                                        }}
                                        style={{
                                            width: "16px",
                                            marginRight: "5px",
                                            cursor: "pointer"
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                    <span>
                                        {pageNumber} of {numPages}
                                    </span>
                                    <svg
                                        onClick={() => {
                                            if (pageNumber >= numPages) return
                                            setPageNumber((prev) => prev + 1)
                                        }}
                                        style={{
                                            width: "16px",
                                            marginLeft: "5px",
                                            cursor: "pointer"
                                        }}
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>

                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume