import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type FontFamilyType = "montserrat" | "barlow-condensed";
export type VariantType =
  | "captionM"
  | "captionL"
  | "bodyM"
  | "bodyL"
  | "h6"
  | "h5"
  | "h4"
  | "h3"
  | "h2"
  | "h1";
export type WeightType = "normal" | "medium" | "semibold" | "bold";

const typographyVariants = cva("", {
  variants: {
    font: {
      montserrat: "font-montserrat",
      "barlow-condensed": "font-barlow-condensed",
    },
    variant: {
      captionM: "captionM",
      captionL: "captionL",
      bodyM: "bodyM",
      bodyL: "bodyL",
      h6: "h6",
      h5: "h5",
      h4: "h4",
      h3: "h3",
      h2: "h2",
      h1: "h1",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    font: "montserrat",
    variant: "bodyM",
    weight: "normal",
  },
});

type TypographyProps = {
  font?: FontFamilyType;
  variant?: VariantType;
  weight?: WeightType;
  className?: string;
  component?: React.ElementType;
  children: React.ReactNode;
} & VariantProps<typeof typographyVariants>;

function Typography({
  font = "montserrat",
  weight = "normal",
  variant = "bodyM",
  className = "",
  component: Component = "p",
  children,
}: TypographyProps) {
  return (
    <Component className={cn(typographyVariants({ font, variant, weight }), className)}>
      {children}
    </Component>
  );
}

export { typographyVariants, Typography };
