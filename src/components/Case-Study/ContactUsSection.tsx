import React from "react";
import { Typography } from "../template";
import { Button } from "../ui/button";

const ContactUsSection: React.FC = () => {
  return (
    <section className="flex gap-[24px] bg-[#F5F5F5] px-[16px] py-[64px] lg:px-[96px] lg:py-[100px]">
      <div className="flex w-full flex-col items-center gap-[32px] rounded-[16px] border border-[#D6D6D6] bg-white p-[24px] shadow-[0px_2px_4px_-1px_rgba(20,21,26,0.06)] lg:flex-row lg:justify-between lg:py-[32px] lg:pl-[48px] lg:pr-[32px]">
        <div className="flex items-center gap-[24px] lg:w-[746.5px] lg:gap-[40px]">
          <div className="hidden rounded-full border-[9px] border-[#BBF7D0] bg-[#22C55E] p-[8px] lg:flex"></div>
          <div>
            <Typography
              variant="H4SemiBold40"
              className="text-center text-[32px]/[40px] uppercase text-[#062236]"
            >
              GET STARTED WITH AN INTRO CALL
            </Typography>
          </div>
        </div>
        <div className="w-full md:w-fit lg:w-fit">
          <Button
            variant={"primary"}
            className="flex w-full gap-[8px] rounded-full px-[24px] py-[12px] font-Barlow text-[20px]/[28px] font-semibold uppercase text-[#0A3D62]"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
