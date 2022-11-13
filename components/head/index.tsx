import { NextSeo, LogoJsonLd, SocialProfileJsonLd } from "next-seo";
import NextHeader from "next/head";

import { host, isLive } from "../../config/vars";

const siteUrl = `https://${host}`;

const Head = ({
  title = "Octalogic Tech - Offshore Mobile & Web Development",
  description = "Octalogic Tech provides offshore mobile & web development along with remote team capabilities. We specialise in custom Web Apps, Cross Platform Mobile Apps and Websites.",
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
    <NextHeader>
      <link rel="icon" href="/images/favicon/favicon.ico" />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
    </NextHeader>
  </>
);

export default Head;
