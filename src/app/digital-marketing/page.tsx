import { Metadata } from "next";
import Image from "next/image";

import Heading from "@/components/heading/heading";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Paragraph from "@/components/paragraph/paragraph";
import PillButton from "@/components/pill-button/pill-button";
import TechCard from "@/components/tech-card/tech-card";

import { DigitalTechnologies } from "@/constants/technologies";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/digital-marketing`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Digital Marketing",
  alternates: { canonical: siteUrl },
};

const DigitalMarketing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-4 mx-8 md:my-16 md:mx-12 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21 max-w-[86rem]">
        <Heading size="large" className="text-center leading-10 md:text-left mx-auto">
          Digital Marketing
        </Heading>

        <div className="mx-auto flex items-center flex-col-reverse md:flex md:flex-row justify-between md:gap-20 ">
          <div className="basis-[60%]">
            <Paragraph className="md:my-12 text-xl mt-0 md:text-base lg:text-2xl">
              We want everyone to see exactly what makes your brand special. We take the time to
              understand your business and create a strategy to accomplish your objectives. Here at
              Octalogic Tech, we believe in building versatile and adaptable digital marketing
              ecosystems, as to offer an aggressive edge to your business.
            </Paragraph>
          </div>
          <div className="mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/digital-marketing-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="h-52 my-8 md:my-0"
            />
          </div>
        </div>
        <Heading size="large" className=" text-center md:text-left leading-10 mx-auto mt-12">
          Technologies We Work With
        </Heading>
        <Paragraph className="mt-8 text-xl md:text-base lg:text-2xl">
          We make digital marketing strategies fit your goals and budgets.
        </Paragraph>
        <div className="justify-center mx-auto mt-12 grid grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
          {DigitalTechnologies.map((tech) => (
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

export default DigitalMarketing;
