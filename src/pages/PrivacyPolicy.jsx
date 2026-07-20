import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbPrivacy from '../components/BreadcrumbPrivacy'
import PolicyComponent from '../components/PolicyComponent'

export default function PrivacyPolicy() {
  return (
    <div>
      <Helmet>
                  <title>Privacy Policy | How ProPlus Data Protects Your Data</title>
                <meta name="description" content="Learn how ProPlus Data collects, uses, and protects your information. Review our privacy practices to understand your rights and our data security standards."/>
               <meta name="keywords" content="ProPlus Data privacy policy, data privacy, user rights, information security, data collection practices, GDPR compliance, CCPA policy, data protection, personal data handling"/>
                <link rel="canonical" href="https://proplusdata.co/privacy-policy"/>   
               <meta property="og:url" content="https://proplusdata.co/privacy-policy" />
               <meta property="og:type" content="website" />
               <meta property="og:title" content="Privacy Policy | How ProPlus Data Protects Your Data" />
               <meta property="og:description"
                   content="Learn how ProPlus Data collects, uses, and protects your information. Review our privacy practices to understand your rights and our data security standards." />
      </Helmet>
      <Header1/>
      <BreadcrumbPrivacy/>
      <PolicyComponent/>
      <Footer/>
      <div class="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i class="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
