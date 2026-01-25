export default function Problems() {
  const problems = [
    {
      title: "Se cae cuando más lo necesitas",
      desc: "Videollamadas, clases o trabajo remoto… y justo ahí se va el internet.",
    },
    {
      title: "El Wi-Fi no llega a toda la casa",
      desc: "En una habitación vuela y en otra no carga ni un audio.",
    },
    {
      title: "El soporte no responde",
      desc: "Escribes, llamas… y nadie te da una solución clara.",
    },
    {
      title: "No sabes si hay cobertura en tu zona",
      desc: "Te prometen instalación y luego te dicen que no llega el servicio.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
            ¿TE SUENA?
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Problemas típicos con el internet
          </h2>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">
            Si te pasa alguno, te mostramos un camino claro para solucionarlo.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((p, idx) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
            >
              {/* Top subtle glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent" />

              {/* Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                Problema {String(idx + 1).padStart(2, "0")}
              </div>

              <h3 className="relative z-10 mt-5 text-xl font-semibold tracking-tight text-slate-900">
                {p.title}
              </h3>

              <p className="relative z-10 mt-3 text-base leading-relaxed text-slate-600">
                {p.desc}
              </p>

              <div className="relative z-10 mt-8 h-px w-full bg-slate-200/70" />
              <p className="relative z-10 mt-4 text-sm font-medium text-slate-900">
                Solución clara en 4 pasos →
              </p>
            </div>
          ))}
        </div>

        {/* Simple bridge to Steps */}
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm text-slate-600">
            Ahora sí: mira cómo lo resolvemos de forma simple.
          </p>
        </div>
      </div>
    </section>
  );
}
