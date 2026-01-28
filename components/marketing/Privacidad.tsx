export default function PrivacyPage() {
  return (
    <main className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="border-b border-slate-200 dark:border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 dark:text-zinc-500 uppercase">
              LEGAL
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Política de privacidad
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 md:text-xl">
              Cómo tratamos tus datos cuando nos contactas o solicitas el servicio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-10">
        <div className="mx-auto max-w-3xl px-4 text-black dark:text-zinc-300">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="font-semibold text-lg dark:text-white">1. Datos que recopilamos</h2>
            <p className="mb-4">
              Podemos recopilar nombre, correo, número telefónico, zona/barrio y el mensaje que envías.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">2. Para qué los usamos</h2>
            <p className="mb-4">
              Para responderte, validar cobertura, ofrecerte planes/tecnologías disponibles y coordinar
              instalación o soporte.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">3. Compartir información</h2>
            <p className="mb-4">
              No vendemos tus datos. Podríamos compartirlos con proveedores/aliados solo si es necesario
              para prestar el servicio (por ejemplo, instalación o soporte).
            </p>

            <h2 className="font-semibold text-lg dark:text-white">4. Seguridad</h2>
            <p className="mb-4">
              Aplicamos medidas razonables para proteger la información. Aun así, ningún sistema es 100% seguro.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">5. Tus derechos</h2>
            <p className="mb-4">
              Puedes solicitar actualización o eliminación de tus datos contactándonos por los canales del sitio.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">6. Cambios</h2>
            <p className="mb-4">
              Podemos actualizar esta política. Recomendamos revisarla periódicamente.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">7. Retención de datos</h2>
            <p className="mb-4">
              Conservamos tus datos solo mientras sea necesario para los fines descritos o según requiera la ley.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">8. Cookies y tecnologías similares</h2>
            <p className="mb-4">
              Podemos usar cookies para mejorar la experiencia del sitio web y analizar el tráfico.
            </p>

            <h2 className="font-semibold text-lg dark:text-white">9. Contacto</h2>
            <p className="mb-4">
              Para preguntas sobre esta política de privacidad, contáctanos a través de los canales disponibles en el sitio.
            </p>

            <p className="text-sm text-slate-500 dark:text-zinc-600 mt-8">
              Última actualización: {new Date().toLocaleDateString("es-CO")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}