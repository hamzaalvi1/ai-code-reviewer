import { ReactNode, JSX } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-sm"
  | "caption"
  | "paragraph";

export interface TypographyProps {
  variant?: Variant; // optional
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}
