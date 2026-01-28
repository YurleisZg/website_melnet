import { locale } from "dayjs";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black pt-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-15 md:grid-cols-4">
        <div>
          <img src="/logo-bn.png" alt="MelNet Logo" className=" h-20 w-auto mb-2" />
           <Link href="/" className="font-semibold text-lg text-white">
            MelNet<span className="text-white"> Internet</span>
          </Link>

          <p className="mt-2 text-sm text-white/80">
            Internet para hogar y negocios. Cobertura por zonas.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Sitio</p>
          <div className="mt-2 space-y-2 text-sm text-white/80">
            <Link className="block hover:text-white" href="/#planes">Planes</Link>
            <Link className="block hover:text-white" href="/#cobertura">Cobertura</Link>
            <Link className="block hover:text-white" href="/#soporte">Soporte</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contacto</p>
          <div className="mt-2 space-y-2 text-sm text-white/80">
            <Link className="block hover:text-white" href="/contacto">Agenda aquí</Link>
            <Link className="block hover:text-white" target="_blank" href="https://wa.me/573225051941">WhatsApp: +57 322 5051941</Link>
            <Link className="block hover:text-white" href="mailto:melnetinternet@gmail.com">Correo: melnetinternet@gmail.com</Link>
            <p>Horario de atención </p>
            <p>Lunes a viernes 8:00 a.m – 5:00 p.m.</p>
            <p>Sábados 8:00 a.m. – 3:00 p.m.</p>
            <p>Domingos y festivos: cerrado.</p>
            <p>Carrera 44 # 74-72 Barrio Manrique Central, Medellín, Colombia</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Legal</p>
          <div className="mt-2 space-y-2 text-sm text-white/80">
            <Link className="block hover:text-white" href="/terminos-y-condiciones">Términos</Link>
            <Link className="block hover:text-white" href="/privacidad">Privacidad</Link>
            <Link className="block hover:text-white" href="/quienes-somos">Quienes somos</Link>
            
          </div>
        </div>
      </div>

      <div className="border-t py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} MelNet Internet. Todos los derechos reservados.
      </div>
    </footer>
  );
}
