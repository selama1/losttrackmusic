'use client';

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Page() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <AnimatePresence>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Lost Track
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 italic"
        >
          Soundtracks for alternate futures
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid gap-3 sm:grid-cols-3 w-full max-w-3xl"
        >
          <Link href="/machine" className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition">The Rise and Fall of the Machine</Link>
          <Link href="/blog" className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition">Blog & News</Link>
          <Link href="/about" className="px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition">About Lost Track</Link>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
