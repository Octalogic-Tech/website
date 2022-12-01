import Styles from "../../styles/mobile-development.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import TechCard from "../../components/tech-card/tech-card";

import { MobileTechnologies } from "../../constants/technologies";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/mobile-development`;

const MobileDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Mobile Development" canonicalUrl={siteUrl} />
      <Box className={Styles.container}>
        <Heading size="large" className={Styles.heading_1}>
          Mobile Development
        </Heading>
        <Box className={Styles.content_wrap}>
          <Box className={Styles.left_wrap}>
            <Paragraph className={Styles.para_1}>
              Through design and development we laid the foundation for products that are visually
              pleasing and have an intuitive user experience.
            </Paragraph>
          </Box>
          <Box className={Styles.right_wrap}>
            <Image
              src="/images/mobile-dev-hero-image.svg"
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
        <Paragraph className={Styles.para_2}>
          Our mobile developer team has a diverse toolbox of specialties that can fit your unique
          project.
        </Paragraph>
        <Box className={Styles.tech_wrapper}>
          {MobileTechnologies.map((tech) => (
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

export default MobileDevelopment;
