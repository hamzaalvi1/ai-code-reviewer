import { JSX } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";

const Provider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <NextIntlClientProvider>
      {children}
      <Toaster />
    </NextIntlClientProvider>
  );
};

export default Provider;
