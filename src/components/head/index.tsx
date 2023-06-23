// "use client";

// import {
//   NextSeo,
//   LogoJsonLd,
//   SocialProfileJsonLd,
//   OrganizationJsonLd,
//   LocalBusinessJsonLd,
// } from "next-seo";
import NextHead from "next/head";

import { host, isLive } from "@/config/vars";

const siteUrl = `https://${host}`;

const DESCRIPTION =
  "Octalogic Tech provides offshore mobile & web development along with remote team capabilities. We specialise in custom Web Apps, Cross Platform Mobile Apps and Websites.";

const Head = ({
  title = "Octalogic Tech - Offshore Mobile & Web Development",
  description = DESCRIPTION,
  images = [
    {
      url: `/images/logos/O-Only.png`,
      alt: "Octalogic Tech",
      type: "image/png",
      width: 300,
      height: 300,
    },
  ],
  canonicalUrl = siteUrl,
  openGraphParams = {
    type: null,
    siteUrl: null,
    title: null,
    description: null,
    images: [],
  },
}) => (
  <NextHead>
    {/* Favicon links */}
    <link rel="icon" href="/images/favicon/favicon.ico" />
    <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />

    {/* SEO data */}
    <title>{title}</title>
    <meta name="robots" content={`${!isLive ? "noindex,nofollow" : "index,follow"}`} />
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalUrl.replace(/\/$/, "")} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@OctalogicTech" />
    <meta name="twitter:creator" content="@OctalogicTech" />
    <meta property="og:type" content={openGraphParams.type || "website"} />
    <meta property="og:title" content={openGraphParams.title || title} />
    <meta property="og:description" content={openGraphParams.description || description} />
    <meta property="og:url" content={openGraphParams.siteUrl || siteUrl} />
    {openGraphParams.images.length > 0
      ? openGraphParams.images.map((image: any, index: number) => (
          <meta key={index} property="og:image" content={image} />
        ))
      : images.map((image: any, index: number) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}

    {/* JSON-LD structured data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            // LogoJsonLd structured data
            {
              "@type": "Organization",
              url: siteUrl,
              logo: `${siteUrl}/images/logos/O-Only.png`,
            },
            // SocialProfileJsonLd structured data
            {
              "@type": "Organization",
              name: "Octalogic Tech",
              url: siteUrl,
              sameAs: [
                "https://www.instagram.com/octalogic.tech",
                "https://twitter.com/octalogictech",
                "https://www.facebook.com/octalogic.tech",
                "https://www.google.co.in/search?q=octalogic+tech+goa",
                "https://in.linkedin.com/company/octalogic",
              ],
            },
            // OrganizationJsonLd and LocalBusinessJsonLd structured data
            {
              "@type": "LocalBusiness",
              "@id": siteUrl,
              name: "Octalogic Tech",
              description: DESCRIPTION,
              url: siteUrl,
              telephone: "+917030518285",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, Sunivas Building, St. Inez",
                addressLocality: "Panjim",
                addressRegion: "Goa",
                postalCode: "403001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "15.493179",
                longitude: "73.8193395",
              },
              image: `${siteUrl}/images/logos/O-Only.png`,
              sameAs: [`https://www.${host}`],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                  validFrom: "2017-01-01",
                  validThrough: "2070-01-01",
                },
              ],
              contactPoint: [
                {
                  telephone: "+919561007591",
                  contactType: "technical and finance support",
                  email: "carlton@octalogic.in",
                  areaServed: ["Dubai", "India"],
                  availableLanguage: ["English", "Hindi", "Konkani"],
                },
                {
                  telephone: "+917030518285",
                  contactType: "technical and finance support",
                  email: "tanushree@octalogic.in",
                  areaServed: ["India", "Dubai"],
                  availableLanguage: ["English", "Hindi", "Konkani"],
                },
                {
                  telephone: "+919561007591",
                  contactType: "technical support",
                  email: "glenn@octalogic.in",
                  areaServed: ["US", "India", "Dubai", "Africa"],
                  availableLanguage: ["English", "Hindi", "Konkani"],
                },
                {
                  telephone: "+918830669189",
                  contactType: "technical support",
                  email: "jude@octalogic.in",
                  areaServed: ["US", "Dubai", "Asia"],
                  availableLanguage: ["English", "Hindi", "Konkani"],
                },
              ],
            },
          ],
        }),
      }}
    />
  </NextHead>
);

export default Head;
