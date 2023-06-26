import Image from "next/image";

import HeroImage from "/public/images/hero_image.svg";
import MobileHeroImage from "/public/images/hero_image_mobile.svg";

import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import PillButton from "@/components/pill-button/pill-button";
import ServiceCard from "@/components/service-card/service-card";
import BenefitsCard from "@/components/benefits-card/benefits-card";
// import Head from "@/components/head";
import Heading from "@/components/heading/heading";
import Paragraph from "@/components/paragraph/paragraph";

import { Services } from "@/constants/services";
import { Benefits } from "@/constants/benefits";

import { IBenefit, IService } from "@/interfaces";

const Home = () => {
  return (
    <>
      {/* <Head /> */}
      <div className="min-h-[48vw] mb-16 relative w-full text-right">
        <Image
          alt="Hero image"
          src={HeroImage}
          priority
          quality={100}
          sizes="100vw"
          className="w-54 h-auto md:w-7/12 absolute right-0 top-neg-6 z-[-1] sm:hidden md:block"
        />
        <Image
          alt="Hero image"
          src={MobileHeroImage}
          priority
          quality={100}
          sizes="100vw"
          className="w-55 h-auto absolute right-0 top-0 z-[-1] sm:block md:hidden"
        />
        <div className="text-left sm:pl-8 sm:pt-0 md:pl-16 md:pt-12 xl:pl-24 xl:pt-20">
          <Heading size="large" className="sm:max-w-[68vw] md:max-w-[52vw]">
            Converting ideas to solutions
          </Heading>
          <Paragraph className="mt-6 sm:max-w-[49vw] md:max-v-[30vw] lg:max-w-[38vw] xl:max-w-[30vw]">
            Got a startup idea? Let us turn it into a solution! We provide offshore development &
            technological resources to turn an idea into reality
          </Paragraph>
          <div className="sm:mt-8 xl:mt-16">
            <PillButton title={"GET STARTED"} href={"/contact"} />
          </div>
        </div>
      </div>
      <div>
        <div className="w-full absolute bg-no-repeat bg-left -left-6 top-0 z-[-1]  bg-url(/images/planet-1.svg)"></div>
        <Heading size="large" className="text-center">
          What we do
        </Heading>
        <div className=" flex justify-center mt-24 flex-wrap sm:flex sm:gap-8 md:flex md:gap-16 lg:flex lg:gap-8">
          {Services.map((service: IService) => (
            <ServiceCard key={service.title} details={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <PillButton title={"VIEW MORE"} href={"/services"} />
        </div>
      </div>
      <div className="mt-32 flex flex-col items-center">
        <div className="w-full absolute bg-no-repeat bg-left -left-6 top-0 z-[-1]  bg-url(/images/planet-1.svg)"></div>
        <div
          className="h-screen w-full -mt-16 absolute bg-no-repeat bg-cover z-[-1]"
          style={{ backgroundImage: 'url("/images/why-us.svg")' }}
        ></div>
        <Heading size="large">Offshore Team Benefits</Heading>
        <div className="grid grid-cols-2 gap-12 m-16 w-[80%] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {Benefits.map((benefit: IBenefit) => (
            <div key={benefit.title}>
              <BenefitsCard details={benefit} />
            </div>
          ))}
        </div>
        <div className="w-full z-[-10]">
          <div className="h-40vh w-full absolute bg-no-repeat bg-right z-[-6] bg-url(/images/planet-2.svg)"></div>
        </div>
      </div>
      <div className="mt-32">
        <Heading size="large" className="mb-20 text-center">
          Let&apos;s craft brilliance together!
        </Heading>
        <div className="mt-12 text-center">
          <PillButton title={"Get In Touch"} href={"/contact"} />
        </div>
      </div>
      <HorizontalRule />
    </>
  );
};

export default Home;
