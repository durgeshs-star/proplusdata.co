import React from "react";
import { Helmet } from "react-helmet-async";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import RevenueOpportunityArticle from "../components/RevenueOpportunityArticle";
import b2bIntelligencePlatformsMarkdown, {
  b2bIntelligencePlatformsTitle,
} from "../components/b2bIntelligencePlatformsContent";

export default function B2BIntelligencePlatforms() {
  return (
    <div>
      <Helmet>
        <title>{b2bIntelligencePlatformsTitle} | ProPlus Data</title>
        <meta
          name="description"
          content="Compare eight B2B intelligence platforms for contact data, account prioritization, intent, technographics, buying groups, renewal intelligence, and GTM opportunity context."
        />
        <meta
          name="keywords"
          content="B2B intelligence platforms, B2B data vendors, contact data, technographics, intent data, buying group intelligence, GTM platforms"
        />
        <meta name="author" content="ProPlus Data" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${b2bIntelligencePlatformsTitle} | ProPlus Data`} />
        <meta
          property="og:description"
          content="Explore eight B2B intelligence platforms and the distinct GTM challenges they are designed to solve."
        />
        <link
          rel="canonical"
          href="https://proplusdata.co/b2b-intelligence-platforms-reshaping-gtm"
        />
      </Helmet>
      <Header1 />
      <RevenueOpportunityArticle
        title={b2bIntelligencePlatformsTitle}
        kicker="A GUIDE TO THE B2B DATA LANDSCAPE"
        lead="Compare the intelligence layers behind eight B2B platforms—and understand which GTM problem each is built to solve."
        markdown={b2bIntelligencePlatformsMarkdown}
        readingTime="12 MIN READ"
        heroArtwork="intelligence"
      />
      <Footer />
    </div>
  );
}
