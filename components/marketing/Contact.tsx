"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573000000000";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hola@tuempresa.com";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+57 300 000 0000";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* HEADER CENTRADO */}
      <section className="border-b border-slate-200 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.22em] text-slate-500 uppercase">
              CONTACTO
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
              Hablemos
            </h1>
            <p className="mt-6 text-xl text-slate-600 md:text-2xl leading-relaxed">
              Cuéntanos tu zona y lo que necesitas. Te respondemos lo más rápido posible.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO DE CARDS GRANDES */}
      <section className="py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-start">
          
          {/* LADO IZQUIERDO: INFO DE CONTACTO */}
          <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900">Canales directos</h2>
            <p className="mt-3 text-lg text-slate-600">
              Si prefieres, escríbenos por WhatsApp o correo directamente.
            </p>

            <div className="mt-10 space-y-4">
              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-lg font-bold text-slate-900 transition hover:bg-slate-100 group"
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent("Hola, quiero información sobre cobertura:")}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <ArrowRight size={20} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-lg font-bold text-slate-900 transition hover:bg-slate-100 group"
                href={`mailto:${contactEmail}`}
              >
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Correo</span>
                   <span>{contactEmail}</span>
                </div>
                <ArrowRight size={20} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5 text-lg font-bold text-slate-900 transition hover:bg-slate-100 group"
                href={`tel:${contactPhone}`}
              >
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Teléfono</span>
                   <span>{contactPhone}</span>
                </div>
                <ArrowRight size={20} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 rounded-[32px] border border-slate-100 bg-slate-50/50 p-8">
              <p className="text-lg font-bold text-slate-900 italic underline decoration-slate-200 underline-offset-4">Horario de atención</p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Lunes a Sábado: 8:00 a.m. – 6:00 p.m. <br />
                Domingos: Soporte técnico prioritario.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: FORMULARIO FUNCIONAL */}
          <div className="rounded-[40px] border border-slate-200 bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Envíanos tus datos
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Te contactamos con disponibilidad real por zona.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Nombre</label>
                  <input
                    required
                    name="name"
                    placeholder="Tu nombre completo"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-slate-900 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Número</label>
                  <input
                    required
                    name="phone"
                    placeholder="+57 3xx xxx xxxx"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-slate-900 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Correo</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-slate-900 transition-all shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wide">Mensaje o Dirección</label>
                <textarea
                  required
                  name="message"
                  placeholder="Ej: Vivo en el sector Olaya, necesito internet para mi hogar..."
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-900 outline-none focus:border-slate-900 transition-all resize-none shadow-sm"
                />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input required type="checkbox" className="mt-1.5 h-4 w-4 rounded accent-slate-900" defaultChecked />
                <p className="text-sm text-slate-600">
                  Acepto ser contactado y entiendo la{" "}
                  <a className="font-bold text-slate-900 underline underline-offset-4" href="/privacidad">
                    política de privacidad
                  </a>.
                </p>
              </div>

              {/* ESTADOS DE ENVÍO */}
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-5 text-white animate-in fade-in zoom-in-95">
                  <CheckCircle2 size={24} />
                  <p className="text-base font-bold text-center">¡Mensaje enviado con éxito!</p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 rounded-2xl bg-red-50 p-5 text-red-600 border border-red-100">
                  <AlertCircle size={24} />
                  <p className="text-base font-bold">Error al enviar. Intenta por WhatsApp.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-900 px-8 py-5 text-lg font-bold text-white transition hover:bg-slate-800 disabled:opacity-50 shadow-xl shadow-slate-100 active:scale-95 transition-all"
              >
                {loading ? "Enviando solicitud..." : "Enviar solicitud ahora"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}