"use client"

import * as React from "react"
import {
  Package,
  Bot,
  User,
  GalleryVerticalEnd,
  Settings2,
  ChartColumn,
} from "lucide-react"

import { SidebarMain } from "@/components/sidebar/sidebar-main"
import { SidebarUserSection } from "@/components/sidebar/sidebar-user-section"
import { SidebarWebsiteSection } from "@/components/sidebar/sidebar-website-section"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Random Guy",
    afdeling: "Website afdeling",
  },
  websites: [
    {
      name: "ReTrack",
      logo: GalleryVerticalEnd,
      url: "#",
      version: "v0.0.1"
    },
    {
      name: "RePack",
      logo: Package,
      url: "https://example.com/repack",
      version: "v0.0.1"
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: ChartColumn,
      items: [
        {
          title: "Voortgang",
          url: "/",
        },
        {
          title: "Prestaties",
          url: "/",
        },
        {
          title: "Bestellingen",
          url: "/",
        },
      ],
    },
    {
      title: "Eindcontroles",
      url: "/eindcontroles",
      icon: Bot,
      items: [
        {
          title: "Software",
          url: "/eindcontroles",
        },
        {
          title: "Assemblage",
          url: "/eindcontroles",
        },
        {
          title: "Keyboard",
          url: "/eindcontroles",
        },
        {
          title: "Eindcontrole",
          url: "/eindcontroles",
        },
        {
          title: "Inpak",
          url: "/eindcontroles",
        },
      ],
    },
    {
      title: "Medewerkers",
      url: "/medewerkers",
      icon: User,
      items: [
        {
          title: "Profielen",
          url: "/medewerkers",
        },
        {
          title: "Prestaties",
          url: "/medewerkers",
        },
        {
          title: "Beheren",
          url: "/medewerkers",
        },
      ],
    },
    {
      title: "Instellingen",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Algemeeen",
          url: "#",
        },
        {
          title: "Gebruikers beheren",
          url: "#",
        },
        {
          title: "Applicatie beheren",
          url: "#",
        },
      ],
    },
  ],
}

export function SidebarInfo({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <SidebarWebsiteSection websites={data.websites} />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <SidebarUserSection user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
  )
}