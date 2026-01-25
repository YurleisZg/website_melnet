export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
              LEGAL
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Términos y condiciones
            </h1>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              Condiciones generales de uso del sitio y solicitud del servicio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="prose prose-slate max-w-none">
            <h2>1. Uso del sitio</h2>
            <p>
              Este sitio permite consultar información del servicio y solicitar contacto. La información
              puede variar por zona y tecnología disponible.
            </p>

            <h2>2. Disponibilidad y cobertura</h2>
            <p>
              La cobertura depende de la zona, factibilidad técnica y capacidad. Siempre confirmamos
              disponibilidad antes de una instalación.
            </p>

            <h2>3. Solicitudes y contratación</h2>
            <p>
              Al enviar tus datos aceptas ser contactado para validar cobertura y coordinar instalación.
              La contratación final puede requerir documentación y aceptación de condiciones comerciales.
            </p>

            <h2>4. Pagos, cortes y reconexión</h2>
            <p>
              Los procesos de pago, suspensión y reconexión se rigen por las condiciones del plan contratado
              y la normativa aplicable.
            </p>

            <h2>5. Limitación de responsabilidad</h2>
            <p>
              El servicio puede presentar variaciones por factores externos (clima, infraestructura, energía,
              terceros). Haremos esfuerzos razonables para mantener continuidad y soporte.
            </p>

            <h2>6. Cambios</h2>
            <p>
              Podemos actualizar estos términos. Recomendamos revisarlos periódicamente.
            </p>

            <p className="text-sm text-slate-500">
              Última actualización: {new Date().toLocaleDateString("es-CO")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
