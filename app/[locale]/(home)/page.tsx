import { ComponentExample } from "@/components/component-example";
import { requireAuthentication } from "@/utils/auth";

export default async function Page() {
  await requireAuthentication();

  return <ComponentExample />;
}
