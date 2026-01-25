export default function FeatureGrid() {
  const items = [
    {
      title: "Cortes y reconexión más controlados",
      desc: "Procesos claros para pagos y reconexión, con comunicación transparente.",
    },
    {
      title: "Soporte por WhatsApp",
      desc: "Canal directo con historial del caso y seguimiento en tiempo real.",
    },
    {
      title: "Hogar y negocios",
      desc: "Escala según tu necesidad: streaming, trabajo remoto o operación comercial.",
    },
    {
      title: "Monitoreo y estabilidad",
      desc: "Priorizamos continuidad del servicio y respuesta rápida ante incidentes.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-20 md:py-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-40" />
      <div className="pointer-events-none absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl opacity-25" />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div className="md:sticky md:top-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/60">
            EXPERIENCIA SIN ESTRÉS
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Hecho para conectarte
            <br />
            <span className="text-white/70">sin estrés</span>
          </h2>

          <p className="mt-4 max-w-md text-lg text-white/70 md:text-xl">
            Estabilidad, atención y una experiencia clara de principio a fin.
          </p>

          <div className="mt-8 space-y-3 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-sm font-semibold text-white/90">Lo que más importa:</p>

            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                <span>Menos caídas y mejor continuidad</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                <span>Soporte directo sin vueltas</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-white/90" />
                <span>Planes que se ajustan a tu uso</span>
              </li>
            </ul>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
            <p className="mt-4 text-sm font-medium text-white/85">
              Más claridad, menos fricción →
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className={[
                "group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7",
                "shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur",
                "transition will-change-transform",
                "hover:-translate-y-1 hover:border-white/20 hover:bg-white/7",
                "animate-in fade-in slide-in-from-bottom-2 duration-500",
              ].join(" ")}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sm font-semibold text-white/90 transition group-hover:border-white/20">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              <h3 className="relative z-10 mt-6 text-xl font-semibold tracking-tight text-white">
                {it.title}
              </h3>

              <p className="relative z-10 mt-3 text-base leading-relaxed text-white/70">
                {it.desc}
              </p>

              <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-white/0 via-white/15 to-white/0" />

              <p className="relative z-10 mt-4 text-sm font-medium text-white/85">
                Ver detalle →
              </p>

              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
