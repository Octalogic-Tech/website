import Styles from "../../styles/remote-resources.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import RemoteCard from "../../components/remote-card/remote-card";

import { RemoteServices } from "../../constants/technologies";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/remote-resources`;

const MobileDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Remote Resources" canonicalUrl={siteUrl} />
      <Box className={Styles.container}>
        <Heading size="large" className={Styles.heading_1}>
          Remote Resources
        </Heading>
        <Box className={Styles.content_wrap}>
          <Box className={Styles.left_wrap}>
            <Paragraph className={Styles.para_1}>
              {`We are a turnkey offshore development company providing custom software development
              and remote team services for clients across the globe while ensuring it doesn't cost
              them a fortune.`}
            </Paragraph>
          </Box>
          <Box className={Styles.right_wrap}>
            <Image
              src="/images/remote-resources-hero-image.svg"
              alt="Octalogic Tech"
              fill
              priority
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Box>
        <Heading size="medium" className={Styles.heading_2}>
          Areas of Expertise
        </Heading>
        <Paragraph className={Styles.para_2}>
          Our clients work directly with us without any middlemen, which is very effective and
          economical
        </Paragraph>
        <Box className={Styles.tech_wrapper}>
          {RemoteServices.map((service) => (
            <RemoteCard key={service.name} details={service} />
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

export default MobileDevelopment;
