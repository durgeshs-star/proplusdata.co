 import React from "react";
 import OwlCarousel from "react-owl-carousel3";
import "react-modal-video/css/modal-video.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

 const Hero1 = () => {
  

  return (
    <>
     

       <OwlCarousel className="owl-carousel" items={1} loop autoplay> 
        {/* ---------- 1️⃣ First Slide (Video) ---------- */}
        <div className="slider_area" style={{ position: "relative" }}>
         
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-bg"
            key="hero-video"
          >
            <source
              src="/assets/images/slider/hero-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="video-content">
            <h1>
              <b>
                GTM - SOLUTIONS <br />
              </b>
            </h1>
            <h2>TECHNOGRAPHICS, RENEWAL INTELLIGENCE <br/> & NEXT TECH PURCHASE<sup>&reg;</sup>
            </h2><br/>
            <p>
              We are prospect intelligence and insights providers that unlock
              the potential of data through cutting edge solutions and proven
              frameworks. <br/>We don't just provide data; we deliver precision that
              empowers strategic decision-making.
            </p>
          </div>

          <div className="slider_button pt-5 d-flex justify-center">
            <div className="button aligns-item-center">
              <a href="#daas-solution" className="btn btn-outline-light me-3">
                KEY GTM SOLUTIONS
              </a>
            </div>
          </div>

   
        </div>

         {/* ---------- 1️⃣ Second Slide (Video) ---------- */}
         <div className="slider_area" style={{ position: "relative" }}>
         
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-bg"
            key="hero-video"
          >
            <source
              src="/assets/images/slider/hero-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="video-content nexora-banner">
            <img src="/assets/images/nexora-white-logo.svg" alt="Nexora Logo" className="nexora-logo" />
             <h2><b>The Timing Layer for </b><br/> <span className="fraunces-text">Predictable Revenue</span>
            </h2><br/> 
            <p>
              GTM AI platform, makes revenue predictable,revealing what’s next, the right stakeholders to engage, and exactly when to act.
            </p>
          </div>

           <div className="slider_button pt-5 d-flex justify-center">
            <div className="button aligns-item-center">
              <a href="https://nexora.proplusdata.co/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3">
                START FREE TRIAL
              </a>
            </div>
          </div> 

   
        </div>

             
       
       </OwlCarousel> 

      {/* Pulse Animation */}
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

export default Hero1;
