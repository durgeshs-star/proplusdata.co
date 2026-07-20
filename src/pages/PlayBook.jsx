import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
// import BreadcrumbPlaybook from '../components/BreadcrumbPlaybook'
// import PlaybookComponent from '../components/PlaybookComponent'
import AbmPlaybook from '../components/AbmPlaybook'


export default function PlayBook() {
  return (
    <div>
      <Header1/>
      {/* <BreadcrumbPlaybook/> */}
      <AbmPlaybook/>
      {/* <PlaybookComponent/> */}
      <Footer/>
    </div>
  )
}
