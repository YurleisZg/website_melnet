"use client";

import { useMemo, useState } from "react";
import { faqs } from "@/content/faq";
import { Search, X, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573043408837";
  const waText = encodeURIComponent("Hola, tengo una duda sobre el servicio de internet:");

  return (
    <section id="soporte" className="bg-gray-100 py-18 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        
        <div className="mb-10 pl-6 md:pl-3">
          <p className="text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">
            SOPORTE
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Preguntas <span className="text-slate-500 underline decoration-slate-200 underline-offset-8">frecuentes</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Resolvemos tus dudas sobre instalación, pagos y soporte técnico de forma clara y directa.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          
          <div className="lg:sticky lg:top-24">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-2xl font-bold text-slate-900">¿Necesitas hablar con alguien?</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Nuestro equipo humano está disponible para asesorarte personalmente si no encuentras la solución aquí.
              </p>

              <a
                href={`https://wa.me/${wa}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 group flex items-center justify-between rounded-2xl bg-slate-900 p-5 text-white transition-all hover:bg-slate-800"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold">WhatsApp Directo</p>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Respuesta inmediata</p>
                  </div>
                </div>
                <ArrowRight size={20} className="opacity-50 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compromiso</p>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                   <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                   Soporte técnico certificado
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                   <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                   Sin bots, personas reales
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe tu duda aquí..."
                className="w-full rounded-2xl border-2 border-slate-300 bg-white py-5 pl-14 pr-6 text-sm text-slate-900 outline-none focus:border-slate-900 focus:bg-white transition-all shadow-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            <div className="space-y-4">
              {filtered.map((f, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={f.q} 
                    className={`group overflow-hidden rounded-[1.25rem] border transition-all duration-300 ${
                      isOpen ? "border-slate-900 bg-white shadow-lg" : "border-slate-100 bg-white hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-6 text-left"
                    >
                      <span className={`text-base font-bold tracking-tight transition-colors ${isOpen ? "text-slate-900" : "text-slate-700"}`}>
                        {f.q}
                      </span>
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all ${
                        isOpen ? "bg-slate-900 text-white border-slate-900 rotate-180" : "bg-transparent text-slate-400 border-slate-200"
                      }`}>
                        <ChevronDown size={14} />
                      </div>
                    </button>

                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-slate-600">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-lg font-bold text-slate-900">No encontramos resultados</p>
                  <p className="text-slate-500">Prueba con términos como "fibra", "pagos" o "instalación".</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}