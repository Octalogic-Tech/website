"use client";
// import Styles from "../../styles/about.module.css";

// import Box from "@mui/material/Box";

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
      {/* <div className={Styles.container}> */}
      <div className="sm:mx-[1rem] sm:my-[2rem] md:mx-[4rem] md:my-[3rem] lg:ml-[7rem] lg:mr-[7rem] xl:mt-[5.25rem] xl:mb-[5.25rem] ">
        {/* <Heading size="large" className={Styles.heading_1}> */}
        <Heading size="large" className="max-w-[86rem] mx-auto sm:text-center md:text-left ">
          We Innovate To Make A Difference
        </Heading>
        {/* <div className={Styles.content_wrap}> */}
        <div className="flex max-w-[86rem] mx-0 my-8 sm:flex sm:flex-col-reverse md:flex md:flex-row">
          {/* <div className={Styles.left_wrap}> */}
          <div className="flex-none md:w-3/5 ">
            <Paragraph
              className={`max-w-[45rem]  sm:text-[1.4rem] md:text-[1rem] lg:text-[1.8rem] xl:text-[1.4rem]`}
            >
              Founded by classmates straight out of Uni, Octalogic Tech is home to all kinds of
              crazy from weird taste in music to conversations that would put a loony bin to shame,
              you&apos;ll find it all here.
            </Paragraph>
            <Paragraph
              className={`max-w-[45rem]  sm:text-[1.4rem] md:text-[1rem] lg:text-[1.8rem] xl:text-[1.4rem] `}
            >
              {/* <p className={`max-w-[45rem] xs:text-[1.4rem] sm:text-[1rem] md:text-[1.8rem] lg:text-[1.4rem] text-[#212529] xs:leading-[1.8rem] sm:leading-[1.4rem] md:leading-[2rem]`}> */}
              When we say this is like our 2nd home we literally mean it having ditched 9-5 ers and
              opted for all-nighters instead. But at the end of the day, we love what we do and we
              are good at it.
            </Paragraph>
            <Paragraph
              className={`max-w-[45rem] mt-8 sm:text-[1.4rem] md:text-[1rem] lg:text-[1.8rem] lg:mb-[3rem] xl:text-[1.4rem]`}
            >
              {/* <p className={`max-w-[45rem] mt-8 xs:text-[1.4rem] sm:text-[1rem] md:text-[1.8rem] lg:text-[1.4rem] text-[#212529] xs:leading-[1.8rem] sm:leading-[1.4rem] md:leading-[2rem]`}> */}
              Be it a Mobile app, a Web app, a Website, a Desktop application or digital marketing,
              we got you covered and May The Force Be With you
            </Paragraph>
            <Paragraph className={`mt-[1.25rem] max-w-[45rem]  `}>
              P.S The image is completely irrelevant. We just really like Star Wars
            </Paragraph>
          </div>
          {/* <div className={Styles.right_wrap}> */}
          <div className="relative w-full sm:mt-0 sm:mb-0 sm:pt-[100%] md:mt-8 md:mb-24 md:pt-72 lg:mb-[22rem] lg:pt-0 xl:mb-0">
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
      {/* <div className={Styles.sec_3}> */}
      <div className="sm:mt-[3rem] md:mt-0">
        <Heading size="medium" className="text-center ">
          Let&apos;s craft brilliance together!
        </Heading>
        {/* <div className={Styles.btn_wrap}> */}
        <div className="mt-12 text-center">
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </div>
      </div>
      <HorizontalRule />
    </>
  );
};

export default About;
