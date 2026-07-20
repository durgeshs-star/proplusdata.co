import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import GTMComponent from '../components/GTMComponent'
import WhyGtmMatters from '../components/WhyGtmMatters'
import Resources from '../components/Resources'
import LeadingMarketplace from '../components/LeadingMarketplace'
import ComplianceSection from '../components/CompilanceSection'
import StatsSection from '../components/StatsSection'


export default function GTMAssessmentTool() {
  return (
    <div>
      <Header1/>
      <GTMComponent/>
      <WhyGtmMatters/>
      <Resources/>
      <LeadingMarketplace/>
      <ComplianceSection/>
      <StatsSection/>
      <Footer/>
    </div>
  )
}
