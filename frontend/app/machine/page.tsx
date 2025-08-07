'use client';

import { motion } from 'framer-motion';

export default function MachineLanding() {
  return (
    <main className="max-w-5xl mx-auto">
      <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.6}} className="text-4xl font-bold mb-4">
        The Rise and Fall of the Machine
      </motion.h1>
      <p className="text-gray-300 max-w-3xl mb-6">
        An immersive post-apocalyptic rock opera about love, control, and the meaning of freedom.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <a href="/machine/story" className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">Story</a>
        <a href="/machine/characters" className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">Characters</a>
        <a href="/machine/music" className="rounded-xl bg-white/10 p-6 hover:bg-white/20 transition">Music</a>
      </div>
    </main>
  );
}
