import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        custom:
          "ml-5 font-Barlow px-[24px] py-[12px] text-[#0A3D62] bg-[#60E3CF] hover:bg-teal-600 font-semibold text-[#062236]",
        logo: "w-full justify-end",
        primary: " bg-[#60E3CF] leading-[28px] hover:bg-teal-400 focus:ring-blue-500",
        primary_optional:
          "bg-[#60E3CF] bg-opacity-20 border-[1px] border-[#60E3CF] hover:bg-teal-400 focus:ring-blue-500",
        secondary: "border-[1px] border-[#0A3D62] hover:bg-teal-400 focus:ring-blue-500",
        no_stroke: "hover:bg-teal-400 focus:ring-blue-500",
        darkblue:
          "leading-[36px] bg-[#0A3D62] text-[#60E3CF] font-semibold hover:ring-2 hover:ring-gray-400/50 focus:ring-2 focus:ring-gray-400/30",
      },
      size: {
        default: "h-9",
        sm: "h-8 rounded-md text-xs",
        lg: "h-10 rounded-md",
        icon: "h-9 w-9",
        contactButtonSize: "text-[20px] rounded-full font-Barlow text-[#0A3D62]-600",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
