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
      icon: <IconDashboardFilled />,
    },
    {
      link: "/repositories",
      label: t("repositories"),
      icon: <IconLibrary />,
    },
    {
      link: "/reviews",
      label: t("reviews"),
      icon: <IconLibrary />,
    },
    {
      link: "/subscriptions",
      label: t("subscriptions"),
      icon: <IconSubscript />,
    },
    {
      link: "/settings",
      label: t("settings"),
      icon: <IconSettings />,
    },
  ];
};
