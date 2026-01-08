"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "@/i18n/navigation";
import { lang } from "@/constants/language";

const { EN } = lang;
export const requireAuthentication = async () => {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });
  if (!session) {
    const locale = headerList.get("x-next-intl-locale") ?? EN;
    redirect({ href: { pathname: "/login" }, locale });
  }
  return session;
};

export const redirectIfAuthenticated = async () => {
  const headerList = await headers();
  const session = await auth.api.getSession({
    headers: headerList,
  });
  if (!session) return null;
  const locale = headerList.get("x-next-intl-locale") ?? EN;
  // Previous page user came from
  const referer = headerList.get("referer");
  // Fallback if referer is missing or points to login itself
  let redirectPath = "/";
  if (referer) {
    try {
      const url = new URL(referer);
      // prevent redirect loop
      if (!url.pathname.includes("/login")) {
        redirectPath = url.pathname + url.search;
      }
    } catch {}
  }

  redirect({
    href: redirectPath,
    locale,
  });
};
