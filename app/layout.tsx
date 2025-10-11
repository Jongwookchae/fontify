import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fontify - Fonts for Everyone',
  description: 'Convert your text into beautiful font styles - Fonts for Everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


