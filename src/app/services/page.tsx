import { Metadata } from "next";
import Image from "next/image";

import Heading from "@/components/heading/heading";
import Paragraph from "@/components/paragraph/paragraph";
import PillButton from "@/components/pill-button/pill-button";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import ScrollDownButton from "@/components/scroll-down-button/scroll-down-button";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/services`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Services",
  alternates: { canonical: siteUrl },
};

const Services = () => {
  const scrollToSectionId = "services-section";

  return (
    <>
      <div className="sm:my-4 mt-8 sm:mt-0 mx-8 sm:mx-4 md:ml-16 lg:mx-0 xl:my-21">
        <Heading
          size="large"
          className="sm:mt-20 max-w-7xl  sm:text-center  md:text-left md:ml-0  lg:ml-44"
        >
          The Way We Work
        </Heading>
        <div className="flex flex-col-reverse  md:flex-row ">
          <div className="flex flex-col sm:mb-0 xl:mb-12 sm:w-full md:mt-8 lg:ml-44 lg:mt-12 ">
            <Paragraph className="max-w-3xl">
              Our mission at Octalogic Tech is to help you create beautiful and functional mobile
              and web apps. From concept to delivery, we offer solutions that will ensure a
              successful product.
            </Paragraph>
            <div className="mt-12 sm:text-center md:text-left ">
              <ScrollDownButton sectionId={scrollToSectionId} />
            </div>
          </div>
          <div className="w-full mb-4 sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/services_hero_image.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-60  sm:h-52  w-full  sm:my-8"
            />
          </div>
        </div>
      </div>

      <div id={scrollToSectionId} className="mb-8 sm:my-16 mx-8 sm:mx-8 md:m-16  xl:mt-21 xl:mb-21">
        <Heading size="large" className="max-w-7xl text-center my-12 sm:mt-8 md:mt-0">
          Our Services
        </Heading>
        <Heading
          size="large"
          className="max-w-7xl  sm:text-center  md:text-left md:ml-0  lg:ml-44 mb-4 sm:mb-0 hidden sm:block"
        >
          Web Development
        </Heading>
        <div className="flex flex-col-reverse  md:flex-row mb-16 sm:mb-0">
          <div className="flex flex-col sm:mb-0 xl:mb-12 sm:w-full md:mt-8 lg:ml-44 lg:mt-12 ">
            <Heading
              size="large"
              className="max-w-7xl  sm:text-center  md:text-left md:ml-0  lg:ml-44 mb-4 sm:mb-0 block sm:hidden"
            >
              Web Development
            </Heading>
            <Paragraph className="max-w-3xl">
              We create products using the latest technologies at our disposal to give you ground
              breaking performance while being aesthetically pleasing and user friendly at the same
              time.
            </Paragraph>
            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} href={"/web-development"} />
            </div>
          </div>
          <div className="w-full mb-8 sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/web_dev_avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-60  sm:h-52  w-full  sm:my-8"
            />
          </div>
        </div>

        <Heading
          size="large"
          className="max-w-7xl justify-center md:ml-64 lg:ml-80 sm:text-center hidden sm:block"
        >
          Digital Marketing
        </Heading>
        <div className="flex flex-col-reverse md:flex-row-reverse md:mb-12 lg:mb-12 mb-16 sm:mb-0">
          <div className="flex flex-col self-center sm:w-full">
            <Heading
              size="large"
              className="max-w-7xl  sm:text-center  md:text-left md:ml-0  lg:ml-44 mb-4 sm:mb-0 block sm:hidden"
            >
              Digital Marketing
            </Heading>
            <Paragraph className="max-w-3xl">
              We believe in building versatile and adaptable digital marketing ecosystems, as to
              offer an aggressive edge to your business
            </Paragraph>
            <div className="mt-8 sm:text-center md:text-left md:mt-12">
              <PillButton title={"Know More"} href={"/digital-marketing"} />
            </div>
          </div>
          <div className="w-full mb-8 sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/marketing_dev_avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-60  sm:h-52  w-full  sm:my-8"
            />
          </div>
        </div>

        <Heading
          size="large"
          className="max-w-7xl sm:mt-12 sm:text-center md:text-left lg:ml-44 hidden sm:block"
        >
          Mobile Development
        </Heading>
        <div className="flex flex-col-reverse  md:flex-row sm:my-8 lg:my-8 mb-16 sm:mb-0">
          <div className="flex flex-col sm:w-full lg:ml-44">
            <Heading
              size="large"
              className="max-w-7xl  sm:text-center  md:text-left md:ml-0  lg:ml-44 mb-4 sm:mb-0 block sm:hidden"
            >
              Mobile Development
            </Heading>
            <Paragraph className="max-w-3xl">
              We use our expertise in a variety of technologies to craft code that opens the door
              for ongoing iterations with our clients’ users and ensure a build with the foundation
              for success.
            </Paragraph>

            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} href={"/mobile-development"} />
            </div>
          </div>
          <div className="w-full mb-8 sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/mobile_dev_avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-60  sm:h-52  w-full  sm:my-8"
            />
          </div>
        </div>

        <Heading
          size="large"
          className="max-w-7xl justify-center md:ml-64 lg:ml-80 sm:text-center hidden sm:block"
        >
          Remote Resources
        </Heading>
        <div className="flex flex-col-reverse md:flex-row-reverse my-8 mb-16 sm:mb-0">
          <div className="flex flex-col sm:w-full ">
            <Heading
              size="large"
              className="max-w-7xl  sm:text-center  md:text-left md:ml-0  lg:ml-44 mb-4 sm:mb-0 block sm:hidden"
            >
              Remote Resources
            </Heading>
            <Paragraph className="max-w-3xl">
              We believe in building scalable software and apps for our clients with in-house
              infrastructure to reduce dependency on 3rd party services.
            </Paragraph>
            <div className="mt-12 sm:text-center md:text-left ">
              <PillButton title={"Know More"} href={"/remote-resources"} />
            </div>
          </div>
          <div className="w-full mb-8 sm:mb-0  md:pt-0 lg:mb-8 xl:mb-0 flex justify-center">
            <Image
              src="/images/remote-resources-avatar.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-60  sm:h-52  w-full  sm:my-8"
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
