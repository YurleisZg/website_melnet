import Link from "next/link";
import { plans } from "@/content/plans";
import { formatCop } from "@/lib/format";

export default function Pricing() {
  return (
    <section id="planes" className="py-20 md:py-24 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
              PLANES
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Planes
            </h2>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Elige velocidad y estabilidad según tu necesidad.
            </p>
          </div>

          <Link
            href="/planes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
          >
            Ver comparación completa <span className="translate-y-[1px]">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={[
                "group relative overflow-hidden rounded-[28px] border bg-white p-7",
                "shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition",
                "hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
                p.highlighted
                  ? "border-slate-900"
                  : "border-slate-200/80 hover:border-slate-300",
              ].join(" ")}
            >

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
                    {p.speed}
                  </p>
                  <p className="mt-3 text-sm text-slate-600">{p.tagline}</p>
                </div>

                {p.highlighted && (
                  <span className="rounded-full border border-slate-900 bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    Más elegido
                  </span>
                )}
              </div>

              <div className="relative z-10 mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-medium text-slate-500">Desde</p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
                  {formatCop(p.priceCop)}/mes
                </p>
              </div>

              <ul className="relative z-10 mt-6 space-y-3 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contratar?plan=${p.id}`}
                className={[
                  "relative z-10 mt-8 block rounded-2xl px-5 py-3 text-center text-sm font-semibold transition",
                  p.highlighted
                    ? "bg-slate-900 text-white hover:opacity-90"
                    : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                ].join(" ")}
              >
                Contratar este plan
              </Link>

              {/* micro-copy opcional (no cambia lógica, solo visual) */}
              <p className="relative z-10 mt-3 text-center text-xs text-slate-500">
                Confirmamos cobertura antes de instalar.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
