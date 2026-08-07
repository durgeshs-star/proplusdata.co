// import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Header1 from '../components/Header1';
import Hero1 from '../components/Hero1';
import Footer from '../components/Footer';
import Flipbox from '../components/Flipbox';
import Cta from '../components/Cta';
import AboutSection from '../components/AboutSection';
import SolutionSection from '../components/SolutionSection';
import OurProcess from '../components/OurProcess';
import ProspectIntelligence from '../components/ProspectIntelligence';
import ProspectFlipbox from '../components/ProspectFlipbox';
import BrandSection from '../components/BrandSection';
import ClientComponent from '../components/ClientComponent';

export default function Home() {

  // const [collapsed, setCollapsed] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCollapsed(true);
  //   }, 30000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>

      <Helmet>
        <title>ProPlus Data | B2B Data Solutions | Intent & Buying Signals</title>

        <meta
          name="description"
          content="Identify in-market and renewal accounts using verified B2B contacts, intent data, and technographics to help sales and marketing teams drive smarter outreach."
        />

        <meta
          name="keywords"
          content="Intent data, technographics, Next Tech Purchase®, predictive analytics, GTM strategy, B2B data intelligence, ABM targeting, data-driven marketing, sales enablement, global B2B solutions"
        />

        <link rel="canonical" href="https://proplusdata.co/" />

      </Helmet>

      <Header1 />

      <Hero1 />

      <Flipbox />

      <ClientComponent />

      <Cta />

      <AboutSection />

      <ProspectIntelligence />

      <ProspectFlipbox />

      <SolutionSection />

      <OurProcess />

      <BrandSection />

      <Footer />

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