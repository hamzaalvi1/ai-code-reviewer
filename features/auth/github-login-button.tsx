"use client";
import { JSX, useState } from "react";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { IconBrandGithubFilled } from "@tabler/icons-react";

import { signIn } from "@/lib/auth-client";
import { useTranslations } from "next-intl";

const GitHubLoginButton = (): JSX.Element => {
  const t = useTranslations("auth");
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const handleGithubLogin = async (): Promise<void> => {
    try {
      setAuthLoading(true);
      await signIn
        .social({
          provider: "github",
        })
        .then(() => {
          toast.success(t("success"));
        });
    } catch (error) {
      console.error(error);
      toast.error(t("something-went-wrong"));
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <Button
      disabled={authLoading}
      className="w-full mt-4"
      onClick={handleGithubLogin}
    >
      {authLoading ? (
        <>
          <Spinner data-icon="inline-start" />
          {t("please-wait")}
        </>
      ) : (
        <>
          <IconBrandGithubFilled className="size-5" /> {t("login-with-github")}
        </>
      )}
    </Button>
  );
};

export default GitHubLoginButton;
