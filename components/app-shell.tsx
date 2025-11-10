"use client"

import React, {useState} from "react"
import {SidebarInfo} from "@/components/sidebar/sidebar-info"
import {SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button"
import {Search} from "lucide-react"
import {CommandMenu} from "@/components/command-menu"
import {PageTitleProvider, usePageTitle} from "@/context/page-title-context"

function AppLayout({children}: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false); // State for Command Menu
    const {title} = usePageTitle(); // Haal de dynamische titel op

    return (<SidebarProvider>
            <SidebarInfo/>
            <SidebarInset>

                {/* --- Header --- */}
                <header
                    className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">

                    {/* LINKERKANT: Sidebar trigger en de titel */}
                    <div className="flex shrink-0 items-center gap-2">
                        <SidebarTrigger className="-ml-1"/>

                        {/*Verticale grijze lijn*/}
                        <div className="h-4 w-px bg-border mr-[6px]"></div>

                        <h1 className="text-lg font-semibold tracking-tight">
                            {title}
                        </h1>
                    </div>

                    {/* RECHTERKANT: De zoekbalk */}
                    <div className="flex flex-1 items-center justify-end">

                        <Button
                            variant="outline"
                            className="relative w-full max-w-sm justify-start rounded-lg pl-10"
                            onClick={() => setOpen(true)}
                        >
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <span className="text-sm text-muted-foreground ml-6">Search...</span>
                            <kbd
                                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
                                <span className="text-xs">Alt</span> + L
                            </kbd>
                        </Button>
                    </div>
                </header>

                {/* Pagina-inhoud */}
                {children}

                {/* Command Menu */}
                <CommandMenu open={open} setOpen={setOpen}/>

            </SidebarInset>
        </SidebarProvider>)
}

export function AppShell({children}: { children: React.ReactNode }) {
    return (<PageTitleProvider>
            <AppLayout>
                {children}
            </AppLayout>
        </PageTitleProvider>)
}