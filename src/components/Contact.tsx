"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const ContactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  phone: z.string().optional(),
  message: z.string().min(5, "Cuéntanos un poco más"),
  // Honeypot (debe ir vacío)
  company: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "", company: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Error al enviar");
      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("No se pudo enviar el mensaje");
      }
    }
  };

  return (
    <section id="contacto" className="mx-auto max-w-3xl px-4 md:px-6 py-16">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl mb-8">
        Contáctanos
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4" noValidate>
        {/* Honeypot oculto */}
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" {...register("company")} />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full rounded-xl bg-[#0B0F1A] ring-1 ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
            placeholder="Tu nombre"
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full rounded-xl bg-[#0B0F1A] ring-1 ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
            placeholder="tu@correo.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-1">
            Teléfono (opcional)
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full rounded-xl bg-[#0B0F1A] ring-1 ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
            placeholder="+502 5555-5555"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="w-full rounded-xl bg-[#0B0F1A] ring-1 ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ring)]"
            placeholder="Cuéntanos sobre tu proyecto…"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="rounded-xl bg-red-500/10 text-red-300 px-3 py-2 ring-1 ring-red-500/30"
          >
            {serverError}
          </div>
        )}
        {status === "success" && (
          <div
            role="status"
            className="rounded-xl bg-emerald-500/10 text-emerald-300 px-3 py-2 ring-1 ring-emerald-500/30"
          >
            ¡Mensaje enviado! Te contactaremos pronto.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-5 py-2 font-semibold text-slate-900 ring-1 ring-[var(--ring)] transition hover:bg-[var(--primary-600)] disabled:opacity-60"
          aria-busy={status === "loading"}
        >
          {status === "loading" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </form>
    </section>
  );
}
