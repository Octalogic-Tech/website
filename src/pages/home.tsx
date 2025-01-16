import React from "react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <section className="text-blue relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white text-center">
      <h1 className="inline-block max-w-lg bg-gradient-to-r from-[#141414] to-[#0A3D62] bg-clip-text font-Barlow text-[80px] font-semibold leading-[80px] tracking-tighter text-transparent">
        CONVERTING IDEAS TO SOLUTIONS
      </h1>
      {/* <h1 className="text-5xl font-bold text-gray-800">TO SOLUTIONS</h1> */}
      <p className="text-md mt-4 max-w-xl font-Montserrat text-gray-500">
        Got a startup idea? Let us turn it into a solution! We provide offshore development &
        technological resources to turn an idea into reality.
      </p>
      <div className="text-[#0A3D62]-700 mt-12 flex space-x-8 font-Barlow text-[24px] font-semibold">
        <span>PRODUCT STRATEGY</span>
        <span className="text-teal">/</span>
        <span>PRODUCT DESIGN</span>
        <span>/</span>
        <span>PRODUCT DEVELOPMENT</span>
      </div>
      <div className="mt-6 space-x-6">
        <Button
          variant="custom"
          asChild
          className="m-0 rounded-full px-[24px] py-[12px] text-[20px]"
        >
          <a>WORK WITH US</a>
        </Button>
      </div>
    </section>
  );
}
