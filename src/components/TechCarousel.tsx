"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Icons
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiVercel,
} from "react-icons/si";

const techs = [
  { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12 text-white" /> },
  { name: "React", icon: <SiReact className="h-12 w-12 text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="h-12 w-12 text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="h-12 w-12 text-blue-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="h-12 w-12 text-pink-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="h-12 w-12 text-green-500" /> },
  { name: "Python", icon: <SiPython className="h-12 w-12 text-yellow-400" /> },
  { name: "Vercel", icon: <SiVercel className="h-12 w-12 text-white" /> },
];

export default function TechCarousel() {
  return (
    <section id="tecnologias" className="mx-auto max-w-7xl px-4 md:px-6 py-16 overflow-hidden">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Tecnologías que utilizamos
      </h2>

      <Swiper
        modules={[Autoplay]}
        loop
        
        autoplay={{
          delay: 1,                 
          disableOnInteraction: false,
          pauseOnMouseEnter: true,  // se pausa al hacer hover
        }}
        speed={3000}                
        slidesPerView={4}
        spaceBetween={40}
        allowTouchMove={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        className="flex items-center"
      >
        {techs.map((tech, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center gap-2">
              {tech.icon}
              <span className="text-sm text-slate-400">{tech.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
