import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import EventComponent from '../components/EventComponent'
import BreadcrumbEvent from '../components/BreadcrumbEvent'
import FaqSection from '../components/FaqSection'
import IndustriesSection from '../components/IndustriesSection'
import CtaEvent from '../components/CtaEvent'

export default function EventAudienceAcquisition() {
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
        "name": "Event Audience Acquisition",
        "description": "ProPlus Data helps event marketers acquire high-quality B2B audiences that match event themes, ensuring greater engagement and ROI.",
        "provider": {
          "@type": "Organization",
          "name": "ProPlus Data"
        }
      })
    }}
  />
)}


         <title>Event Audience Acquisition Services | ProPlus Data Solutions</title>
        <meta name="description" content="Maximize event ROI with ProPlus Data’s event audience acquisition. Connect with the right attendees and drive meaningful engagement at every touchpoint."/>
        <meta name="keywords" content="event audience acquisition, B2B event marketing, event lead generation, targeted event promotion, virtual event audiences, event registration leads, event attendee data, ProPlus Data events"/>
        <link rel="canonical" href="https://proplusdata.co/event-audience-acquisition"/>
                                                            
        <meta property="og:url" content="https://proplusdata.co/event-audience-acquisition" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Event Audience Acquisition Services | ProPlus Data Solutions" />
        <meta property="og:description"
              content="Get qualified B2B audiences for your in-person or virtual events. ProPlus Data delivers event attendee targeting that drives real results." />
      </Helmet>
      <Header1/>
      <BreadcrumbEvent/>
      <EventComponent/>
      <FaqSection/>
      <IndustriesSection/>
      <CtaEvent/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
