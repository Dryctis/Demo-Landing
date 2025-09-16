"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F1A] border-t border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + descripción */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#121828] ring-1 ring-white/10">
              CL
            </span>
            <span className="font-semibold tracking-wide">Clyvert</span>
          </div>
          <p className="text-sm text-slate-400">
            Landing pages modernas, rápidas y optimizadas para SEO.
          </p>
        </div>

        {/* Menú rápido */}
        <div>
          <h3 className="font-medium mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#inicio" className="hover:text-[var(--primary)]">Inicio</Link></li>
            <li><Link href="#soluciones" className="hover:text-[var(--primary)]">Soluciones</Link></li>
            <li><Link href="#tecnologias" className="hover:text-[var(--primary)]">Tecnologías</Link></li>
            <li><Link href="#contacto" className="hover:text-[var(--primary)]">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-medium mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Email: hola@clyvert.io</li>
            <li>Tel: +502 5555 5555</li>
            <li>Ciudad de Guatemala</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-medium mb-3">Síguenos</h3>
          <div className="flex gap-4 text-slate-400">
            <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-[var(--primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 001.84-2.32 8.43 8.43 0 01-2.67 1.02 4.18 4.18 0 00-7.13 3.82A11.88 11.88 0 013 4.79a4.17 4.17 0 001.29 5.57 4.16 4.16 0 01-1.89-.52v.05a4.18 4.18 0 003.35 4.09 4.2 4.2 0 01-1.88.07 4.18 4.18 0 003.9 2.9A8.37 8.37 0 012 19.54 11.83 11.83 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.36 8.36 0 0022.46 6z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[var(--primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 11.3h-3v-5.5c0-1.31-.03-3-1.84-3s-2.13 1.44-2.13 2.93v5.57h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.58v5.61z" />
              </svg>
            </Link>
            <Link href="https://github.com" aria-label="GitHub" className="hover:text-[var(--primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7-1.5.7-1.5-.3-.8-.5-1-1.1-1.3 1-.1 2.1.8 2.1.8 1.2 2.1 3.2 1.5 3.9 1.1.1-.8.5-1.4.9-1.7-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.2 1.2a11 11 0 015.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.6.1 2.9.7.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.5 5.8.5.4 1 1.2 1 2.5v3.6c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9 0-6.35-5.15-11.5-11.5-11.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Clyvert. Todos los derechos reservados.
      </div>
    </footer>
  );
}
