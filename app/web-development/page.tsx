"use client";
import Styles from "../../styles/web-development.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

// import Link from "next/link";

import Head from "../../src/components/head";
import Heading from "../../src/components/heading/heading";
import HorizontalRule from "../../src/components/horizontal-rule/horizontal-rule";
import Paragraph from "../../src/components/paragraph/paragraph";
import PillButton from "../../src/components/pill-button/pill-button";
import TechCard from "../../src/components/tech-card/tech-card";

import { WebTechnologies } from "../../src/constants/technologies";

import { host } from "../../src/config/vars";

const siteUrl = `https://${host}/web-development`;

const WebDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Web Development" canonicalUrl={siteUrl} />
      {/* <Box className={Styles.container}> */}
      <div className="sm:my-[1rem] sm:mx-[2rem] md:my-[4rem] md:mx-[3rem] lg:ml-[7rem] lg:mr-[7rem] xl:mt-[5.25rem] xl:mb-[5.25rem]">
        {/* <Heading size="large" className={Styles.heading_1}> */}
        <Heading size="large" className="max-w-[86rem] mx-auto ">
          Web Development
        </Heading>
        {/* <Box className={Styles.content_wrap}> */}
        <div className="flex sm:flex sm:flex-col-reverse md:flex md:flex-row ">
          {/* <Box className={Styles.left_wrap}> */}
          <div className="flex flex-col w-[60%] sm:mb-0 xl:mb-[3rem] sm:w-full">
            {/* <Paragraph className={Styles.para_1}> */}
            <Paragraph className="max-w-[46rem] sm:text-[1.3rem] sm:leading-[1.8rem] sm:mt-0 md:text-[1rem] md:leading-[1.4rem] md:mt-[3rem] lg:text-[1.8rem] lg:leading-[1.5rem] xl:text-[1.4rem]">
              Working alongside our mobile app team gives us the added benefit of creating seamless
              mobile-first experiences and delivering fully-featured web apps.
            </Paragraph>
            {/* <Paragraph className={Styles.para_2}> */}
            <Paragraph className="max-w-[46rem] sm:text-[1.3rem] sm:w-full sm:leading-[1.8rem] sm:mt-[1rem] md:text-[1rem] md:leading-[1.4rem] md:mt-[3rem] lg:text-[1.8rem] lg:leading-[1.5rem] xl:text-[1.4rem]">
              We’re experienced in both front-end and backend infrastructure and offer comprehensive
              solutions to fit the needs of our clients.
            </Paragraph>
          </div>
          {/* </Box> */}
          {/* <Box className={Styles.right_wrap}> */}
          <div className="  w-[40%] sm:w-full sm:mb-0  md:pt-0 lg:mb-[2rem] xl:mb-0 flex justify-center">
            <Image
              src="/images/web_dev_hero_image.svg"
              alt="Octalogic Tech"
              width={100}
              height={100}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
              // fill
              // priority
              // sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
        {/* <Heading size="medium" className={Styles.heading_2}> */}
        <Heading size="large" className="max-w-[86rem] mx-auto">
          Technologies We Work With
        </Heading>
        {/* <Paragraph className={Styles.para_3}> */}
        <Paragraph className="max-w-[86rem] mx-auto mt-[2rem] sm:text-[1.3rem] sm:leading-[2rem] md:text-[1rem] md:leading-[1.7rem] lg:text-[2rem] lg:leading-[2rem] xl:text-[1.4rem] xl:leading-[2rem]  xl:mt-[2rem]">
          We make ultra-optimized, fast loading web apps that ensure delightful user experience
          across a variety of devices using all the tools at our disposal.
        </Paragraph>
        {/* <Box className={Styles.tech_wrapper}> */}
        <div className="grid justify-center max-w-screen-xl mx-auto mt-12 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
          {WebTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </div>
        {/* <Box className={Styles.sec_3}> */}
        <div className="mt-[8rem]">
          {/* <Heading size="medium" className={Styles.heading_3}> */}
          <Heading
            size="medium"
            className="mb-[0.5rem] text-center sm:text-[1.8rem] sm:leading-[2rem] md:text-[1.7rem] md:leading-[1.7rem] lg:text-[2rem] lg:leading-[2rem] xl:text-[2.5rem] xl:leading-[2.5rem]"
          >
            Let&apos;s craft brilliance together!
          </Heading>
          {/* <Box className={Styles.btn_wrap}> */}
          <div className="mt-12 text-center">
            <PillButton title={"Get In Touch"} href={"/contact"} />
          </div>
        </div>
        <HorizontalRule />
      </div>
    </>
  );
};

export default WebDevelopment;
