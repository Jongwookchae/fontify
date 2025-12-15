import type { Metadata } from 'next'
import './globals.css'

const miniappEmbed = {
  version: '1',
  imageUrl: 'https://fontify-nine.vercel.app/og.png',
  button: {
    title: '✨ Transform Text',
    action: {
      type: 'launch_miniapp',
      name: 'Fontify',
      url: 'https://fontify-nine.vercel.app',
      splashImageUrl: 'https://fontify-nine.vercel.app/splash-200.png',
      splashBackgroundColor: '#8B5CF6',
    },
  },
};

export const metadata: Metadata = {
  title: 'Fontify - Fonts for Everyone',
  description: 'Transform your text into beautiful font styles with Fontify. Choose from unique styles including underline, bubble, old english, and more.',
  icons: {
    icon: '/icon-1024.png',
    apple: '/icon-1024.png',
  },
  openGraph: {
    title: 'Fontify - Fonts for Everyone',
    description: 'Transform your text into beautiful font styles. Unique styles to make your posts stand out.',
    url: 'https://fontify-nine.vercel.app',
    siteName: 'Fontify',
    images: [
      {
        url: 'https://fontify-nine.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'Fontify - Fonts for Everyone',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fontify - Fonts for Everyone',
    description: 'Transform your text into beautiful font styles.',
    images: ['https://fontify-nine.vercel.app/og.png'],
  },
  other: {
    'fc:miniapp': JSON.stringify(miniappEmbed),
  },
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


