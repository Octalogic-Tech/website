import { Metadata } from "next";
import Image from "next/image";

import PillButton from "@/components/pill-button/pill-button";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Heading from "@/components/heading/heading";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/about`;

export const metadata: Metadata = {
  title: "Octalogic Tech - Who We Are",
  alternates: { canonical: siteUrl },
};

const About = () => {
  return (
    <div className="max-w-[86rem] mx-auto">
      <div className="mx-8 my-8 md:mx-16 md:my-12 xl:mt-21 xl:mb-21">
        <Heading size="large" className="mx-auto text-center md:text-left ">
          We Innovate To Make A Difference
        </Heading>
        <div className="flex mx-0 my-8 flex-col-reverse md:flex-row">
          <div className="flex-none md:w-3/5 ">
            <p className={`text-[16px] text-[#212529]`}>
              Founded by classmates straight out of Uni, Octalogic Tech is home to all kinds of
              crazy from weird taste in music to conversations that would put a loony bin to shame,
              you&apos;ll find it all here.
            </p>
            <p className={`text-[16px] text-[#212529]`}>
              When we say this is like our 2nd home we literally mean it having ditched 9-5 ers and
              opted for all-nighters instead. But at the end of the day, we love what we do and we
              are good at it.
            </p>
            <p className={`mt-8 text-[16px] text-[#212529]`}>
              Be it a Mobile app, a Web app, a Website, a Desktop application or digital marketing,
              we got you covered and May The Force Be With you
            </p>
            <p className={`mt-5 text-[14px] text-[#212529]`}>
              P.S The image is completely irrelevant. We just really like Star Wars
            </p>
          </div>
          <div className="relative w-full mt-0 pt-[100%] md:mt-8 md:pt-72 lg:pt-0 ">
            <Image
              src="/images/may_the_force_bgdm.svg"
              alt="Octalogic Tech"
              fill
              priority
              // sizes="(min-width: 0px) 100vw"
            />
          </div>
        </div>
      </div>
      <div className="mt-[10rem]">
        <Heading size="large" className="text-center">
          Let&apos;s craft brilliance together!
        </Heading>
        <div className="mt-12 text-center">
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </div>
      </div>
      <HorizontalRule />
    </div>
  );
};

export default About;
