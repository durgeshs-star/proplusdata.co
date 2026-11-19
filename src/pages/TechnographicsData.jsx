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
