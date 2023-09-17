import React from "react";
import { Metadata } from "next";

import Heading from "@/components/heading/heading";
import { ContactForm } from "@/components/contact-form/contact-form";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/contact`;
const apiUrl = `https://${host}/api/contact`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Contact",
  alternates: { canonical: siteUrl },
};

function ContactPage() {
  return (
    <div>
      <Heading size="large" className="mb-4 mt-[4.25rem] text-center text-[#26a69a]">
        Let&apos;s have a conversation
      </Heading>
      <p className="text-[16px] text-center opacity-80 mb-4 leading-6 text-[#212529]">
        info@octalogic.in &nbsp; | &nbsp; +91 7030518285
      </p>
      <p className="text-[16px] text-center opacity-80 mb-4 leading-6 text-[#212529]">
        3rd Floor, Sunivas Building, Near Taj Vivanta, St. Inez, Goa
      </p>
      <p className="w-3/5 text-[16px] text-center text-base mx-auto mb-4 leading-6 opacity-95 mt-6 text-[#212529]">
        Send us a message and we&apos;ll get in touch with you shortly to better understand your
        needs and brainstorm possible solutions.
      </p>
      <ContactForm apiUrl={apiUrl} />
      <div className="w-full pt-[43.478%] bg-no-repeat bg-cover bg-center bg-[url('/images/contact_background.svg')]"></div>
    </div>
  );
}

export default ContactPage;
