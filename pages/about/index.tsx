import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import PillButton from "../../components/pill-button/pill-button";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";

const About = () => {
  return (
    <>
      <Head title="Octalogic Tech - Who We Are" />
      <Box
        sx={{
          marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
          marginY: { xs: "1rem", sm: "3rem", lg: "5.25rem" },
        }}
      >
        <Heading
          size="large"
          sx={{ maxWidth: "86rem", margin: "0 auto", textAlign: { xs: "center", sm: "left" } }}
        >
          We Innovate To Make A Difference
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
                maxWidth: "46rem",
                marginTop: { xs: "0rem", sm: "3rem" },
              }}
            >
              Founded by classmates straight out of Uni, Octalogic Tech is home to all kinds of
              crazy from weird taste in music to conversations that would put a loony bin to shame,
              you&apos;ll find it all here.
            </Paragraph>
            <Paragraph
              sx={{
                maxWidth: "45rem",
              }}
            >
              When we say this is like our 2nd home we literally mean it having ditched 9-5 ers and
              opted for all-nighters instead. But at the end of the day, we love what we do and we
              are good at it.
            </Paragraph>
            <Paragraph
              sx={{
                marginTop: "2rem",
                maxWidth: "46rem",
              }}
            >
              Be it a Mobile app, a Web app, a Website, a Desktop application or digital marketing,
              we got you covered and May The Force Be With you
            </Paragraph>
            <Paragraph
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.2rem", lg: "1rem" },
                lineHeight: { xs: "1.5rem", sm: "1.2rem", lg: "1rem" },
                marginTop: "1.25rem",
                maxWidth: "46rem",
              }}
            >
              P.S The image is completely irrelevant. We just really like Star Wars
            </Paragraph>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              marginTop: { xs: "0", sm: "2rem" },
              marginBottom: { xs: "0", sm: "6rem", md: "22rem", lg: "0" },
              paddingTop: { xs: "100%", sm: "18rem", md: "0" },
            }}
          >
            <Image src="/images/may_the_force_bgdm.svg" alt="Octalogic Tech" fill priority />
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: { xs: "3rem", sm: "0" } }}>
        <Heading size="medium">Let&apos;s craft brilliance together!</Heading>
        <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
          <PillButton
            title={"Get In Touch"}
            sx={{
              backgroundColor: "secondary.main",
              padding: "0.7rem 2rem",
              lineHeight: "1.5",
              ":hover": {
                backgroundColor: "secondary.main",
                boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
              },
            }}
            href={"/contact"}
          />
        </Box>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default About;
