import Link from "next/link";

export default function CTA() {
  return (
    // Fondo adaptativo: blanco en claro, negro profundo en dark
    <section className="pb-16 bg-white dark:bg-[#050505] pt-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4">
        <div 
          className="rounded-[1.5rem] p-10 text-center transition-all duration-300
                     bg-white border border-black/10 shadow-xl text-black
                     dark:bg-[#0a0a0a] dark:border-white/10 dark:text-white dark:shadow-none"
        >
          <h3 className="text-2xl font-semibold tracking-tight">
            ¿Listo para tener internet estable?
          </h3>
          
          <p className="mt-3 text-l opacity-80 dark:text-zinc-400">
            Verifica cobertura, elige plan y agenda instalación.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contacto" 
              className="rounded-2xl px-8 py-4 text-sm font-bold transition-all hover:scale-105
                         bg-black text-white dark:bg-white dark:text-black"
            >
              Contratar ahora
            </Link>
            
            <Link 
              href="/#planes" 
              className="rounded-2xl px-8 py-4 text-sm font-bold transition-all
                         border border-black/20 bg-transparent text-black hover:bg-black/5
                         dark:border-white/20 dark:text-white dark:hover:bg-white/5"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}