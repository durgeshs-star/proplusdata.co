import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import SolutionSection from '../components/SolutionSection'
import HeroGtm from '../components/HeroGtm'
import IdentifyAccounts from '../components/IdentifyAccounts'
import ClientComponent from '../components/ClientComponent'
import WhatMakesUsDifferent from '../components/WhatMakesUsDifferent'
import LeadingMarketplace from '../components/LeadingMarketplace'
import DataIntelligenceCta from '../components/DataIntelligenceCta'

export default function GtmLandingPage() {
  return (
    <div>
      <Header1/>
      <HeroGtm/>
      <ClientComponent/>
      <SolutionSection/>
      <IdentifyAccounts/>
      <WhatMakesUsDifferent/>
      <LeadingMarketplace/>
      <DataIntelligenceCta/>
      <Footer/>
    </div>
  )
}
