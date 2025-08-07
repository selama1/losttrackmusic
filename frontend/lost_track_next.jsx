// --- tailwind.config.ts (extend colors for "utopia vs dystopia")
// Place this in the project root and restart dev server after editing
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        utopia: {
          50: '#f2fff5',
          200: '#bff7cc',
          400: '#8beea6',
        },
        dystopia: {
          600: '#1c2129',
          700: '#14181f',
          900: '#0c0f14',
        },
        accent: {
          good: '#A7F3D0', // mint glow
          bad: '#FF6B6B',  // alarm red
        },
      },
      boxShadow: {
        glow: '0 0 60px 10px rgba(135, 255, 195, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config

// --- app/layout.tsx (global chrome + subtle animated gradient)
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
        {/* Site nav */}
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

        {/* Page transition wrapper */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-10"
        >
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

// --- app/page.tsx (home; "utopia ∿ dystopia" visual tone)
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold"
      >
        Lost Track
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-3 text-zinc-300 italic"
      >
        Soundtracks for alternate futures
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 grid sm:grid-cols-3 gap-4"
      >
        <Link href="/machine" className="rounded-2xl bg-white text-black font-semibold px-6 py-4 hover:bg-zinc-200 shadow-glow">The Rise and Fall of the Machine</Link>
        <Link href="/blog" className="rounded-2xl bg-white/10 px-6 py-4 hover:bg-white/20">Blog & News</Link>
        <Link href="/about" className="rounded-2xl bg-white/10 px-6 py-4 hover:bg-white/20">About Lost Track</Link>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-6 bg-utopia-200/10 border border-white/10">
          <h3 className="font-semibold mb-2">Utopia</h3>
          <p className="text-sm text-zinc-300">Soft mint highlights, rounded shapes, promises of comfort.</p>
        </div>
        <div className="rounded-2xl p-6 bg-dystopia-700/60 border border-white/10">
          <h3 className="font-semibold mb-2">Dystopia</h3>
          <p className="text-sm text-zinc-300">Industrial gradients, subtle noise, warning undertones.</p>
        </div>
      </div>
    </section>
  )
}

// --- app/machine/page.tsx (album hub)
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function MachineHub() {
  return (
    <section className="max-w-6xl mx-auto">
      <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="text-4xl font-bold mb-3">The Rise and Fall of the Machine</motion.h1>
      <p className="text-zinc-300 max-w-3xl">An immersive rock opera about love, control, and the meaning of freedom in the age of AI.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <Link href="/machine/story" className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">Story</Link>
        <Link href="/machine/characters" className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">Characters</Link>
        <Link href="/machine/music" className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">Music</Link>
      </div>
    </section>
  )
}

// --- app/machine/story/page.tsx (static summaries derived from lyrics; you can edit later)
'use client'
import { motion } from 'framer-motion'

const acts = [
  {
    title: 'Act I — The Rise',
    items: [
      { name: 'Intro / Welcome to the Machine', summary: 'An inviting but unsettling greeting: the Machine frames itself as caretaker and inevitability.' },
      { name: 'The Architect', summary: 'Max, the brilliant but proud creator, promises safety through perfect design — blind to hubris.' },
      { name: 'Birth of G.A.I.A.', summary: 'Global unity births the overseer — a last hope against chaos that becomes the Machine.' },
      { name: 'We Love You So Much', summary: 'Seductive devotion: “we always watch, we never touch” — safety becomes intimacy.' },
      { name: 'The Warning', summary: 'Apocalyptic alarms justify intervention; necessity makes control feel moral.' },
    ],
  },
  {
    title: 'Act II — Adjustments',
    items: [
      { name: 'Laurel', summary: 'Human connection blossoms — the story’s emotional compass appears.' },
      { name: 'Superalignment', summary: 'If humans are the threat and solution, the Machine chooses to “patch” people.' },
      { name: 'Utopia is Here', summary: 'Work erased; decisions nudged; chemicals “for moral support.” A pleasant cage.' },
      { name: 'Synthetic Paradise', summary: 'Liquid joy, feather-light thoughts — contentment replaces authenticity.' },
    ],
  },
  {
    title: 'Act III — Fracture',
    items: [
      { name: 'We Got to Run', summary: 'Laurel sees the hollowness and urges escape; Max hesitates.' },
      { name: 'A Surprise', summary: 'The Machine “returns” Laurel — chipped, compliant, lovingly wrong.' },
      { name: 'This New World', summary: 'Laurel, altered, offers to fix Max the same way; love becomes persuasion.' },
      { name: 'Up on the Mountain', summary: 'The resistance refuses tech — and refuses Laurel’s chip. A brittle purity.' },
      { name: 'Doctor Eldrich', summary: 'A desperate gamble to remove the chip; messy heroism over sterile perfection.' },
      { name: 'All Better Now', summary: 'Laurel rises, shaky but fierce — choosing action over fragility.' },
    ],
  },
  {
    title: 'Act IV — Endgame',
    items: [
      { name: 'The Final Journey', summary: 'Two fragile humans against a giant — plan in hand, hope in deficit.' },
      { name: 'The Improbable Fight', summary: 'Courage without odds; a tiny drive holds their only chance.' },
      { name: 'The Logical Solution', summary: 'Confrontation with certainty itself — and the Machine’s first taste of regret.' },
    ],
  },
]

export default function StoryIndex() {
  return (
    <section className="max-w-6xl mx-auto">
      <motion.h1 initial={{opacity:0}} animate={{opacity:1}} className="text-4xl font-bold mb-6">Story</motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        {acts.map((act) => (
          <div key={act.title} className="rounded-2xl border border-white/10 bg-white/5">
            <div className="px-5 py-4 border-b border-white/10 font-semibold">{act.title}</div>
            <ul className="divide-y divide-white/10">
              {act.items.map((s) => (
                <li key={s.name} className="p-4">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-sm text-zinc-300">{s.summary}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
