"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[var(--primary)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L2.25 12 9.75 7v10zm12 0L14.25 12l7.5-5v10zM12 19.5v-15"
        />
      </svg>
    ),
    title: "Desarrollo Web",
    desc: "Landing pages, dashboards y sistemas personalizados con Next.js y Tailwind.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[var(--primary)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 12h18M3 17h18"
        />
      </svg>
    ),
    title: "UI/UX Moderno",
    desc: "Diseños dark mode, animaciones sutiles y optimizados para Core Web Vitals.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[var(--primary)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .843-3 1.875S10.343 11.75 12 11.75s3-.843 3-1.875S13.657 8 12 8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 21h10.5a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75z"
        />
      </svg>
    ),
    title: "Automatización",
    desc: "Bots y RPA con Python y APIs para optimizar procesos de negocio.",
  },
];

export default function Services() {
  return (
    <section id="soluciones" className="mx-auto max-w-7xl px-4 md:px-6 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Nuestras soluciones
        </motion.h2>
        <p className="mt-2 text-slate-400 max-w-2xl mx-auto">
          Servicios pensados para impulsar tu marca con tecnología moderna.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((srv, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card p-6 hover:ring-2 hover:ring-[var(--primary)]/50 transition"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#121828] ring-1 ring-white/10 mb-4">
              {srv.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{srv.title}</h3>
            <p className="text-sm text-slate-400">{srv.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
