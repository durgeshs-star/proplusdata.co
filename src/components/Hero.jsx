import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel3";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Modal Video - YouTube */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NODz9CNBBpY" // Your YouTube video ID here
        onClose={() => setOpen(false)}
      />

      <OwlCarousel className="owl-carousel" items={1} loop autoplay>
        {/* First Video Slide */}
        <div className="slider_area" style={{ position: "relative" }}>
          <video autoPlay loop muted playsInline className="video-bg" key="hero-video">
            <source src="/assets/images/slider/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

      
          <div className="video-content">
            <h1><b>GTM - SOLUTIONS <br /></b></h1>
            <h2>NEXT TECH PURCHASE<sup>&reg;</sup> & INTENT</h2>
            <p>We are prospect intelligence and insights providers that unlock the potential of data through cutting edge solutions and proven frameworks. We don't just provide data; we deliver precision that empowers strategic decision-making.</p>
          </div>

          <div className="slider_button pt-5 d-flex justify-center">
            <div className="button aligns-item-center">
              <a href="#daas-solution" className="btn btn-outline-light me-3">KEY GTM SOLUTIONS</a>
            </div>
          </div>

          {/* Play button with zoom effect */}
          <div
            className="play-button"
            onClick={() => setOpen(true)}
            style={{
              position: "absolute",
              bottom: "30%",
              right: "0%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              zIndex: 10,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
              animation: "pulseZoom 2s infinite",
            }}
           
          >
            <i className="fa fa-play" style={{ fontSize: "22px", color: "#2f337a" }}></i>
          </div>
        </div>

      

      </OwlCarousel>

      {/* CSS animation for pulse zoom */}
      <style>{`
        @keyframes pulseZoom {
          0% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 0 25px rgba(255, 255, 255, 1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
