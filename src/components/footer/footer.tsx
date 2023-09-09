import Image from "next/image";
import Link from "next/link";

import { Socials } from "@/constants/socials";

import { ISocial } from "@/interfaces";

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <div className="p-1 text-center basis-[13rem]">
      <Link
        href={href}
        color="info.main"
        className="font-normal opacity-70 hover:opacity-100 transition-opacity duration-200 text-[#212529]"
      >
        {name}
      </Link>
    </div>
  );
};

const SocialLinks = ({ socials }: { socials: ISocial[] }) => {
  const elementRows = socials.map((social) => (
    <div
      key={social.name}
      className="opacity-70 hover:opacity-100 transition-opacity duration-200 p-2"
    >
      <a href={social.link} target="_blank" rel="noreferrer">
        <Image
          src={social.iconUrl}
          alt={`${social.name} logo`}
          width={16}
          height={16}
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
    <div className="w-full mx-auto ">
      <div className="flex justify-center my-12">
        <Link href={"/"}>
          <Image
            src="/images/logos/octalogic.svg"
            alt="Octalogic logo"
            width={60}
            height={60}
            className="cursor-pointer bg-white"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-[2rem] sm:gap-[1rem] lg:gap-0 my-12 w-full ">
        <div className="flex w-full justify-center mb-[0.187rem]">
          <FooterLink name={"Contact"} href={"contact"} />
          <FooterLink name={"Home"} href={"/"} />
          <FooterLink name={"Remote Resources"} href={"remote-resources"} />
        </div>
        <div className="flex w-full justify-center mb-[0.187rem]">
          <FooterLink name={"Privacy"} href={"privacy-policy"} />
          <FooterLink name={"About"} href={"about"} />
          <FooterLink name={"Web Dev"} href={"web-development"} />
        </div>
        <div className="flex w-full justify-center mb-[0.187rem]">
          <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
          {/* <FooterLink name={"Services"} href={"services"} /> */}
          <FooterLink name={"Blog"} href={"https://blog.octalogic.in"} />
          <FooterLink name={"Mobile Dev"} href={"mobile-development"} />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <SocialLinks socials={Socials} />
      </div>
      <div className="flex justify-center text-2 text-center pb-2 leading-2 text-[#212529]">
        © 2017 - {date.getFullYear()}, Octalogic Tech LLP. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
