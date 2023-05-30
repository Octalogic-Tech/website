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
          className="max-w-[86rem] mx-auto mb-4 sm:text-center sm:text-[rem] md:text-left"
        >
          Remote Resources
        </Heading>
        <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row justify-start md:gap-20 ">
          <div className="lg:max-w-[46rem] md:max-w-[20rem]">
            <Paragraph className="max-w-[46rem] sm:text-[1.4rem] sm:leading-[1.8rem] sm:mt-0 md:text-[1rem] md:leading-[1.4rem]  lg:text-[1.8rem] lg:leading-8 xl:text-[1.3rem]">
              {`We are a turnkey offshore development company providing custom software development
              and remote team services for clients across the globe while ensuring it doesn't cost
              them a fortune.`}
            </Paragraph>
          </div>
          <div className="sm:mb-0  md:pt-0 lg:mb-[2rem] xl:mb-0 flex justify-center">
            <Image
              src="/images/remote-resources-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="h-[300px]  sm:h-[200px] md:h-[180px] sm:my-8 md:my-0"
            />
          </div>
        </div>
        <Heading size="large" className="max-w-[86rem] mx-auto mb-4 sm:mt-8">
          Areas of Expertise
        </Heading>
        <Paragraph className="max-w-[46rem] sm:text-[1.4rem] sm:leading-[1.8rem] sm:mt-0 md:text-[1rem] md:leading-[1.4rem] lg:text-[1.8rem] lg:leading-8 xl:text-[1.3rem]">
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
