import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
// import BreadcrumbPressReleases from '../components/BreadcrumbPressReleases'
import PressReleaseComponent from '../components/PressReleaseComponent'
import DataradeComponent from '../components/DataradeComponent';
import '../components/PressReleases.css'
import '../components/CompanyPages.css'

export default function PressReleases() {
  return (
    <div className="ppd-company-page ppd-company-page--press ppd-press-page">
      <Helmet>
                        <title>Press Releases | ProPlus Data News & Industry Updates</title>
                      <meta name="description" content="Stay informed with the latest news from ProPlus Data. Explore press releases, industry insights, and key milestones shaping the future of data intelligence."/>
                     <meta name="keywords" content="ProPlus Data news, press releases, company updates, B2B data intelligence, GTM insights, ABM announcements, industry news, data solutions leadership, media center, News, In the news"/>
                      <link rel="canonical" href="https://proplusdata.co/press-releases"/>
                     <meta property="og:url" content="https://proplusdata.co/press-releases" />
                     <meta property="og:type" content="website" />
                     <meta property="og:title" content="Press Releases | ProPlus Data News & Industry Updates" />
                     <meta property="og:description"
                         content="Stay informed with the latest news from ProPlus Data. Explore press releases, industry insights, and key milestones shaping the future of data intelligence." />
            </Helmet>
      <Header1/>
      <main className="ppd-press">
        {/* <BreadcrumbPressReleases/> */}
        <DataradeComponent/>
        <PressReleaseComponent/>
      </main>
      <Footer/>
      <a
        className="ppd-press-whatsapp"
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/+919112110691"
        aria-label="Chat with ProPlus Data on WhatsApp"
      >
        <i className="fa fa-whatsapp" aria-hidden="true" />
      </a>
    </div>
  )
}
