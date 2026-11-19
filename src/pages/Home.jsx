// import React, { useState, useEffect } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header1 from '../components/Header1';
import Hero1 from '../components/Hero1';
import Footer from '../components/Footer';
import Flipbox from '../components/Flipbox';
import AboutSection from '../components/AboutSection';
import SolutionSection from '../components/SolutionSection';
import OurProcess from '../components/OurProcess';
import BrandSection from '../components/BrandSection';
import WhyProPlusData from '../components/WhyProPlusData';
import NexoraShowcase from '../components/NexoraShowcase';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('proplus-home-page');
    return () => document.body.classList.remove('proplus-home-page');
  }, []);

  // const [collapsed, setCollapsed] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCollapsed(true);
  //   }, 30000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="proplus-home">

      <Helmet>
        <title>B2B Data Intelligence &amp; GTM Solutions | ProPlus Data</title>

        <meta
          name="description"
          content="Accelerate B2B growth with ProPlus Data's technographics, intent, contact, and renewal intelligence. Identify high-value accounts and buying opportunities."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://proplusdata.co/#organization",
                name: "ProPlus Data",
                url: "https://proplusdata.co/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://proplusdata.co/assets/images/logo.png",
                },
                email: "info@proplusdata.co",
                telephone: "+919112110691",
                sameAs: ["https://www.linkedin.com/company/proplus-data/"],
              },
              {
                "@type": "WebSite",
                "@id": "https://proplusdata.co/#website",
                url: "https://proplusdata.co/",
                name: "ProPlus Data",
                publisher: { "@id": "https://proplusdata.co/#organization" },
                inLanguage: "en",
              },
            ],
          })}
        </script>

        <meta
          name="keywords"
          content="Intent data, technographics, Next Tech Purchase®, predictive analytics, GTM strategy, B2B data intelligence, ABM targeting, data-driven marketing, sales enablement, global B2B solutions"
        />

        <link rel="canonical" href="https://proplusdata.co/" />

      </Helmet>

      <Header1 />

      <Hero1 />

      <Flipbox />

      <NexoraShowcase />

      <WhyProPlusData />

      <AboutSection />

      <SolutionSection />

      <OurProcess />

      <BrandSection />

      <Footer homepage />

      {/* Playbook Button */}

      {/* <div className="btnplaybook-sm">
        <a
          href="https://7772074d.flowpaper.com/ThePrecisionABMPlaybookbyProPlusData/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/images/abm-playbook.svg"
            alt="Playbook"
            className="playbook-icon"
          />
        </a>
      </div> */}

      {/* WhatsApp Button */}

      <div className="btnwhatsapp-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/+919112110691"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>

      {/* GTM Tool Button */}

     {/* <div
  className={`gtm-tool-btn ${collapsed ? "collapsed" : ""}`}
  onMouseEnter={() => setCollapsed(false)}
>
  <a href="/see-your-gtm-truth-in-60-sec">
    <i className="fa fa-line-chart"></i>
    <span>GTM Assessment Tool</span>
  </a>
</div> */}

    </div>
  );
}
