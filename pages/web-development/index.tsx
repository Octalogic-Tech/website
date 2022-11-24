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
      <Box
        sx={{
          marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
          marginY: { xs: "1rem", sm: "3rem", lg: "5.25rem" },
        }}
      >
        <Heading
          size="large"
          sx={{
            maxWidth: "86rem",
            margin: "0 auto",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Web Development
        </Heading>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            maxWidth: "86rem",
            margin: "0 auto",
          }}
        >
          <Box sx={{ marginBottom: { xs: "0", lg: "3rem" }, flex: "0 0 60%" }}>
            <Paragraph
              sx={{
                marginTop: { xs: "0rem", sm: "3rem" },
                maxWidth: "46rem",
              }}
            >
              Working alongside our mobile app team gives us the added benefit of creating seamless
              mobile-first experiences and delivering fully-featured web apps.
            </Paragraph>
            <Paragraph
              sx={{
                marginTop: "2rem",
                maxWidth: "46rem",
              }}
            >
              We’re experienced in both front-end and backend infrastructure and offer comprehensive
              solutions to fit the needs of our clients.
            </Paragraph>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              marginBottom: { xs: "0", sm: "0", md: "2rem", lg: "0" },
              paddingTop: { xs: "100%", sm: "0" },
            }}
          >
            <Image src="/images/web_dev_hero_image.svg" alt="Octalogic Tech" fill priority />
          </Box>
        </Box>
        <Heading
          size="medium"
          sx={{ textAlign: "left", maxWidth: "86rem", margin: "0 auto", marginTop: "6rem" }}
        >
          Technologies We Work With
        </Heading>
        <Paragraph
          sx={{
            maxWidth: "86rem",
            margin: "0 auto",
            marginTop: "2rem",
          }}
        >
          We make ultra-optimized, fast loading web apps that ensure delightful user experience
          across a variety of devices using all the tools at our disposal.
        </Paragraph>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(10rem, 1fr))",
              sm: "repeat(3, minmax(11rem, 1fr))",
              md: "repeat(4, minmax(11rem, 1fr))",
              lg: "repeat(6, minmax(11rem, 1fr))",
            },
            justifyContent: "center",
            maxWidth: "82rem",
            margin: "3rem auto",
          }}
        >
          {WebTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </Box>
        <Box sx={{ marginTop: "8rem" }}>
          <Heading size="medium" sx={{ marginBottom: "0.5rem" }}>
            Let&apos;s craft brilliance together!
          </Heading>
          <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
            <PillButton title={"Get In Touch"} href={"/contact"} />
          </Box>
        </Box>
        <HorizontalRule />
      </Box>
    </>
  );
};

export default WebDevelopment;
