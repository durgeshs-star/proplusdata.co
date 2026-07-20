import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BreadcrumbWebTechResearcher from '../components/BreadcrumbWebTechResearcher'
import WebTechComponent from '../components/WebTechComponent'

export default function WebTechResearcher() {
  return (
    <div>
      <Helmet>
         <title>Join ProPlus Data: Unlock Your Career as a Web/Tech Researcher</title>
        <meta name="description" content="Seeking a Web Research Specialist with contact discovery experience, strong analytical skills, and proficiency in advanced Excel and data analysis tools."/>
        <meta name="keywords" content="Web Research Specialist, Data Analysis, Internet Research, Information Gathering, Analytical Skills, Research Techniques, Competitive Analysis, Data Collection, Market Research"/>
        <link rel="canonical" href="https://proplusdata.co/web-tech-researcher"/>
        <meta property="og:url" content="https://proplusdata.co/web-tech-researcher" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Join ProPlus Data: Unlock Your Career as a Web/Tech Researcher" />
        <meta property="og:description"
             content="Seeking a Web Research Specialist with experience in contact discovery, strong analytical skills, and proficiency in advanced Excel and data analysis tools. Join us to drive impactful data-driven decisions." />
      </Helmet>
      <Header1/>
      <BreadcrumbWebTechResearcher/>
      <WebTechComponent/>
      <Footer/>
    </div>
  )
}
