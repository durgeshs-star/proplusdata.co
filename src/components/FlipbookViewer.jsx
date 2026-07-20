// components/FlipbookViewer.js
import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipbookViewer = () => {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    "/assets/images/playbook/2.png",
    "/assets/images/playbook/3.png",
    "/assets/images/playbook/4.png",
    "/assets/images/playbook/5.png",
    "/assets/images/playbook/6.png",
    "/assets/images/playbook/7.png",
    "/assets/images/playbook/8.png",
    "/assets/images/playbook/9.png",
    "/assets/images/playbook/10.png",
    "/assets/images/playbook/11.png",
    "/assets/images/playbook/12.png",
    "/assets/images/playbook/13.png",
    
   
  ];

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  const goToPage = (pageIndex) => {
    flipBookRef.current.pageFlip().flip(pageIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        {/* Flipbook */}
        <HTMLFlipBook
          width={600}
          height={900}
          size="fixed"
          minWidth={600}
          maxWidth={600}
          minHeight={400}
          maxHeight={400}
          showCover={true}
          mobileScrollSupport={true}
          maxShadowOpacity={0.2}
          onFlip={handlePageChange}
          ref={flipBookRef}
          className="rounded-md shadow-lg"
        >
          {pages.map((src, index) => (
            <div
              key={index}
              className="page bg-white flex justify-center items-center p-2"
            >
              <img
                src={src}
                alt={`Page ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Prev Button */}
        <button
          onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 hover:bg-gray-200 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={() => flipBookRef.current?.pageFlip().flipNext()}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-white border border-gray-400 hover:bg-gray-200 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ▶
        </button>
      </div>

      {/* Horizontal Scrollbar / Page Progress */}
      <div className="mt-6 w-full max-w-[600px] px-4">
        <input
          type="range"
          min={0}
          max={pages.length - 1}
          value={currentPage}
          onChange={(e) => goToPage(parseInt(e.target.value, 10))}
          className="w-full"
        />
        <div className="text-sm text-center mt-1 text-gray-600">
          Page {currentPage + 1} of {pages.length}
        </div>
      </div>
    </div>
  );
};

export default FlipbookViewer;
