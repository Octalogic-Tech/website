"use client";
import Styles from "../../styles/services.module.css";

import { useRef } from "react";

// import Box from "@mui/material/Box";

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
      {/* <Box className={Styles.sec_1}> */}
      <div className="sm:my-4 sm:mx-8 md:m-16 lg:ml-28 lg:mr-28 xl:mt-21 xl:mb-21">
        {/* <Heading size="large" className={Styles.heading_1}> */}
        <Heading size="large" className="max-w-[86rem] mx-auto sm:text-center md:text-left">
          The Way We Work
        </Heading>
        {/* <Box className={Styles.content_wrap_1}> */}
        <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row ">
          {/* <Box className={Styles.left_wrap_1}> */}
          <div className="flex-0 flex-shrink-0 flex-basis-60% sm:mb-0 xl:mb-24">
            {/* <Paragraph className={Styles.para_1}> */}
            <Paragraph className="max-w-[46rem] sm:mt-0 md:mt-12">
              Our mission at Octalogic Tech is to help you create beautiful and functional mobile
              and web apps. From concept to delivery, we offer solutions that will ensure a
              successful product.
            </Paragraph>
            {/* <Box className={Styles.btn_wrap_1}> */}
            <div className="mt-12 text-left">
              {/* <PillButton title={"See How"} className={Styles.btn_1} onClick={() => scrollDown()} /> */}
              <PillButton title={"See How"} className="py-2 px-4" onClick={() => scrollDown()} />
            </div>
          </div>
          {/* <Box className={Styles.right_wrap_1}> */}
          <div className="relative w-full sm:mb-0 sm:pt-[100%] md:mb-0 md:pt-0 lg:mb-8 xl:mb-0">
            <Image
              src="/images/services_hero_image.svg"
              alt="Octalogic Tech"
              fill
              sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
      </div>
      {/* <Box className={Styles.sec_2}> */}
      <div className="sm:my-16 sm:mx-8 md:m-16 lg:ml-28 mr-28 xl:mt-21 xl:mb-21">
        {/* <Box ref={aboutSection}> */}
        {/* <Heading size="medium" className={Styles.heading_2}> */}
        <Heading size="large" className="max-w-[86rem] text-center my-12 sm:mt-8 md:mt-0">
          Our Services
        </Heading>
        {/* <Box className={Styles.content_wrap_2}> */}
        <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row">
          {/* <div className={Styles.left_wrap_2}> */}
          <div className="mt-8 flex-0 flex-shrink-0 flex-basis-60% sm:mb-0 xl:mb-24">
            {/* <Heading size="medium" className={Styles.heading_3}> */}
            <Heading size="medium" className="max-w-[86rem] text-left sm:mt-8 md:mt-0">
              Web Development
            </Heading>
            {/* <Paragraph className={Styles.para_2}> */}
            <Paragraph className="max-w-[46rem] sm:mt-8 md:mt-12">
              We create products using the latest technologies at our disposal to give you ground
              breaking performance while being aesthetically pleasing and user friendly at the same
              time.
            </Paragraph>
            {/* <Box className={Styles.btn_wrap_2}> */}
            <div className="mt-12 text-left">
              <PillButton title={"Know More"} href={"/web-development"} />
            </div>
          </div>
          {/* <Box className={Styles.right_wrap_2}> */}
          <div className="relative w-full sm:mb-0 sm:pt-[100%} md:mb-0 md:pt-0 xl:mb-0">
            <Image
              src="/images/web_dev_avatar.svg"
              alt="Octalogic Tech"
              fill
              priority
              sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
        {/* </Box> */}
        {/* <Box className={Styles.sec_3}> */}
        <div className="sm:my-16 sm:mx-8 md:m-16 lg:ml-28 mr-28 xl:mt-21 xl:mb-21">
          {/* <Box className={Styles.content_wrap_3}> */}
          <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row">
            {/* <div className={Styles.left_wrap_3}> */}
            <div className="flex-grow-0 flex-shrink-0 width-60">
              {/* <Heading size="medium" className={Styles.heading_4}> */}
              <Heading size="medium" className="max-w-[86rem] text-left sm:mt-8 md:mt-0">
                Digital Marketing
              </Heading>
              {/* <Paragraph className={Styles.para_3}> */}
              <Paragraph className="max-w-[46rem] sm:mt-8 md:mt-12">
                We believe in building versatile and adaptable digital marketing ecosystems, as to
                offer an aggressive edge to your business
              </Paragraph>
              {/* <Box className={Styles.btn_wrap_3}> */}
              <div className="mt-12 text-left">
                <PillButton title={"Know More"} href={"/digital-marketing"} />
              </div>
            </div>
            {/* <Box className={Styles.right_wrap_3}> */}
            <div className="relative w-full sm:mb-0 sm:pt-[100%} md:mb-0 md:pt-0 xl:mb-0">
              <Image
                src="/images/marketing_dev_avatar.svg"
                alt="Octalogic Tech"
                fill
                sizes="(min-width: 0px) 100vw"
              />
            </div>
          </div>
        </div>
        {/* <Box className={Styles.sec_4}> */}
        <div className="sm:my-16 sm:mx-8 md:m-16 lg:ml-28 mr-28 xl:mt-21 xl:mb-21">
          {/* <Box className={Styles.content_wrap_4}> */}
          <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row">
            {/* <div className={Styles.left_wrap_4}> */}
            <div className="flex-grow-0 flex-shrink-0 width-60">
              {/* <Heading size="medium" className={Styles.heading_4}> */}
              <Heading size="medium" className="max-w-[86rem] text-left sm:mt-8 md:mt-0">
                Mobile Development
              </Heading>
              {/* <Paragraph className={Styles.para_4}> */}
              <Paragraph className="max-w-[46rem] sm:mt-8 md:mt-12">
                We use our expertise in a variety of technologies to craft code that opens the door
                for ongoing iterations with our clients’ users and ensure a build with the
                foundation for success.
              </Paragraph>
              {/* <Box className={Styles.btn_wrap_4}> */}
              <div className="mt-12 text-left">
                <PillButton title={"Know More"} href={"/mobile-development"} />
              </div>
            </div>
            {/* <Box className={Styles.right_wrap_4}> */}
            <div className="relative w-full sm:mb-0 sm:pt-[100%} md:mb-0 md:pt-0 xl:mb-0">
              <Image
                src="/images/mobile_dev_avatar.svg"
                alt="Octalogic Tech"
                fill
                sizes="(min-width: 0px) 100vw"
              />
            </div>
          </div>
        </div>
        {/* <Box className={Styles.sec_5}> */}
        <div className="sm:my-16 sm:mx-16 xl:mt-21 xl:mb-21">
          {/* <Box className={Styles.content_wrap_5}> */}
          <div className="flex max-w-[86rem] mx-auto sm:flex sm:flex-col-reverse md:flex md:flex-row">
            {/* <div className={Styles.left_wrap_5}> */}
            <div className="flex-grow-0 flex-shrink-0 width-60">
              {/* <Heading size="medium" className={Styles.heading_5}> */}
              <Heading size="medium" className="max-w-[86rem] text-left sm:mt-8 md:mt-0">
                Remote Resources
              </Heading>
              {/* <Paragraph className={Styles.para_5}> */}
              <Paragraph className="max-w-[46rem] sm:mt-8 md:mt-12">
                We believe in building scalable software and apps for our clients with in-house
                infrastructure to reduce dependency on 3rd party services.
              </Paragraph>
              {/* <Box className={Styles.btn_wrap_5}> */}
              <div className="mt-12 text-left">
                <PillButton title={"Know More"} href={"/remote-resources"} />
              </div>
            </div>
            {/* <Box className={Styles.right_wrap_5}> */}
            <div className="relative w-full sm:mb-0 sm:pt-[100%} md:mb-0 md:pt-0 xl:mb-0">
              <Image
                src="/images/remote-resources-avatar.svg"
                alt="Octalogic Tech"
                fill
                sizes="(min-width: 0px) 100vw"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Box className={Styles.sec_6}> */}
      <Heading size="medium" className="sm:mt-12 text-center">
        Let&apos;s craft brilliance together!
      </Heading>
      {/* <Box className={Styles.btn_wrap_6}> */}
      <div className="mt-12 text-center">
        <PillButton title={"Get In Touch"} href={"/contact"} />
      </div>
      <HorizontalRule />
    </>
  );
};

export default Services;
