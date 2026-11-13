import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import AboutComponent from '../components/AboutComponent'
import AboutTab from '../components/AboutTab'
import IdentifyConnect from '../components/IdentifyConnect'
import GlobalPresence from '../components/GlobalPresence'
import ProvenIndustries from '../components/ProvenIndustries'
import CtaAbout from '../components/CtaAbout'
import '../components/CompanyPages.css'


export default function AboutUs() {
  return (
    <div className="ppd-company-page ppd-company-page--about">
      <>
       <Helmet>
      <title>ProPlus Data | Precision Prospect Intelligence & B2B Insights</title>
    <meta name="description" content="ProPlus Data's precise insights for your smart GTM | ABM. Identify buyer intent, find high-propensity accounts, and promote meaningful interaction."/>
   <meta name="keywords" content="prospect intelligence, intent data, ABM data solutions, GTM strategy, Next Tech Purchase®, buying propensity, buyer personas, omnichannel campaigns, high propensity accounts, B2B data analytics"/>
    <link rel="canonical" href="https://proplusdata.co/about-us"/>

   <meta property="og:url" content="https://proplusdata.co/about-us" />
   <meta property="og:type" content="website" />
   <meta property="og:title" content="ProPlus Data | Precision Prospect Intelligence & B2B Insights" />
   <meta property="og:description"
       content="ProPlus Data's precise insights for your smart GTM | ABM. Identify buyer intent, find high-propensity accounts, and promote meaningful interaction." />
    </Helmet>
    </>
    <Header1/>
    {/* <BreadcrumbAbout/> */}
    <AboutComponent/>
    <AboutTab/>
    <IdentifyConnect/>
    <section className="ppd-about-industries-heading" aria-labelledby="ppd-about-industries-title">
      <span className="ppd-about-industries-heading__eyebrow"><i aria-hidden="true" /> OUR EXPERIENCE</span>
      <h2 id="ppd-about-industries-title">Proven Across <em>Industries</em></h2>
      <span className="ppd-about-industries-heading__rule" aria-hidden="true" />
    </section>
    <ProvenIndustries />
    <GlobalPresence/>
    <CtaAbout/>
    <Footer/>
    

    <div className="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
