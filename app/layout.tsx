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
      <body>{children}</body>
    </html>
  )
}
