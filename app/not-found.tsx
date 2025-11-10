"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { usePageTitle } from '@/context/page-title-context'
import { useEffect } from 'react'

export default function NotFound() {
    const { setTitle } = usePageTitle()
    const router = useRouter()

    useEffect(() => {
        setTitle("Pagina niet gevonden")
    }, [setTitle])

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-12 text-center">
            <h1 className="text-8xl font-bold text-gray-200">404</h1>

            <p className="text-2xl font-medium tracking-tight">
                Pagina Niet Gevonden
            </p>
            <p className="text-lg text-muted-foreground">
                Sorry, de pagina die je zoekt bestaat niet (meer).
            </p>

            <Button className="mt-4" onClick={() => router.back()}>
                Ga terug naar vorige pagina
            </Button>
        </div>
    )
}