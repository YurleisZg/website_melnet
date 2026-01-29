"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573043408837";
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "melnetinternet@gmail.com";
  const contactPhone =
    process.env.NEXT_PUBLIC_CONTACT_PHONE || "+57 3043408837";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const formData = new FormData(e.currentTarget);
      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const text =
        `Hola, quiero información sobre cobertura.\n\n` +
        `Nombre: ${name}\n` +
        `Teléfono: ${phone}\n` +
        `Mensaje/Dirección: ${message}`;

      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

      // Abre WhatsApp en una nueva pestaña/ventana
      window.open(url, "_blank", "noopener,noreferrer");

      setStatus("success");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="border-b border-slate-200 dark:border-white/10 py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.22em] text-slate-500 dark:text-zinc-500 uppercase">
              CONTACTO
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-7xl">
              Hablemos
            </h1>
            <p className="mt-4 text-l text-slate-600 dark:text-zinc-400 md:text-xl leading-relaxed">
              Cuéntanos tu zona y lo que necesitas. Te respondemos lo más rápido
              posible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-15">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-start">
          <div className="rounded-[20px] border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] md:sticky md:top-24">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Canales directos
            </h2>
            <p className="mt-3 text-lg text-slate-600 dark:text-zinc-400">
              Si prefieres, escríbenos por WhatsApp o correo directamente.
            </p>

            <div className="mt-10 space-y-4">
              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950 px-6 py-5 text-lg font-bold text-slate-900 dark:text-white transition hover:bg-slate-100 dark:hover:bg-zinc-800 group"
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                  "Hola, quiero información sobre cobertura:"
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950 px-6 py-5 text-lg font-bold text-slate-900 dark:text-white transition hover:bg-slate-100 dark:hover:bg-zinc-800 group"
                href={`mailto:${contactEmail}`}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Correo
                  </span>
                  <span>{contactEmail}</span>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-zinc-950 px-6 py-5 text-lg font-bold text-slate-900 dark:text-white transition hover:bg-slate-100 dark:hover:bg-zinc-800 group"
                href={`tel:${contactPhone}`}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Teléfono
                  </span>
                  <span>{contactPhone}</span>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            <div className="mt-10 rounded-[10px] border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-950/50 p-8">
              <p className="text-lg font-bold text-slate-900 dark:text-white italic underline decoration-slate-200 dark:decoration-zinc-800 underline-offset-4">
                Horario de atención
              </p>
              <p className="mt-4 text-base text-slate-600 dark:text-zinc-400 leading-relaxed">
                Lunes a viernes: 8:00 a.m – 5:00 p.m.
                <br />
                Sábados: 8:00 a.m. – 3:00 p.m.
                <br />
                Domingos y festivos: cerrado.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Envíanos tus datos
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Te contactamos lo antes posible para ofrecerte la mejor solución.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-2">
              <div className="grid gap-3 md:grid-cols-1">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700 dark:text-zinc-300 ml-1 uppercase tracking-wide">
                    Nombre
                  </label>
                  <input
                    required
                    name="name"
                    placeholder="Tu nombre completo"
                    className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-5 py-3 text-base text-slate-900 dark:text-white outline-none focus:border-slate-900 dark:focus:border-zinc-500 transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-zinc-300 ml-1 uppercase tracking-wide">
                    Número
                  </label>
                  <input
                    required
                    name="phone"
                    placeholder="+57 3xx xxx xxxx"
                    className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-5 py-3 mb-2 text-base text-slate-900 dark:text-white outline-none focus:border-slate-900 dark:focus:border-zinc-500 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-zinc-300 ml-1 uppercase tracking-wide">
                  Mensaje o Dirección
                </label>
                <textarea
                  required
                  name="message"
                  placeholder="Ej: Vivo en el sector Olaya, necesito internet para mi hogar..."
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 px-5 py-4 text-base text-slate-900 dark:text-white outline-none focus:border-slate-900 dark:focus:border-zinc-500 transition-all resize-none shadow-sm"
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input
                  required
                  type="checkbox"
                  className="mt-1.5 h-4 w-4 rounded accent-slate-900 dark:accent-white"
                  defaultChecked
                />
                <p className="text-sm text-slate-600 dark:text-zinc-400">
                  Acepto ser contactado y entiendo la{" "}
                  <a
                    className="font-bold text-slate-900 dark:text-white underline underline-offset-4"
                    href="/privacidad"
                  >
                    política de privacidad
                  </a>
                  .
                </p>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-3 rounded-2xl bg-slate-900 dark:bg-white p-4 text-white dark:text-black animate-in fade-in zoom-in-95">
                  <CheckCircle2 size={24} />
                  <p className="text-base font-bold text-center">
                    ¡Listo! Se abrió WhatsApp con tu solicitud.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 rounded-2xl bg-red-50 dark:bg-red-900/20 p-5 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30">
                  <AlertCircle size={24} />
                  <p className="text-base font-bold">
                    Error al enviar. Intenta por WhatsApp.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-900 dark:bg-white px-8 py-3 text-lg font-bold text-white dark:text-black transition hover:bg-slate-800 dark:hover:bg-zinc-200 disabled:opacity-50 shadow-xl shadow-slate-100 dark:shadow-none active:scale-95 transition-all"
              >
                {loading ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
