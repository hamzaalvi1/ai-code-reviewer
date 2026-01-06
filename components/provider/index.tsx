import { JSX } from "react";
import { NextIntlClientProvider } from "next-intl";

const Provider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
};

export default Provider;
