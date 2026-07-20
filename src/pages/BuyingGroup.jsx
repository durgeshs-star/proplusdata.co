import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbBuyerPersona from '../components/BreadcrumbBuyerPersona'
import BuyerComponent from '../components/BuyerComponent'
import BuyerPersonaMatter from '../components/BuyerPersonaMatter'
import KeyCapabilities from '../components/KeyCapabilities'
import StrategicAdvantage from '../components/StrategicAdvantage'
import CtaBuyerPersona from '../components/CtaBuyerPersona'

export default function BuyingGroup() {
  return (
    <div>
      <Helmet>
        {typeof window !== 'undefined' && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Buying Group",
        "description":
          "Leverage the power of collective purchasing decisions with ProPlus Data. Get insights into buying behaviors and preferences to enhance your B2B sales and marketing strategies.",
        "provider": {
          "@type": "Organization",
          "name": "ProPlus Data"
        }
      })
    }}
  />
)}


                            <title>Buying Group for Smarter B2B Targeting | ProPlus Data </title>
                            <meta name="description" content="Identify and engage the right buying group with ProPlus Data. Access demographic, firmographic and technographic data to improve B2B targeting and GTM growth."/>
                            <meta name="keywords" content=" Buying Group, B2B Data, Technographic Data, Buyer Intent, Account Insights, Decision-Maker Data, Intent Signals, B2B Lead Generation, Target Accounts, Predictive Analytics, Sales Intelligence, ProPlus Data, Go To Market, Competitor Analysis, 360-degree, Prospect Intelligence"/>
                            <link rel="canonical" href="https://proplusdata.co/buying-group"/>
                                                      
                            <meta property="og:url" content="https://proplusdata.co/buying-group" />
                            <meta property="og:type" content="website" />
                            <meta property="og:title" content="Buying Group for Smarter B2B Targeting | ProPlus Data " />
                            <meta property="og:description"
                                content="Identify and engage the right buying group with ProPlus Data. Access demographic, firmographic and technographic data to improve B2B targeting and GTM growth." />
      </Helmet>
      <Header1/>
      <BreadcrumbBuyerPersona/>
      <BuyerComponent/>
      <BuyerPersonaMatter/>
      <KeyCapabilities/>
      <StrategicAdvantage/>
      <CtaBuyerPersona/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
