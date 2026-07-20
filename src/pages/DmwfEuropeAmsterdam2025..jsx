import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbDmwf from '../components/BreadcrumbDmwf'
import DmwfComponent from '../components/Dmwfcomponent'
import DmwfSection from '../components/DmwfSection'
import DmwfSection2 from '../components/DmwfSection2'
import { Helmet } from 'react-helmet-async'

export default function DmwfEuropeAmsterdam2025() {
  return (
    <div>
      <Helmet>
        <title>Data Management World Forum Europe Amsterdam 2025.</title>
        <meta name="description" content="Join ProPlus Data at the DMWF Europe in Amsterdam 2025 to explore the latest trends and innovations in data management, analytics, and business intelligence."/>
        <meta name="keywords" content="Data Management World Forum, DMWF Europe, Amsterdam 2025, ProPlus Data, Data Management, Data Analytics, Business Intelligence, Data Trends, Industry Leaders, Innovative Solutions"/>
        <link rel="canonical" href="https://proplusdata.co/dmwf-europe-amsterdam-2025"/>
        <meta property="og:url" content="https://proplusdata.co/dmwf-europe-amsterdam-2025" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Data Management World Forum Europe Amsterdam 2025." />
        <meta property="og:description" content="Join ProPlus Data at the DMWF Europe in Amsterdam 2025 to explore the latest trends and innovations in data management, analytics, and business intelligence." />
      </Helmet> 
      <Header1/>
      <BreadcrumbDmwf/>
      <DmwfComponent/>
      <DmwfSection/>
      <DmwfSection2/>
      <Footer/>
    </div>
  )
}
