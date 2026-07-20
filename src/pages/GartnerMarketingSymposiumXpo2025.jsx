import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbGartner from '../components/BreadcrumbGartner'
import GartnerComponent from '../components/GartnerComponent'
import GartnerSection from '../components/GartnerSection'

export default function GartnerMarketingSymposiumXpo2025() {
  return (
    <div>
      <Helmet>
                <title>ProPlus Data at Gartner Marketing Symposium XPO 2025.</title>
                <meta name="description" content="Explore how ProPlus Data showcased its B2B data intelligence and innovation at the Gartner Marketing Symposium XPO 2025. Discover event highlights and insights."/>
                <meta name="keywords" content="ProPlus Data, Forrester B2B Summit 2025, B2B Marketing, Data Intelligence, Customer Insights, Marketing Technology, Sales Optimization, GTM Strategies, Business Impact, Personalization, Denver Summit, Intelligent Data Solutions"/>
                <link rel="canonical" href="https://proplusdata.co/gartner-marketing-symposium-xpo-2025"/>
                <meta property="og:url" content="https://proplusdata.co/gartner-marketing-symposium-xpo-2025" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ProPlus Data at Gartner Marketing Symposium XPO 2025." />
                <meta property="og:description"
                      content="Explore how ProPlus Data showcased its B2B data intelligence and innovation at the Gartner Marketing Symposium XPO 2025. Discover event highlights and insights." />
            </Helmet>
      <Header1/>
      <BreadcrumbGartner/>
      <GartnerComponent/>
      <GartnerSection/>
      <Footer/>
    </div>
  )
}
