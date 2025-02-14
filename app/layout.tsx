import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'DDI65 Student Community',
  description: 'The official hub for the DDI65 batch—where students connect, collaborate, and create the future of digital innovation together.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}