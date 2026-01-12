import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "./dashboard-header";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <SidebarInset>
        <DashboardHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardWrapper;
