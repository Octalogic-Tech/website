import React from "react";
import { Typography } from "./template";
import DatoCmsImage from "./DatoCmsImage";

interface FooterData {
  logo: {
    alt: string;
    url: string;
    responsiveImage?: {
      srcSet: string;
      webpSrcSet: string;
      sizes: string;
      src: string;
      width: number;
      height: number;
      aspectRatio: number;
      alt: string;
      title: string;
      base64: string;
    };
  };
  locations: {
    name: string;
  }[];
  socialMediaLinks: {
    socialMediaLogo: {
      alt: string;
      url: string;
      responsiveImage?: {
        srcSet: string;
        webpSrcSet: string;
        sizes: string;
        src: string;
        width: number;
        height: number;
        aspectRatio: number;
        alt: string;
        title: string;
        base64: string;
      };
    };
    socialMediaLinks: string;
  }[];
  navlinks: {
    label: string;
    url: string;
  }[];
  copyrightText: string;
  creditsText: string;
  creditLogo: {
    alt: string;
    url: string;
    responsiveImage?: {
      srcSet: string;
      webpSrcSet: string;
      sizes: string;
      src: string;
      width: number;
      height: number;
      aspectRatio: number;
      alt: string;
      title: string;
      base64: string;
    };
  };
}

interface FooterProps {
  footerData?: FooterData;
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const locations = footerData?.locations?.map((loc) => loc.name);

  const socialLinks = footerData?.socialMediaLinks?.map((link) => ({
    name: link.socialMediaLogo.alt,
    href: link.socialMediaLinks,
    imgSrc: link.socialMediaLogo.url,
    responsiveImage: link.socialMediaLogo.responsiveImage,
  }));

  const mainLinks = footerData?.navlinks?.filter((_, index) => index < 4);

  const otherLinks = footerData?.navlinks?.filter((_, index) => index >= 4);

  const navigationLinks = [
    {
      title: "Main Links",
      links: mainLinks?.map((link) => ({ name: link.label, href: link.url })),
    },
    {
      title: "Other Links",
      links: otherLinks?.map((link) => ({ name: link.label, href: link.url })),
    },
  ];

  return (
    <section className="flex flex-col gap-6 px-4 md:px-16">
      <div className="flex flex-col gap-8 pb-6 pt-20">
        <div className="flex flex-col gap-16">
          <div className="flex h-full flex-col justify-between gap-16 text-[#292929] md:flex-row">
            <div>
              <div className="flex flex-col justify-between gap-12">
                <div className="flex flex-col gap-4">
                  <div className="w-full max-w-[150px]">
                    {footerData?.logo?.responsiveImage ? (
                      <DatoCmsImage data={footerData.logo} className="h-auto w-full object-cover" />
                    ) : (
                      <img
                        src={footerData?.logo?.url}
                        alt={footerData?.logo?.alt}
                        className="h-auto w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[#292929]">
                    {locations?.map((location, index) => (
                      <React.Fragment key={`location-${index}-${location}`}>
                        <div>
                          <Typography variant="CaptionMMedium12">{location}</Typography>
                        </div>
                        {index < locations.length - 1 && (
                          <div className="h-1 w-1 rounded-full bg-[#60E3CF]" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  {socialLinks?.map((social, index) => (
                    <a
                      key={`social-${index}-${social.name}`}
                      href={social.href}
                      className="rounded-sm"
                    >
                      {social.responsiveImage ? (
                        <DatoCmsImage
                          data={{
                            alt: social.name,
                            url: social.imgSrc,
                            responsiveImage: social.responsiveImage,
                          }}
                          className="h-6 w-6"
                        />
                      ) : (
                        <img src={social.imgSrc} alt={social.name} className="h-6 w-6" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-16 text-[#292929]">
              {navigationLinks.map((section, sectionIndex) => (
                <div
                  key={`section-${sectionIndex}-${section.title}`}
                  className="flex flex-col gap-4"
                >
                  {section?.links?.map((link, linkIndex) => (
                    <div key={`link-${sectionIndex}-${linkIndex}-${link.name}`}>
                      <Typography variant={"CaptionMMedium14"}>
                        <a href={link.href}>{link.name}</a>
                      </Typography>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#D6D6D6]"></div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center text-[#737373] md:flex-row md:justify-between">
          <div>
            <Typography variant="CaptionMMedium12">{footerData?.copyrightText}</Typography>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <Typography variant="CaptionMMedium12">{footerData?.creditsText}</Typography>
            </div>
            <div className="w-full max-w-[100px]">
              {footerData?.creditLogo?.responsiveImage ? (
                <DatoCmsImage data={footerData.creditLogo} className="h-auto w-full" />
              ) : (
                <img
                  src={footerData?.creditLogo?.url}
                  alt={footerData?.creditLogo?.alt}
                  className="h-auto w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
