import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrightSmile Dental Clinic - Professional Dental Care',
  description: 'Expert dental care with state-of-the-art technology. Offering general dentistry, cosmetic treatments, orthodontics, and more.',
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
