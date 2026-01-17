import { requireAuthentication } from "@/utils/auth";
import DashboardWrapper from "@/features/dashboard/dashboard-wrapper";

const DashobardLayout = async ({ children }: { children: React.ReactNode }) => {
  await requireAuthentication();
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashobardLayout;
