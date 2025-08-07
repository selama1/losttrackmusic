import type { Metadata } from 'next'
import './globals.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lost Track — Soundtracks for alternate futures',
  description: 'Official site of Lost Track. The Rise and Fall of the Machine: a post‑apocalyptic rock opera.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(80%_100%_at_50%_0%,#1a1d22_0%,#0e0f12_40%,#0b0c0e_100%)] text-zinc-100">
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/20 border-b border-white/5">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-extrabold tracking-wide text-xl">Lost Track</Link>
            <div className="flex gap-2 text-sm">
              <Link href="/machine" className="px-3 py-2 rounded-xl hover:bg-white/10">The Machine</Link>
              <Link href="/blog" className="px-3 py-2 rounded-xl hover:bg-white/10">Blog</Link>
              <Link href="/about" className="px-3 py-2 rounded-xl hover:bg-white/10">About</Link>
            </div>
          </nav>
        </header>

        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="px-6 py-10">
          {children}
        </motion.main>

        <footer className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-zinc-400 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Lost Track</span>
            <div className="flex gap-3">
              <a href="#" aria-label="Spotify" className="hover:text-white">Spotify</a>
              <a href="#" aria-label="Apple Music" className="hover:text-white">Apple Music</a>
              <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
              <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
