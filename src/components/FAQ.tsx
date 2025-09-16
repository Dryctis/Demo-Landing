"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Cuánto tarda el desarrollo de una landing?",
    a: "Generalmente entre 4 a 7 días hábiles, dependiendo de la complejidad y el contenido provisto.",
  },
  {
    q: "¿Incluyen SEO básico?",
    a: "Sí, entregamos la landing con buenas prácticas de SEO técnico (metatags, sitemap, robots.txt, estructura semántica).",
  },
  {
    q: "¿Puedo solicitar cambios después de la entrega?",
    a: "Claro, se incluyen hasta 2 rondas de cambios menores sin costo adicional.",
  },
  {
    q: "¿Se puede integrar con un CMS más adelante?",
    a: "Sí, podemos conectar la landing a un headless CMS como Sanity o WordPress cuando lo requieras.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faqs" className="mx-auto max-w-3xl px-4 md:px-6 py-16">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Preguntas frecuentes
      </h2>

      <div className="space-y-4">
        {faqs.map((item, i) => {
          const open = active === i;
          return (
            <div
              key={i}
              className="card p-4 cursor-pointer"
              role="button"
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setActive(open ? null : i)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-200">{item.q}</h3>
                <span className="ml-4 text-[var(--primary)]">
                  {open ? "–" : "+"}
                </span>
              </div>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 text-slate-400 text-sm"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
