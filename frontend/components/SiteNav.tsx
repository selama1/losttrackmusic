'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SiteNav() {
  const pathname = usePathname();
  const link = (href: string, label: string) => {
    const active = pathname === href || (href !== '/' && pathname?.startsWith(href));
    return (
      <Link href={href} className={`px-3 py-2 rounded-xl transition ${active ? 'bg-white text-black' : 'hover:bg-white/10'}`}>
        {label}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-6xl mx-auto flex items-center justify-between p-4"
    >
      <Link href="/" className="font-extrabold tracking-wide text-xl">Lost Track</Link>
      <div className="flex gap-2">
        {link('/machine', 'The Machine')}
        {link('/blog', 'Blog')}
        {link('/about', 'About')}
      </div>
    </motion.nav>
  );
}
