import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fontify - 폰트 변환기',
  description: 'Farcaster를 위한 다양한 폰트 스타일 변환 미니앱',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}


