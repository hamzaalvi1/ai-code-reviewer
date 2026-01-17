import Typography from "@/components/typography";
import {
  Sidebar,
  SidebarMenu,
  SidebarGroup,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link } from "@/i18n/navigation";
import { sidebarConfig } from "@/config/sidebar-config";
import Logo from "@/components/logo";

const DashboardSidebar = async () => {
  const config = await sidebarConfig();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              variant={"outline"}
              className="h-[50px] bg-amber-100"
            >
              <Logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {config.map((item) => (
              <SidebarMenuItem key={item.link}>
                <SidebarMenuButton
                  size="lg"
                  className="cursor-pointer hover:bg-gray-100 group/menuBtn flex items-center gap-2"
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 flex-1 text-[15px] group-hover/menuBtn:text-primary"
                  >
                    <span className="group-hover/menuBtn:text-primary transition-colors">
                      {item.icon}
                    </span>

                    {item.label}
                  </Link>
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
