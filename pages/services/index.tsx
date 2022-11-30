import Styles from "../../styles/services.module.css";

import { useRef } from "react";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/services`;

export const Services = () => {
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
      <Box className={Styles.sec_1}>
        <Heading size="large" className={Styles.heading_1}>
          The Way We Work
        </Heading>
        <Box className={Styles.content_wrap_1}>
          <Box className={Styles.left_wrap_1}>
            <Paragraph className={Styles.para_1}>
              Our mission at Octalogic Tech is to help you create beautiful and functional mobile
              and web apps. From concept to delivery, we offer solutions that will ensure a
              successful product.
            </Paragraph>
            <Box className={Styles.btn_wrap_1}>
              <PillButton title={"See How"} className={Styles.btn_1} onClick={() => scrollDown()} />
            </Box>
          </Box>
          <Box className={Styles.right_wrap_1}>
            <Image
              src="/images/services_hero_image.svg"
              alt="Octalogic Tech"
              fill
              sizes="(min-width: 0px) 100vw"
            />
          </Box>
        </Box>
      </Box>
      <Box ref={aboutSection}>
        <Heading size="medium" className={Styles.heading_2}>
          Our Services
        </Heading>
        <Box className={Styles.sec_2}>
          <Box className={Styles.content_wrap_2}>
            <Box className={Styles.left_wrap_2}>
              <Heading size="medium" className={Styles.heading_3}>
                Web Development
              </Heading>
              <Paragraph className={Styles.para_2}>
                We create products using the latest technologies at our disposal to give you ground
                breaking performance while being aesthetically pleasing and user friendly at the
                same time.
              </Paragraph>
              <Box className={Styles.btn_wrap_2}>
                <PillButton title={"Know More"} href={"/web-development"} />
              </Box>
            </Box>
            <Box className={Styles.right_wrap_2}>
              <Image
                src="/images/web_dev_avatar.svg"
                alt="Octalogic Tech"
                fill
                priority
                sizes="(min-width: 0px) 100vw"
              />
            </Box>
          </Box>
        </Box>
        <Box className={Styles.sec_3}>
          <Box className={Styles.content_wrap_3}>
            <Box className={Styles.left_wrap_3}>
              <Heading size="medium" className={Styles.heading_4}>
                Digital Marketing
              </Heading>
              <Paragraph className={Styles.para_3}>
                We believe in building versatile and adaptable digital marketing ecosystems, as to
                offer an aggressive edge to your business
              </Paragraph>
              <Box className={Styles.btn_wrap_3}>
                <PillButton title={"Know More"} href={"/digital-marketing"} />
              </Box>
            </Box>
            <Box className={Styles.right_wrap_3}>
              <Image
                src="/images/marketing_dev_avatar.svg"
                alt="Octalogic Tech"
                fill
                sizes="(min-width: 0px) 100vw"
              />
            </Box>
          </Box>
        </Box>
        <Box className={Styles.sec_4}>
          <Box className={Styles.content_wrap_4}>
            <Box className={Styles.left_wrap_4}>
              <Heading size="medium" className={Styles.heading_5}>
                Mobile Development
              </Heading>
              <Paragraph className={Styles.para_4}>
                We use our expertise in a variety of technologies to craft code that opens the door
                for ongoing iterations with our clients’ users and ensure a build with the
                foundation for success.
              </Paragraph>
              <Box className={Styles.btn_wrap_4}>
                <PillButton title={"Know More"} href={"/mobile-development"} />
              </Box>
            </Box>
            <Box className={Styles.right_wrap_4}>
              <Image
                src="/images/mobile_dev_avatar.svg"
                alt="Octalogic Tech"
                fill
                sizes="(min-width: 0px) 100vw"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={Styles.sec_5}>
        <Heading size="medium">Let&apos;s craft brilliance together!</Heading>
        <Box className={Styles.btn_wrap_5}>
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </Box>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default Services;
