import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import AwsCaseStudyComponent from '../components/AwsCaseStudyComponent'
import AwsUseCase from '../components/AwsUseCase'
import SolutionDataDriven from '../components/SolutionDataDriven'
import VoiceOutreach from '../components/VoiceOutreach'
import CtaAwsCaseStudy from '../components/CtaAwsCaseStudy'

export default function AwsCaseStudy() {
  return (
    <div>
      <Header1/>
      <AwsCaseStudyComponent/>
      <AwsUseCase/>
      <SolutionDataDriven/>
      <VoiceOutreach/>
      <CtaAwsCaseStudy/>
      <Footer/>
    </div>
  )
}
