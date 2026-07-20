import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbExecutiveAssistant from '../components/BreadcrumbExecutiveAssistant'
import ExecutiveAssistantComponent from '../components/ExecutiveAssistantComponent'

export default function ExecutiveAssistant() {
  return (
    <div>
       <Helmet>
            <title>Executive Assistant to CEO/MD – High-Level Administrative Support Role</title>
            <meta name="description" content="We are Hiring an Executive Assistant to the CEO/MD! Manage schedules, prepare reports, and coordinate with teams. Provide high-level support to leadership."/>
            <meta name="keywords" content="Executive Assistant Job, Assistant to CEO, Admin Support, C-level Assistant, Leadership Support, Executive Assistant Role, Confidential Information Handling, Business Administration, High-level Admin, IT Executive Assistant, CEO Office Jobs"/>
            <link rel="canonical" href="https://proplusdata.co/executive-assistant"/>
            <meta property="og:url" content="https://proplusdata.co/executive-assistant" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Executive Assistant to CEO/MD – High-Level Administrative Support Role" />
            <meta property="og:description"
                   content="Join our team as an Executive Assistant to the CEO/MD. Manage calendars, prep reports, and act as liaison for internal and external communication. Apply now!" />
      </Helmet>
      <Header1/>
      <BreadcrumbExecutiveAssistant/>
      <ExecutiveAssistantComponent/>
      <Footer/>
    </div>
  )
}
