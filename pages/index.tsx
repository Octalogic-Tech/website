import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import HorizontalRule from "../components/horizontal-rule/horizontal-rule";
import PillButton from "../components/pill-button/pill-button";
import ServiceCard from "../components/service-card/service-card";

const Home = () => {
  return (
    <>
      <Box sx={{ minHeight: "106vh" }}>
        <Box
          sx={{
            height: { sm: "50vh", md: "73vh", lg: "125vh" },
            width: "100%",
            position: "absolute",
            backgroundImage: "url('/images/hero_image.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            right: "-1.562rem",
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
            // right: '-1.562rem',
            zIndex: "-1",
            display: { xs: "block", sm: "none" },
          }}
        ></Box>
        <Box
          sx={{
            height: "85vh",
            paddingLeft: { xs: "2rem", sm: "4rem", md: "6rem" },
            paddingTop: { xs: "0", sm: "5rem" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
              color: "info.main",
              fontWeight: "600",
              maxWidth: { xs: "68vw", sm: "52vw" },
              lineHeight: { xs: "2rem", sm: "2.2rem", md: "3.5rem" },
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
            // display: { xs: 'none', sm: 'block' },
          }}
        ></Box>
        <Typography
          component="h2"
          sx={{
            fontSize: "2.5rem",
            color: "info.main",
            fontWeight: "600",
            lineHeight: "2.5rem",
            textAlign: "center",
          }}
        >
          What we do
        </Typography>
        <Box sx={{ width: "100%", display: "flex" }}>
          <ServiceCard sx={{ maxWidth: "25%", flex: "0 0 25%" }} />
        </Box>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default Home;
