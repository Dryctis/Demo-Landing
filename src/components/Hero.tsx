"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden scroll-mt-24 min-h-[70vh] md:min-h-[78vh] flex items-center"
    >
      {/* fondo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#121828] via-transparent to-transparent opacity-80" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-4xl sm:text-5xl md:text-6xl font-[var(--font-display)] tracking-tight text-center"
        >
          Acelera tu presencia digital
          <span className="block bg-gradient-to-r from-[var(--primary)] to-[var(--primary-600)] bg-clip-text text-transparent">
            con una landing veloz y moderna
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#9AA4B2] text-center"
        >
          Tema dark, performance alto y stack Next.js + Tailwind.
        </motion.p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#contacto"
            className="w-full sm:w-auto rounded-xl bg-[var(--primary)] px-6 py-3.5 sm:px-7 sm:py-3.5 text-center text-[15px] sm:text-base font-semibold text-slate-900 ring-1 ring-[var(--ring)] transition hover:bg-[var(--primary-600)]"
          >
            Solicitar presupuesto
          </Link>
          <Link
            href="#soluciones"
            className="w-full sm:w-auto rounded-xl ring-1 ring-white/20 px-6 py-3.5 sm:px-7 sm:py-3.5 text-center text-[15px] sm:text-base font-semibold hover:bg-white/5"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
