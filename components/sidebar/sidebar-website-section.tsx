"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function SidebarWebsiteSection({
                                        websites,
                                      }: {
  websites: {
    name: string
    logo: React.ElementType
    url: string
    version: string
  }[]
}) {
  const { isMobile } = useSidebar()

  const activeWebsite = websites[0]

  if (!activeWebsite) {
    return null
  }

  return (
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
              >

                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <activeWebsite.logo className="size-4" />
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{activeWebsite.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                  {activeWebsite.version}
                </span>
                </div>

                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                align="start"
                side={isMobile ? "bottom" : "right"}
                sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Websites
              </DropdownMenuLabel>

              {websites.slice(1).map((website) => (
                  <DropdownMenuItem
                      key={website.name}
                      asChild
                      className="gap-2 p-2 cursor-pointer"
                  >
                    <a href={website.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <div className="flex size-6 items-center justify-center rounded-sm border">
                        <website.logo className="size-4 shrink-0" />
                      </div>
                      <span className="flex-1">{website.name}</span>
                    </a>
                  </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
  )
}