"use client";
import Styles from "../../styles/digital-marketing.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../src/components/head";
// import Heading from "../../src/components/heading/heading";
import HorizontalRule from "../../src/components/horizontal-rule/horizontal-rule";
// import Paragraph from "../../src/components/paragraph/paragraph";
// import PillButton from "../../src/components/pill-button/pill-button";
import TechCard from "../../src/components/tech-card/tech-card";

import { DigitalTechnologies } from "../../src/constants/technologies";

import { host } from "../../src/config/vars";

const siteUrl = `https://${host}/digital-marketing`;

import Link from "next/link";

const DigitalMarketing = () => {
  return (
    <>
      <Head title="Octalogic Tech - Digital Marketing" canonicalUrl={siteUrl} />
      {/* <Box className={Styles.container}> */}
      <div className="sm:my-[1rem] sm:mx-[2rem] md:my-[4rem] md:mx-[3rem] lg:ml-[7rem] lg:mr-[7rem] xl:mt-[5.25rem] xl:mb-[5.25rem]">
        {/* <Heading size="large" className={Styles.heading_1}> */}
        <h1 className="max-w-[86rem] mx-auto sm:text-[1.8rem] sm:leading-[2rem] sm:text-center md:text-[2.2rem] md:leading-[2.2rem] lg:text-[2.5rem] lg:leading-[2.5rem] xl:text-[3rem] xl:leading-[3.5rem] md:text-left">
          Digital Marketing
        </h1>
        {/* <Box className={Styles.content_wrap}> */}
        <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row ">
          <Box className={Styles.left_wrap}>
            {/* <Paragraph className={Styles.para_1}> */}
            <p className="max-w-[46rem] sm:text-[1.3rem] sm:leading-[1.8rem] sm:mt-0 md:text-[1rem] md:leading-[1.4rem] md:mt-[3rem] lg:text-[1.8rem] lg:leading-[1.5rem] xl:text-[1.4rem]">
              We want everyone to see exactly what makes your brand special. We take the time to
              understand your business and create a strategy to accomplish your objectives. Here at
              Octalogic Tech, we believe in building versatile and adaptable digital marketing
              ecosystems, as to offer an aggressive edge to your business.
            </p>
          </Box>
          {/* <Box className={Styles.right_wrap}> */}
          <div className="relative w-full sm:mb-0 sm:pt-[100%] md:pt-0 lg:mb-[2rem] xl:mb-0">
            <Image
              src="/images/digital-marketing-hero-image.svg"
              alt="Octalogic Tech"
              fill
              priority
              sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
        {/* <Heading size="medium" className={Styles.heading_2}> */}
        <h2 className="max-w-[86rem] mx-auto text-left sm:text-[1.8rem] sm:leading-[2rem] md:text-[1.7rem] md:leading-[1.7rem] lg:text-[2rem] lg:leading-[2rem] xl:text-[2.5rem] xl:leading-[2.5rem] sm:mt-[6rem] xl:mt-[2rem]">
          Technologies We Work With
        </h2>
        {/* <Paragraph className={Styles.para_2}> */}
        <p className="max-w-[86rem] mx-auto mt-[2rem] sm:text-[1.3rem] sm:leading-[2rem] md:text-[1rem] md:leading-[1.7rem] lg:text-[2rem] lg:leading-[2rem] xl:text-[1.4rem] xl:leading-[2rem]  xl:mt-[2rem]">
          We make digital marketing strategies fit your goals and budgets.
        </p>
        {/* <Box className={Styles.tech_wrapper}> */}
        <div className="grid justify-center max-w-screen-xl mx-auto mt-12 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3  lg:grid lg:grid-cols-6 ">
          {DigitalTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </div>
        {/* <Box className={Styles.sec_3}> */}
        <div className="mt-[8rem]">
          {/* <Heading size="medium" className={Styles.heading_3}> */}
          <h2 className="mb-[0.5rem] text-center sm:text-[1.8rem] sm:leading-[2rem] md:text-[1.7rem] md:leading-[1.7rem] lg:text-[2rem] lg:leading-[2rem] xl:text-[2.5rem] xl:leading-[2.5rem]">
            Let&apos;s craft brilliance together!
          </h2>
          {/* <Box className={Styles.btn_wrap}> */}
          <div className="text-center mt-[3rem]">
            <Link href={"/contact"}>
              <button className=" animate-ripple rounded-full bg-[#FF62A7] px-[2rem] py-[0.7rem] text-white  hover:shadow-hover">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
        <HorizontalRule />
      </div>
    </>
  );
};

export default DigitalMarketing;
