"use client"; 
import { useState } from "react";
import Link from "next/link";
import { plans } from "@/content/plans";
import { formatCop } from "@/lib/format";

export default function Pricing() {
  const [showAll, setShowAll] = useState(false);

  const visiblePlans = showAll ? plans : plans.slice(0, 3);

  return (
    <section id="planes" className="py-20 md:py-24 bg-gray-100 dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 dark:text-zinc-500">
              PLANES
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-zinc-100">
              Planes
            </h2>
            <p className="mt-4 text-lg text-slate-600 md:text-xl dark:text-zinc-400">
              Elige velocidad y estabilidad según tu necesidad.
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:decoration-zinc-300"
          >
            {showAll ? "Ver menos planes" : "Ver más planes"}{" "}
            <span className={`transition-transform ${showAll ? "rotate-180" : "translate-y-[1px]"}`}>
              →
            </span>
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 transition-all duration-500 ease-in-out">
          {visiblePlans.map((p) => (
            <div
              key={p.id}
              className={[
                "group relative overflow-hidden rounded-[28px] border bg-white p-7 animate-in fade-in slide-in-from-bottom-4 duration-500 transition shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1",
                "dark:bg-zinc-900/50 dark:backdrop-blur-sm dark:shadow-none",
                p.highlighted
                  ? "border-slate-900 dark:border-zinc-500"
                  : "border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10",
              ].join(" ")}
            >
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{p.name}</p>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    {p.speed}
                  </p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-zinc-400">{p.tagline}</p>
                </div>

                {p.highlighted && (
                  <span className="rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-950 dark:border-zinc-100">
                    Más elegido
                  </span>
                )}
              </div>

              <div className="relative z-10 mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:bg-zinc-950/50 dark:border-white/5">
                <p className="text-xs font-medium text-slate-500 dark:text-zinc-500">Desde</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 dark:text-zinc-100">
                  {formatCop(p.priceCop)}/mes
                </p>
              </div>

              <ul className="relative z-10 mt-6 space-y-3 text-sm text-slate-700 dark:text-zinc-300">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900 dark:bg-zinc-400" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/573043408837?text=Hola,%20me%20interesa%20contratar%20el%20plan%20${encodeURIComponent(p.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "relative z-10 mt-8 block rounded-2xl px-5 py-3 text-center text-sm font-semibold transition",
                  p.highlighted
                    ? "bg-slate-900 text-white hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-950"
                    : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-zinc-800/50 dark:text-zinc-100 dark:hover:bg-zinc-800",
                ].join(" ")}
              >
                Contratar este plan
              </a>

              <p className="relative z-10 mt-3 text-center text-xs text-slate-500 dark:text-zinc-600">
                *Confirmamos cobertura antes de instalar.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}