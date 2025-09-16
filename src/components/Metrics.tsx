"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Proyectos completados", value: 25, suffix: "+" },
  { label: "Tiempo de carga (LCP)", value: 2.3, suffix: "s" },
  { label: "Clientes satisfechos", value: 15, suffix: "+" },
  { label: "Disponibilidad", value: 99, suffix: "%" },
];

export default function Metrics() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("beneficios");
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setInView(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="beneficios"
      className="mx-auto max-w-7xl px-4 md:px-6 py-16"
    >
      <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="text-3xl font-bold text-[var(--primary)]">
              {inView ? m.value : 0}
              {m.suffix}
            </div>
            <p className="mt-2 text-slate-400 text-sm">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
