import React, { useEffect } from "react";

const AbmPlaybookPageComponent = () => {

  useEffect(() => {
    document.body.classList.add("no-padding");

    return () => {
      document.body.classList.remove("no-padding");
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000"
      }}
    >
      <iframe
        src="https://7772074d.flowpaper.com/ThePrecisionABMPlaybookbyProPlusData/#zoom=page-fit"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="ABM Playbook"
      ></iframe>
    </div>
  );
};

export default AbmPlaybookPageComponent;