"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Head from "@/components/head";
import PillButton from "@/components/pill-button/pill-button";
import Paragraph from "@/components/paragraph/paragraph";
// import * as vars from "@/config/vars";
import Heading from "@/components/heading/heading";
import TurnstileWidget from "@/components/turnstile-widget/turnstile-widget";

const siteUrl = `https://localhost:3000/api/contact`;

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(siteUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  return (
    <div>
      <Head title="Octalogic Tech - Contact" canonicalUrl={siteUrl} />
      <TurnstileWidget widgetId="contactFormWidget" />
      <Heading size="large" className="mb-4 mt-16 text-center ">
        Let&apos;s have a conversation
      </Heading>
      <Paragraph className="text-xl text-center opacity-80 mb-4 leading-6">
        info@octalogic.in &nbsp; | &nbsp; +91 7030518285
      </Paragraph>
      <Paragraph className="text-xl text-center opacity-80 mb-4 leading-6">
        3rd Floor, Sunivas Building, Near Taj Vivanta, St. Inez, Goa
      </Paragraph>
      <Paragraph className="w-3/5 text-center text-base mx-auto mb-4 leading-6 opacity-95 mt-6">
        Send us a message and we&apos;ll get in touch with you shortly to better understand your
        needs and brainstorm possible solutions.
      </Paragraph>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-8 mt-12">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
              })}
            />
            <p className="text-red-400">{errors?.name ? "Please enter your name..." : ""}</p>
          </div>
          <div className="mb-8">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
              })}
            />
            <p className="text-red-400">{errors?.email ? "Please enter your email..." : ""}</p>
          </div>
          <div className="mb-12">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
              id="phone"
              type="text"
              placeholder="Phone Number"
              {...register("phone", {
                pattern: /\d+/,
                required: true,
              })}
            />
            <p className="text-red-400">
              {errors?.phone ? "Please enter your phone number..." : ""}
            </p>
          </div>
          <div className="">
            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-teal-500"
              id="message"
              placeholder="Message"
              {...register("message", {
                required: true,
              })}
            ></textarea>
          </div>
          <div
            id="contactFormWidget"
            className="text-center my-8 flex justify-center items-center"
          />
          <p className="text-red-400 ">{errors?.message ? "Please enter your message..." : ""}</p>
          <div className="text-center mt-12">
            <PillButton title={"Send Message"} type="submit" />
          </div>
        </form>
        <Paragraph className="text-base text-center mb-4 leading-6 mt-8">
          Thank you for contacting us. We&apos;ll get in touch soon
        </Paragraph>
      </div>
      <div className="w-full pt-[43.478%] bg-no-repeat bg-cover bg-center bg-[url('/images/contact_background.svg')]"></div>
    </div>
  );
}

export default ContactPage;
