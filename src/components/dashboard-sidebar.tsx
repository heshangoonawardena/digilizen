"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Banknote,
  BriefcaseMedical,
  CreditCard,
  GalleryVerticalEnd,
  Handshake,
  HardDriveUpload,
  LayoutDashboard,
  Settings,
  Ticket,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const role = "admin";

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/user",
      active: pathname === "/user",
      visible: ["user"],
    },
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/enforcer",
      active: pathname === "/enforcer",
      visible: ["enforcer"],
    },
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      active: pathname === "/admin",
      visible: ["admin"],
    },
    {
      label: "Add License",
      icon: HardDriveUpload,
      href: "/tab/addLicense",
      active: pathname === "/admin",
      visible: ["admin"],
    },
    {
      label: "My Licenses",
      icon: CreditCard,
      href: "/dashboard/licenses",
      active: pathname === "/dashboard/licenses",
      visible: ["user"],
    },
    {
      label: "Fines & Payments",
      icon: Banknote,
      href: "/dashboard/fines",
      active: pathname === "/dashboard/fines",
      visible: ["user"],
    },
    {
      label: "Users",
      icon: Users2,
      href: "/dashboard/users",
      active: pathname === "/dashboard/users",
      visible: ["admin"],
    },
    {
      label: "Medical",
      icon: BriefcaseMedical,
      href: "/dashboard/medical",
      active: pathname === "/dashboard/medical",
      visible: ["user"],
    },
    {
      label: "Issue Fine",
      icon: Ticket,
      href: "/dashboard/issue",
      active: pathname === "/dashboard/issue",
      visible: ["enforcer"],
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
      visible: ["user", "admin", "enforcer"],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Digilizen</span>
                <span className="text-xs">Dashboard</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map(
                (route) =>
                  route.visible.includes(role) && (
                    <SidebarMenuItem key={route.href}>
                      <SidebarMenuButton asChild isActive={route.active}>
                        <Link href={route.href}>
                          <route.icon className="h-5 w-5" />
                          <span>{route.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
