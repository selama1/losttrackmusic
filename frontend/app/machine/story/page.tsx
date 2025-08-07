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
