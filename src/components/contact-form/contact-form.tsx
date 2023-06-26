"use client";

import React from "react";
import { useForm } from "react-hook-form";

import PillButton from "@/components/pill-button/pill-button";
import Paragraph from "@/components/paragraph/paragraph";
import TurnstileWidget from "@/components/turnstile-widget/turnstile-widget";

export function ContactForm({ apiUrl }: { apiUrl: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      await response.json();
    } catch (error) {
      console.error(error);
    }
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <TurnstileWidget widgetId="contactFormWidget" />
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
          <p className="text-red-400">{errors?.phone ? "Please enter your phone number..." : ""}</p>
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
        <div id="contactFormWidget" className="text-center my-8 flex justify-center items-center" />
        <p className="text-red-400 ">{errors?.message ? "Please enter your message..." : ""}</p>
        <div className="text-center mt-12">
          <PillButton title={"Send Message"} type="submit" />
        </div>
      </form>
      <Paragraph className="text-base text-center mb-4 leading-6 mt-8">
        Thank you for contacting us. We&apos;ll get in touch soon
      </Paragraph>
    </div>
  );
}
