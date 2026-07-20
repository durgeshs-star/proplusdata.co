import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'

export default function ContactUs() {
  return (
    <div>
         <Helmet>
         {typeof window !== 'undefined' && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - ProPlus Data",
        "description": "Get in touch with ProPlus Data for B2B contact data, intent intelligence, and more. Let us help your outreach strategy."
      })
    }}
  />
)}


         <title>Contact  ProPlus Data | Supercharge your Marketing Strategies</title>
         <meta name="description" content="Ready to power your GTM and ABM strategies with precision? Get in touch with ProPlus Data and discover data-driven solutions tailored to your growth goals."/>
         <meta name="keywords" content="prospect intelligence, intent data, ABM data solutions, GTM strategy, buyer intent signals, account segmentation, technographics, Next Tech Purchase®, buying propensity, buyer personas, omnichannel campaigns, high propensity accounts, B2B data analytics, sales enablement, marketing intelligence, global data provider"/>
         <link rel="canonical" href="https://proplusdata.co/contact-us"/>
         <meta property="og:url" content="https://proplusdata.co/contact-us" />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="Contact  ProPlus Data | Supercharge your Marketing Strategies" />
         <meta property="og:description"
             content="Ready to power your GTM and ABM strategies with precision? Get in touch with ProPlus Data and discover data-driven solutions tailored to your growth goals." />
         </Helmet>
      <Header1/>
      <ContactInfo/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
