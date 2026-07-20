import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import PricingComponent from '../components/PricingComponent'
import PricingSection from '../components/PricingSection'
import PricingClientComponent from '../components/PricingClientComponent'
import PricingTable from '../components/PricingTable'
import PricingTestimonial from '../components/PricingTestimonial'
import PricingFaqs from '../components/PricingFaqs'

export default function Pricing() {
  return (
    <div>
      <Header1/>
      <PricingComponent/>
      <PricingSection/>
      <PricingClientComponent/>
      <PricingTable/>
      <PricingTestimonial/>
      <PricingFaqs/>
      <Footer/>
    </div>
  )
}
