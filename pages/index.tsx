import styles from "../styles/home.module.css";

import Image from "next/image";

import HeroImage from "../public/images/hero_image.svg";
import MobileHeroImage from "../public/images/hero_image_mobile.svg";

import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import HorizontalRule from "../components/horizontal-rule/horizontal-rule";
import PillButton from "../components/pill-button/pill-button";
import ServiceCard from "../components/service-card/service-card";
import BenefitsCard from "../components/benefits-card/benefits-card";
import Head from "../components/head";
import Heading from "../components/heading/heading";
import Paragraph from "../components/paragraph/paragraph";

import { Services } from "../constants/services";
import { Benefits } from "../constants/benefits";

import { IBenefit, IService } from "../interfaces";

const Home = () => {
  return (
    <>
      <Head />
      <Box className={styles.sec_1_wrapper}>
        <Image
          alt="Hero image"
          src={HeroImage}
          priority
          quality={100}
          sizes="100vw"
          className={styles.hero_img}
        />
        <Image
          alt="Hero image"
          src={MobileHeroImage}
          priority
          quality={100}
          sizes="100vw"
          className={styles.mobile_hero_img}
        />
        <Box className={styles.content_wrapper}>
          <Heading size="large" className={styles.heading_1}>
            Converting ideas to solutions
          </Heading>
          <Paragraph className={styles.para_1}>
            Got a startup idea? Let us turn it into a solution! We provide offshore development &
            technological resources to turn an idea into reality
          </Paragraph>
          <Box className={styles.btn_wrap_1}>
            <PillButton title={"GET STARTED"} href={"/contact"} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className={styles.planet_1}></Box>
        <Heading size="medium">What we do</Heading>
        <Box className={styles.services_wrap}>
          {Services.map((service: IService) => (
            <ServiceCard key={service.title} details={service} className={styles.service_card} />
          ))}
        </Box>
        <Box className={styles.btn_wrap_2}>
          <PillButton title={"VIEW MORE"} href={"/services"} />
        </Box>
      </Box>
      <Box className={styles.sec_3}>
        <Box className={styles.planet_1}></Box>
        <Box className={styles.why_us}></Box>
        <Heading size="medium">Offshore Team Benefits</Heading>
        <Grid container className={styles.benefits_grid}>
          {Benefits.map((benefit: IBenefit) => (
            <Grid xs={12} md={6} key={benefit.title} item className={styles.benefits_grid_item}>
              <BenefitsCard details={benefit} className={styles.benefits_card} />
            </Grid>
          ))}
        </Grid>
        <Box className={styles.planet_2_wrap}>
          <Box className={styles.planet_2}></Box>
        </Box>
      </Box>
      <Box className={styles.sec_4}>
        <Heading size="medium" className={styles.heading_4}>
          Let&apos;s craft brilliance together!
        </Heading>
        <Box className={styles.btn_wrap_3}>
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </Box>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default Home;
