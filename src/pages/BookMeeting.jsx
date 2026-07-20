import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbMeeting from '../components/BreadcrumbMeeting'
import MeetingComponent from '../components/MeetingComponent'

export default function BookMeeting() {
  return (
    <div>
      <Header1/>
      <BreadcrumbMeeting/>
      <MeetingComponent/>
      <Footer/>
    </div>
  )
}
