export default function Steps() {
  const items = [
    { title: "Verifica cobertura", desc: "Dinos tu zona y validamos disponibilidad" },
    { title: "Elige tu plan", desc: "Según uso: streaming, trabajo o negocio." },
    { title: "Agenda instalación", desc: "Coordinamos día y hora. Instalación rápida." },
    { title: "Conéctate", desc: "Internet estable con soporte 24/7." },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
            PROCESO SIMPLE
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Contrata en 4 pasos
          </h2>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">
            Un flujo claro y rápido. Sin vueltas, sin complicarte.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-lg font-semibold text-slate-900">
                  {idx + 1}
                </div>
              </div>

              <h3 className="relative z-10 mt-6 text-xl font-semibold tracking-tight text-slate-900">
                {it.title}
              </h3>

              <p className="relative z-10 mt-3 text-base leading-relaxed text-slate-600">
                {it.desc}
              </p>

              <div className="relative z-10 mt-8 h-px w-full bg-slate-200/70" />

              <p className="relative z-10 mt-4 text-sm font-medium text-slate-900">
                Listo en minutos →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
