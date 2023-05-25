import {
  NextSeo,
  LogoJsonLd,
  SocialProfileJsonLd,
  OrganizationJsonLd,
  LocalBusinessJsonLd,
} from "next-seo";
import NextHeader from "next/head";

import { host, isLive } from "../../config/vars";

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
  openGraphParams = null,
}) => (
  <>
    <NextSeo
      title={title}
      noindex={!isLive}
      nofollow={!isLive}
      description={description}
      canonical={canonicalUrl.replace(/\/$/, "")} // remove slash at the end
      twitter={{
        handle: "@OctalogicTech",
        site: "@OctalogicTech",
        cardType: "summary_large_image",
      }}
      openGraph={
        openGraphParams || {
          type: "website",
          url: siteUrl,
          title,
          description,
          images,
        }
      }
    />
    <LogoJsonLd logo="/images/logos/O-Only.png" url={siteUrl} />
    <SocialProfileJsonLd
      type="Organization"
      name="Octalogic Tech"
      url={siteUrl}
      sameAs={[
        "https://www.instagram.com/octalogic.tech",
        "https://twitter.com/octalogictech",
        "https://www.facebook.com/octalogic.tech",
        "https://www.google.co.in/search?q=octalogic+tech+goa",
        "https://in.linkedin.com/company/octalogic",
      ]}
    />

    <OrganizationJsonLd
      type="Corporation"
      id={siteUrl}
      logo={`${siteUrl}/images/logos/O-Only.png`}
      legalName="Octalogic Tech"
      name="Octalogic Tech"
      address={{
        streetAddress: "3rd Floor, Sunivas Building, St. Inez",
        addressLocality: "Panjim",
        addressRegion: "Goa",
        postalCode: "403001",
        addressCountry: "IN",
      }}
      contactPoint={[
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
      ]}
      sameAs={[`https://www.${host}`]}
      url={siteUrl}
    />

    <LocalBusinessJsonLd
      type="Store"
      id={siteUrl}
      name="Octalogic Tech"
      description={DESCRIPTION}
      url={siteUrl}
      telephone="+917030518285"
      address={{
        streetAddress: "3rd Floor, Sunivas Building, St. Inez",
        addressLocality: "Panjim",
        addressRegion: "Goa",
        postalCode: "403001",
        addressCountry: "IN",
      }}
      geo={{
        latitude: "15.493179",
        longitude: "73.8193395",
      }}
      images={[`${siteUrl}/images/logos/O-Only.png`]}
      sameAs={[`https://www.${host}`]}
      openingHours={[
        {
          opens: "10:00",
          closes: "18:00",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          validFrom: "2017-01-01",
          validThrough: "2070-01-01",
        },
      ]}
    />

    <NextHeader>
      <link rel="icon" href="/images/favicon/favicon.ico" />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
    </NextHeader>
  </>
);

export default Head;
