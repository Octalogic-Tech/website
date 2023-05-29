// import Styles from "./footer.module.css";

import Image from "next/image";
// import NextLink from "next/link";
import Link from "next/link";

// import Link from "../link/link";

import { Socials } from "../../constants/socials";

import { ISocial } from "../../interfaces";

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  return (
    // <Box className={Styles.container}>
    <div className="p-3">
      {/* <Link href={href} underline="none" color="info.main" className={Styles.link}> */}
      <Link
        href={href}
        // underline="none"
        color="info.main"
        className="text-base font-normal opacity-70 transition-opacity duration-200"
      >
        {name}
      </Link>
    </div>
  );
};

const SocialLinks = ({ socials }: { socials: ISocial[] }) => {
  const elementRows = socials.map((social) => (
    // <Box key={social.name} className={Styles.social_wrap}>
    <div key={social.name} className="opacity-70 transition-opacity duration-200 p-2">
      <a href={social.link} target="_blank" rel="noreferrer">
        <Image
          src={social.iconUrl}
          alt={`${social.name} logo`}
          width={16}
          height={16}
          // className={Styles.social_img}
          className="cursor-pointer"
        />
      </a>
    </div>
  ));

  return <>{elementRows}</>;
};

export function Footer() {
  const date: Date = new Date();

  return (
    // <div className="bg-red-500">
    //   red
    // </div>
    <div className="w-[60%] mx-auto ">
      <div className="flex justify-center my-5">
        <Link href={"/"}>
          <Image
            src="/images/logos/octalogic.svg"
            alt="Octalogic logo"
            width={60}
            height={60}
            // className={Styles.logo_img}
            className="cursor-pointer my-5"
          />
        </Link>
      </div>
      <div className="body flex justify-center gap-10 text-center ">
        <div className="w-[300px]">
          <FooterLink name={"Contact"} href={"contact"} />
          <FooterLink name={"Privacy"} href={"privacy-policy"} />
          <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
        </div>
        <div className="w-[300px]">
          <FooterLink name={"Home"} href={"/"} />
          <FooterLink name={"About"} href={"about"} />
          <FooterLink name={"Services"} href={"services"} />
        </div>
        <div className="w-[300px]">
          <FooterLink name={"Remote Resources"} href={"remote-resources"} />
          <FooterLink name={"Web Dev"} href={"web-development"} />
          <FooterLink name={"Mobile Dev"} href={"mobile-development"} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <SocialLinks socials={Socials} />
      </div>
      <div className="flex justify-center text-[0.8rem] text-center pb-[0.5rem] leading-[0.8rem] text-[#212529]">
        © 2017 - {date.getFullYear()}, Octalogic Tech LLP. All rights reserved
      </div>
    </div>
    // <Box className={Styles.footer_container}>
    // <div className="h-[22.375rem] flex flex-col items-center w-full">
    //   {/* <Box className={Styles.logo_wrap}> */}
    //   <div className="flex mt-[3rem]">
    //     <NextLink href={"/"}>
    //       <Image
    //         src="/images/logos/octalogic.svg"
    //         alt="Octalogic logo"
    //         width={60}
    //         height={60}
    //         // className={Styles.logo_img}
    //         className="cursor-pointer"
    //       />
    //     </NextLink>
    //   </div>
    //   {/* <Box className={Styles.links_container}> */}
    //   <div className="flex flex-col items-center mt-12 mb-12 w-full">
    //     {/* <Box className={Styles.links_wrap}> */}
    //     <div className="flex justify-center w-full mb-1/8">
    //       <FooterLink name={"Contact"} href={"contact"} />
    //       <FooterLink name={"Home"} href={"/"} />
    //       <FooterLink name={"Remote Resources"} href={"remote-resources"} />
    //     </div>
    //     {/* <Box className={Styles.links_wrap}> */}
    //     <div className="flex justify-center w-full mb-1/8">
    //       <FooterLink name={"Privacy"} href={"privacy-policy"} />
    //       <FooterLink name={"About"} href={"about"} />
    //       <FooterLink name={"Web Dev"} href={"web-development"} />
    //     </div>
    //     {/* <Box className={Styles.links_wrap}> */}
    //     <div className="flex justify-center w-full mb-1/8">
    //       <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
    //       <FooterLink name={"Services"} href={"services"} />
    //       <FooterLink name={"Mobile Dev"} href={"mobile-development"} />
    //     </div>
    //   </div>
    //   {/* <Box className={Styles.socials_container}> */}
    //   <div className="flex items-center mb-[0.65rem] gap-[1rem]">
    //     <SocialLinks socials={Socials} />
    //   </div>
    //   {/* <Typography component="div" className={Styles.copyright}> */}
    //   <div className="text-[0.8rem] text-center pb-[0.5rem] leading-[0.8rem] text-[#212529]">
    //     © 2017 - {date.getFullYear()}, Octalogic Tech LLP. All rights reserved
    //   </div>
    // </div>
  );
}

export default Footer;
