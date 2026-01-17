import {
  IconLibrary,
  IconSubscript,
  IconSettings,
  IconDashboardFilled,
} from "@tabler/icons-react";
import { getTranslations } from "next-intl/server";
export type SidebarConfig = {
  link: string;
  label: string;
  icon: React.ReactNode;
};

export const sidebarConfig = async (): Promise<SidebarConfig[]> => {
  const t = await getTranslations("dashboard");
  return [
    {
      link: "/dashboard",
      label: t("dashboard"),
      icon: <IconDashboardFilled className="size-5" />,
    },
    {
      link: "/dashboard/repositories",
      label: t("repositories"),
      icon: <IconLibrary className="size-5" />,
    },
    {
      link: "/dashboard/reviews",
      label: t("reviews"),
      icon: <IconLibrary className="size-5" />,
    },
    {
      link: "/subscriptions",
      label: t("subscriptions"),
      icon: <IconSubscript className="size-5" />,
    },
    {
      link: "/settings",
      label: t("settings"),
      icon: <IconSettings className="size-5" />,
    },
  ];
};
