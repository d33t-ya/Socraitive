import type { Metadata } from 'next';

import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import '@/common/styles/globals.css';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], preload: true });
const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Socraitive',
  description: 'AI Powered voice-to-voice Interview Platform',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} ${inter.className}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
