import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "./YİĞİT TUNA ÖZDEN CV 2025 AUG.pdf"

function PdfConfig() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const zoomIn = () => setScale(prev => prev + 0.2);
    const zoomOut = () => setScale(prev => (prev > 0.4 ? prev - 0.2 : prev));
    const resetZoom = () => setScale(1.0);

    return (
        <div className="pdf__container">
            <div className="zoom-controls">
                <button className="zoom-btn" onClick={zoomOut}>-</button>
                <span className="zoom-value">{Math.round(scale * 100)}%</span>
                <button className="zoom-btn" onClick={zoomIn}>+</button>
                <button className="zoom-btn" onClick={resetZoom}>⟳</button>
            </div>
            <div className="resume__pdf">
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} scale={scale}/>
                </Document>
            </div>
        </div>
    );
}

export default PdfConfig;