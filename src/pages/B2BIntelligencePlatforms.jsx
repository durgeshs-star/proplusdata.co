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
        <title>8 B2B Data Vendors Reshaping Modern GTM | ProPlus Data</title>
        <meta
          name="description"
          content="Explore 8 B2B Data Vendors and how they support contact data, account intelligence, technographics, intent, buying groups, technology changes, and emerging GTM opportunities."
        />
        <meta
          name="keywords"
          content="B2B intelligence platforms, B2B data vendors, contact data, technographics, intent data, buying group intelligence, GTM platforms"
        />
        <meta name="author" content="ProPlus Data" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="8 B2B Data Vendors Reshaping Modern GTM | ProPlus Data" />
        <meta
          property="og:description"
          content="Explore 8 B2B Data Vendors and how they support contact data, account intelligence, technographics, intent, buying groups, technology changes, and emerging GTM opportunities."
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
        lead="Compare the intelligence layers behind 8 B2B data vendors & understand which GTM problem each is built to solve."
        markdown={b2bIntelligencePlatformsMarkdown}
        readingTime="17 MIN READ"
        heroArtwork="intelligence"
      />
      <aside className="ppd-b2b-related" aria-label="Related reading">
        <div className="ppd-b2b-related__inner">
          <span>RELATED READING</span>
          <h2>Want a closer look at technology intelligence?</h2>
          <p>Learn why technology stacks are better understood as timelines than static snapshots.</p>
          <a href="/what-if-your-technographic-data-is-already-outdated">
            What If Your Technographic Data Is Already Outdated? <span aria-hidden="true">→</span>
          </a>
        </div>
      </aside>
      <Footer />
    </div>
  );
}
