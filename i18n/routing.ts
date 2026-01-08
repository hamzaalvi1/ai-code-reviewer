import { lang } from "@/constants/language";
import { defineRouting } from "next-intl/routing";

const { EN, AR, ES } = lang;
export const routing = defineRouting({
  locales: [EN, AR, ES],
  defaultLocale: EN,
  localePrefix: "as-needed",
  localeDetection: true,
});
