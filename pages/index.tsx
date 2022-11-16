import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import HorizontalRule from "../components/horizontal-rule/horizontal-rule";
import PillButton from "../components/pill-button/pill-button";
import ServiceCard from "../components/service-card/service-card";
import BenefitsCard from "../components/benefits-card/benefits-card";
import Head from "../components/head";

import { Services } from "../constants/services";
import { Benefits } from "../constants/benefits";

import { IBenefit, IService } from "../interfaces";

const Home = () => {
  return (
    <>
      <Head />
      <Box>
        <Box
          sx={{
            height: { sm: "50vh", md: "58vw", lg: "125vh" },
            width: "100%",
            position: "absolute",
            backgroundImage: "url('/images/hero_image.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            top: { lg: "3.25rem" },
            zIndex: "-1",
            display: { xs: "none", sm: "block" },
          }}
        ></Box>
        <Box
          sx={{
            height: "60vh",
            width: "100%",
            position: "absolute",
            backgroundImage: "url('/images/hero_image_mobile.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            zIndex: "-1",
            display: { xs: "block", sm: "none" },
          }}
        ></Box>
        <Box
          sx={{
            minHeight: { xs: "62vh", sm: "52vh", md: "48vh", lg: "106vh" },
            paddingLeft: { xs: "2rem", sm: "4rem", md: "4rem", lg: "6rem" },
            paddingTop: { xs: "0", sm: "5rem" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
              color: "info.main",
              fontWeight: "600",
              maxWidth: { xs: "68vw", sm: "52vw" },
              lineHeight: { xs: "2rem", sm: "2.2rem", md: "2.5rem", lg: "3.5rem" },
            }}
          >
            Converting ideas to solutions
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: {
                xs: "1.4rem",
                sm: "1rem",
                md: "1.8rem",
                lg: "1.3rem",
              },
              color: "text.primary",
              maxWidth: { xs: "49vw", sm: "30vw", md: "38vw", lg: "30vw" },
              marginTop: "1.5rem",
              lineHeight: { xs: "1.8rem", sm: "1.4rem", md: "2rem" },
            }}
          >
            Got a startup idea? Let us turn it into a solution! We provide offshore development &
            technological resources to turn an idea into reality
          </Typography>
          <Box sx={{ marginTop: { xs: "2rem", lg: "4rem" } }}>
            <PillButton
              text={"GET STARTED"}
              sx={{
                backgroundColor: "secondary.main",
                padding: "0.7rem 2rem",
                ":hover": {
                  backgroundColor: "secondary.main",
                  boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                },
              }}
              link={"contact"}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            height: "80vh",
            width: "100%",
            position: "absolute",
            backgroundImage: "url('/images/planet-1.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            left: "-1.875rem",
            zIndex: "-1",
          }}
        ></Box>
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
          What we do
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: { xs: "2rem", sm: "4rem", md: "2rem" },
            marginTop: "6rem",
            flexWrap: "wrap",
          }}
        >
          {Services.map((service: IService) => (
            <ServiceCard
              key={service.title}
              details={service}
              sx={{
                maxWidth: { xs: "83.333%", sm: "33.333%", md: "22.14%" },
                flex: { xs: "0 0 83.333%", sm: "0 0 33.333%", md: "0 0 22.14%" },
              }}
            />
          ))}
        </Box>
        <Box sx={{ marginTop: "3rem", textAlign: "center" }}>
          <PillButton
            text={"LEARN MORE"}
            sx={{
              backgroundColor: "secondary.main",
              padding: "0.7rem 2rem",
              lineHeight: "1.5",
              ":hover": {
                backgroundColor: "secondary.main",
                boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
              },
            }}
            link={"services"}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "80vh",
            width: "100%",
            position: "absolute",
            backgroundImage: "url('/images/planet-1.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            left: "-1.875rem",
            zIndex: "-1",
          }}
        ></Box>
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            marginTop: "-6.25rem",
            position: "absolute",
            backgroundImage: "url('/images/why-us.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: "-1",
          }}
        ></Box>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
            color: "info.main",
            fontWeight: "600",
            lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          Offshore Team Benefits
        </Typography>
        <Grid container sx={{ maxWidth: "84%" }}>
          {Benefits.map((benefit: IBenefit) => (
            <Grid xs={12} md={6} key={benefit.title} item sx={{ padding: "1.25rem" }}>
              <BenefitsCard details={benefit} sx={{ flexDirection: { xs: "column", sm: "row" } }} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ width: "100%", zIndex: "-10" }}>
          <Box
            sx={{
              height: "40vh",
              width: "100%",
              position: "absolute",
              backgroundImage: "url('/images/planet-2.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              marginTop: "15.625rem",
              zIndex: "-6",
            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "8rem" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.8rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
            color: "info.main",
            fontWeight: "600",
            lineHeight: { xs: "2rem", sm: "1.7rem", md: "2rem", lg: "2.5rem" },
            textAlign: "center",
            marginBottom: "0.5rem",
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

export default Home;
