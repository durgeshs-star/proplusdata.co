import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbAdminExecutive from '../components/BreadcrumbAdminExecutive'
import AdminExecutiveComponent from '../components/AdminExecutiveComponent'

export default function AdminExecutive() {
  return (
    <div>
      <Helmet>
        <title>Office Administrator Job – Admin, Coordination & Event Support Role</title>
        <meta name="description" content="Join us as the Office Administrator role! Handle emails, documents, vendor coordination, employee support & events. Strong communication skills required. "/>
        <meta name="keywords" content="Office Administrator Job, Admin Assistant, Office Support, Document Management, Event Coordination, Vendor Management, Front Office, Administrative Role, Office Jobs, Communication Skills"/>
        <link rel="canonical" href="https://proplusdata.co/admin-executive"/>
        <meta property="og:url" content="https://proplusdata.co/admin-executive" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Office Administrator Job – Admin, Coordination & Event Support Role" />
        <meta property="og:description"
             content="We're hiring an Office Administrator to handle admin tasks, document organization, employee coordination, and event support. Apply now!" />
      </Helmet>
      <Header1/>
      <BreadcrumbAdminExecutive/>
      <AdminExecutiveComponent/>
      <Footer/>
    </div>
  )
}
