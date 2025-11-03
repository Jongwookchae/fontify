import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fontify - Fonts for Everyone',
  description: 'Transform your text into beautiful font styles with Fontify. Choose from 10+ unique styles including underline, bubble, old english, and more. Perfect for making your Farcaster posts stand out!',
  openGraph: {
    title: 'Fontify - Fonts for Everyone',
    description: 'Transform your text into beautiful font styles. 10+ unique styles to make your posts stand out.',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fontify - Fonts for Everyone',
    description: 'Transform your text into beautiful font styles. 10+ unique styles to make your posts stand out.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/icon-1024.png',
    apple: '/icon-1024.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="/og.png" />
        {/* <meta name="fc:frame:button:1" content="✨ Transform Text" /> */}
        <meta
      name="fc:miniapp"
      content='{
        "version": "0.1.0",
        "imageUrl": "https://fontify-nine.vercel.app/og.png",
        "button": {
          "title": "Fontify",
          "action": {
            "type": "launch_frame",
            "name": "Fontify",
            "url": "https://fontify-nine.vercel.app/",
            "splashImageUrl": "https://fontify-nine.vercel.app/splash-200.png",
            "splashBackgroundColor": "#8B5CF6"
          }
        }
      }'/>
      </head>
      <body>{children}</body>
    </html>
  )
}


