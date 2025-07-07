
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

type TypographyProps = {
  font: FontFamilyType;
  variant?: VariantType;
  weight?: WeightType;
  className?: string;
  children: React.ReactNode;
};

export function Typography({
  font,
  weight = "normal",
  variant = "bodyM",
  className = "",
  children,
}: TypographyProps) {
  return <span className={`${variant} font-${font} font-${weight} ${className}`}>{children}</span>;
}
