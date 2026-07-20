import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbCareers from '../components/BreadcrumbCareers'
import CareerComponent from '../components/CareerComponent'
import CareerSection from '../components/CareerSection'

export default function Careers() {
  return (
    <div>
         <Helmet>
            <title>Careers at ProPlus Data | Shape the Future of Data Intelligence</title>
          <meta name="description" content="Join ProPlus Data and be part of a global team transforming GTM | ABM strategies with real-time intelligence. Explore impactful careers in data innovation."/>
         <meta name="keywords" content="ProPlus Data careers, data intelligence jobs, B2B marketing careers, GTM strategy roles, ABM careers, intent data jobs, tech data jobs, global hiring, data analytics jobs, Jobs in India, Pune Jobs, best analytics jobs, Data analysis jobs"/>
          <link rel="canonical" href="https://proplusdata.co/careers"/>
      
         <meta property="og:url" content="https://proplusdata.co/careers" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Careers at ProPlus Data | Shape the Future of Data Intelligence" />
         <meta property="og:description"
             content="Join ProPlus Data and be part of a global team transforming GTM | ABM strategies with real-time intelligence. Explore impactful careers in data innovation." />
          </Helmet>
      <Header1/>
      <BreadcrumbCareers/>
      <CareerComponent/>
      <CareerSection/>
      <Footer/>

    </div>
  )
}
