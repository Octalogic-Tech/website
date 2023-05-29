"use client";
import styles from "../styles/home.module.css";

import Image from "next/image";

import HeroImage from "/public/images/hero_image.svg";
import MobileHeroImage from "/public/images/hero_image_mobile.svg";

// import { Grid } from "@mui/material";
// import Box from "@mui/material/Box";

import HorizontalRule from "../src/components/horizontal-rule/horizontal-rule";
import PillButton from "../src/components/pill-button/pill-button";
import ServiceCard from "../src/components/service-card/service-card";
import BenefitsCard from "../src/components/benefits-card/benefits-card";
import Head from "../src/components/head";
import Heading from "../src/components/heading/heading";
import Paragraph from "../src/components/paragraph/paragraph";

import { Services } from "../src/constants/services";
import { Benefits } from "../src/constants/benefits";

import { IBenefit, IService } from "../src/interfaces";

const Home = () => {
  return (
    <>
      <Head />
      {/* <Box className={styles.sec_1_wrapper}> */}
      <div className="min-h-[48vw] mb-16 relative w-full text-right">
        <Image
          alt="Hero image"
          src={HeroImage}
          priority
          quality={100}
          sizes="100vw"
          // className={styles.hero_img}
          className="w-54 h-auto md:w-7/12 absolute right-0 top-neg-6 z-[-1] sm:hidden md:block"
        />
        <Image
          alt="Hero image"
          src={MobileHeroImage}
          priority
          quality={100}
          sizes="100vw"
          // className={styles.mobile_hero_img}
          className="w-55 h-auto absolute right-0 top-0 z-[-1] sm:block md:hidden"
        />
        {/* <Box className={styles.content_wrapper}> */}
        <div className="text-left sm:pl-8 sm:pt-0 md:pl-16 md:pt-12 xl:pl-24 xl:pt-20">
          {/* <Heading size="large" className={styles.heading_1}> */}
          <Heading size="large" className="sm:max-w-[68vw] md:max-w-[52vw]">
            Converting ideas to solutions
          </Heading>
          {/* <Paragraph className={styles.para_1}> */}
          <Paragraph className="mt-6 sm:max-w-[49vw] md:max-v-[30vw] lg:max-w-[38vw] xl:max-w-[30vw]">
            Got a startup idea? Let us turn it into a solution! We provide offshore development &
            technological resources to turn an idea into reality
          </Paragraph>
          {/* <Box className={styles.btn_wrap_1}> */}
          <div className="sm:mt-8 xl:mt-16">
            <PillButton title={"GET STARTED"} href={"/contact"} />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.planet_1}></div>
        <Heading size="medium">What we do</Heading>
        {/* <Box className={styles.services_wrap}> */}
        <div className=" flex justify-center mt-24 flex-wrap sm:flex sm:gap-8 md:flex md:gap-16 lg:flex lg:gap-8">
          {Services.map((service: IService) => (
            // <ServiceCard key={service.title} details={service} className={styles.service_card} />
            // <div className="group">
            <ServiceCard
              key={service.title}
              details={service}
              // className="sm:max-w-[83.333%] sm:flex-1 md:max-w-[33.333%] md:flex-1 lg:max-w-[22.14%] lg:flex-1"
            />
            // {/* </div> */}
          ))}
        </div>
        {/* <Box className={styles.btn_wrap_2}> */}
        <div className="mt-12 text-center">
          <PillButton title={"VIEW MORE"} href={"/services"} />
        </div>
      </div>
      {/* <Box className={styles.sec_3}> */}
      <div className="mt-32 flex flex-col items-center">
        <div className={styles.planet_1}></div>
        <div className={styles.why_us}></div>
        <Heading size="medium">Offshore Team Benefits</Heading>
        {/* <Grid container className={styles.benefits_grid}> */}
        <div className="grid grid-cols-2 gap-12 m-16 w-[80%] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {Benefits.map((benefit: IBenefit) => (
            // <Grid xs={12} md={6} key={benefit.title} item className={styles.benefits_grid_item}>
            <div key={benefit.title}>
              {/* <BenefitsCard details={benefit} className={styles.benefits_card} /> */}
              <BenefitsCard details={benefit} />
            </div>
          ))}
        </div>
        {/* <Box className={styles.planet_2_wrap}> */}
        <div className="w-full z-[-10]">
          <div className={styles.planet_2}></div>
        </div>
      </div>
      {/* <Box className={styles.sec_4}> */}
      <div className="mt-32">
        {/* <Heading size="medium" className={styles.heading_4}> */}
        <Heading size="medium" className="mb-20">
          Let&apos;s craft brilliance together!
        </Heading>
        {/* <Box className={styles.btn_wrap_3}> */}
        <div className="mt-12 text-center">
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </div>
      </div>
      <HorizontalRule />
    </>
  );
};

export default Home;
