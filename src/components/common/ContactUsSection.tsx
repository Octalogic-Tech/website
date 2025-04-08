import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";

const ContactUsSection: React.FC = () => {
  return (
    <section className="flex gap-6 px-4 pb-16 md:px-24 md:pb-36">
      <div className="mx-auto flex h-[350px] w-[1248px] flex-col items-center justify-center gap-[36px] rounded-[24px] border border-[#60E3CF] bg-white px-[16px] py-[48px]">
        <Typography variant="H3SemiBold48" className="text-center uppercase text-[#0A3D62]">
          GET STARTED WITH AN INTRO CALL
        </Typography>
        <a href={"/contact"}>
          <Button variant={"darkblue"} className="mt-2 p-6 uppercase">
            Book a Call
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactUsSection;
