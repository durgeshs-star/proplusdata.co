import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import NtpComponent from '../components/NtpComponent'
import NtpFeatures from '../components/NtpFeatures'
import NtpBenefits from '../components/NtpBenefits'
import CtaNtp from '../components/CtaNtp'
// import SolutionBreadcrumb from '../components/solutions/SolutionBreadcrumb'
import '../components/solutions/SolutionSystem.css'


export default function NextTechPurchase() {
  return (
    <div className="ppd-solutions-page">
       <Helmet>
       {typeof window !== 'undefined' && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Next Tech Purchase Signals",
        "description": "Identify high-intent B2B accounts ready for their next technology investment. ProPlus Data helps you time your outreach based on buying signals.",
        "provider": {
          "@type": "Organization",
          "name": "ProPlus Data",
          "url": "https://proplusdata.co",
          "logo": "https://proplusdata.co/logo.png"
        },
        "url": "https://proplusdata.co/next-tech-purchase",
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        },
        "serviceType": "B2B Intent Signals"
      })
    }}
  />
)}


                                    <title>Next Tech Purchase® | ProPlus Data's Predictive Buying Insights </title>
                                  <meta name="description" content="Anticipate client tech shifts with Next Tech Purchase® by ProPlus Data. Leverage predictive intelligence to align GTM strategies and drive growth with foresight."/>
                                 <meta name="keywords" content="technographics data, ProPlus Data, tech stack insights, ABM targeting, GTM strategy, B2B intelligence, technology adoption data, account segmentation, sales enablement, data-driven marketing"/>
                                  <link rel="canonical" href="https://proplusdata.co/next-tech-purchase"/> 
                                 <meta property="og:url" content="https://proplusdata.co/next-tech-purchase" />
                                 <meta property="og:type" content="website" />
                                 <meta property="og:title" content="Next Tech Purchase® | ProPlus Data's Predictive Buying Insights " />
                                 <meta property="og:description"
                                     content="Anticipate client tech shifts with Next Tech Purchase® by ProPlus Data. Leverage predictive intelligence to align GTM strategies and drive growth with foresight." />
        </Helmet>
      <Header1/>
        <main className="ppd-solution ppd-solution--next-tech-purchase">
          {/* <SolutionBreadcrumb label={<>Next Tech Purchase<sup>&reg;</sup></>} parentHref="/next-tech-purchase" /> */}
          <NtpComponent/>
          <NtpFeatures/>
          <NtpBenefits/>
          <CtaNtp/>
        </main>
        <Footer/>
        <div className="btnwhatsapp-sm">
          <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i className="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
