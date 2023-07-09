import { Inter, Manrope } from 'next/font/google';
import { Metadata } from 'next';

import './[lang]/globals.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'BoroBazar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${manrope.variable}`}
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
