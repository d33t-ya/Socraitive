import type { Metadata } from 'next';
import { GalaxySpots } from '@/components/ui/galaxy-spots';
import FireflyCursor from '@/components/ui/FireflyCursor'; 
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import '@/styles/globals.css';

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], preload: true });
const inter = Inter({ subsets: ['latin'], preload: true });

export const metadata: Metadata = {
  title: 'Emma - AI Therapist',
  description: 'AI-Powered Mental Wellness Support with Voice Conversations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} ${inter.className}`} suppressHydrationWarning={true}>
        <GalaxySpots count={120} />
        <FireflyCursor /> 
        
        {children}
      </body>
    </html>
  );
}