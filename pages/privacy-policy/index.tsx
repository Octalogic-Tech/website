import Styles from "../../styles/privacy-policy.module.css";

import Box from "@mui/material/Box";

import Head from "../../components/head";
import Link from "../../components/link/link";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";

import { host } from "../../config/vars";

const siteUrl = `https://${host}/privacy-policy`;

const PrivacyPolicy = () => {
  return (
    <>
      <Head title="Octalogic Tech - Privacy Policy" canonicalUrl={siteUrl} />
      <Box className={Styles.container}>
        <Heading
          size="medium"
          sx={{
            color: "text.primary",
          }}
          className={Styles.heading_1}
        >
          Privacy Policy
        </Heading>
        <Paragraph className={Styles.para_1}>
          Your privacy is important to us. It is Octalogic Tech&apos;s policy to respect your
          privacy regarding any information we may collect from you across our website,&nbsp;
          <Link
            href="/"
            sx={{
              color: "#007bff",
              ":hover": { color: "#0056b3" },
            }}
            className={Styles.link}
          >
            https://octalogic.in/
          </Link>
          , and other sites we own and operate.
        </Paragraph>
        <Paragraph className={Styles.para_2}>
          We only ask for personal information when we truly need it to provide a service to you. We
          collect it by fair and lawful means, with your knowledge and consent. We also let you know
          why we’re collecting it and how it will be used.
        </Paragraph>
        <Paragraph className={Styles.para_3}>
          We only retain collected information for as long as necessary to provide you with your
          requested service. What data we store, we’ll protect within commercially acceptable means
          to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </Paragraph>
        <Paragraph className={Styles.para_4}>
          We don’t share any personally identifying information publicly or with third-parties,
          except when required to by law.
        </Paragraph>
        <Paragraph className={Styles.para_5}>
          Our website may link to external sites that are not operated by us. Please be aware that
          we have no control over the content and practices of these sites, and cannot accept
          responsibility or liability for their respective privacy policies.
        </Paragraph>
        <Paragraph className={Styles.para_6}>
          You are free to refuse our request for your personal information, with the understanding
          that we may be unable to provide you with some of your desired services.
        </Paragraph>
        <Paragraph className={Styles.para_7}>
          Your continued use of our website will be regarded as acceptance of our practices around
          privacy and personal information. If you have any questions about how we handle user data
          and personal information, feel free to contact us.
        </Paragraph>
        <Paragraph className={Styles.para_8}>
          This policy is effective as of 1 March 2017.
        </Paragraph>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default PrivacyPolicy;
