import Box from "@mui/material/Box";
import HorizontalRule from "../components/horizontal-rule/horizontal-rule";

import Head from "../components/head";

const Home = () => {
  return (
    <>
      <Head />
      <Box sx={{ minHeight: "100vh" }}>
        <h3>Home page</h3>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default Home;