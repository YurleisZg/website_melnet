export default function Stats() {
  const stats = [
    { k: "2,000+", v: "Instalaciones realizadas" },
    { k: "99.2%", v: "Uptime promedio (según zona)" },
    { k: "< 15 min", v: "Tiempo típico de respuesta" },
    { k: "24/7", v: "Monitoreo (según servicio)" },
  ];

  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-2 md:py-8">
        <div className="grid gap-3 rounded-3xl bg-black p-4 shadow-sm md:grid-cols-4 md:p-6">
          {stats.map((s) => (
            <div
              key={s.v}
              className="rounded-2xl px-5 py-4 text-center md:text-left"
            >
              <p className="text-4xl font-semibold tracking-tight text-white">
                {s.k}
              </p>
              <p className="mt-1 text-sm text-white/70">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
