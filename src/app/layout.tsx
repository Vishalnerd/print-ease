import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InstaPrint',
  description: 'Print Smart, Skip the Wait!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
          </SessionProvider>
      </body>
    </html>
  );
}