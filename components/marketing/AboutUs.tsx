import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, Shield, Zap, Map } from "lucide-react";

export default function AboutPage() {
  const values = [
    { t: "Transparencia", d: "Validamos cobertura real antes de cualquier compromiso.", icon: <Shield size={20} /> },
    { t: "Estabilidad", d: "Infraestructura diseñada para una conexión sin caídas.", icon: <Zap size={20} /> },
    { t: "Soporte claro", d: "Atención humana y directa, sin laberintos de bots.", icon: <Users size={20} /> },
    { t: "Expansión", d: "Crecimiento estratégico basado en la demanda real.", icon: <Map size={20} /> },
  ];

  return (
    <main className="bg-white">
      {/* HERO SECTION CON IMAGEN */}
      <section className="relative overflow-hidden py-24 md:py-22">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            {/* Texto alineado a la izquierda */}
            <div className="border-l-4 border-slate-900 pl-6 md:pl-8">
              <p className="text-xs font-bold tracking-[0.25em] text-slate-500 uppercase">
                QUIÉNES SOMOS
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Internet con <span className="text-slate-500 underline decoration-slate-200 underline-offset-8">enfoque humano</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-600">
                No somos solo cables y antenas. Somos un equipo comprometido con procesos claros y una experiencia de conexión diseñada para las necesidades reales de cada zona.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/#cobertura" className="rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 active:scale-95">
                  Verificar mi zona
                </Link>
              </div>
            </div>

            {/* Imagen con estilo premium */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border-8 border-slate-50 shadow-2xl">
                <img 
                  src="https://img.freepik.com/foto-gratis/joven-ingeniero-haciendo-analisis-programas_1303-20402.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Nuestro equipo trabajando" 
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl border border-slate-100">
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Compromiso Local</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* MISION Y VALORES - CENTRADO */}
      <section className="bg-slate-50/50 py-24">
        <div className="mx-auto max-w-6xl px-4">
          
          {/* Encabezado de Misión Centrado */}
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Nuestra visión del servicio
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Buscamos transformar la conectividad en una herramienta de progreso, eliminando la incertidumbre técnica y priorizando la respuesta rápida.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-3 rounded-full bg-white px-6 py-2 shadow-sm border border-slate-100 text-sm font-bold text-slate-900">
                <CheckCircle2 size={18} className="text-slate-900" />
                Instalación en menos de 48h
              </div>
            </div>
          </div>

          {/* Grid de Valores Centrados */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.t}
                className="group flex flex-col items-center text-center rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all hover:border-slate-900 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}