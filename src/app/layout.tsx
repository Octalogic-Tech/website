// eslint-disable-next-line import/no-unassigned-import
import "./globals.css";
import { Metadata } from "next";
import { Comfortaa } from "next/font/google";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { host, isLive } from "@/config/vars";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "sans-serif"],
});

const siteUrl = `https://${host}`;
const images = [
  {
    url: `/images/logos/O-Only.png`,
    alt: "Octalogic Tech",
    type: "image/png",
    width: 300,
    height: 300,
  },
];
const title = "Octalogic Tech - Offshore Mobile & Web Development";
const description =
  "Octalogic Tech provides offshore mobile & web development along with remote team capabilities. We specialise in custom Web Apps, Cross Platform Mobile Apps and Websites.";
const jsonLd = {
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
      description,
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
          telephone: "+919096302367",
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
          telephone: "+919923358164",
          contactType: "technical support",
          email: "jude@octalogic.in",
          areaServed: ["US", "Dubai", "Asia"],
          availableLanguage: ["English", "Hindi", "Konkani"],
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  icons: [
    { rel: "icon", url: "/images/favicon/favicon.ico" },
    { rel: "shortcut icon", url: "/images/favicon/favicon.ico" },
    {
      rel: "image/png",
      sizes: "16x16",
      url: "/images/favicon/favicon-16x16.png",
    },
    {
      rel: "image/png",
      sizes: "32x32",
      url: "/images/favicon/favicon-32x32.png",
    },
  ],
  robots: { index: isLive, follow: isLive },
  alternates: { canonical: siteUrl.replace(/\/$/, "") },
  twitter: {
    card: "summary_large_image",
    site: "@OctalogicTech",
    title,
    description,
    creator: "@OctalogicTech",
  },
  openGraph: {
    type: "website",
    title,
    description,
    url: siteUrl,
    images,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
