"use client";
// import Styles from "../../styles/mobile-development.module.css";

// import Box from "@mui/material/Box";

import Image from "next/image";
import Link from "next/link";

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
      {/* <Box className={Styles.container}> */}
      <div className="sm:my-[1rem] sm:mx-[2rem] md:my-[4rem] md:mx-[3rem] lg:ml-[7rem] lg:mr-[7rem] xl:mt-[5.25rem] xl:mb-[5.25rem]">
        {/* <Heading size="large" className={Styles.heading_1}> */}
        <Heading
          size="large"
          className="sm:text-center sm:leading-10 md:text-left max-w-[86rem] mx-auto"
        >
          Mobile Development
        </Heading>
        {/* <Box className={Styles.content_wrap}> */}
        <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row">
          {/* <Box className={Styles.left_wrap}> */}
          {/* <div className="flex flex-none flex-shrink-0 w-60 sm:mb-0 xl:mb-[10rem]"> */}
          {/* <Paragraph className={Styles.para_1}> */}
          <Paragraph className="max-w-[46rem] sm:text-[1.4rem] sm:leading-[1.8rem] sm:mt-0 md:text-[1rem] md:leading-[1.4rem] md:mt-[3rem] lg:text-[1.8rem] lg:leading-8 xl:text-[1.3rem]">
            Through design and development we laid the foundation for products that are visually
            pleasing and have an intuitive user experience.
          </Paragraph>
          {/* </div> */}
          {/* <div className={Styles.right_wrap}> */}
          <div className="relative w-full sm:mb-0  md:pt-0 lg:mb-[2rem] xl:mb-0 flex justify-center">
            <Image
              src="/images/mobile-dev-hero-image.svg"
              alt="Octalogic Tech"
              width={200}
              height={200}
              // style={{
              //   height: "220px",
              //   width: "220px",
              // }}
              className="h-[300px]  sm:h-[200px]  w-full  sm:my-8"
              // fill
              // priority
              // sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
        {/* <Heading size="medium" className={Styles.heading_2}> */}
        <Heading
          size="large"
          className=" sm:text-center md:text-left sm:leading-10 max-w-[86rem] mx-auto mt-12"
        >
          Technologies We Work With
        </Heading>
        {/* <Paragraph className={Styles.para_2}> */}
        <Paragraph className="mt-[2rem] sm:text-[1.4rem] sm:leading-[1.8rem] md:text-[1rem] md:leading-[1.4rem] lg:text-[1.8rem] lg:leading-[2rem] xl:text-[1.3rem]">
          Our mobile developer team has a diverse toolbox of specialties that can fit your unique
          project.
        </Paragraph>
        {/* <Box className={Styles.tech_wrapper}> */}
        {/* <div className="grid grid-col-5 justify-center  mx-auto mt-12 sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-3 md:gap-4 xl:grid xl:grid-col-5 xl:gap-4"> */}
        {/* <div className="">
          {MobileTechnologies.map((tech) => (
            <div className="grid grid-cols-5 sm:grid-cols-2">
              <TechCard key={tech.name} details={tech} />
            </div>
          ))}
        </div> */}
        <div className="grid justify-center max-w-screen-xl mx-auto mt-12 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
          {MobileTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </div>
        {/* <Box className={Styles.sec_3}> */}
        <div className="mt-[8rem]">
          {/* <Heading size="medium" className={Styles.heading_3}> */}
          <Heading size="medium" className="mb-[0.5rem] text-center">
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

export default MobileDevelopment;
