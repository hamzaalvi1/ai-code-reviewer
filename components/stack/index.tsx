import * as React from "react";
import { StackProps } from "./types";
import { cx, gapClass } from "./helpers";
import { alignClassMap, justifyClassMap } from "./constant";

export function Stack<E extends React.ElementType = "div">({
  as,
  direction = "col",
  gap = 2,
  align = "stretch",
  justify = "start",
  wrap = false,
  inline = false,
  divider = false,
  dividerColorClass = "divide-gray-200",
  dividerOrientation = "auto",
  className,
  children,
  ...rest
}: StackProps<E>) {
  const Component = (as ?? "div") as React.ElementType;

  const isRow = direction === "row";
  const dividerDir =
    dividerOrientation === "auto"
      ? isRow
        ? "divide-x"
        : "divide-y"
      : dividerOrientation === "vertical"
      ? "divide-x"
      : "divide-y";

  return (
    <Component
      className={cx(
        inline ? "inline-flex" : "flex",
        isRow ? "flex-row" : "flex-col",
        gapClass(gap),
        alignClassMap[align],
        justifyClassMap[justify],
        wrap ? "flex-wrap" : "flex-nowrap",
        divider ? cx(dividerDir, dividerColorClass) : undefined,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
