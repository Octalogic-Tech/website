"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, AlertCircle, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import clsx from "clsx";

interface ContactButtonProps {
  type: "primary" | "primary_optional" | "secondary" | "no_stroke";
}

export function ContactButton({ type }: ContactButtonProps) {
  return (
    <div className="button-container">
      <Button variant={type} size="contactButtonSize">
        <ArrowDown size={24} />
        GET IN TOUCH
        <ArrowDown size={24} />
      </Button>
    </div>
  );
}

interface InputBlockProps {
  type: string;
  placeholder?: string;
  id: string;
}

export function InputBlock({ type, placeholder, id }: InputBlockProps) {
  const [value, setValue] = React.useState(""); // Tracks the input value
  const [isFocused, setIsFocused] = React.useState(false); // Tracks the focus state
  const [error, setError] = React.useState(false); // Tracks the error state

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
          {placeholder}
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
            id={id}
            type={type}
            placeholder={placeholder}
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

interface TypographyProps {
  variant:
    | "H1SemiBold80"
    | "H2SemiBold64"
    | "H2Medium64"
    | "H3Medium48"
    | "H3SemiBold48"
    | "H4SemiBold40"
    | "H5Medium32"
    | "H5SemiBold32"
    | "H6Medium24"
    | "H6SemiBold24"
    | "H6Bold24"
    | "H6Regular24"
    | "BodyMMedium16"
    | "BodyMRegular16"
    | "BodyLMedium20"
    | "CaptionMSemiBold12"
    | "CaptionLMedium14"
    | "CaptionMMedium14"
    | "CaptionMMedium12";
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className }) => {
  // const baseStyles = "text-black"; // Default text color

  const variantStyles = {
    H1SemiBold80:
      "text-[36px]/[44px] md:text-[60px]/[64px] font-bold font-Barlow-condensed tracking-tighter",
    H2SemiBold64: "md:text-[64px]/[72px] font-semibold font-Barlow",
    H2Medium64:
      "text-[32px]/[40px] md:text-[44px]/[52px] font-medium font-Barlow-condensed tracking-tighter",
    H3Medium48: "text-[48px]/[56px] font-medium font-Barlow",
    H3SemiBold48:
      "text-[24px]/[32px] md:text-[36px]/[44px] font-semibold font-Barlow-condensed tracking-tighter",
    H4SemiBold40:
      "text-[32px]/[40px] md:text-[32px]/[40px] font-semibold font-Barlow-condensed tracking-tighter",
    H5Medium32: "text-[32px]/[40px] font-medium font-Barlow",
    H5SemiBold32: "text-[32px]/[40px] font-semibold font-Barlow",
    H6Medium24:
      "text-[20px]/[28px] font-medium font-Barlow-condensed font-semibold tracking-tighter",
    H6SemiBold24:
      "text-[16px]/[24px] md:text-[18px]/[28px] font-bold font-Barlow-condensed tracking-tighter",
    H6Bold24: "text-[24px]/[32px] font-bold font-Barlow",
    H6Regular24: "text-[16px]/[20px] md:text-[20px]/[24px] font-bold font-Barlow-condensed",
    BodyMMedium16: "text-[14px]/[20px] md:text-[16px]/[20px] font-medium font-Montserrat",
    BodyMRegular16: "text-[12px]/[16px] md:text-[14px]/[20px] font-medium font-Montserrat",
    BodyLMedium20: "lg:text-[20px]/[28px] font-medium font-Montserrat",
    CaptionMMedium12: "text-[12px]/[12px] font-medium font-Montserrat",
    CaptionMSemiBold12: "text-[12px]/[16px] font-semibold font-Montserrat",
    CaptionMMedium14: "text-[14px]/[20px] font-medium font-Montserrat",
    CaptionLMedium14: "text-[9px]/[16px] font-medium font-Montserrat",
  };

  // Map custom variants to standard HTML tags
  const tagMapping: { [key in TypographyProps["variant"]]: React.ElementType } = {
    H1SemiBold80: "h1",
    H2SemiBold64: "h2",
    H2Medium64: "h2",
    H3Medium48: "h3",
    H3SemiBold48: "h3",
    H4SemiBold40: "h4",
    H5Medium32: "h5",
    H5SemiBold32: "h5",
    H6Bold24: "h6",
    H6Regular24: "h6",
    H6SemiBold24: "h6",
    H6Medium24: "h6",
    BodyMMedium16: "p",
    BodyMRegular16: "p",
    BodyLMedium20: "p",
    CaptionMMedium12: "p",
    CaptionMSemiBold12: "p",
    CaptionLMedium14: "p",
    CaptionMMedium14: "p",
  };

  const Tag: React.ElementType = tagMapping[variant];

  return <Tag className={clsx(variantStyles[variant], className)}>{children}</Tag>;
};
