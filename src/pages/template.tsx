"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, AlertCircle, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";

export function ContactButton() {
  return (
    <div className="button-container">
      <Button variant="contactButton1" size="contactButtonSize">
        <ArrowDown size={24} />
        GET IN TOUCH
        <ArrowDown size={24} />
      </Button>
      <Button variant="contactButton2" size="contactButtonSize">
        <ArrowDown size={24} />
        GET IN TOUCH
        <ArrowDown size={24} />
      </Button>
      <Button variant="contactButton3" size="contactButtonSize">
        <ArrowDown size={24} />
        GET IN TOUCH
        <ArrowDown size={24} />
      </Button>
      <Button variant="contactButton4" size="contactButtonSize">
        <ArrowDown size={24} />
        GET IN TOUCH
        <ArrowDown size={24} />
      </Button>
    </div>
  );
}

export function InputWithLabel() {
  const [value, setValue] = React.useState(""); // Tracks the input value
  const [isFocused, setIsFocused] = React.useState(false); // Tracks the focus state
  const [error, setError] = React.useState(false); // Tracks the error state
  // const [showHint, setShowHint] = React.useState(false); // Tracks hint visibility

  // Validation: Valid if the input contains "@"
  const validateInput = (inputValue: string) => {
    return String(inputValue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Validate input on change
    setError(inputValue !== "" && !validateInput(inputValue));
  };

  const handleBlur = () => {
    setIsFocused(false);

    // Validate input on blur
    if (value !== "") {
      setError(!validateInput(value));
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className="space-y-6">
      {/* Input Container */}
      <div className="relative max-w-[320px] font-Montserrat">
        <Label htmlFor="email" className="text-sm font-medium leading-[20px] text-[#0A3D62]">
          Email
        </Label>
        <div
          className={`my-2 flex max-h-[64px] items-center rounded-[16px] border px-[24px] py-[20px] text-[16px] font-medium ${
            error
              ? isFocused
                ? "border-[#EF4444] focus-within:ring-4 focus-within:ring-[#FEE2E2]" // Active Error Input
                : value
                  ? "border-[#FCA5A5]" // Filled Error Input
                  : "border-[#FCA5A5]" // Default Error Input
              : isFocused
                ? "border-teal-300 focus-within:ring-4 focus-within:ring-[#60E3CF4D]" // Active Input
                : value
                  ? "border-[#0A3D624D]" // Filled Input
                  : "border-[#0A3D624D]" // Default Input
          }`}
        >
          {/* Mail Icon */}
          <Mail className="text-[#737373]" size={16} />

          {/* Input */}
          <Input
            id="email"
            type="email"
            placeholder="olivia@untitledui.com"
            value={value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="max-h-[24px] flex-1 bg-transparent p-0 pl-2 leading-[24px] focus:outline-none"
          />

          {/* Question Mark Icon for Hint */}
          {!error && <HelpCircle size={16} className="text-[#737373]" />}

          {/* Error Icon */}
          {error && <AlertCircle className="text-[#EF4444]" size={16} />}
        </div>

        {/* Hint or Error Message */}
        <p
          className={`text-xs font-normal leading-[20px] ${error ? "text-[#EF4444]" : "text-[#525252]"}`}
        >
          {error ? "This is an error message." : "This is a hint text to help user."}
        </p>
      </div>
    </div>
  );
}

export const TypographyStyles = () => {
  return (
    <div className="space-y-8 bg-white p-6 text-black">
      <h1 className="text-2xl font-bold">Typography Styles</h1>
      <div className="flex justify-around">
        {/* Montserrat */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold">Montserrat</h2>
          <div className="space-y-4">
            {/* Regular */}
            <div>
              <h3 className="text-lg font-medium">Regular</h3>
              <div className="space-y-2">
                <p className="font-Montserrat text-xs font-normal">Montserrat Regular - 12px</p>
                <p className="font-Montserrat text-sm font-normal">Montserrat Regular - 14px</p>
                <p className="font-Montserrat text-base font-normal">Montserrat Regular - 16px</p>
                <p className="font-Montserrat text-lg font-normal">Montserrat Regular - 20px</p>
                <p className="font-Montserrat text-xl font-normal">Montserrat Regular - 24px</p>
              </div>
            </div>

            {/* Medium */}
            <div>
              <h3 className="text-lg font-medium">Medium</h3>
              <div className="space-y-2">
                <p className="font-Montserrat text-xs font-medium">Montserrat Medium - 12px</p>
                <p className="font-Montserrat text-sm font-medium">Montserrat Medium - 14px</p>
                <p className="font-Montserrat text-base font-medium">Montserrat Medium - 16px</p>
                <p className="font-Montserrat text-lg font-medium">Montserrat Medium - 20px</p>
                <p className="font-Montserrat text-xl font-medium">Montserrat Medium - 24px</p>
              </div>
            </div>

            {/* Semi-Bold */}
            <div>
              <h3 className="text-lg font-medium">Medium</h3>
              <div className="space-y-2">
                <p className="font-Montserrat text-xs font-semibold">Montserrat Semibold - 12px</p>
                <p className="font-Montserrat text-sm font-semibold">Montserrat Semibold - 14px</p>
                <p className="font-Montserrat text-base font-semibold">
                  Montserrat Semibold - 16px
                </p>
                <p className="font-Montserrat text-lg font-semibold">Montserrat Semibold - 20px</p>
                <p className="font-Montserrat text-xl font-semibold">Montserrat Semibold - 24px</p>
              </div>
            </div>

            {/* Bold */}
            <div>
              <h3 className="text-lg font-medium">Bold</h3>
              <div className="space-y-2">
                <p className="font-Montserrat text-xs font-bold">Montserrat Bold - 12px</p>
                <p className="font-Montserrat text-sm font-bold">Montserrat Bold - 14px</p>
                <p className="font-Montserrat text-base font-bold">Montserrat Bold - 16px</p>
                <p className="font-Montserrat text-lg font-bold">Montserrat Bold - 20px</p>
                <p className="font-Montserrat text-xl font-bold">Montserrat Bold - 24px</p>
              </div>
            </div>
          </div>
        </section>

        {/* Barlow Condensed */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold">Barlow Condensed</h2>
          <div className="space-y-4">
            {/* Regular */}
            <div>
              <h3 className="text-lg font-medium">Medium</h3>
              <div className="space-y-2">
                <p className="font-Barlow text-2xl font-medium">Barlow Condensed Medium - 32px</p>
                <p className="font-Barlow text-3xl font-medium">Barlow Condensed Medium - 40px</p>
                <p className="font-Barlow text-4xl font-medium">Barlow Condensed Medium - 48px</p>
                <p className="font-Barlow text-5xl font-medium">Barlow Condensed Medium - 64px</p>
                <p className="font-Barlow text-6xl font-medium">Barlow Condensed Medium - 80px</p>
              </div>
            </div>

            {/* Bold */}
            <div>
              <h3 className="text-lg font-medium">Semi-Bold</h3>
              <div className="space-y-2">
                <p className="font-Barlow text-2xl font-semibold">
                  Barlow Condensed Semi-Bold - 32px
                </p>
                <p className="font-Barlow text-3xl font-semibold">
                  Barlow Condensed Semi-Bold - 40px
                </p>
                <p className="font-Barlow text-4xl font-semibold">
                  Barlow Condensed Semi-Bold - 48px
                </p>
                <p className="font-Barlow text-5xl font-semibold">
                  Barlow Condensed Semi-Bold - 64px
                </p>
                <p className="font-Barlow text-6xl font-semibold">
                  Barlow Condensed Semi-Bold - 80px
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
