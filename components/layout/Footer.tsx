import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        <div>
          <img src="/logo1.jpeg" alt="Melnet Logo" className=" h-16 w-auto mb-2" />
          <p className="font-semibold text-blue-400">Melnet Internet</p>

          <p className="mt-2 text-sm text-slate-900">
            Internet para hogar y negocios. Cobertura por zonas.
          </p>
        </div>

        <div>
          <p className="font-semibold text-blue-400">Sitio</p>
          <div className="mt-2 space-y-2 text-sm text-slate-600">
            <Link className="block hover:text-black" href="/planes">Planes</Link>
            <Link className="block hover:text-black" href="/cobertura">Cobertura</Link>
            <Link className="block hover:text-black" href="/soporte">Soporte</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-blue-400">Contacto</p>
          <div className="mt-2 space-y-2 text-sm text-slate-600">
            <p>Agenda aquí</p>
            <Link className="block hover:text-black" href="https://wa.me/573005409089">WhatsApp: +57 300 5409089</Link>
            <Link className="block hover:text-black" href="mailto:melnetinternet@gmail.com">Correo: melnetinternet@gmail.com</Link>
            <p>Horario: Lun–Sáb</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-blue-400">Legal</p>
          <div className="mt-2 space-y-2 text-sm text-slate-600">
            <p>Términos</p>
            <p>Privacidad</p>
            <p>Quienes somos</p>
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Melnet Internet. Todos los derechos reservados.
      </div>
    </footer>
  );
}
