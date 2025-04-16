import React from "react";
import { Typography } from "./template";

const Footer: React.FC = () => {
  const locations = ["Location 1", "Location 2", "Location 3"];

  const socialLinks = [
    {
      name: "linkedin",
      href: "#",
      imgSrc: "linkedin.png",
    },
    {
      name: "twitter",
      href: "#",
      imgSrc: "twitter.png",
    },
    {
      name: "instagram",
      href: "#",
      imgSrc: "instagram.png",
    },
    {
      name: "facebook",
      href: "#",
      imgSrc: "facebook.png",
    },
  ];

  const navigationLinks = [
    {
      title: "Main Links",
      links: [
        { name: "Home", href: "/", variant: "CaptionMMedium14" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
      ],
    },
    {
      title: "Other Links",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
        { name: "Careers", href: "/careers" },
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-6 px-4 md:px-4">
      <div className="flex flex-col gap-8 pb-6 pt-20">
        <div className="flex flex-col gap-16">
          <div className="flex h-full flex-col justify-between gap-16 text-[#292929] md:flex-row">
            <div>
              <div className="flex flex-col justify-between gap-12">
                <div className="flex flex-col gap-4">
                  <div className="w-36 overflow-hidden">
                    <img src="mainLogo.png" alt="Logo" />
                  </div>
                  <div className="flex items-center gap-2 text-[#292929]">
                    {locations.map((location, index) => (
                      <React.Fragment key={location}>
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
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="rounded-sm">
                      <img src={social.imgSrc} alt={social.name} width={24} height={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-16 text-[##292929]">
              {navigationLinks.map((section) => (
                <div key={section.title} className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <div key={link.name}>
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
            <Typography variant="CaptionMMedium12">
              © {new Date().getFullYear()} Octalogic - We build platforms that scale fast
            </Typography>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div>
              <Typography variant="CaptionMMedium12">Crafted Mindfully at</Typography>
            </div>
            <div className="w-[20vw] object-contain md:w-[5vw]">
              <img src="mainLogo.png" alt="Logo" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
