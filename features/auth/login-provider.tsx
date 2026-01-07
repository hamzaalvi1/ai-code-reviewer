import { JSX } from "react";
import { getTranslations } from "next-intl/server";

import Typography from "@/components/typography";
import GitHubLoginButton from "./github-login-button";
import { Button } from "@/components/ui/button";

const LoginProvider = async (): Promise<JSX.Element> => {
  const t = await getTranslations("auth");

  return (
    <div className="flex justify-center flex-col items-center p-4">
      <div className="flex flex-col gap-1 w-full sm:w-[400px]">
        <Typography variant="h2" className="font-bold xs:hidden">
          {t("welcome-back")}
        </Typography>
        <Typography className="text-tertiary">
          {t("login-with-provider")}
        </Typography>
        <GitHubLoginButton />
        <Typography className="text-tertiary text-center mt-1">
          {t("are-you-new-here")}
          <Button variant="link" className="p-0.5 font-semibold text-[15px]">
            {t("sign-up")}
          </Button>
        </Typography>
        <hr className="my-2" />
        <Typography className="text-tertiary text-center">
          <span className="inline-flex items-center gap-1">
            <Button variant="link" className="p-0.5 font-semibold text-[15px]">
              {t("terms-of-use")}
            </Button>

            <span>{t("and")}</span>

            <Button variant="link" className="p-0.5 font-semibold text-[15px]">
              {t("privacy-policy")}
            </Button>
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default LoginProvider;
