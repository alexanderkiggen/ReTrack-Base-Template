import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { AppShell } from '@/components/app-shell'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'Retrack App',
    description: 'Mijn nieuwe retrack app',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                'min-h-screen bg-background font-sans antialiased',
                inter.variable
            )}
        >
        <AppShell>
            {children}
        </AppShell>
        </body>
        </html>
    );
}