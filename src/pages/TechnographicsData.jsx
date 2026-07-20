import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import TechnoComponent from '../components/TechnoComponent'
import WhyTechno from '../components/WhyTechno'
import TechnoPoints from '../components/TechnoPoints'
import TechnographicsUse from '../components/TechnographicsUse'
import CtaTechnographics from '../components/CtaTechnographics'

export default function TechnographicsData() {
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
            "name": "What is technographic data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Technographic data reveals the technology stack companies use, helping marketers target accounts based on their tech usage."
            }
          },
          {
            "@type": "Question",
            "name": "How does technographic data help B2B marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It enables precise targeting and personalization by identifying prospects based on the software and platforms they already use."
            }
          }
        ]
      })
    }}
  />
)}

        
                              <title>Technographics or Technographic Data for Business Growth </title>
                            <meta name="description" content="Technographics, or technographic data, reveal the technologies your prospects are currently using, along with the dates those technologies were detected."/>
                           <meta name="keywords" content=" What is technographics data, technographics, technographic data, use cases, technology stack data, b2b technographics, technographic insights, account-based marketing data, tech intent data, technology usage data, GTM, ABM, GTM|ABM, cross-sell & upsell, technographics for business growth, competitor"/>
                            <link rel="canonical" href="https://proplusdata.co/technographics"/>
                        
                           <meta property="og:url" content="https://proplusdata.co/technographics" />
                           <meta property="og:type" content="website" />
                           <meta property="og:title" content="Technographics or Technographic Data for Business Growth" />
                           <meta property="og:description"
                               content="Discover how ProPlus Data’s technographics help you identify in-market prospects, segment audiences, and boost ABM success. Uncover your buyers' tech stack today." />
                  </Helmet>
      <Header1/>
      <Breadcrumb/>
      <TechnoComponent/>
      <WhyTechno/>
      <TechnoPoints/>
      <TechnographicsUse/>
      <CtaTechnographics/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
