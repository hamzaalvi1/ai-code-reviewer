import { StackProps } from "./types";

export function cx(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(" ");
}

export function gapClass(gap: StackProps["gap"]) {
  if (gap === undefined || gap === null) return "gap-0";
  if (typeof gap === "string") return gap; // user-provided Tailwind class
  // Tailwind supports these by default: 0, 0.5, 1, 1.5, ... 16
  const v = String(gap).replace(".", "_"); // 0.5 -> 0_5
  return `gap-${v}`;
}
