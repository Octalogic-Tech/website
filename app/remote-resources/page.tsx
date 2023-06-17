"use client";

import Image from "next/image";

import Head from "../../src/components/head";
import Heading from "../../src/components/heading/heading";
import HorizontalRule from "../../src/components/horizontal-rule/horizontal-rule";
import Paragraph from "../../src/components/paragraph/paragraph";
import PillButton from "../../src/components/pill-button/pill-button";
import RemoteCard from "../../src/components/remote-card/remote-card";

import { RemoteServices } from "../../src/constants/technologies";

import { host } from "../../src/config/vars";

const siteUrl = `https://${host}/remote-resources`;

const MobileDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Remote Resources" canonicalUrl={siteUrl} />
      <div className="sm:my-4 sm:mx-8 md:my-[4rem] md:mx-12 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21">
        <Heading
          size="large"
          className="max-w-7xl mx-auto mb-8 sm:text-center sm:text-2xl md:text-left"
        >
          Remote Resources
        </Heading>
        <div className="flex max-w-7xl mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row justify-start md:gap-20 ">
          <div className="lg:max-w-3xl md:max-w-80">
            <Paragraph className="max-w-3xl sm:text-xl sm:mt-0 md:text-base lg:text-2xl">
              {`We are a turnkey offshore development company providing custom software development
              and remote team services for clients across the globe while ensuring it doesn't cost
              them a fortune.`}
            </Paragraph>
          </div>
          <div className="sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/remote-resources-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="h-60  sm:h-52 sm:my-8 md:my-0"
            />
          </div>
        </div>
        <Heading size="large" className="max-w-7xl mx-auto mb-4 sm:mt-8">
          Areas of Expertise
        </Heading>
        <Paragraph className="max-w-3xl sm:text-xl sm:mt-0 md:text-base lg:text-2xl ">
          Our clients work directly with us without any middlemen, which is very effective and
          economical
        </Paragraph>
        <div className="grid justify-center max-w-screen-xl mx-auto mt-12   md:grid md:grid-cols-3  lg:grid lg:grid-cols-3 ">
          {RemoteServices.map((service) => (
            <RemoteCard key={service.name} details={service} />
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
    </>
  );
};

export default MobileDevelopment;
