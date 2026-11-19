import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  knownPublicPaths,
  noIndexPaths,
  pageMetadata,
  servicePages,
  SITE_URL,
  SOCIAL_IMAGE,
} from "../seo/seoConfig";

const canonicalAliases = { "/contact": "/contact-us" };
const articlePaths = new Set([
  "/blog1details", "/blog2details", "/blog3details", "/blog4details", "/blog5details",
  "/strategic-imperative-of-renewal-timings-mastering-the-100-day-advantage",
  "/renewal-are-the-arr-4-smart-ways-to-build-drive-growth-with-renewal-intelligence",
  "/how-renewal-intelligence-win-against-the-odd", "/turning-your-competitors-customers-into-your-growth-engine",
  "/how-technographics-drive-smarter-gtm-abm-and-competitive-advantage",
  "/why-technographics-is-the-secret-ingredient-to-precision-messaging",
  "/how-enterprise-will-build-predictable-growth-in-an-uncertain-market",
  "/the-new-rules-of-b2b-audience-penetration-for-2026",
  "/will-expansion-revenue-overtake-net-new-acquisition-in-2026",
  "/b2b-intent-data-vs-traditional-lead-scoring",
  "/how-predictive-intelligence-is-transforming-b2b-demand-generation",
  "/when-does-a-revenue-opportunity-begin", "/2027-gtm-planning-guide", "/10-b2b-gtm-trends-2027",
  "/b2b-intelligence-platforms-reshaping-gtm", "/what-if-your-technographic-data-is-already-outdated",
]);

const normalizePath = (pathname) => {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
};

const formatRouteTitle = (routePath) => routePath
  .split("/")
  .filter(Boolean)
  .flatMap((segment) => segment.split("-"))
  .map((word) => ({ b2b: "B2B", gtm: "GTM", abm: "ABM" }[word] || `${word[0].toUpperCase()}${word.slice(1)}`))
  .join(" ");

export default function RouteSeo() {
  const { pathname } = useLocation();
  const [liveTitle, setLiveTitle] = useState("");
  const [liveDescription, setLiveDescription] = useState("");
  const routePath = normalizePath(pathname);
  const canonicalPath = canonicalAliases[routePath] || routePath;
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const metadata = pageMetadata[canonicalPath];
  const service = servicePages[canonicalPath];
  const isNoIndex = noIndexPaths.has(routePath);
  const title = metadata?.title || (isNoIndex
    ? `${formatRouteTitle(routePath)} | ProPlus Data`
    : (routePath === "/" || liveTitle !== pageMetadata["/"].title ? liveTitle : ""));
  const description = noIndexPaths.has(routePath)
    ? ""
    : metadata?.description || (routePath === "/" || liveDescription !== pageMetadata["/"].description ? liveDescription : "");

  useEffect(() => {
    if (!knownPublicPaths.has(routePath) && !noIndexPaths.has(routePath) && routePath !== "/contact") {
      return undefined;
    }

    const syncHeadMetadata = () => {
      const currentTitle = document.title;
      const descriptionElement = document.querySelector('meta[name="description"]:not([data-route-seo])');
      const currentDescription = descriptionElement?.content || "";
      setLiveTitle((previous) => previous === currentTitle ? previous : currentTitle);
      setLiveDescription((previous) => previous === currentDescription ? previous : currentDescription);
    };

    syncHeadMetadata();
    const observer = new MutationObserver(syncHeadMetadata);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true });
    return () => observer.disconnect();
  }, [routePath]);

  if (!knownPublicPaths.has(routePath) && !noIndexPaths.has(routePath) && routePath !== "/contact") {
    return null;
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} data-route-seo="true" />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={articlePaths.has(canonicalPath) ? "article" : "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ProPlus Data" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:alt" content="ProPlus Data B2B data intelligence: technographics, intent, contact, and renewal insights" />
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      {noIndexPaths.has(routePath) && <meta name="robots" content="noindex,follow" />}
      {service && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${canonicalUrl}#service`,
            name: service.name,
            description: service.description,
            serviceType: service.serviceType,
            url: canonicalUrl,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "Place", name: "Worldwide" },
          })}
        </script>
      )}
      {articlePaths.has(canonicalPath) && title && description && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "en",
          })}
        </script>
      )}
      {canonicalPath === "/contact-us" && metadata && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: "Contact ProPlus Data",
            description: metadata.description,
            isPartOf: { "@id": `${SITE_URL}/#website` },
          })}
        </script>
      )}
    </Helmet>
  );
}
