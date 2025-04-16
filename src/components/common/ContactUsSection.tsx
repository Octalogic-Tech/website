import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";

const ContactUsSection: React.FC = () => {
  return (
    <section className="flex min-h-[40vh] gap-6 bg-[#F5F5F5] px-4 py-12 md:px-12 md:py-16">
      <div className="flex w-full flex-col items-center gap-8 rounded-[16px] border border-[#D6D6D6] bg-white p-6 md:flex-row md:justify-between md:px-8 md:py-8">
        <div className="flex w-full items-center gap-8 md:w-[50%]">
          <div className="hidden rounded-full border-[9px] border-[#BBF7D0] bg-[#22C55E] p-[8px] lg:flex"></div>
          <Typography variant="H4SemiBold40" className="text-center uppercase text-[#062236]">
            GET STARTED WITH AN INTRO CALL
          </Typography>
        </div>
        <div className="flex w-full justify-end md:w-[50%]">
          <Button variant="primary" className="w-full rounded-full p-6 py-7 md:w-fit" asChild>
            <a href={"hiring"}>
              <Typography
                variant="H6Regular24"
                className="uppercase tracking-tighter text-[#0A3D62]"
              >
                book a call
              </Typography>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
