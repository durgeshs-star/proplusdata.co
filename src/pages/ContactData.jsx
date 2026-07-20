import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbContact from '../components/BreadcrumbContact'
import ContactComponent from '../components/ContactComponent'
import ContactDifference from '../components/ContactDifference'
import BusinessBenefit from '../components/BusinessBenefit'
import CtaContact from '../components/CtaContact'

export default function ContactData() {
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
        "name": "Contact Data",
        "description":
          "Access verified B2B contact data of decision-makers to enhance your outreach, personalize campaigns, and boost conversions.",
        "provider": {
          "@type": "Organization",
          "name": "ProPlus Data"
        }
      })
    }}
  />
)}


                <title>B2B Contact Data to Reach Decision-Makers | ProPlus Data</title>
                <meta name="description" content="Get contact data for IT decision-makers in the US, verified B2B data for Japanese companies, and targeted contact lists for Indian tech firms."/>
                <meta name="keywords" content="B2B contact data providers, verified B2B email lists, accurate B2B contacts for ABM campaigns, B2B contact data providers for Japanese companies, contact data"/>
                <link rel="canonical" href="https://proplusdata.co/contact-data"/>
                                          
                <meta property="og:url" content="https://proplusdata.co/contact-data" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="B2B Contact Data to Reach Decision-Makers | ProPlus Data " />
                <meta property="og:description"
                    content="ProPlus Data helps you connect with verified B2B contacts and decision-makers. Enhance your sales outreach and increase lead quality." />
            </Helmet>
      <Header1/>
      <BreadcrumbContact/>
      <ContactComponent/>
      <ContactDifference/>
      <BusinessBenefit/>
      <CtaContact/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>

    </div>
  )
}
