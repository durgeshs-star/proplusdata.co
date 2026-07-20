import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipbookViewers = () => {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const pages = [
    "/assets/images/playbook/001.jpg",
    "/assets/images/playbook/002.jpg",
    "/assets/images/playbook/003.jpg",
    "/assets/images/playbook/004.jpg",
    "/assets/images/playbook/005.jpg",
    "/assets/images/playbook/006.jpg",
    "/assets/images/playbook/007.jpg",
    "/assets/images/playbook/008.jpg",
    "/assets/images/playbook/009.jpg",
    "/assets/images/playbook/010.jpg",
    "/assets/images/playbook/011.jpg",
    "/assets/images/playbook/012.jpg",
  ];

  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  const goToPage = (pageIndex) => {
    flipBookRef.current?.pageFlip().flip(pageIndex);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1e1e1e] p-4">
      {/* Zoom Controls */}
      <div className="flex gap-4 mb-4">
        <button onClick={zoomOut} className="px-4 py-2 bg-white rounded shadow">
          Zoom Out
        </button>
        <button onClick={zoomIn} className="px-4 py-2 bg-white rounded shadow">
          Zoom In
        </button>
      </div>

    <div className="flex items-center justify-center gap-4 w-full overflow-x-auto">
  {/* Prev Button */}
  <button
    onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
    className="bg-white border border-gray-300 hover:bg-gray-200 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg shrink-0"
  >
    ◀
  </button>

  {/* Flipbook Container */}
  <div
    style={{
      transform: `scale(${zoom})`,
      transformOrigin: "center",
      transition: "transform 0.2s ease-in-out",
    }}
    className="shrink-0"
  >
    <HTMLFlipBook
      width={350}
      height={496}
      size="stretch"
      minWidth={300}
      maxWidth={350}
      minHeight={400}
      maxHeight={496}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      onFlip={handlePageChange}
      ref={flipBookRef}
      className="rounded-md shadow-lg"
      drawShadow={true}
      useMouseEvents={true}
    >
      {pages.map((src, index) => (
        <div
          key={index}
          className="page flex justify-center items-center p-0 bg-transparent"
        >
          <img
            src={src}
            alt={`Page ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </HTMLFlipBook>
  </div>

  {/* Next Button */}
  <button
    onClick={() => flipBookRef.current?.pageFlip().flipNext()}
    className="bg-white border border-gray-300 hover:bg-gray-200 text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-lg shrink-0"
  >
    ▶
  </button>
</div>
    {/* Page Slider */}
      <div className="mt-6 w-full max-w-[600px] px-4">
        <input
          type="range"
          min={0}
          max={pages.length - 1}
          value={currentPage}
          onChange={(e) => goToPage(parseInt(e.target.value))}
          className="w-full accent-pink-500"
        />
        <div className="text-sm text-center mt-2 text-white">
          Page {currentPage + 1} of {pages.length}
        </div>
      </div>
    </div>
  );
};

export default FlipbookViewers;
