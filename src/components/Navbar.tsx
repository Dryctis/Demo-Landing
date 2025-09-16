"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faqs", label: "FAQ’s" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.documentElement;
    if (open) {
      el.classList.add("overflow-hidden");
      closeBtnRef.current?.focus();
    } else {
      el.classList.remove("overflow-hidden");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled
            ? "border-white/10 bg-[#0B0F1A]/80 backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6"
          aria-label="Principal"
        >
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2" aria-label="Ir a inicio">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#121828] ring-1 ring-white/10">
              CL
            </span>
            <span className="font-semibold tracking-wide">Clyvert</span>
          </Link>

          {/* Links desktop */}
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-[var(--ring)] transition hover:bg-[var(--primary-600)]"
            >
              Solicitar presupuesto
            </Link>
          </div>

          {/* Toggle móvil */}
          <button
            className="md:hidden rounded-xl p-2 text-slate-300 ring-1 ring-white/10 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Abrir menú</span>
            <FiMenu size={22} />
          </button>
        </nav>
      </header>

      {/* Overlay de menú móvil tipo modal */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
        className={`fixed inset-0 z-[60] md:hidden transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute inset-y-0 right-0 left-0 m-4 rounded-2xl bg-white text-[#111827] shadow-xl transition-transform duration-300
            ${open ? "translate-y-0" : "translate-y-4"} 
            sm:mx-auto sm:max-w-md`}
        >
          <div className="relative p-5">
            {/* Cerrar */}
            <button
              ref={closeBtnRef}
              className="absolute right-3 top-3 rounded-full p-2 text-[#111827]/70 hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <FiX size={22} />
            </button>

            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#e8f8ef] text-[var(--primary)] font-semibold">
                  CL
                </span>
                <span className="text-xl font-semibold text-[#6b7280]">clyvert</span>
              </div>
            </div>

            {/* Links */}
            <h2 id="mobile-menu-title" className="sr-only">
              Menú de navegación
            </h2>
            <ul className="flex flex-col items-center gap-4 py-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-[#111827]/80 hover:text-[var(--primary-600)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] rounded px-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA grande */}
            <div className="mt-6 px-4">
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-[var(--primary)] px-6 py-3.5 text-center text-base font-semibold text-[#0b1220] ring-1 ring-[var(--ring)] transition hover:bg-[var(--primary-600)]"
              >
                SOLICITAR PRESUPUESTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
