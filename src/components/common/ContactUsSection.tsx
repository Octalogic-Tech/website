import React from "react";
import { Typography } from "../common/template";
import { Button } from "../ui/button";

const ContactUsSection: React.FC = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center gap-6 px-4 md:items-start">
      <div className="mx-auto flex h-[40vh] w-[90%] flex-col items-center justify-center gap-6 rounded-3xl border border-[#60E3CF] bg-white px-[16px] py-[48px]">
        <Typography
          variant="H3SemiBold48"
          className="max-w-[80%]text-center uppercase text-[#0A3D62]"
        >
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
