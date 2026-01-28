export default function Stats() {
  const stats = [
    { k: "99.9%", v: "Estabilidad garantizada en tu conexión" },
    { k: "24/7", v: "Asistencia técnica siempre disponible" },
    { k: "Fibra+", v: "Tecnología de última generación" },
    { k: "100%", v: "Entrega de la velocidad contratada" }
  ];

  return (
    <section className="bg-black dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-0 md:px-4 py-0 md:py-4">
        <div 
          className="grid gap-3 p-4 md:grid-cols-4 transition-all
                     bg-black w-full
                     dark:rounded-3xl dark:bg-zinc-900/40 dark:border dark:border-white/10 dark:backdrop-blur-sm"
        >
          {stats.map((s) => (
            <div
              key={s.v}
              className="px-5 py-4 text-center md:text-left"
            >
              <p className="text-4xl font-semibold tracking-tight text-white">
                {s.k}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}