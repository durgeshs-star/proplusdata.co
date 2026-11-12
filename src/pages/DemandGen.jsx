import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import MqlComponent from '../components/MqlComponent'
import MqlFeatures from '../components/MqlFeatures'
import MqlBenefits from '../components/MqlBenefits'
import VvlComponent from '../components/VvlComponent'
import Vvladvantage from '../components/VvlAdvantage'
import CtaMql from '../components/CtaMql'
// import SolutionBreadcrumb from '../components/solutions/SolutionBreadcrumb'
import '../components/solutions/SolutionSystem.css'

export default function DemandGen() {
  return (
    <div className="ppd-solutions-page">
       <Helmet>
          <title>Demand Gen Solutions for B2B Pipeline Growth | ProPlus Data</title>
          <meta name="description" content="Accelerate B2B demand generation with ProPlus Data. Leverage intent data, technographics, and verified contacts to drive qualified leads and pipeline growth."/>
          <meta name="keywords" content="Demand Generation, Lead Qualification Matrix, Targeted Lead Adoption, A/B Testing, Voice-Verified Leads, Lead Verification, ROI Optimization, Prospect Allocation, Sales Engagement, Key KPI Indicators, Tailored Content, Lead Conversion"/>
          <link rel="canonical" href="https://proplusdata.co/demand-gen"/>                                     
          <meta property="og:url" content="https://proplusdata.co/demand-gen"/>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Demand Gen Solutions for B2B Pipeline Growth | ProPlus Data " />
          <meta property="og:description"
                content="Accelerate B2B demand generation with ProPlus Data. Leverage intent data, technographics, and verified contacts to drive qualified leads and pipeline growth." />
        </Helmet>
      <Header1/>
        <main className="ppd-solution ppd-solution--demand-gen">
          {/* <SolutionBreadcrumb label="Demand Gen" parentHref="/marketing-qualified-leads" /> */}
          <MqlComponent/>
          <MqlFeatures/>
          <MqlBenefits/>
          <VvlComponent/>
          <Vvladvantage/>
          <CtaMql/>
        </main>
        <Footer/>
        <div className="btnwhatsapp-sm">
          <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i className="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
