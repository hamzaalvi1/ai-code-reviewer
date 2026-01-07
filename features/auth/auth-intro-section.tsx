import { JSX } from "react";

import Logo from "@/components/logo";
import Typography from "@/components/typography";

import { getTranslations } from "next-intl/server";

const AuthIntroSection = async (): Promise<JSX.Element> => {
  const t = await getTranslations("auth");

  return (
    <div className="flex justify-center flex-col bg-amber-50 p-4">
      <Logo className="mb-4" />
      <Typography variant="h1" className="mb-2">
        {t("code-reviewer-description")}
      </Typography>
      <Typography className="text-tertiary">{t("empower-team")}</Typography>
    </div>
  );
};

export default AuthIntroSection;
