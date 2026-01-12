type Gap =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16;

type Align = "start" | "center" | "end" | "stretch" | "baseline";
type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";

export interface StackOwnProps {
  direction?: "row" | "col";
  gap?: Gap | string;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
  inline?: boolean;
  divider?: boolean;
  dividerColorClass?: string;
  dividerOrientation?: "auto" | "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
}

type StackProps<E extends React.ElementType = "div"> = StackOwnProps & {
  as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, keyof StackOwnProps | "as">;

export type { StackProps, Gap, Align, Justify };
