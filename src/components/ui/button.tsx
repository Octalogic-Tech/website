import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"


import { cn } from "@/lib/utils"

// Button styles using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",

        custom1:"bg-[#60E3CF] text-[#0A3D62] hover:bg-teal-400 focus:ring-blue-500 shadow-md",

        custom2:"bg-[#60E3CF] text-[#0A3D62] bg-opacity-20 border-[1px] border-[#60E3CF] hover:bg-teal-400 focus:ring-blue-500 shadow-md",

        custom3:"text-[#0A3D62] border-[1px] border-[#0A3D62] hover:bg-teal-400 focus:ring-blue-500 shadow-md",

        custom4:"text-[#0A3D62] hover:bg-teal-400 focus:ring-blue-500",

      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        custom: "w-[208px] h-[52px] m-[8px] px-[24px] py-[12px] gap-[8px] rounded-[999px] text-[20px] font-baro leading-[28px] text-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Button component props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// Button component definition
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
