import React from "react";
import { Helmet } from "react-helmet-async";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import RevenueOpportunityArticle from "../components/RevenueOpportunityArticle";
import gtmTrends2027Markdown, { gtmTrends2027Title } from "../components/gtmTrends2027Content";

export default function GtmTrends2027() {
  return (
    <div>
      <Helmet>
        <title>{gtmTrends2027Title} | ProPlus Data</title>
        <meta
          name="description"
          content="Explore 10 B2B GTM trends for 2027, from AI decision support and dynamic account prioritization to buying-group intelligence and adaptable revenue systems."
        />
        <meta name="keywords" content="B2B GTM trends 2027, go-to-market strategy, AI in sales, account prioritization, buying groups, intent data, revenue intelligence" />
        <meta name="author" content="ProPlus Data" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gtmTrends2027Title} | ProPlus Data`} />
        <meta
          property="og:description"
          content="Ten B2B go-to-market shifts to watch in 2027, including AI decision support, account context, pipeline quality, and adaptability."
        />
        <link rel="canonical" href="https://proplusdata.co/10-b2b-gtm-trends-2027" />
      </Helmet>
      <Header1 />
      <RevenueOpportunityArticle
        title={gtmTrends2027Title}
        kicker="10 SHIFTS SHAPING THE YEAR AHEAD"
        lead="From AI-powered decision support to more dynamic account prioritization, explore the trends likely to reshape how B2B teams create revenue."
        markdown={gtmTrends2027Markdown}
        readingTime="9 MIN READ"
        heroArtwork="framework"
      />
      <Footer />
    </div>
  );
}
