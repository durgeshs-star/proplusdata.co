import React from "react";
import { Helmet } from "react-helmet-async";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import RevenueOpportunityArticle, {
  planningGuideMarkdown,
  planningGuideTitle,
} from "../components/RevenueOpportunityArticle";

export default function GtmPlanningGuide2027() {
  return (
    <div>
      <Helmet>
        <title>{planningGuideTitle} | ProPlus Data</title>
        <meta
          name="description"
          content="A practical 2027 GTM planning guide for B2B leaders. Reassess ICP fit, account timing, revenue-plan assumptions, market change, and what your team measures."
        />
        <meta name="keywords" content="2027 GTM planning, B2B GTM strategy, account prioritization, ideal customer profile, revenue planning, market intelligence" />
        <meta name="author" content="ProPlus Data" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${planningGuideTitle} | ProPlus Data`} />
        <meta
          property="og:description"
          content="Reassess your ICP, account timing, revenue-plan assumptions, and market intelligence before finalizing your 2027 GTM strategy."
        />
        <link rel="canonical" href="https://proplusdata.co/2027-gtm-planning-guide" />
      </Helmet>
      <Header1 />
      <RevenueOpportunityArticle
        title={planningGuideTitle}
        kicker="A PRACTICAL GUIDE FOR B2B LEADERS"
        lead="Before you lock next year's plan, reassess the assumptions behind it—and the market you are actually entering."
        markdown={planningGuideMarkdown}
        readingTime="8 MIN READ"
        heroArtwork="planning"
      />
      <Footer />
    </div>
  );
}
