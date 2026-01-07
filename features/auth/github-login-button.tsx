"use client";
import { JSX } from "react";
import { Button } from "@/components/ui/button";
import { IconBrandGithubFilled } from "@tabler/icons-react";

import { useTranslations } from "next-intl";

const GitHubLoginButton = (): JSX.Element => {
  const t = useTranslations("auth");
  return (
    <Button className="w-full mt-4">
      <IconBrandGithubFilled className="size-5" /> {t("login-with-github")}
    </Button>
  );
};

export default GitHubLoginButton;
