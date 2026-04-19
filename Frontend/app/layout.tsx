import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Instant Mudra - Digital Financial Services Platform',
  description: 'Instant Mudra provides comprehensive financial services including banking, payments, loans, and micro-finance solutions. Join our fintech platform today.',
  icons: {
    icon: [
      {
        url: '/React.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/React.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/React.webp',
        type: 'image/svg+xml',
      },
    ],
    apple: '/React.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
