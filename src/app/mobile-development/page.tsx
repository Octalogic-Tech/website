import Image from "next/image";

import Head from "@/components/head";
import Heading from "@/components/heading/heading";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Paragraph from "@/components/paragraph/paragraph";
import PillButton from "@/components/pill-button/pill-button";
import TechCard from "@/components/tech-card/tech-card";

import { MobileTechnologies } from "@/constants/technologies";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/mobile-development`;

const MobileDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Mobile Development" canonicalUrl={siteUrl} />
      <div className="sm:my-4 sm:mx-8 md:my-16 md:mx-12 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21">
        <Heading
          size="large"
          className="sm:text-center sm:leading-10 md:text-left max-w-7xl mx-auto"
        >
          Mobile Development
        </Heading>

        <div className="flex max-w-7xl mx-auto sm:flex items-center sm:flex-col-reverse md:flex md:flex-row justify-start md:gap-20 ">
          <div className="lg:max-w-3xl md:max-w-80">
            <Paragraph className="max-w-3xl sm:text-xl sm:mt-0 md:text-base lg:text-2xl">
              Through design and development we laid the foundation for products that are visually
              pleasing and have an intuitive user experience.
            </Paragraph>
          </div>
          <div className="sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/mobile-dev-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="h-60 sm:h-52 sm:my-8 md:my-0"
            />
          </div>
        </div>
        <Heading
          size="large"
          className=" sm:text-center md:text-left sm:leading-10 max-w-7xl mx-auto mt-12"
        >
          Technologies We Work With
        </Heading>
        <Paragraph className="mt-8 sm:text-xl md:text-base lg:text-2xl">
          Our mobile developer team has a diverse toolbox of specialties that can fit your unique
          project.
        </Paragraph>
        <div className="grid justify-center max-w-screen-xl mx-auto mt-12 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
          {MobileTechnologies.map((tech) => (
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
    </>
  );
};

export default MobileDevelopment;
