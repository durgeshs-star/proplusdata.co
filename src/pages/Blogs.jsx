import React from 'react'
import { Helmet } from 'react-helmet-async';
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import BlogsRedesign from '../components/BlogsRedesign'

export default function Blogs() {
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "B2B Data Intelligence Insights and Resources",
            url: "https://proplusdata.co/blogs",
            isPartOf: { "@id": "https://proplusdata.co/#website" },
          })}
</script>

        <title>Insights & Analysis Blog | ProPlus Data</title>
        <meta name="description" content="Explore expert insights, industry trends, and data-driven strategies from ProPlus Data. Stay informed and lead with intelligence in your GTM and ABM journey."/>
        <meta name="keywords" content="ProPlus Data blog, B2B insights, GTM strategy, ABM trends, intent data articles, predictive analytics, technographics, marketing intelligence, data-driven decisions, thought leadership"/>
        <link rel="canonical" href="https://proplusdata.co/blogs"/>

        <meta property="og:url" content="https://proplusdata.co/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Insights & Analysis Blog | ProPlus Data" />
        <meta property="og:description"
                    content="Explore expert insights, industry trends, and data-driven strategies from ProPlus Data. Stay informed and lead with intelligence in your GTM and ABM journey." />
      </Helmet>
      <Header1/>
      <BlogsRedesign/>
      <Footer/>
      <div className="btnwhatsapp-sm">
        <a target="_blank" rel="noreferrer" href="https://wa.me/+919112110691"><i className="fa fa-whatsapp"></i></a>
    </div>
    </div>
  )
}
