"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string; // opcional (url en /public o externa con next.config)
};

const testimonials: Testimonial[] = [
  {
    name: "María López",
    role: "CMO, TiendaNova",
    quote:
      "La landing cargó rapidísimo y mejoró nuestras conversiones. Excelente comunicación y entrega a tiempo.",
  },
  {
    name: "Carlos Méndez",
    role: "CEO, Fintecho",
    quote:
      "Implementaron métricas y SEO técnico desde el día uno. El proyecto quedó limpio y escalable.",
  },
  {
    name: "Ana Rodríguez",
    role: "PM, EduPlus",
    quote:
      "Animaciones sutiles, accesibilidad cuidada y un formulario que integra perfecto con nuestro flujo.",
  },
  {
    name: "Javier Torres",
    role: "Founder, AgroApp",
    quote:
      "Se nota el foco en performance. Pasamos Lighthouse verde en mobile sin sacrificar diseño.",
  },
];

function Avatar({ name, avatar }: { name: string; avatar?: string }) {
  if (avatar) {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/10">
        <Image
          src={avatar}
          alt={`Foto de ${name}`}
          fill
          sizes="40px"
          className="object-cover"
          priority={false}
        />
      </div>
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-[#121828] ring-1 ring-white/10 grid place-items-center text-sm">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-7xl px-4 md:px-6 py-16">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Testimonios
      </h2>

      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        aria-label="Carrusel de testimonios"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <article className="card h-full p-6 flex flex-col justify-between">
              <p className="text-slate-300 leading-relaxed">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar name={t.name} avatar={t.avatar} />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
