import { Stack } from "@/components/stack";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardHeader = () => {
  return (
    <Stack
      as="header"
      align="center"
      direction="row"
      justify="between"
      className="px-4 w-full h-16 shrink-0 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
    >
      <SidebarTrigger className="-ml-1" />
      <div>Avatar</div>
    </Stack>
  );
};

export default DashboardHeader;
