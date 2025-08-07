import type { Metadata } from 'next'
import './globals.css'
import SiteNav from '../components/SiteNav'

export const metadata: Metadata = {
  title: 'Lost Track',
  description: 'Soundtracks for alternate futures',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <div className="px-6 py-8">{children}</div>
      </body>
    </html>
  )
}
