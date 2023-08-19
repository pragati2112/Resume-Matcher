import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';
import './globals.css';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  variable: '--font-fira-sans',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaSans.className}>{children}</body>
    </html>
  );
}