import { useRef } from "react";

import Box from "@mui/material/Box";

import Image from "next/image";

import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";
import PillButton from "../../components/pill-button/pill-button";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";

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
      <Head title="Octalogic Tech - Services" />
      <Box
        sx={{
          marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
          marginY: { xs: "1rem", sm: "4rem", lg: "5.25rem" },
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
          The Way We Work
        </Heading>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            maxWidth: "86rem",
            margin: "0 auto",
          }}
        >
          <Box sx={{ marginBottom: { xs: "0", lg: "6rem" }, flex: "0 0 60%" }}>
            <Paragraph
              sx={{
                marginTop: { xs: "0rem", sm: "3rem" },
                maxWidth: "46rem",
              }}
            >
              Our mission at Octalogic Tech is to help you create beautiful and functional mobile
              and web apps. From concept to delivery, we offer solutions that will ensure a
              successful product.
            </Paragraph>
            <Box sx={{ marginTop: "3rem", textAlign: "left" }}>
              <PillButton
                title={"See How"}
                sx={{
                  backgroundColor: "secondary.main",
                  padding: "0.5rem 1rem",
                  lineHeight: "1.5",
                  ":hover": {
                    backgroundColor: "secondary.main",
                    boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                  },
                }}
                onClick={() => scrollDown()}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              marginBottom: { xs: "0", sm: "0", md: "2rem", lg: "0" },
              paddingTop: { xs: "100%", sm: "0" },
            }}
          >
            <Image src="/images/services_hero_image.svg" alt="Octalogic Tech" fill />
          </Box>
        </Box>
      </Box>
      <Box ref={aboutSection}>
        <Heading size="medium" sx={{ marginTop: { xs: "4rem", sm: "0" } }}>
          Our Services
        </Heading>
        <Box
          sx={{
            marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
            marginY: { xs: "4rem", sm: "4rem", lg: "5.25rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              maxWidth: "86rem",
              margin: "0 auto",
            }}
          >
            <Box sx={{ marginBottom: { xs: "0", lg: "6rem" }, flex: "0 0 60%" }}>
              <Heading
                size="medium"
                sx={{
                  maxWidth: "86rem",
                  textAlign: "left",
                  marginTop: { xs: "2rem", sm: "0" },
                }}
              >
                Web Development
              </Heading>
              <Paragraph
                sx={{
                  marginTop: { xs: "2rem", sm: "3rem" },
                  maxWidth: "46rem",
                }}
              >
                We create products using the latest technologies at our disposal to give you ground
                breaking performance while being aesthetically pleasing and user friendly at the
                same time.
              </Paragraph>
              <Box sx={{ marginTop: "3rem", textAlign: "left" }}>
                <PillButton
                  title={"Know More"}
                  sx={{
                    backgroundColor: "secondary.main",
                    padding: ".7rem 2rem",
                    lineHeight: "1.5",
                    ":hover": {
                      backgroundColor: "secondary.main",
                      boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                    },
                  }}
                  href={"/web-development"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                marginBottom: { xs: "0", sm: "0", md: "2rem", lg: "0" },
                paddingTop: { xs: "100%", sm: "0" },
              }}
            >
              <Image src="/images/web_dev_avatar.svg" alt="Octalogic Tech" fill priority />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
            marginY: { xs: "4rem", sm: "4rem", lg: "5.25rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row-reverse" },
              maxWidth: "86rem",
              margin: "0 auto",
            }}
          >
            <Box sx={{ marginBottom: { xs: "0", lg: "6rem" }, flex: "0 0 60%" }}>
              <Heading
                size="medium"
                sx={{
                  maxWidth: "86rem",
                  textAlign: "left",
                  marginTop: { xs: "2rem", sm: "0" },
                }}
              >
                Digital Marketing
              </Heading>
              <Paragraph
                sx={{
                  marginTop: { xs: "2rem", sm: "3rem" },
                  maxWidth: "46rem",
                }}
              >
                We believe in building versatile and adaptable digital marketing ecosystems, as to
                offer an aggressive edge to your business
              </Paragraph>
              <Box sx={{ marginTop: "3rem", textAlign: "left" }}>
                <PillButton
                  title={"Know More"}
                  sx={{
                    backgroundColor: "secondary.main",
                    padding: ".7rem 2rem",
                    lineHeight: "1.5",
                    ":hover": {
                      backgroundColor: "secondary.main",
                      boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                    },
                  }}
                  href={"/digital-marketing"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                marginBottom: { xs: "0", sm: "0", md: "2rem", lg: "0" },
                paddingTop: { xs: "100%", sm: "0" },
              }}
            >
              <Image src="/images/marketing_dev_avatar.svg" alt="Octalogic Tech" fill />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
            marginY: { xs: "4rem", sm: "4rem", lg: "5.25rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              maxWidth: "86rem",
              margin: "0 auto",
            }}
          >
            <Box sx={{ marginBottom: { xs: "0", lg: "6rem" }, flex: "0 0 60%" }}>
              <Heading
                size="medium"
                sx={{
                  maxWidth: "86rem",
                  textAlign: "left",
                  marginTop: { xs: "2rem", sm: "0" },
                }}
              >
                Mobile Development
              </Heading>
              <Paragraph
                sx={{
                  marginTop: { xs: "2rem", sm: "3rem" },
                  maxWidth: "46rem",
                }}
              >
                We use our expertise in a variety of technologies to craft code that opens the door
                for ongoing iterations with our clients’ users and ensure a build with the
                foundation for success.
              </Paragraph>
              <Box sx={{ marginTop: "3rem", textAlign: "left" }}>
                <PillButton
                  title={"Know More"}
                  sx={{
                    backgroundColor: "secondary.main",
                    padding: ".7rem 2rem",
                    lineHeight: "1.5",
                    ":hover": {
                      backgroundColor: "secondary.main",
                      boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                    },
                  }}
                  href={"/mobile-development"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                marginBottom: { xs: "0", sm: "0", md: "2rem", lg: "0" },
                paddingTop: { xs: "100%", sm: "0" },
              }}
            >
              <Image src="/images/mobile_dev_avatar.svg" alt="Octalogic Tech" fill />
            </Box>
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

export default Services;
