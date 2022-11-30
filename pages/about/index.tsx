import Styles from "../../styles/about.module.css";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import PillButton from "../../components/pill-button/pill-button";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/about`;

const About = () => {
  return (
    <>
      <Head title="Octalogic Tech - Who We Are" canonicalUrl={siteUrl} />
      <Box className={Styles.container}>
        <Heading size="large" className={Styles.heading_1}>
          We Innovate To Make A Difference
        </Heading>
        <Box className={Styles.content_wrap}>
          <Box className={Styles.left_wrap}>
            <Paragraph className={Styles.para_1}>
              Founded by classmates straight out of Uni, Octalogic Tech is home to all kinds of
              crazy from weird taste in music to conversations that would put a loony bin to shame,
              you&apos;ll find it all here.
            </Paragraph>
            <Paragraph className={Styles.para_2}>
              When we say this is like our 2nd home we literally mean it having ditched 9-5 ers and
              opted for all-nighters instead. But at the end of the day, we love what we do and we
              are good at it.
            </Paragraph>
            <Paragraph className={Styles.para_3}>
              Be it a Mobile app, a Web app, a Website, a Desktop application or digital marketing,
              we got you covered and May The Force Be With you
            </Paragraph>
            <Paragraph className={Styles.para_4}>
              P.S The image is completely irrelevant. We just really like Star Wars
            </Paragraph>
          </Box>
          <Box className={Styles.right_wrap}>
            <Image
              src="/images/may_the_force_bgdm.svg"
              alt="Octalogic Tech"
              fill
              priority
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Box>
      </Box>
      <Box className={Styles.sec_3}>
        <Heading size="medium">Let&apos;s craft brilliance together!</Heading>
        <Box className={Styles.btn_wrap}>
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </Box>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default About;
