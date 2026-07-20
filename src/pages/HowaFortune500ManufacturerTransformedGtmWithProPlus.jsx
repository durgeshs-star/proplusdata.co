import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import SiemensCaseStudyComponent from '../components/SiemenscaseStudyComponent'
import SiemensContext from '../components/SiemensContext'
import ProblemBeneathTheSurface from '../components/ProblemBeneathTheSurface'
import ProplusTranslatedGtm from '../components/ProplusTranslatedGtm'
import ProplusImpact from '../components/ProplusImpact'
import IntelligenceImpact from '../components/IntelligenceImpact'
import WhatWeDidDifferently from '../components/WhatWeDidDifferently'
import TheDifferentItMade from '../components/TheDifferentItMade'
import SiemensUseCaseGraph from '../components/SiemensUseCaseGraph'
import SiemensSummary from '../components/SiemenSummary'
import TestimonialSection from '../components/TestimonialSection'
import { Helmet } from 'react-helmet-async'


export default function HowaFortune500ManufacturerTransformedGtmWithProPlus() {
  return (
    <div>
      <Helmet>
        <title>How a Fortune 500 Manufacturer Transformed GTM | ProPlus Data</title>
        <meta name="description" content="Discover how a Fortune 500 manufacturer transformed its GTM strategy using ProPlus Data’s intent, technographic, and account intelligence solutions."/>
        <meta name="keywords" content="Fortune 500 Case Study, GTM Transformation, B2B Data Solutions, Account Intelligence, Intent Data, Technographic Data, Sales Intelligence, Demand Generation, Revenue Growth, Buyer Insights, ProPlus Data, Go-To-Market Strategy"/>
        <link rel="canonical" href="https://proplusdata.co/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus"/>
        <meta property="og:url" content="https://proplusdata.co/how-a-fortune-500-manufacturer-transformed-gtm-with-proplus" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How a Fortune 500 Manufacturer Transformed GTM | ProPlus Data" />
        <meta property="og:description" content="Learn how a Fortune 500 manufacturer improved GTM execution with ProPlus Data’s intent, technographic, and account intelligence solutions." />
      </Helmet>



      <Header1/>
      <SiemensCaseStudyComponent/>
      <SiemensContext/>
      <ProblemBeneathTheSurface/>
      <ProplusTranslatedGtm/>
      <ProplusImpact/>
      <IntelligenceImpact/>
      <WhatWeDidDifferently/>
      <SiemensUseCaseGraph/>
      <TheDifferentItMade/>
      <SiemensSummary/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}
