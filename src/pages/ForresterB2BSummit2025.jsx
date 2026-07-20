import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import PastEventComponent from '../components/PastEventComponent'
import BreadcrumbPastEvent from '../components/BreadcrumbPastEvent'
import ForresterSection from '../components/ForresterSection'

export default function ForresterB2BSummit2025() {
  return (
    <div>
      <Helmet>
          <title>Forrester B2B Summit 2025: Demand Generation & GTM Insights.</title>
          <meta name="description" content="ProPlus Data at Forrester B2B Summit and Gartner events 2025: Explore our innovations, thought leadership, and key takeaways from top industry stages."/>
          <meta name="keywords" content="ProPlus Data, Forrester B2B Summit 2025, B2B Marketing, Data Intelligence, Customer Insights, Marketing Technology, Sales Optimization, GTM Strategies, Business Impact, Personalization, Denver Summit, Intelligent Data Solutions"/>
          <link rel="canonical" href="https://proplusdata.co/forrester-b2b-summit-2025"/>
          <meta property="og:url" content="https://proplusdata.co/forrester-b2b-summit-2025" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Forrester B2B Summit 2025: Demand Generation & GTM Insights." />
          <meta property="og:description"
                content="ProPlus Data proudly sponsored the Forrester B2B Summit 2025 in Denver. Discover how we’re driving smarter decisions with data intelligence and engaging global leaders." />
      </Helmet>
      <Header1/>
      <BreadcrumbPastEvent/>
      <PastEventComponent/>
      <ForresterSection/>
      <Footer/>
    </div>
  )
}
