import React from "react";
import { Metadata } from "next";

import Paragraph from "@/components/paragraph/paragraph";
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
      <Heading size="large" className="mb-4 mt-16 text-center ">
        Let&apos;s have a conversation
      </Heading>
      <Paragraph className="text-xl text-center opacity-80 mb-4 leading-6">
        info@octalogic.in &nbsp; | &nbsp; +91 7030518285
      </Paragraph>
      <Paragraph className="text-xl text-center opacity-80 mb-4 leading-6">
        3rd Floor, Sunivas Building, Near Taj Vivanta, St. Inez, Goa
      </Paragraph>
      <Paragraph className="w-3/5 text-center text-base mx-auto mb-4 leading-6 opacity-95 mt-6">
        Send us a message and we&apos;ll get in touch with you shortly to better understand your
        needs and brainstorm possible solutions.
      </Paragraph>
      <ContactForm apiUrl={apiUrl} />
      <div className="w-full pt-[43.478%] bg-no-repeat bg-cover bg-center bg-[url('/images/contact_background.svg')]"></div>
    </div>
  );
}

export default ContactPage;
