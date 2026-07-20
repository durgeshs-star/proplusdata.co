import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbConference from '../components/BreadcrumbConference'
import ConferenceSection from '../components/ConferenceSection'
import PastEvents from '../components/PastEvents'
import UpcomingEvents from '../components/UpcomingEvents'
import WinterDataSummit from '../components/WinterDataSummit';
import Dmwf2025 from '../components/Dmwf2025';
import CmoLeadershipSummit2026 from '../components/CmoLeadershipSummit2026';

export default function Conferences() {
  return (
    <div>
      <Helmet>
          <title>ProPlus Data B2B Conferences & Global Marketing Events</title>
          <meta name="description" content="Explore how ProPlus Data is making an impact. Meet us at global conferences to experience our data-driven solutions and connect with our experts in person."/>
          <meta name="keywords" content="ProPlus Data conferences, B2B events, global exhibitions, GTM events, ABM showcases, data intelligence events, marketing symposiums, industry presence, CMO meetups, event engagement"/>
          <link rel="canonical" href="https://proplusdata.co/conferences"/>
                                                                        
          <meta property="og:url" content="https://proplusdata.co/conferences" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ProPlus Data B2B Conferences & Global Marketing Events" />
          <meta property="og:description"
                content="Explore how ProPlus Data is making an impact. Join us at premier global conferences to experience our data-driven solutions firsthand and connect with our experts." />
      </Helmet>
      <Header1/>
      <BreadcrumbConference/>
      <ConferenceSection/>
      <CmoLeadershipSummit2026/>
      <WinterDataSummit/>
      <Dmwf2025/>
      <UpcomingEvents/>
      <PastEvents/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
