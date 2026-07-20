import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import ClientComponent from '../components/ClientComponent'
import ResourcesSection from '../components/ResourcesSection'
import BrandSection from '../components/BrandSection'
import GtmWhyMatters from '../components/GtmWhyMatters'
// import BreadcrumbGtmlAssessmentTool from '../components/BreadcrumbGtmlAssessmentTool'
import GtmToolFormSection from '../components/GtmToolFormSection'
import CtaGtmAssessment from '../components/CtaGtmAssessment'

export default function SeeYourGtmTruthIn60Sec() {
  return (
    <div>
      <Header1/>
      {/* <BreadcrumbGtmlAssessmentTool/> */}
       <GtmToolFormSection/>
      <GtmWhyMatters/>
      <ClientComponent/>
      <ResourcesSection/>
      <BrandSection/>
      <CtaGtmAssessment/>
      <Footer/>
    </div>
  )
}
