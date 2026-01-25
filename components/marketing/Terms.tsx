
export default function TermsPage() {
  return (
    <main className="bg-white" id="terminos-y-condiciones">
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

      <section className="py-12 md:py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="prose prose-slate max-w-none text-black">
            <h2 className="font-semibold text-lg">1. Uso del sitio</h2>
            <p className="mb-4">
              Este sitio permite consultar información del servicio y solicitar contacto. La información
              puede variar por zona y tecnología disponible.
            </p>

            <h2 className="font-semibold text-lg">2. Elegibilidad</h2>
            <p className="mb-4">
              El servicio está dirigido a personas mayores de edad en Colombia. Al solicitar el servicio,
              confirmas cumplir con este requisito.
            </p>

            <h2 className="font-semibold text-lg">3. Solicitudes y contratación</h2>
            <p className="mb-4">
              Al enviar tus datos aceptas ser contactado para validar cobertura y coordinar instalación.
              La contratación final puede requerir documentación y aceptación de condiciones comerciales.
            </p>

            <h2 className="font-semibold text-lg">4. Pagos, cortes y reconexión</h2>
            <p className="mb-4">
              Los procesos de pago, suspensión y reconexión se rigen por las condiciones del plan contratado
              y la normativa aplicable.
            </p>

            <h2 className="font-semibold text-lg">5. Limitación de responsabilidad</h2>
            <p className="mb-4">
              El servicio puede presentar variaciones por factores externos (clima, infraestructura, energía,
              terceros). Haremos esfuerzos razonables para mantener continuidad y soporte.
            </p>

            <h2 className="font-semibold text-lg">6. Privacidad y datos personales</h2>
            <p className="mb-4">
              Protegemos tu información personal conforme a la Ley 1581 de 2012. Los datos se usan 
              únicamente para prestación del servicio, soporte técnico y comunicaciones relacionadas. 
              No compartimos información con terceros sin autorización.
            </p>

            <h2 className="font-semibold text-lg">7. Soporte técnico</h2>
            <p className="mb-4">
              Ofrecemos soporte técnico durante horarios comerciales. Los tiempos de respuesta varían 
              según el tipo de consulta. Para emergencias críticas del servicio, contamos con canales 
              prioritarios de atención.
            </p>

            <h2 className="font-semibold text-lg">8. Garantías del servicio</h2>
            <p className="mb-4">
              Garantizamos el funcionamiento del servicio bajo condiciones normales de operación. 
              Las garantías cubren equipos y configuración básica, excluyendo daños por uso inadecuado, 
              eventos climáticos extremos o modificaciones no autorizadas.
            </p>

            <h2 className="font-semibold text-lg">9. Propiedad intelectual</h2>
            <p className="mb-4">
              Todo el contenido del sitio, incluyendo textos, imágenes, logos y diseños, está protegido 
              por derechos de autor. Está prohibida la reproducción total o parcial sin autorización 
              expresa por escrito.
            </p>

            <h2 className="font-semibold text-lg">10. Terminación del servicio</h2>
            <p className="mb-4">
              Tanto el usuario como la empresa pueden terminar el servicio conforme a las condiciones 
              contractuales. La terminación no exime del pago de servicios ya prestados o equipos 
              en comodato que deban ser devueltos.
            </p>

            <h2 className="font-semibold text-lg">11. Resolución de conflictos</h2>
            <p className="mb-4">
              Para resolver controversias, priorizamos el diálogo directo. Si no es posible, aplicamos 
              los mecanismos establecidos en la normativa colombiana de telecomunicaciones y protección 
              al consumidor.
            </p>

            <h2 className="font-semibold text-lg">12. Cambios en los términos</h2>
            <p className="mb-4">
              Podemos actualizar estos términos cuando sea necesario. Los cambios se publicarán en 
              esta página y recomendamos revisarlos periódicamente. El uso continuado del servicio 
              implica aceptación de las modificaciones.
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
