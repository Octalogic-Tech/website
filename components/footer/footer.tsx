import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Image from "next/image";
import NextLink from "next/link";

import Link from "../link/link";

import { Socials } from "../../constants/socials";

import { ISocial } from "../../interfaces";

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <Box
      sx={{
        flex: { xs: "0 0 33.333333%", sm: "0 0 16.666667%" },
        maxWidth: { xs: "33.333333%", sm: "16.666667%" },
        textAlign: "center",
        padding: "0.25rem",
      }}
    >
      <Link
        href={href}
        underline="none"
        color="info.main"
        sx={{
          textTransform: "unset",
          fontSize: "1rem",
          fontWeight: "400",
          // paddingLeft: '1rem',
          // paddingRight: '1rem',
          opacity: "0.70",
          transition: "opacity 0.2s",
          ":hover": {
            opacity: "1",
          },
        }}
      >
        {name}
      </Link>
    </Box>
  );
};

const SocialLinks = ({ socials }: { socials: ISocial[] }) => {
  const elementRows = socials.map((social) => (
    <Box
      key={social.name}
      sx={{
        opacity: "0.70",
        transition: "opacity 0.2s",
        ":hover": {
          opacity: "1",
        },
      }}
    >
      <a href={social.link} target="_blank" rel="noreferrer">
        <Image
          src={social.iconUrl}
          alt={`${social.name} logo`}
          width={16}
          height={16}
          style={{ cursor: "pointer" }}
        />
      </a>
    </Box>
  ));

  return <>{elementRows}</>;
};

export function Footer() {
  return (
    <Box
      sx={{
        height: "22.375rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ marginTop: "3rem", display: "flex" }}>
        <NextLink href={"/"}>
          <Image
            src="/images/logos/octalogic.svg"
            alt="Octalogic logo"
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
          />
        </NextLink>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "3rem",
          marginBottom: "3rem",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "0.187rem",
          }}
        >
          <FooterLink name={"Contact"} href={"contact"} />
          <FooterLink name={"Home"} href={"/"} />
          <FooterLink name={"Digital Marketing"} href={"digital-marketing"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "0.187rem",
          }}
        >
          <FooterLink name={"Privacy"} href={"privacy-policy"} />
          <FooterLink name={"About"} href={"about"} />
          <FooterLink name={"Web Dev"} href={"web-development"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "0.187rem",
          }}
        >
          <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
          <FooterLink name={"Services"} href={"services"} />
          <FooterLink name={"Mobile Dev"} href={"mobile-development"} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.65rem",
          gap: "1rem",
        }}
      >
        <SocialLinks socials={Socials} />
      </Box>
      <Typography
        component="div"
        sx={{
          fontSize: ".80rem",
          textAlign: "center",
          // opacity: "0.60",
          color: "#212529",
          paddingBottom: "0.5rem",
          lineHeight: ".80rem",
        }}
      >
        © 2017 - 2022, Octalogic Tech LLP. All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
