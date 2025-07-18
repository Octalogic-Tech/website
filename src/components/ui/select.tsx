import { cva } from "class-variance-authority";

const selectVariants = cva(
  "cursor-pointer appearance-none rounded-full border bg-white pr-10 text-sm font-semibold transition-all outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        outline: "border-primary-blue text-primary-blue",
        filled:
          "bg-primary-light-blue text-primary-blue border border-primary-teal hover:bg-primary-teal",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
);

export { selectVariants };
