import { Metadata } from "next";
import Image from "next/image";

import Heading from "@/components/heading/heading";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Paragraph from "@/components/paragraph/paragraph";
import PillButton from "@/components/pill-button/pill-button";
import TechCard from "@/components/tech-card/tech-card";

import { MobileTechnologies } from "@/constants/technologies";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/mobile-development`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Mobile Development",
  alternates: { canonical: siteUrl },
};

const MobileDevelopment = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-4 mx-8 md:my-16 md:mx-12 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21 max-w-[86rem]">
        <Heading size="large" className="text-center leading-10 sm:text-left mx-auto">
          Mobile Development
        </Heading>

        <div className="flex mx-auto items-start flex-col-reverse sm:flex-row justify-start md:gap-20 ">
          <div className="">
            <Paragraph className="mt-0 text-[20px] mt-0 sm:mt-[3rem]">
              Through design and development we laid the foundation for products that are visually
              pleasing and have an intuitive user experience.
            </Paragraph>
          </div>
          <div className="mb-0 md:pt-0 lg:mb-8 xl:mb-0 flex justify-center sm:w-auto w-full">
            <Image
              src="/images/mobile-dev-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="my-8 sm:my-0"
            />
          </div>
        </div>
        <Heading size="large" className="text-center sm:text-left sm:leading-10 mx-auto mt-12">
          Technologies We Work With
        </Heading>
        <Paragraph className="mt-8 text-[20px]">
          Our mobile developer team has a diverse toolbox of specialties that can fit your unique
          project.
        </Paragraph>
        <div className="grid justify-center mx-auto mt-12 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 gap-[1rem]">
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
    </div>
  );
};

export default MobileDevelopment;
