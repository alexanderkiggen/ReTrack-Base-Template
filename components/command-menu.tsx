"use client"

import React, {
    useEffect,
    Dispatch,
    SetStateAction,
    useState,
    useRef,
} from "react"
import { useRouter } from "next/navigation"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

import {
    ChartColumn,
    Bot,
    User,
    Settings2,
    Hash,
} from "lucide-react"

interface CommandMenuProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

// Tijdelijke data
const EXISTING_ORDERS = [
    { id: "81905728", label: "Lenovo Thinkpad T450" },
    { id: "819057285656", label: "Lenovo Thinkpad T450" },
    { id: "81905729", label: "HP Elitebook 840 G7 2x 23inch" },
    { id: "81905730", label: "Apple Macbook M4 2024" },
]

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter()
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    // Shortcut logica
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "l" && e.altKey) {
                e.preventDefault()
                setOpen((current) => !current)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [open, setOpen])

    // Helper om te navigeren en te sluiten
    const runCommand = (command: () => void) => {
        setOpen(false)
        setValue("")
        command()
    }

    // Helper om '#' in te vullen
    const handleOrderSearchClick = () => {
        setValue("#")
        inputRef.current?.focus()
    }

    // Simpele check om te bepalen welke lijst er getoond moet worden
    const isOrderSearch = value.startsWith("#")

    return (
        <CommandDialog
            open={open}
            onOpenChange={(isOpen) => {
                setOpen(isOpen)
                if (!isOpen) {
                    setValue("")
                }
            }}
        >
            <CommandInput
                ref={inputRef}
                value={value}
                onValueChange={setValue}
                placeholder="Typ # voor een order, of zoek..."
            />
            <CommandList>
                <CommandEmpty>Geen resultaten gevonden.</CommandEmpty>

                {isOrderSearch ? (
                    // --- 1. ORDER ZOEKMODUS (#) ---
                    <CommandGroup heading="Bestaande Orders">
                        {EXISTING_ORDERS.map((order) => (
                            <CommandItem
                                key={order.id}
                                onSelect={() =>
                                    runCommand(() => router.push(`/eindcontroles/${order.id}`))
                                }
                                value={"#" + order.id}
                            >
                                <Hash className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span className="flex-1">{order.label}</span>
                                <span className="text-xs text-muted-foreground">
                  {order.id}
                </span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                ) : (
                    // --- 2. STANDAARD ZOEKMODUS ---
                    <>
                        <CommandGroup heading="Suggesties">
                            <CommandItem
                                value="Order bekijken #"
                                onSelect={handleOrderSearchClick}
                            >
                                <Hash className="mr-2 h-4 w-4" />
                                <span>Order bekijken (typ #)</span>
                            </CommandItem>
                            <CommandItem
                                value="Dashboard"
                                onSelect={() => runCommand(() => router.push("/"))}
                            >
                                <ChartColumn className="mr-2 h-4 w-4" />
                                <span>Dashboard</span>
                            </CommandItem>
                            <CommandItem
                                value="Eindcontroles"
                                onSelect={() => runCommand(() => router.push("/eindcontroles"))}
                            >
                                <Bot className="mr-2 h-4 w-4" />
                                <span>Eindcontroles</span>
                            </CommandItem>
                            <CommandItem
                                value="Medewerkers"
                                onSelect={() => runCommand(() => router.push("/medewerkers"))}
                            >
                                <User className="mr-2 h-4 w-4" />
                                <span>Medewerkers</span>
                            </CommandItem>
                        </CommandGroup>

                        <CommandSeparator />
                        <CommandGroup heading="Instellingen">
                            <CommandItem
                                value="Instellingen"
                                onSelect={() => runCommand(() => router.push("/instellingen"))}
                            >
                                <Settings2 className="mr-2 h-4 w-4" />
                                <span>Instellingen</span>
                            </CommandItem>
                        </CommandGroup>
                    </>
                )}
            </CommandList>
        </CommandDialog>
    )
}