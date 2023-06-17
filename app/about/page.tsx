"use client";

import Image from "next/image";

import Head from "../../src/components/head";
import PillButton from "../../src/components/pill-button/pill-button";
import HorizontalRule from "../../src/components/horizontal-rule/horizontal-rule";
import Heading from "../../src/components/heading/heading";
import Paragraph from "../../src/components/paragraph/paragraph";

import { host } from "../../src/config/vars";

const siteUrl = `https://${host}/about`;

const About = () => {
  return (
    <>
      <Head title="Octalogic Tech - Who We Are" canonicalUrl={siteUrl} />
      <div className="sm:mx-4 sm:my-8 md:mx-16 md:my-12 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21">
        <Heading size="large" className="max-w-7xl mx-auto sm:text-center md:text-left ">
          We Innovate To Make A Difference
        </Heading>
        <div className="flex max-w-7xl mx-0 my-8 sm:flex sm:flex-col-reverse md:flex md:flex-row">
          <div className="flex-none md:w-3/5 ">
            <Paragraph className={`max-w-3xl sm:text-2xl md:text-xl  xl:text-2xl`}>
              Founded by classmates straight out of Uni, Octalogic Tech is home to all kinds of
              crazy from weird taste in music to conversations that would put a loony bin to shame,
              you&apos;ll find it all here.
            </Paragraph>
            <Paragraph className={`max-w-3xl  sm:text-2xl md:text-xl  xl:text-2xl `}>
              When we say this is like our 2nd home we literally mean it having ditched 9-5 ers and
              opted for all-nighters instead. But at the end of the day, we love what we do and we
              are good at it.
            </Paragraph>
            <Paragraph className={`max-w-3xl mt-8 sm:text-2xl md:text-xl lg:mb-12 xl:text-2xl`}>
              Be it a Mobile app, a Web app, a Website, a Desktop application or digital marketing,
              we got you covered and May The Force Be With you
            </Paragraph>
            <Paragraph className={`mt-5 max-w-3xl text-base sm:text-xl`}>
              P.S The image is completely irrelevant. We just really like Star Wars
            </Paragraph>
          </div>
          <div className="relative w-full sm:mt-0 sm:mb-0 sm:pt-[100%] md:mt-8 md:mb-24 md:pt-72 lg:mb-96 lg:pt-0 xl:mb-0">
            <Image
              src="/images/may_the_force_bgdm.svg"
              alt="Octalogic Tech"
              fill
              priority
              sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
      </div>
      <div className="sm:mt-12 md:mt-0">
        <Heading size="large" className="text-center ">
          Let&apos;s craft brilliance together!
        </Heading>
        <div className="mt-12 text-center">
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </div>
      </div>
      <HorizontalRule />
    </>
  );
};

export default About;
