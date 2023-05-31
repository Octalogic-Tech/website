"use client";

import Image from "next/image";

import Head from "../../src/components/head";
import Heading from "../../src/components/heading/heading";
import HorizontalRule from "../../src/components/horizontal-rule/horizontal-rule";
import Paragraph from "../../src/components/paragraph/paragraph";
import PillButton from "../../src/components/pill-button/pill-button";
import TechCard from "../../src/components/tech-card/tech-card";

import { MobileTechnologies } from "../../src/constants/technologies";

import { host } from "../../src/config/vars";

const siteUrl = `https://${host}/mobile-development`;

const MobileDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Mobile Development" canonicalUrl={siteUrl} />
      <div className="sm:my-[1rem] sm:mx-[2rem] md:my-[4rem] md:mx-[3rem] lg:ml-[7rem] lg:mr-[7rem] xl:mt-[5.25rem] xl:mb-[5.25rem]">
        <Heading
          size="large"
          className="sm:text-center sm:leading-10 md:text-left max-w-[86rem] mx-auto"
        >
          Mobile Development
        </Heading>

        <div className="flex max-w-[86rem] mx-auto sm:flex items-center sm:flex-col-reverse md:flex md:flex-row justify-start md:gap-20 ">
          <div className="lg:max-w-[46rem] md:max-w-[20rem]">
            <Paragraph className="max-w-[46rem] sm:text-[1.4rem] sm:leading-[1.8rem] sm:mt-0 md:text-[1rem] md:leading-[1.4rem]  lg:text-[1.8rem] lg:leading-8 xl:text-[1.3rem]">
              Through design and development we laid the foundation for products that are visually
              pleasing and have an intuitive user experience.
            </Paragraph>
          </div>
          <div className="sm:mb-0  md:pt-0 lg:mb-[2rem] xl:mb-0 flex justify-center">
            <Image
              src="/images/mobile-dev-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="h-[300px]  sm:h-[200px] md:h-[180px] sm:my-8 md:my-0"
            />
          </div>
        </div>
        <Heading
          size="large"
          className=" sm:text-center md:text-left sm:leading-10 max-w-[86rem] mx-auto mt-12"
        >
          Technologies We Work With
        </Heading>
        <Paragraph className="mt-[2rem] sm:text-[1.4rem] sm:leading-[1.8rem] md:text-[1rem] md:leading-[1.4rem] lg:text-[1.8rem] lg:leading-[2rem] xl:text-[1.3rem]">
          Our mobile developer team has a diverse toolbox of specialties that can fit your unique
          project.
        </Paragraph>
        <div className="grid justify-center max-w-screen-xl mx-auto mt-12 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
          {MobileTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </div>
        <div className="mt-[8rem]">
          <Heading size="large" className="mb-[0.5rem] text-center">
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
