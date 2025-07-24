import * as React from "react";
import { Slot as SlotPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-barlow-condensed font-semibold uppercase bodyL cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-teal text-primary-blue border border-primary-teal hover:bg-primary-light-blue",
        primaryOptional:
          "bg-primary-light-blue text-primary-blue border border-primary-teal hover:bg-primary-light-blue hover:border-primary-light-blue",
        secondary:
          "bg-transparent text-primary-blue border border-primary-blue hover:border-primary-teal hover:text-primary-teal",
        text: "bg-transparent text-primary-blue border border-transparent hover:text-primary-teal",
      },
      size: {
        default: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
