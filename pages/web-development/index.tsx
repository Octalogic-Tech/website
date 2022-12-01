import Styles from "../../styles/web-development.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import TechCard from "../../components/tech-card/tech-card";

import { WebTechnologies } from "../../constants/technologies";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/web-development`;

const WebDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Web Development" canonicalUrl={siteUrl} />
      <Box className={Styles.container}>
        <Heading size="large" className={Styles.heading_1}>
          Web Development
        </Heading>
        <Box className={Styles.content_wrap}>
          <Box className={Styles.left_wrap}>
            <Paragraph className={Styles.para_1}>
              Working alongside our mobile app team gives us the added benefit of creating seamless
              mobile-first experiences and delivering fully-featured web apps.
            </Paragraph>
            <Paragraph className={Styles.para_2}>
              We’re experienced in both front-end and backend infrastructure and offer comprehensive
              solutions to fit the needs of our clients.
            </Paragraph>
          </Box>
          <Box className={Styles.right_wrap}>
            <Image
              src="/images/web_dev_hero_image.svg"
              alt="Octalogic Tech"
              fill
              priority
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Box>
        <Heading size="medium" className={Styles.heading_2}>
          Technologies We Work With
        </Heading>
        <Paragraph className={Styles.para_3}>
          We make ultra-optimized, fast loading web apps that ensure delightful user experience
          across a variety of devices using all the tools at our disposal.
        </Paragraph>
        <Box className={Styles.tech_wrapper}>
          {WebTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </Box>
        <Box className={Styles.sec_3}>
          <Heading size="medium" className={Styles.heading_3}>
            Let&apos;s craft brilliance together!
          </Heading>
          <Box className={Styles.btn_wrap}>
            <PillButton title={"Get In Touch"} href={"/contact"} />
          </Box>
        </Box>
        <HorizontalRule />
      </Box>
    </>
  );
};

export default WebDevelopment;
