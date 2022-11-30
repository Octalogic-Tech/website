import Styles from "../../styles/digital-marketing.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import TechCard from "../../components/tech-card/tech-card";

import { DigitalTechnologies } from "../../constants/technologies";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/digital-marketing`;

const DigitalMarketing = () => {
  return (
    <>
      <Head title="Octalogic Tech - Digital Marketing" canonicalUrl={siteUrl} />
      <Box className={Styles.container}>
        <Heading size="large" className={Styles.heading_1}>
          Digital Marketing
        </Heading>
        <Box className={Styles.content_wrap}>
          <Box className={Styles.left_wrap}>
            <Paragraph className={Styles.para_1}>
              We want everyone to see exactly what makes your brand special. We take the time to
              understand your business and create a strategy to accomplish your objectives. Here at
              Octalogic Tech, we believe in building versatile and adaptable digital marketing
              ecosystems, as to offer an aggressive edge to your business.
            </Paragraph>
          </Box>
          <Box className={Styles.right_wrap}>
            <Image
              src="/images/digital-marketing-hero-image.svg"
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
          We make digital marketing strategies fit your goals and budgets.
        </Paragraph>
        <Box className={Styles.tech_wrapper}>
          {DigitalTechnologies.map((tech) => (
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

export default DigitalMarketing;
