import Image from "next/image";
import Link from "next/link";

import { Socials } from "../../constants/socials";

import { ISocial } from "../../interfaces";

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <div className="p-3">
      <Link
        href={href}
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
    <div key={social.name} className="opacity-70 transition-opacity duration-200 p-2">
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
    <div className="w-3/5 mx-auto ">
      <div className="flex justify-center my-5">
        <Link href={"/"}>
          <Image
            src="/images/logos/octalogic.svg"
            alt="Octalogic logo"
            width={60}
            height={60}
            className="cursor-pointer my-5"
          />
        </Link>
      </div>
      <div className="body flex justify-center gap-10 text-center ">
        <div className="w-80">
          <FooterLink name={"Contact"} href={"contact"} />
          <FooterLink name={"Privacy"} href={"privacy-policy"} />
          <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
        </div>
        <div className="w-80">
          <FooterLink name={"Home"} href={"/"} />
          <FooterLink name={"About"} href={"about"} />
          <FooterLink name={"Services"} href={"services"} />
        </div>
        <div className="w-80">
          <FooterLink name={"Remote Resources"} href={"remote-resources"} />
          <FooterLink name={"Web Dev"} href={"web-development"} />
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
