import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Image from "next/image";

import PillButton from "../../components/pill-button/pill-button";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";

const About = () => {
  return (
    <>
      <Box
        sx={{
          marginX: { xs: "2rem", sm: "4rem", md: "7rem" },
          marginY: { xs: "1rem", sm: "3rem", lg: "5.25rem" },
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.7rem", lg: "3rem" },
            color: "info.main",
            fontWeight: "600",
            lineHeight: { xs: "2rem", sm: "3rem", lg: "3.5rem" },
            textAlign: { xs: "center", sm: "left" },
            maxWidth: "86rem",
            margin: "0 auto",
          }}
        >
          We Innovate To Make A Difference
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            maxWidth: "86rem",
            margin: "0 auto",
          }}
        >
          <Box sx={{ marginBottom: { xs: "0", lg: "3rem" }, flex: "0 0 60%" }}>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.8rem", lg: "1.3rem" },
                lineHeight: { xs: "1.75rem", sm: "2.2rem", lg: "2rem" },
                color: "text.primary",
                marginTop: { xs: "0rem", sm: "3rem" },
                maxWidth: "46rem",
              }}
            >
              Founded by classmates straight out of Uni, Octalogic Tech is home to all kinds of
              crazy from weird taste in music to conversations that would put a loony bin to shame,
              you&apos;ll find it all here.
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.8rem", lg: "1.3rem" },
                lineHeight: { xs: "1.75rem", sm: "2.2rem", lg: "2rem" },
                color: "text.primary",
                maxWidth: "45rem",
              }}
            >
              When we say this is like our 2nd home we literally mean it having ditched 9-5 ers and
              opted for all-nighters instead. But at the end of the day, we love what we do and we
              are good at it.
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.8rem", lg: "1.3rem" },
                lineHeight: { xs: "1.75rem", sm: "2.2rem", lg: "2rem" },
                color: "text.primary",
                marginTop: "2rem",
                maxWidth: "46rem",
              }}
            >
              Be it a Mobile app, a Web app, a Website, a Desktop application or digital marketing,
              we got you covered and May The Force Be With you
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.2rem", lg: "1rem" },
                lineHeight: { xs: "1.5rem", sm: "1.2rem", lg: "1rem" },
                color: "text.primary",
                marginTop: "1.25rem",
                maxWidth: "46rem",
              }}
            >
              P.S The image is completely irrelevant. We just really like Star Wars
            </Typography>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              marginTop: { xs: "0", sm: "2rem" },
              marginBottom: { xs: "0", sm: "35rem", md: "22rem", lg: "0" },
              paddingTop: { xs: "100%", sm: "0" },
            }}
          >
            <Image src="/images/may_the_force_bgdm.svg" alt="Octalogic Tech" fill />
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: { xs: "3rem", sm: "0" } }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
            color: "info.main",
            fontWeight: "600",
            lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
            textAlign: "center",
          }}
        >
          Let&apos;s craft brilliance together!
        </Typography>
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
    </>
  );
};

export default About;
