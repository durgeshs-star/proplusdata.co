import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import CmoLeadershipEventComponent from '../components/CmoLeadershipEventComponent'
import BreadcrumCmoLeadershipSummit from '../components/BreadcrumbCmoLeadershipSummit'
import CmoSummitEventSection from '../components/CmoSummitEvevntSection'
import { Helmet } from 'react-helmet-async'

export default function CmoLeadershipSummit2026() {
  return (
    <div>
      <Helmet>
        <title>CMO Leadership Summit 2026 | Austin | ProPlus Data</title>
        <meta name="description" content="Join us at the CMO Leadership Summit 2026 to explore the latest trends in marketing, data-driven strategies, and leadership insights with ProPlus Data."/>
        <meta name="keywords" content="CMO Leadership Summit, Marketing Trends, Data-Driven Strategies, ProPlus Data, Marketing Leadership, CMO Insights, Marketing Innovation, Customer Engagement, Digital Marketing, Marketing Technology"/>
        <link rel="canonical" href="https://proplusdata.co/cmo-leadership-summit-2026"/>
        <meta property="og:url" content="https://proplusdata.co/cmo-leadership-summit-2026" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CMO Leadership Summit 2026 | Austin | ProPlus Data" />
        <meta property="og:description" content="Join us at the CMO Leadership Summit 2026 to explore the latest trends in marketing, data-driven strategies, and leadership insights with ProPlus Data." />
      </Helmet> 
      <Header1/>
      <BreadcrumCmoLeadershipSummit/>
      <CmoLeadershipEventComponent/>
      <CmoSummitEventSection/>
      <Footer/>
    </div>
  )
}
