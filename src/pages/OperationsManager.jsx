import React from 'react'
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer'
import BreadcrumbOperationsManager from '../components/BreadcrumbOperationsManager'
import OperationsManagerComponent from '../components/OperationsManagerComponent'
import Header1 from '../components/Header1';

export default function EmailMarketingSpecialist() {
  return (
    <div>
      <Helmet>
          <title>Operations Manager Job Opening | Careers at ProPlus Data</title>
          <meta name="description" content="Apply for the Operations Manager role! Lead operations, ensure GDPR compliance, deliver quality data, & engage with global clients. 5+ yrs experience must."/>
          <meta name="keywords" content="Operations Manager Job, GDPR Compliance, Data Quality Management, Global Client Communication, Team Leadership, Operations Management, Analytics Tools, Senior Stakeholder Engagement, Fast-paced Environment, Operations Head"/>
          <link rel="canonical" href="https://proplusdata.co/operations-manager"/>
          <meta property="og:url" content="https://proplusdata.co/operations-manager" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Operations Manager Job – Lead Global Operations & Ensure GDPR Compliance" />
          <meta property="og:description"
              content="We’re hiring an experienced Operations Manager to oversee teams, maintain data integrity, and ensure compliance with GDPR. Apply now and be part of a global team." />
      </Helmet>
      <Header1/>
      <BreadcrumbOperationsManager/>
      <OperationsManagerComponent/>
      <Footer/>
    </div>
  )
}
