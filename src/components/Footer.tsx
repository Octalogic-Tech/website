import React from "react";
import { Typography } from "./template";

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col gap-[24px] px-[16px] lg:px-[96px]">
      <div className="flex flex-col gap-[32px] pb-[24px] pt-[100px]">
        <div className="flex flex-col gap-[72px]">
          {/* navigation part */}
          <div className="flex h-full flex-col justify-between gap-[58px] text-[#292929] md:flex-row lg:flex-row">
            <div className="max-w-[1426px] lg:max-w-[1426px]">
              <div className="flex h-[138px] flex-col justify-between lg:h-full">
                <div className="flex flex-col gap-[16px]">
                  {/* image tag */}
                  <div className="h-[32px] w-[132.16px] overflow-hidden">
                    <img src="img-1.jpg" alt="" />
                  </div>
                  <div className="flex items-center gap-[10px] text-[#292929]">
                    <div>
                      <Typography variant="CaptionMMedium12">Location 1</Typography>
                    </div>
                    <div className="h-[4.8px] w-[4.8px] rounded-full bg-[#60E3CF]"></div>
                    <div>
                      <Typography variant="CaptionMMedium12">Location 2</Typography>
                    </div>
                    <div className="h-[4.8px] w-[4.8px] rounded-full bg-[#60E3CF]"></div>
                    <div>
                      <Typography variant="CaptionMMedium12">Location 3</Typography>
                    </div>
                  </div>
                </div>
                {/* logos */}
                <div className="flex gap-[8px]">
                  {/* linkedin */}
                  <div className="rounded-sm bg-[#292929]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  {/* tweeter */}
                  <div className="rounded-sm bg-[#292929]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </div>
                  {/* instagram */}
                  <div className="rounded-sm bg-[#292929]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  {/* facebook */}
                  <div className="rounded-sm bg-[#292929]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* links */}
            <div className="flex gap-[64px] text-[14px]/[20px] text-[#292929]">
              {/* one set of links */}
              <div className="flex flex-col gap-[16px]">
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Home</a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>About Us</a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Services</a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Portfolio</a>
                  </Typography>
                </div>
              </div>

              {/* second set of links */}
              <div className="flex flex-col gap-[16px]">
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Case Studies</a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Blog</a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Contact Us</a>
                  </Typography>
                </div>
                <div>
                  <Typography variant="CaptionLMedium14">
                    <a>Careers</a>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          {/* line  */}
          <div className="h-[1px] w-full rounded-[50px] bg-[#D6D6D6]"></div>
        </div>

        {/* bottom part */}
        <div className="flex flex-col items-center gap-[24px] text-center text-[12px]/[16px] text-[#737373] md:flex-row md:justify-between lg:flex-row lg:justify-between">
          <div>
            <Typography variant="CaptionLMedium14">
              © 2024 Octalogic - We build platforms that scale fast
            </Typography>
          </div>
          <div className="flex gap-[8px]">
            <div>
              <Typography variant="CaptionLMedium14">Crafted Mindfully at</Typography>
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
