import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "./YİĞİT_TUNA_ÖZDEN_CV_2024.pdf"

function PdfConfig() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
    );
}

export default PdfConfig;