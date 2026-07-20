import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbIntent from '../components/BreadcrumbIntent'
import IntentComponent from '../components/IntentComponent'
import DecodePropensity from '../components/DecodePropensity'
import IntentDelivers from '../components/IntentDelivers'
import DataEnables from '../components/DataEnables'
import CtaIntent from '../components/CtaIntent'


export default function IntentData() {
  return (
    <div>
       <Helmet>
        {typeof window !== 'undefined' && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is intent data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Intent data identifies companies showing interest in specific solutions by analyzing their online behavior and content consumption."
            }
          },
          {
            "@type": "Question",
            "name": "How can intent data boost lead generation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It lets you prioritize high-intent accounts that are actively researching topics relevant to your product or service."
            }
          }
        ]
      })
    }}
  />
)}

                <title>Intent Data for B2B Growth & Leads | ProPlus Data Solutions!</title>
                <meta name="description" content="Get intent data for B2B SaaS in the US, intent-based tools in Japan, and buyer intent insights for Indian companies to boost your sales pipeline."/>
                <meta name="keywords" content="intent data providers, B2B intent data platform, best B2B intent data providers for enterprise sales, how to use buyer intent data for lead generation,intent-based marketing tools in Japan, intent intelligence for sales "/>
                <link rel="canonical" href="https://proplusdata.co/intent-data"/>                           
                <meta property="og:url" content="https://proplusdata.co/intent-data" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Intent Data for B2B Growth & Leads | ProPlus Data Solutions! " />
                <meta property="og:description"
                    content="Use B2B intent data to uncover which companies are actively researching solutions like yours. ProPlus Data helps you engage high-intent leads before competitors do." />
      </Helmet>
      <Header1/>
      <BreadcrumbIntent/>
      <IntentComponent/>
      <DecodePropensity/>
      <IntentDelivers/>
      <DataEnables/>
      <CtaIntent/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
