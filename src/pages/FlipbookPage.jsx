import React, { useState, useRef } from "react";
import { Document, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FlipbookPage = () => {
  // const [numPages, setNumPages] = useState(null);
  const [pagesLoaded, setPagesLoaded] = useState(false);
  const [pageImages, setPageImages] = useState([]);
  const flipBookRef = useRef(null);

  // Called when PDF is loaded
  const onDocumentLoadSuccess = async (pdf) => {
    // setNumPages(pdf.numPages);

    // Render each page to canvas and save as image URL
    const tempImages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;

      // Convert canvas to image URL
      tempImages.push(canvas.toDataURL());
    }
    setPageImages(tempImages);
    setPagesLoaded(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {!pagesLoaded && (
        <Document
          file="/assets/images/playbook/The-Enterprise-GTM-Playbook-Powered-By-Data.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="text-white">Loading PDF...</div>}
        />
      )}

      {pagesLoaded && (
        <HTMLFlipBook
          width={350}
          height={496}
          ref={flipBookRef}
          showCover={true}
          className="book-shadow rounded-md"
        >
          {pageImages.map((src, idx) => (
            <div key={idx} className="page flex justify-center items-center bg-white">
              <img src={src} alt={`Page ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
};

export default FlipbookPage;
