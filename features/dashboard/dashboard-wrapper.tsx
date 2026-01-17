import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardWrapper;
