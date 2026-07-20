import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import HeroRenewalLp from '../components/HeroRenewalLp'
import ClientComponent from '../components/ClientComponent'
import WhyRenewalIntelligence from '../components/WhyRenewalIntelligence'
import TypicalOutreach from '../components/TypicalOutreach'
import RealWorldWalkthrough from '../components/RealWorldWalkthrough'
import RenewalResources from '../components/RenewalResources'
import BrandSection from '../components/BrandSection'
import EnterpriseGradeCompliance from '../components/EnterpriseGradeCompliance'
import RenewalIntelligenceLpFooter from '../components/RenewalIntelligencelpFooter'

export default function RenewalLandingPage() {
  return (
    <div>
      <Header1/>
      <HeroRenewalLp/>
      <ClientComponent/>
      <WhyRenewalIntelligence/>
      <TypicalOutreach/>
      <RealWorldWalkthrough/>
      <RenewalResources/>
      <BrandSection/>
      <EnterpriseGradeCompliance/>
      <RenewalIntelligenceLpFooter/>
      <Footer/>
    </div>
  )
}
