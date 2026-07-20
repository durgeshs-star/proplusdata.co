import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumWinterDataSummit from '../components/BreadcrumbWinterDataSummit'
import WinterEventComponent from '../components/WinterEventComponent'
import WinterEventSection from '../components/WinterEventSection'
import { Helmet } from 'react-helmet-async';

export default function NewYorkWinterDataSummit2025() {
  return (
    <div>
      <Helmet>
        <title>New York Winter Data Summit 2025 | Neudata | ProPlus Data</title>
        <meta name="description" content="Join us at the New York Winter Data Summit to explore the latest trends in  AI, data analytics, & business intelligence trends shaping smarter business growth."/>
        <meta name="keywords" content="New York Winter Data Summit, Data Analytics, AI, Business Intelligence, ProPlus Data, Data Trends, Industry Leaders, Innovative Solutions, Business Growth"/>
        <link rel="canonical" href="https://proplusdata.co/new-york-winter-data-summit-2025"/>
        <meta property="og:url" content="https://proplusdata.co/new-york-winter-data-summit-2025" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="New York Winter Data Summit 2025 | Neudata | ProPlus Data" />
        <meta property="og:description" content="Join us at the New York Winter Data Summit to explore the latest trends in  AI, data analytics, & business intelligence trends shaping smarter business growth." />
      </Helmet> 
      <Header1/>
      <BreadcrumWinterDataSummit/>
      <WinterEventComponent/>
      <WinterEventSection/>
      <Footer/>
    </div>
  )
}
