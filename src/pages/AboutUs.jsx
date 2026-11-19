import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1';
import Footer from '../components/Footer';
import AboutComponent from '../components/AboutComponent';
import AboutTab from '../components/AboutTab';
import IdentifyConnect from '../components/IdentifyConnect';
import GlobalPresence from '../components/GlobalPresence';
import ProvenIndustries from '../components/ProvenIndustries';
import CtaAbout from '../components/CtaAbout';
import AboutFaq, { aboutFaqs } from '../components/AboutFaq';
import '../components/CompanyPages.css';

export default function AboutUs() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <div className="ppd-company-page ppd-company-page--about">
      <Helmet>
        <title>About ProPlus Data | B2B Data, GTM &amp; Prospect Intelligence</title>
        <meta name="description" content="Learn how ProPlus Data helps businesses improve B2B prospecting and go-to-market strategy with contact, technographic, buyer intent, and account intelligence." />
        <meta name="keywords" content="B2B data providers, B2B data, B2B contact database, technographic data, buyer intent data, revenue operations, B2B pipeline generation, account-based marketing data, go-to-market strategy" />
        <link rel="canonical" href="https://proplusdata.co/about-us" />
        <meta property="og:url" content="https://proplusdata.co/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ProPlus Data" />
        <meta property="og:title" content="About ProPlus Data | B2B Data, GTM &amp; Prospect Intelligence" />
        <meta property="og:description" content="Learn how ProPlus Data helps businesses improve B2B prospecting and go-to-market strategy with contact, technographic, buyer intent, and account intelligence." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header1 />
      <AboutComponent />
      <AboutTab />
      <IdentifyConnect />
      <section className="ppd-about-industries-heading" aria-labelledby="ppd-about-industries-title">
        <span className="ppd-about-industries-heading__eyebrow"><i aria-hidden="true" /> OUR EXPERIENCE</span>
        <h2 id="ppd-about-industries-title">Proven Across <em>Industries</em></h2>
        <span className="ppd-about-industries-heading__rule" aria-hidden="true" />
      </section>
      <ProvenIndustries />
      <GlobalPresence />
      <AboutFaq />
      <CtaAbout />
      <Footer />
      <div className="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691" aria-label="Chat with ProPlus Data on WhatsApp"><i className="fa fa-whatsapp" /></a>
      </div>
    </div>
  );
}
