import { Metadata } from "next";
import Image from "next/image";

import Heading from "@/components/heading/heading";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Paragraph from "@/components/paragraph/paragraph";
import PillButton from "@/components/pill-button/pill-button";
import TechCard from "@/components/tech-card/tech-card";

import { WebTechnologies } from "@/constants/technologies";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/web-development`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Web Development",
  alternates: { canonical: siteUrl },
};

const WebDevelopment = () => {
  return (
    <div className="sm:my-4 sm:mx-8 md:my-16 md:mx-12 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21">
      <Heading size="large" className="max-w-7xl mx-auto sm:text-center md:text-left ">
        Web Development
      </Heading>
      <div className="flex sm:flex sm:flex-col-reverse md:flex md:flex-row ">
        <div className="flex flex-col w-3/5 sm:mb-0 xl:mb-12 sm:w-full">
          <Paragraph className="max-w-3xl sm:mt-0 md:mt-12 sm:text-xl md:text-base  lg:text-2xl">
            Working alongside our mobile app team gives us the added benefit of creating seamless
            mobile-first experiences and delivering fully-featured web apps.
          </Paragraph>
          <Paragraph className="max-w-3xl sm:w-full sm:mt-4 md:mt-12 sm:text-xl md:text-base lg:text-2xl ">
            We’re experienced in both front-end and backend infrastructure and offer comprehensive
            solutions to fit the needs of our clients.
          </Paragraph>
        </div>
        <div className="w-2/5 sm:w-full sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
          <Image
            src="/images/web_dev_hero_image.svg"
            alt="Octalogic Tech"
            width={100}
            height={100}
            className="h-60  sm:h-52  w-full  sm:my-8"
          />
        </div>
      </div>
      <Heading size="large" className="max-w-7xl mx-auto mt-8 sm:text-center md:text-left sm:mb-4">
        Technologies We Work With
      </Heading>
      <Paragraph className="max-w-7xl mx-auto  sm:text-xl md:text-base  lg:text-2xl">
        We make ultra-optimized, fast loading web apps that ensure delightful user experience across
        a variety of devices using all the tools at our disposal.
      </Paragraph>
      <div className="grid justify-center max-w-screen-xl mx-auto mt-12 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
        {WebTechnologies.map((tech) => (
          <TechCard key={tech.name} details={tech} />
        ))}
      </div>
      <div className="mt-32">
        <Heading size="large" className="mb-2 text-center">
          Let&apos;s craft brilliance together!
        </Heading>
        <div className="mt-12 text-center">
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </div>
      </div>
      <HorizontalRule />
    </div>
  );
};

export default WebDevelopment;
