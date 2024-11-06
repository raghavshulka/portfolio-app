import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <title>Himanshu-Shukla</title>
    </head>
      <body>
      <Analytics />
      {children}
      </body>
    </html>
  )
}
