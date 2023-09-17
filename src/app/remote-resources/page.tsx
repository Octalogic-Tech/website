import { Metadata } from "next";
import Image from "next/image";

import Heading from "@/components/heading/heading";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Paragraph from "@/components/paragraph/paragraph";
import PillButton from "@/components/pill-button/pill-button";
import RemoteCard from "@/components/remote-card/remote-card";

import { RemoteServices } from "@/constants/technologies";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/remote-resources`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Remote Resources",
  alternates: { canonical: siteUrl },
};

const RemoteResources = () => {
  return (
    <div className="grid place-items-center w-full">
      <div className="my-4 mx-8 md:my-[4rem] md:mx-12 lg:ml-28 lg:mr-28 mt-8 sm:mt-0 xl:mt-21 xl:mb-21 max-w-[86rem]">
        <Heading size="large" className="mx-auto mb-8 text-center md:text-left">
          Remote Resources
        </Heading>
        <div className="flex mx-auto flex-col-reverse md:flex-row justify-start md:gap-2 lg:gap-20">
          <div>
            <Paragraph className="mt-0 text-[20px]">
              {`We are a turnkey offshore development company providing custom software development
              and remote team services for clients across the globe while ensuring it doesn't cost
              them a fortune.`}
            </Paragraph>
          </div>
          <div className="w-full mb-0 md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/remote-resources-hero-image.svg"
              alt="Octalogic Tech"
              width={300}
              height={300}
              className="h-60 my-8 md:my-0"
            />
          </div>
        </div>
        <Heading size="large" className="mx-auto mb-4 mt-16 sm:mt-8">
          Areas of Expertise
        </Heading>
        <Paragraph className="text-[20px] mt-0">
          Our clients work directly with us without any middlemen, which is very effective and
          economical
        </Paragraph>
        <div className="grid justify-center mx-auto mt-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
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
    </div>
  );
};

export default RemoteResources;
