import Typography from "@/components/typography";
import {
  Sidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "@/i18n/navigation";
import { sidebarConfig } from "@/config/sidebar-config";

const DashboardSidebar = async () => {
  const config = await sidebarConfig();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {config.map((item) => (
              <SidebarMenuItem key={item.link}>
                <SidebarMenuButton
                  tooltip={item.label}
                  render={<Link href={item.link} />}
                >
                  {item.icon}
                  <Typography variant="caption">{item.label}</Typography>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
