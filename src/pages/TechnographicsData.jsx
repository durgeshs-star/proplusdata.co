import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import TechnographicRevenuePage from '../components/TechnographicRevenuePage'
import '../components/TechnographicRevenuePage.css'
import '../components/solutions/SolutionSystem.css'

export default function TechnographicsData() {
  return (
    <div className="ppd-solutions-page">
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

        
                              <title>Technographic Intelligence for Revenue Growth | ProPlus Data</title>
                            <meta name="description" content="See the technology stacks your target accounts use, track how they change, and turn technographic signals into focused B2B revenue opportunities."/>
                           <meta name="keywords" content=" What is technographics data, technographics, technographic data, use cases, technology stack data, b2b technographics, technographic insights, account-based marketing data, tech intent data, technology usage data, GTM, ABM, GTM|ABM, cross-sell & upsell, technographics for business growth, competitor"/>
                            <link rel="canonical" href="https://proplusdata.co/technographics"/>
                        
                           <meta property="og:url" content="https://proplusdata.co/technographics" />
                           <meta property="og:type" content="website" />
                           <meta property="og:title" content="Technographic Intelligence for Revenue Growth | ProPlus Data" />
                           <meta property="og:description"
                               content="See the technology stacks your target accounts use, track how they change, and turn technographic signals into focused B2B revenue opportunities." />
                  </Helmet>
      <Header1/>
      <main className="ppd-solution">
        <TechnographicRevenuePage/>
      </main>
      <Footer/>
      <div className="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i className="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
