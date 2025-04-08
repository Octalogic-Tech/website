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
    <section className="flex flex-col gap-[24px] px-[16px] md:px-[96px]">
      <div className="flex flex-col gap-[32px] pb-[24px] pt-[100px]">
        <div className="flex flex-col gap-[72px]">
          {/* navigation part */}
          <div className="flex h-full flex-col justify-between gap-[58px] text-[#292929] md:flex-row">
            <div className="max-w-[1426px] md:max-w-[1426px]">
              <div className="flex h-[138px] flex-col justify-between md:h-full">
                <div className="flex flex-col gap-[16px]">
                  {/* image tag */}
                  <div className="h-[32px] w-[132.16px] overflow-hidden">
                    <img src="mainLogo.png" alt="Logo" />
                  </div>
                  <div className="flex items-center gap-[10px] text-[#292929]">
                    {locations.map((location, index) => (
                      <React.Fragment key={location}>
                        <div>
                          <Typography variant="CaptionMMedium12">{location}</Typography>
                        </div>
                        {index < locations.length - 1 && (
                          <div className="h-[4.8px] w-[4.8px] rounded-full bg-[#60E3CF]" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                {/* logos */}
                <div className="flex gap-[8px]">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} className="rounded-sm">
                      <img src={social.imgSrc} alt={social.name} width={24} height={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* links */}
            <div className="flex gap-[64px] text-[14px]/[20px] text-[#0A3D62]">
              {navigationLinks.map((section) => (
                <div key={section.title} className="flex flex-col gap-[16px]">
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
          {/* line  */}
          <div className="h-[1px] w-full rounded-[50px] bg-[#D6D6D6]"></div>
        </div>

        {/* bottom part */}
        <div className="flex flex-col items-center gap-[24px] text-center text-[12px]/[16px] text-[#737373] md:flex-row md:justify-between">
          <div>
            <Typography variant="CaptionMMedium14">
              © {new Date().getFullYear()} Octalogic - We build platforms that scale fast
            </Typography>
          </div>
          <div className="flex gap-[8px]">
            <div>
              <Typography variant="CaptionMMedium14">Crafted Mindfully at</Typography>
            </div>
            <div className="height-[24px] w-[103.5px] object-contain">
              {/* <img className="" src="img-1.jpg" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
