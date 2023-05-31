"use client";

import { useRef } from "react";

import Image from "next/image";

import Head from "../../src/components/head";
import Heading from "../../src/components/heading/heading";
import Paragraph from "../../src/components/paragraph/paragraph";
import PillButton from "../../src/components/pill-button/pill-button";
import HorizontalRule from "../../src/components/horizontal-rule/horizontal-rule";

import { host } from "../../src/config/vars";

const siteUrl = `https://${host}/services`;

const Services = () => {
  const aboutSection = useRef<any>(null);

  const scrollDown = () => {
    if (aboutSection.current) {
      window.scrollTo({
        top: aboutSection.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head title="Octalogic Tech - Services" canonicalUrl={siteUrl} />
      <div className="sm:my-4 sm:mx-4 md:ml-4 lg:mx-0 xl:my-21">
        <Heading
          size="large"
          className="sm:mt-20 max-w-[86rem]  sm:text-center  md:text-left md:ml-0  lg:ml-44"
        >
          The Way We Work
        </Heading>
        <div className="flex sm:flex sm:flex-col-reverse  md:flex-row ">
          <div className="flex flex-col sm:mb-0 xl:mb-12 sm:w-full md:mt-8 lg:ml-44 lg:mt-12 ">
            <Paragraph className="max-w-[46rem]">
              Our mission at Octalogic Tech is to help you create beautiful and functional mobile
              and web apps. From concept to delivery, we offer solutions that will ensure a
              successful product.
            </Paragraph>
            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} onClick={() => scrollDown()} />
            </div>
          </div>
          <div className="w-[30%] sm:w-full sm:mb-0  md:pt-0 lg:mb-[2rem] xl:mb-0 flex justify-center">
            <Image
              src="/images/services_hero_image.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
            />
          </div>
        </div>
      </div>

      <div className="sm:my-16 sm:mx-8 md:m-16  xl:mt-21 xl:mb-21">
        <Heading size="large" className="max-w-[86rem] text-center my-12 sm:mt-8 md:mt-0">
          Our Services
        </Heading>
        <Heading
          size="large"
          className="max-w-[86rem]  sm:text-center  md:text-left md:ml-0  lg:ml-44"
        >
          Web Development
        </Heading>
        <div className="flex sm:flex sm:flex-col-reverse  md:flex-row ">
          <div className="flex flex-col sm:mb-0 xl:mb-[3rem] sm:w-full md:mt-8 lg:ml-44 lg:mt-12 ">
            <Paragraph className="max-w-[46rem]">
              We create products using the latest technologies at our disposal to give you ground
              breaking performance while being aesthetically pleasing and user friendly at the same
              time.
            </Paragraph>
            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} href={"/web-development"} />
            </div>
          </div>
          <div className="w-[30%] sm:w-full sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/web_dev_avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
            />
          </div>
        </div>

        <Heading
          size="large"
          className="max-w-[86rem] flex justify-center sm:mt-12  sm:text-center  md:ml-[16rem] lg:ml-[19rem]  md:text-right"
        >
          Digital Marketing
        </Heading>
        <div className="flex sm:flex sm:flex-col-reverse md:flex-row-reverse md:mb-12 lg:mb-12 ">
          <div className="flex flex-col self-center sm:w-full">
            <Paragraph className="max-w-[46rem]">
              We believe in building versatile and adaptable digital marketing ecosystems, as to
              offer an aggressive edge to your business
            </Paragraph>
            <div className="mt-8 sm:text-center md:text-left md:mt-12">
              <PillButton title={"Know More"} href={"/digital-marketing"} />
            </div>
          </div>
          <div className="w-[30%] sm:w-full sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/marketing_dev_avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
            />
          </div>
        </div>

        <Heading
          size="large"
          className="max-w-[86rem] sm:mt-12 sm:text-center md:text-left lg:ml-44"
        >
          Mobile Development
        </Heading>
        <div className="flex sm:flex sm:flex-col-reverse  md:flex-row sm:my-8 lg:my-8">
          <div className="flex flex-col sm:w-full lg:ml-44">
            <Paragraph className="max-w-[46rem]">
              We use our expertise in a variety of technologies to craft code that opens the door
              for ongoing iterations with our clients’ users and ensure a build with the foundation
              for success.
            </Paragraph>

            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} href={"/mobile-development"} />
            </div>
          </div>
          <div className="w-[30%] sm:w-full sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/mobile_dev_avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
            />
          </div>
        </div>

        <Heading
          size="large"
          className="max-w-[86rem] flex justify-center md:ml-[17rem] lg:ml-[20.5rem] sm:text-center"
        >
          Remote Resources
        </Heading>
        <div className="flex sm:flex sm:flex-col-reverse md:flex-row-reverse my-8">
          <div className="flex flex-col sm:w-full ">
            <Paragraph className="max-w-[46rem]">
              We believe in building scalable software and apps for our clients with in-house
              infrastructure to reduce dependency on 3rd party services.
            </Paragraph>
            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} href={"/remote-resources"} />
            </div>
          </div>
          <div className="w-[30%] sm:w-full sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/remote-resources-avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
            />
          </div>
        </div>
      </div>

      <Heading size="large" className="sm:mt-12 text-center">
        Let&apos;s craft brilliance together!
      </Heading>
      <div className="mt-12 text-center">
        <PillButton title={"Get In Touch"} href={"/contact"} />
      </div>
      <HorizontalRule />
    </>
  );
};

export default Services;
