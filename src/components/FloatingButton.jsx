import React, { useState } from "react";


const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fab-left"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="fab-text">Marketplaces</span>
      <div className={`icon-list-left ${open ? "show" : ""}`}>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732084.png" alt="Amazon" />
        </a>
        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" alt="Flipkart" />
        </a>
        <a href="https://www.ebay.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="eBay" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButton;
