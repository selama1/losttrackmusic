'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto text-center">
      <motion.h1 initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-extrabold">
        Lost Track
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-3 text-zinc-300 italic">
        Soundtracks for alternate futures
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-10 grid sm:grid-cols-3 gap-4">
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
