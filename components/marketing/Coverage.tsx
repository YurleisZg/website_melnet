import Link from "next/link";
import { MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Coverage() {
  const zones = ["Medellín", "Sierra Nevada", "Barbosa Antioquía", "Zona Rural"];

  return (
    <section id="cobertura" className="bg-white dark:bg-[#050505] py-24 transition-colors">
      <div className="mx-auto max-w-6xl px-4">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 dark:text-zinc-500 uppercase">
            COBERTURA
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            ¿Dónde estamos <span className="text-slate-600 dark:text-zinc-400">conectando</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
            Expandimos nuestra red de alta velocidad y servicios corporativos.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="grid gap-6">
              {[
                { n: "1", t: "Consulta tu zona", d: "Revisa nuestra lista de cobertura activa." },
                { n: "2", t: "Agenda tu instalación", d: "Instalamos en menos de 48 horas." }
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-zinc-800 text-slate-900 dark:text-white font-bold">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-zinc-100">{step.t}</h3>
                    <p className="text-slate-600 dark:text-zinc-400 text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="/#contacto" className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 dark:bg-white px-8 py-4 text-sm font-bold text-white dark:text-black transition-all">
                Contáctanos <MapPin size={18} />
              </Link>
              <a href="https://wa.me/573043408837" target="_blank" className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-transparent px-8 py-4 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-900 transition-all">
                Hablar con un asesor <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#0a0a0a] p-8 md:p-12">
            <p className="text-xs font-bold tracking-widest text-slate-600 dark:text-zinc-500 uppercase">Zonas Activas</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {zones.map((z) => (
                <div key={z} className="flex items-center gap-3 rounded-xl border border-white dark:border-white/5 bg-white/80 dark:bg-zinc-900/50 p-4 shadow-sm backdrop-blur-sm">
                  <CheckCircle2 size={18} className="text-black dark:text-white" />
                  <span className="font-semibold text-slate-800 dark:text-zinc-200">{z}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}