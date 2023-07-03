import Image from "next/image";

import HeroImage from "/public/images/hero_image.svg";
import MobileHeroImage from "/public/images/hero_image_mobile.svg";

import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import PillButton from "@/components/pill-button/pill-button";
import ServiceCard from "@/components/service-card/service-card";
import BenefitsCard from "@/components/benefits-card/benefits-card";
import Heading from "@/components/heading/heading";
import Paragraph from "@/components/paragraph/paragraph";

import { Services } from "@/constants/services";
import { Benefits } from "@/constants/benefits";

import { IBenefit, IService } from "@/interfaces";

const Home = () => {
  return (
    <>
      <div className="min-h-[48vw] mb-16 relative w-full text-right overflow-x-clip">
        <Image
          alt="Hero image"
          src={HeroImage}
          priority
          quality={100}
          sizes="100vw"
          className="w-[54%] h-auto absolute right-[-1px] top-neg-6 z-[-1] hidden sm:block"
        />
        <Image
          alt="Hero image"
          src={MobileHeroImage}
          priority
          quality={100}
          sizes="100vw"
          className="w-[34%] h-auto absolute right-[-1px] top-[10%] z-[-1] block sm:hidden"
        />
        <div className="text-left pl-[2rem] pt-0 md:pl-16 md:pt-12 xl:pl-24 xl:pt-20">
          <Heading size="large" className="max-w-[68vw] md:max-w-[52vw]">
            Converting ideas to solutions
          </Heading>
          <Paragraph className="mt-[1.5rem] max-w-[40vw] md:max-v-[30vw] lg:max-w-[38vw] xl:max-w-[30vw]">
            Got a startup idea? Let us turn it into a solution! We provide offshore development &
            technological resources to turn an idea into reality
          </Paragraph>
          <div className="mt-10 xl:mt-16">
            <PillButton title={"GET STARTED"} href={"/contact"} />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[80vh] absolute bg-no-repeat bg-left left-[-1.875rem] top-0 z-[-1]  bg-[url('/images/planet-1.svg')]"></div>
        <Heading size="large" className="text-center">
          What we do
        </Heading>
        <div className="flex justify-center mt-24 flex-wrap gap-x-8 gap-y-24 md:gap-x-16 lg:gap-x-8 lg:gap-y-8">
          {Services.map((service: IService) => (
            <ServiceCard key={service.title} details={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <PillButton title={"VIEW MORE"} href={"/services"} />
        </div>
      </div>
      <div className="mt-32 flex flex-col items-center relative">
        <div className="w-full h-[80vh] absolute bg-no-repeat bg-left left-[-1.875rem] top-0 z-[-1] bg-[url('/images/planet-1.svg')]"></div>
        <div
          className="h-screen w-full -mt-16 absolute bg-no-repeat bg-cover z-[-1]"
          style={{ backgroundImage: 'url("/images/why-us.svg")' }}
        ></div>
        <Heading size="large" className="text-center">
          Offshore Team Benefits
        </Heading>
        <div className="flex flex-wrap w-full max-w-[84%] mt-[3rem]">
          {Benefits.map((benefit: IBenefit) => (
            <BenefitsCard key={benefit.title} details={benefit} />
          ))}
        </div>
        <div className="w-full z-[-10]">
          <div className="h-[40vh] w-full bottom-[-4rem] absolute bg-no-repeat bg-right z-[-6] bg-[url('/images/planet-2.svg')]"></div>
        </div>
      </div>
      <div className="mt-32">
        <Heading size="large" className="mb-[4rem] text-center">
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
