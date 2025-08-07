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
  );
}
