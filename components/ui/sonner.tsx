"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  IconInfoCircle,
  IconAlertTriangle,
  IconAlertCircleFilled,
  IconLoader,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      position="top-right"
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <IconCircleCheckFilled className="size-5 text-success" />,
        info: <IconInfoCircle className="size-5 text-info" />,
        warning: <IconAlertTriangle className="size-5 text-warning" />,
        error: <IconAlertCircleFilled className="size-5 text-destructive" />,
        loading: <IconLoader className="size-5 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
