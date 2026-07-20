import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbAccountant from '../components/BreadcrumbAccountant'
import AccountantComponent from '../components/AccountantComponent'

export default function FinanceExecutive() {
  return (
    <div>
      <Helmet>
    <title>Finance Executive Job Opening – Financial Reporting & Compliance Role</title>
    <meta name="description" content="Apply for the Accountant position! Responsible for GST compliance, tax returns, financial statements, ledger reviews, budgeting, and day-to-day accounting."/>
    <meta name="keywords" content="Finance Executive Job, GST compliance, TDS returns, Financial Statements, Balance Sheet, Budgeting, Accounting Jobs, Accounts Payable, Accounts Receivable, Tally, SAP, CPA, Accounting Career"/>
    <link rel="canonical" href="https://proplusdata.co/accountant"/>
   <meta property="og:url" content="https://proplusdata.co/accountant" />
   <meta property="og:type" content="website" />
   <meta property="og:title" content="Accountant Job Opening – Financial Reporting & Compliance Role" />
   <meta property="og:description"
       content="Join our finance team! We're hiring an accountant with 1-2 years experience to manage returns, ledgers, MIS reports, and day-to-day accounting." />
      </Helmet>
      <Header1/>
      <BreadcrumbAccountant/>
      <AccountantComponent/>
      <Footer/>
    </div>
  )
}
