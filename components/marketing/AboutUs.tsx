import Link from "next/link";
import { CheckCircle2, Shield, Zap, Users, Map, Globe, Landmark } from "lucide-react";

export default function AboutPage() {
  const values = [
    { t: "Transparencia", d: "Validamos cobertura real antes de cualquier contrato. Sin falsas promesas.", icon: <Shield size={20} /> },
    { t: "Estabilidad", d: "Infraestructura robusta de Fibra y HFC diseñada para una conexión sin caídas.", icon: <Zap size={20} /> },
    { t: "Soporte Humano", d: "Atención directa desde Medellín. Hablas con expertos, no con grabaciones.", icon: <Users size={20} /> },
    { t: "Compromiso Local", d: "Invertimos en Antioquia para llevar internet donde otros no llegan.", icon: <Landmark size={20} /> },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section - Historia */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-slate-600 uppercase mb-4">
                Desde 2021 conectando Medellín y Sierra Nevada
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Nacidos para <span className="text-slate-500">transformar</span> la conexión local
              </h1>
              
              <p className="mt-8 text-l leading-relaxed text-slate-600">
                MelNet nació en el año 2021 en el corazón de Antioquia, con una misión clara: romper las barreras de conectividad en Antioquia y sierra nevada. Lo que empezó como un proyecto local, hoy es una red en constante expansión que prioriza la honestidad técnica y el trato humano.
              </p>

              <p className="mt-4 text-l leading-relaxed text-slate-600">
                No somos una empresa distante; somos vecinos trabajando para que hogares y negocios antioqueños compitan al más alto nivel con internet de fibra óptica y cable de última generación.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/#planes" className="rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 active:scale-95">
                  Explorar Planes
                </Link>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Globe size={20} className="text-slate-600" />
                  Sede Principal: Medellín
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-slate-50 blur-3xl opacity-60" />
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-[12px] border-slate-100 shadow-2xl">
                <img 
                  src="https://img.freepik.com/foto-gratis/joven-ingeniero-haciendo-analisis-programas_1303-20402.jpg?w=740" 
                  alt="Equipo técnico MelNet" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-100 animate-bounce-slow">
                <p className="text-4xl font-black text-slate-900">5+</p>
                <p className="text-[10px] font-extrabold text-slate-600 uppercase tracking-[0.2em]">Años de Evolución</p>
                <div className="mt-2 h-1 w-12 bg-slate-900 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-6xl px-4">
          
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-10">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Nuestra filosofía de servicio
              </h2>
              <p className="mt-6 text-l text-slate-600">
                En MelNet, la estabilidad no es un lujo, es nuestro estándar. Trabajamos bajo cuatro pilares que garantizan que tu única preocupación sea disfrutar de la red.
              </p>
            </div>
          
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <div
                key={v.t}
                className="group relative flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-slate-900 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
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