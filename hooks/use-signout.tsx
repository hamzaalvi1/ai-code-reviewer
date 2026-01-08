import { toast } from "sonner";

import { useTranslations } from "next-intl";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "@/i18n/navigation";

export const useSignOut = () => {
  const t = useTranslations("auth");
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
        onError: (error) => {
          console.error(error);
          toast.error(t("something-went-wrong"));
        },
      },
    });
  };

  return { handleSignOut };
};
