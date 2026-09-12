import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, canonicalUrl, ogType = "website", schemaData }) {
  const defaultTitle = "Revenue Chiefs — India's Premier Revenue Leaders Circle";
  const defaultDesc = "A private, invite-only community for India's CROs, VPs of Sales, Directors, and Founders driving revenue growth across enterprises.";
  const siteUrl = "https://revenuechiefs.org";

  const fullTitle = title ? `${title} | Revenue Chiefs` : defaultTitle;
  const fullDesc = description || defaultDesc;
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDesc} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDesc} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${siteUrl}/logo.jpeg`} />
      <meta property="og:site_name" content="Revenue Chiefs" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDesc} />
      <meta name="twitter:image" content={`${siteUrl}/logo.jpeg`} />

      {/* Structured Data / JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
