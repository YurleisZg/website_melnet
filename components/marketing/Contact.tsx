export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
              CONTACTO
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Hablemos
            </h1>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Cuéntanos tu zona y lo que necesitas. Te respondemos lo más rápido posible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-start">
          {/* Left: info */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:sticky md:top-24">
            <p className="text-sm font-semibold text-slate-900">Canales directos</p>
            <p className="mt-2 text-sm text-slate-600">
              Si prefieres, escríbenos por WhatsApp o correo.
            </p>

            <div className="mt-6 space-y-3">
              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573000000000"}?text=${encodeURIComponent(
                  "Hola, quiero información. Mi zona es:"
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <span className="text-slate-500">→</span>
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hola@tudominio.com"}`}
              >
                <span>Correo</span>
                <span className="text-slate-500">
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hola@tudominio.com"}
                </span>
              </a>

              <a
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || "+57 300 000 0000"}`}
              >
                <span>Teléfono</span>
                <span className="text-slate-500">
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+57 300 000 0000"}
                </span>
              </a>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Horario</p>
              <p className="mt-2 text-sm text-slate-600">
                Lun–Sáb: 8:00 a.m. – 6:00 p.m. <br />
                Dom: soporte según disponibilidad.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Envíanos tus datos
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Te contactamos con disponibilidad real por zona.
            </p>

            <form className="mt-7 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Nombre</label>
                  <input
                    name="name"
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Número</label>
                  <input
                    name="phone"
                    placeholder="+57 3xx xxx xxxx"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Correo</label>
                <input
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700">Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Ej: Vivo en ___, necesito internet para ___"
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" defaultChecked />
                <p className="text-xs text-slate-600">
                  Acepto ser contactado y entiendo la{" "}
                  <a className="font-semibold text-slate-900 underline underline-offset-4" href="/privacidad">
                    política de privacidad
                  </a>
                  .
                </p>
              </div>

              <button
                type="button"
                className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Enviar
              </button>

              <p className="text-center text-xs text-slate-500">
                (Este botón es UI. Si quieres, te hago el endpoint /api/contact para que envíe de verdad.)
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
