import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import TechCard from "../../components/tech-card/tech-card";

import { MobileTechnologies } from "../../constants/technologies";

const MobileDevelopment = () => {
  return (
    <>
      <Head title="Octalogic Tech - Mobile Development" />
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
          Mobile Development
        </Heading>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            maxWidth: "86rem",
            margin: "0 auto",
          }}
        >
          <Box sx={{ marginBottom: { xs: "0", lg: "10rem" }, flex: "0 0 60%" }}>
            <Paragraph
              sx={{
                marginTop: { xs: "0rem", sm: "3rem" },
                maxWidth: "46rem",
              }}
            >
              Through design and development we laid the foundation for products that are visually
              pleasing and have an intuitive user experience.
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
            <Image src="/images/mobile-dev-hero-image.svg" alt="Octalogic Tech" fill />
          </Box>
        </Box>
        <Heading
          size="medium"
          sx={{
            textAlign: "left",
            maxWidth: "86rem",
            margin: "0 auto",
            marginTop: { xs: "6rem", lg: "2rem" },
          }}
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
          Our mobile developer team has a diverse toolbox of specialties that can fit your unique
          project.
        </Paragraph>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(10rem, 1fr))",
              sm: "repeat(3, minmax(11rem, 1fr))",
              lg: "repeat(6, minmax(11rem, 1fr))",
            },
            justifyContent: "center",
            maxWidth: "82rem",
            margin: "3rem auto",
          }}
        >
          {MobileTechnologies.map((tech) => (
            <TechCard key={tech.name} details={tech} />
          ))}
        </Box>
        <Box sx={{ marginTop: "8rem" }}>
          <Heading size="medium" sx={{ marginBottom: "0.5rem" }}>
            Let&apos;s craft brilliance together!
          </Heading>
          <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
            <PillButton
              text={"Get In Touch"}
              sx={{
                backgroundColor: "secondary.main",
                padding: "0.7rem 2rem",
                lineHeight: "1.5",
                ":hover": {
                  backgroundColor: "secondary.main",
                  boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                },
              }}
              link={"contact"}
            />
          </Box>
        </Box>
        <HorizontalRule />
      </Box>
    </>
  );
};

export default MobileDevelopment;
