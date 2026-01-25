import Link from "next/link";

export default function AboutPage() {
  const values = [
    { t: "Transparencia", d: "Te decimos si hay cobertura real antes de instalar." },
    { t: "Estabilidad", d: "Buscamos continuidad del servicio y respuesta rápida." },
    { t: "Soporte claro", d: "Canales directos, seguimiento y comunicación." },
    { t: "Expansión", d: "Crecemos por zonas y registramos solicitudes." },
  ];

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
              QUIÉNES SOMOS
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Internet con enfoque en experiencia
            </h1>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Somos un equipo enfocado en conectarte con procesos claros, soporte directo y cobertura por zonas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-semibold text-slate-900">Nuestra misión</p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Llevar internet estable a hogares y negocios con una experiencia simple: validación por zona,
                instalación ágil y soporte claro.
              </p>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-semibold text-slate-900">Cómo trabajamos</p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Verificamos cobertura real, recomendamos tecnología según tu zona (fibra o inalámbrico),
                coordinamos instalación y mantenemos monitoreo y atención.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.t}
                className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                <p className="text-xl font-semibold text-slate-900">{v.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{v.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-900">¿Quieres validar tu zona?</p>
                <p className="mt-1 text-sm text-slate-600">
                  Te decimos si hay disponibilidad y qué plan te conviene.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/#cobertura" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
                  Consultar cobertura
                </Link>
                <Link href="/contact" className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
