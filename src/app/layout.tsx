// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import ClientLayout from './ClientLayout';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'GymAI Access',
    description: 'Login to GymAI Access',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`dark ${spaceGrotesk.variable}`}>
        <body className="antialiased min-h-screen bg-background flex flex-col">
        <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}