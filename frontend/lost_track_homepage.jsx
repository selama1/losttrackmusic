import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4">Lost Track</h1>
        <p className="text-lg mb-8 italic">
          Soundtracks for alternate futures
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="space-y-4"
        >
          <Link
            href="/machine"
            className="block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            The Rise and Fall of the Machine
          </Link>
          <Link
            href="/blog"
            className="block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            Blog & News
          </Link>
          <Link
            href="/about"
            className="block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            About Lost Track
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
