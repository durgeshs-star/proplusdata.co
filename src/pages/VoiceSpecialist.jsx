import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbVoiceSpecialist from '../components/BreadcrumbVoiceSpcialist'
import VoiceSpecialistComponent from '../components/VoiceSpecialistComponent'

export default function VoiceSpecialist() {
  return (
    <div>
       <Helmet>
      <title>Voice Specialist: Customer Verification and Support</title>
    <meta name="description" content="Join as a Voice Specialist to verify customer details, answer queries, update databases, and handle grievances to uphold our company's reputation."/>
  <meta name="keywords" content="Voice Specialist, Communication Skills, English Proficiency, Office Tasks, Tele-calling, voice specialist, Internet Surfing, Social Media Platforms, Freshers Welcome"/>
   <link rel="canonical" href="https://proplusdata.co/voice-specialist"/>
  <meta property="og:url" content="https://proplusdata.co/voice-specialist" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Voice Specialist: Customer Verification and Support" />
  <meta property="og:description"
      content="Seeking Voive Specialist with strong English skills and basic Word/Excel proficiency. Responsibilities include office tasks, tele-calling from provided database. Freshers meeting criteria welcome." />
      </Helmet>
      <Header1/>
      <BreadcrumbVoiceSpecialist/>
      <VoiceSpecialistComponent/>
      <Footer/>
    </div>
  )
}
