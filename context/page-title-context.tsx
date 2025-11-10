// Dit bestand regelt de pagina titel op iedere pagina

"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface PageTitleContextProps {
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
}

const PageTitleContext = createContext<PageTitleContextProps | undefined>(undefined);

// De Provider die de state (titel) beheert
export function PageTitleProvider({ children }: { children: ReactNode }) {
    const [title, setTitle] = useState('Dashboard'); // Dit is de standaard titel

    return (
        <PageTitleContext.Provider value={{ title, setTitle }}>
            {children}
        </PageTitleContext.Provider>
    );
}

// Custom hook om de titel makkelijk te gebruiken
export function usePageTitle() {
    const context = useContext(PageTitleContext);
    if (!context) {
        throw new Error('usePageTitle moet binnen een PageTitleProvider worden gebruikt');
    }
    return context;
}