import Link from "next/link";

export default function CTA() {
  return (
    <section className="pb-16 bg-white pt-20 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border bg-white p-8 text-black md:p-8 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">¿Listo para tener internet estable?</h3>
          <p className="mt-2 text-black/80 text-lg">
            Verifica cobertura, elige plan y agenda instalación. Te contactamos rápido.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link href="/contratar" className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white">
              Contratar
            </Link>
            <Link href="#planes" className="rounded-xl border border-black/25 px-5 py-3 text-sm font-medium text-black">
              Ver planes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
