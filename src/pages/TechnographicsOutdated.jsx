import React from "react";
import { Helmet } from "react-helmet-async";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";
import RevenueOpportunityArticle from "../components/RevenueOpportunityArticle";
import technographicsOutdatedMarkdown, {
  technographicsOutdatedTitle,
} from "../components/technographicsOutdatedContent";

export default function TechnographicsOutdated() {
  return (
    <div>
      <Helmet>
        <title>{technographicsOutdatedTitle} | ProPlus Data</title>
        <meta
          name="description"
          content="A look at static technographic snapshots, technology adoption timelines, detection dates, and why meaningful change matters to B2B GTM teams."
        />
        <meta
          name="keywords"
          content="technographic data, technology intelligence, technographic data freshness, technology change, B2B GTM strategy"
        />
        <meta name="author" content="ProPlus Data" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${technographicsOutdatedTitle} | ProPlus Data`} />
        <meta
          property="og:description"
          content="Why technology stacks are better understood as timelines than static profiles, and how change adds context to technographic data."
        />
        <link
          rel="canonical"
          href="https://proplusdata.co/what-if-your-technographic-data-is-already-outdated"
        />
      </Helmet>
      <Header1 />
      <RevenueOpportunityArticle
        title={technographicsOutdatedTitle}
        kicker="TECHNOLOGY INTELLIGENCE"
        lead="A static technology list is a snapshot. A timeline can show what changed, when it changed, and why it may matter."
        markdown={technographicsOutdatedMarkdown}
        readingTime="7 MIN READ"
        heroArtwork="techTimeline"
      />
      <Footer />
    </div>
  );
}
