import React from "react";
import HTMLFlipBook from "react-pageflip";

const PlaybookFlipbook = () => {
  // List of playbook page images stored in public/playbook/
  const pages = [
   "assets/images/playbook/page1.jpg",
    "assets/images/playbook/page2.jpg",
    "assets/images/playbook/page3.jpg",
    "assets/images/playbook/page4.jpg",
    "assets/images/playbook/page5.jpg",
    "assets/images/playbook/page6.jpg",
    "assets/images/playbook/page7.jpg",
    "assets/images/playbook/page8.jpg",
    "assets/images/playbook/page9.jpg",
    "assets/images/playbook/page10.jpg",
    "assets/images/playbook/page11.jpg",
    "assets/images/playbook/page12.jpg",
    "assets/images/playbook/page13.jpg",
    "assets/images/playbook/page14.jpg",
  ];

  return (
  <div className="flex justify-center items-start py-10 bg-[#f8f9fa]">
      <div className="border border-gray-300 shadow-md rounded-lg p-2">
        <HTMLFlipBook
           width={600}  // <-- 200px per page (adjust as needed)
  height={860}
  size="fixed"
  minWidth={400}
  maxWidth={400}
  minHeight={600}
  maxHeight={600}
  showCover={true}
  mobileScrollSupport={true}
  maxShadowOpacity={0.2}
  className="rounded-md"
        >
          {pages.map((src, index) => (
            <div
              key={index}
              className="page bg-white flex justify-center items-center p-1 ml-200"
            >
              <img
                src={src}
                alt={`Page ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default PlaybookFlipbook;
