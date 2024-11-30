import type { Metadata } from 'next'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vivek Vajipey',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}