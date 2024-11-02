import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <title>Chetan-Kesare</title>
    </head>
      <body>
      {children}
      <Analytics />
      </body>
    </html>
  )
}
