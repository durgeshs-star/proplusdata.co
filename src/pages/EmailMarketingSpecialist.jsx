import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
// import BreadcrumbEmailMarketingSpecialist from '../components/BreadcrumbEmailMarketingSpecialist'
import EmailMarketingcomponent from '../components/EmailMarketingcomponent'


export default function EmailMarketingSpecialist() {
  return (
    <div>
      <Helmet>
        <title>Email Marketing Specialist: Lead Generation & Campaign Management</title>
        <meta name="description" content="Join as an Email Marketing Specialist to design and execute lead generation campaigns, manage email platforms, and drive engagement through personalized marketing strategies."/>
        <meta name="keywords" content="Email Marketing Specialist, Lead Generation, Email Campaigns, HubSpot, Mailchimp, ABM Campaigns, Email Marketing, Digital Marketing, Marketing Automation"/>
        <link rel="canonical" href="https://proplusdata.co/email-marketing-specialist"/>
        <meta property="og:url" content="https://proplusdata.co/email-marketing-specialist" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Email Marketing Specialist: Lead Generation & Campaign Management" />
        <meta property="og:description"
            content="Seeking an Email Marketing Specialist proficient with platforms like Mailchimp and HubSpot. Experience in ABM campaign management and lead generation is required." />
      </Helmet>
      <Header1/>
      {/* <BreadcrumbEmailMarketingSpecialist/> */}
      <EmailMarketingcomponent/>
      <Footer/>
    </div>
  )
}
