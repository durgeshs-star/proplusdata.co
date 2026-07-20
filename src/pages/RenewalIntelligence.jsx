import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbRenewal from '../components/BreadcrumbRenewal'
import RenewalComponent from '../components/RenewalComponent'
import StrategicValue from '../components/StrategicValue'
import HowRenewalWorks from '../components/HowRenewalWorks'
import SubscriptionComponent from '../components/SubscriptionComponent'
import CtaRenewal from '../components/CtaRenewal'

export default function RenewalIntelligence() {
  return (
    <div>
       <Helmet>
       {typeof window !== 'undefined' && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Renewal Intelligence",
        "description": "Identify competitor product renewals with ProPlus Data's Renewal Intelligence. Leverage technographic account intelligence for proactive engagement and reduce churn.",
        "provider": {
          "@type": "Organization",
          "name": "ProPlus Data"
        }
      })
    }}
  />
)}


          <title>Renewal Intelligence for B2B Growth | ProPlus Data </title>
          <meta name="description" content="Identify competitor product renewals with ProPlus Data's Renewal Intelligence. Leverage technographic account intelligence for proactive engagement and reduce churn."/>
          <meta name="keywords" content="renewals, renewal intelligence, competitor product renewals, renewal dates, renewal opportunity, renewal intelligence for b2b growth, renewal subscription leads, renewal intelligence platform, demandbase renewals, demandbase, smarte, zoominfo renewals, b2b growth, techstack, domain research, customer retention data, upsell opportunities, B2B renewal data"/>
          <meta name="robots" content="index, follow"/>
          <meta name="author" content="ProPlus Data"/>
          <link rel="canonical" href="https://proplusdata.co/renewal-intelligence"/>                          
          <meta property="og:url" content="https://proplusdata.co/renewal-intelligence" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Renewal Intelligence for B2B Growth | ProPlus Data " />
          <meta property="og:description"
              content="Drive B2B growth by identifying accounts due for renewal. ProPlus Data helps reduce churn and uncover upsell-ready customers with subscription insights." />
      </Helmet>
      <Header1/>
      <BreadcrumbRenewal/>
      <RenewalComponent/>
      <SubscriptionComponent/>
      <StrategicValue/>
      <HowRenewalWorks/>
      <CtaRenewal/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
