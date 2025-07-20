import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neo-Cyber Portfolio',
  description: '3D Cyberpunk Portfolio Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Sora, Inter, and Orbitron for rounded illuminated text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Sora:wght@400;700&family=Orbitron:wght@400;700;900&family=Exo+2:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sora antialiased bg-cyber-dark">{children}</body>
    </html>
  )
}
