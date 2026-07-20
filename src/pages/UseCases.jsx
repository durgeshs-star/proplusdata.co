import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbUseCases from '../components/BreadcrumbUseCases'
import UseCasesComponent from '../components/UseCasesComponent'

export default function UseCases() {
  return (
    <div>
      <Helmet>
                              <title>Use Cases | Real-World Applications of ProPlus Data Solutions</title>
                            <meta name="description" content="Explore how ProPlus Data drives results across GTM, ABM, and sales strategies. See real-world use cases of data intelligence in action across industries."/>
                           <meta name="keywords" content="Case Studies, use cases, ABM solutions, GTM applications, data-driven marketing, B2B case studies, prospect intelligence examples, sales enablement use cases, intent data application, business success stories"/>
                            <link rel="canonical" href="https://proplusdata.co/use-cases"/>
                        
                           <meta property="og:url" content="https://proplusdata.co/use-cases" />
                           <meta property="og:type" content="website" />
                           <meta property="og:title" content="Use Cases | Real-World Applications of ProPlus Data Solutions" />
                           <meta property="og:description"
                               content="Explore how ProPlus Data drives results across GTM, ABM, and sales strategies. See real-world use cases of data intelligence in action across industries." />
                  </Helmet>
      <Header1/>
      <BreadcrumbUseCases/>
      <UseCasesComponent/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
