import { JSX } from "react";
import { twMerge } from "tailwind-merge";
import type { TypographyProps, Variant } from "./types";

const styles: Record<Variant, string> = {
  h1: "text-4xl font-bold leading-tight",
  h2: "text-3xl font-semibold leading-tight",
  h3: "text-2xl font-semibold",
  body: "text-base font-normal",
  "body-sm": "text-sm",
  paragraph: "text-[14px]",
  caption: "text-xs text-gray-500",
};

const defaultElement: Partial<Record<Variant, keyof JSX.IntrinsicElements>> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

const Typography = ({
  variant = "body",
  as,
  className,
  children,
}: TypographyProps) => {
  const Component = as || defaultElement[variant] || "p";

  return (
    <Component className={twMerge(styles[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
