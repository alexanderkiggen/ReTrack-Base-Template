"use client"

import { useEffect } from 'react';
import { usePageTitle } from '@/context/page-title-context';

export default function Page() {
    const { setTitle } = usePageTitle();

    useEffect(() => {
        // Haalt de 'setTitle' functie op uit context voor de pagina titel
        setTitle("Eindcontroles");
    }, [setTitle]);

    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
    )
}