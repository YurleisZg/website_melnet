import Link from "next/link";
import { MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Coverage() {
  const zones = ["Centro", "Olaya", "Barrios Unidos", "Zona Rural", "Torices", "La Boquilla"];

  return (
    <section id="cobertura" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Encabezado Centrado */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            COBERTURA
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            ¿Dónde estamos <span className="text-slate-600">conectando</span>?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Expandimos nuestra red de alta velocidad para que siempre estés en línea.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          
          {/* LADO IZQUIERDO: Información y CTA */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-slate-600 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-slate-900">Consulta tu zona</h3>
                  <p className="text-slate-600 text-sm">Revisa nuestra lista de cobertura activa inmediata.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-slate-600 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-slate-900">Agenda tu instalación</h3>
                  <p className="text-slate-600 text-sm">Si hay disponibilidad, instalamos en menos de 48 horas.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/cobertura"
                className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-600"
              >
                Consultar Disponibilidad
                <MapPin size={18} />
              </Link>
              <Link
                href="/whatsapp"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50"
              >
                Hablar con un asesor
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* LADO DERECHO: Mapa de Colombia y Zonas */}
          <div className="relative overflow-hidden rounded-[32px] border border-slate-100 bg-slate-50/50 p-8 md:p-12">

            {/* Contenido sobre el mapa */}
            <div className="relative z-10">
              <p className="text-xs font-bold tracking-widest text-slate-600 uppercase">Zonas Activas</p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {zones.map((z) => (
                  <div
                    key={z}
                    className="flex items-center gap-3 rounded-xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.02]"
                  >
                    <CheckCircle2 size={18} className="text-black" />
                    <span className="font-semibold text-slate-800">{z}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 rounded-2xl bg-slate-600 p-4 text-center">
                <p className="text-sm font-medium text-white">
                  ¿No ves tu dirección? <span className="underline cursor-pointer">Avísanos aquí</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}