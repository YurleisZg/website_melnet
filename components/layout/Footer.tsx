import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-10 md:grid-cols-5">
        
        <div className="md:col-span-1">
          <img src="/logo-bn.png" alt="MelNet Logo" className="h-14 w-auto mb-2 object-contain" />
          <Link href="/" className="font-semibold text-lg text-white">
            MelNet<span className="text-white"> Internet</span>
          </Link>
          <p className="text-sm leading-snug text-zinc-400 mt-1">
            Internet para hogar y negocios. Empresa creada en el año 2021 en Medellín, Colombia.
          </p>
          <Link href="/quienes-somos" target="_blank" className="mt-2 inline-block text-xs font-medium text-white underline underline-offset-4 hover:text-zinc-300">
            Conócenos más.
          </Link>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2 text-sm">Sitio</h4>
          <nav className="flex flex-col space-y-1 text-sm text-zinc-400">
            <Link className="hover:text-white transition-colors" href="/#planes">Explora nuestros Planes</Link>
            <Link className="hover:text-white transition-colors" href="/#cobertura">Conoce la Cobertura</Link>
            <Link className="hover:text-white transition-colors" href="/#soporte">Sección de Soporte</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2 text-sm">Atención</h4>
          <div className="space-y-0.5 text-sm text-zinc-400">
            <p>Lun a Vie: 8:00 AM – 5:00 PM</p>
            <p>Sábados: 8:00 AM – 3:00 PM</p>
            <p>Dom y Festivos: Cerrado</p>
            <p className="pt-2  text-sm">Carrera 44 # 74-72 Barrio Manrique Central, Medellín, Colombia</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2 text-sm">Links de Interés</h4>
          <div className="flex flex-col space-y-1 text-sm text-zinc-400">
            <Link className="hover:text-white transition-colors" target="_blank" href="https://wa.me/573043408837">WhatsApp: +57 304 3408837</Link>
            <Link className="hover:text-white transition-colors" target="_blank" href="https://www.instagram.com/melnetinternet/">Instagram</Link>
            <Link className="hover:text-white transition-colors" target="_blank" href="/contacto">Contactános</Link>
            <Link className="hover:text-white transition-colors" href="mailto:melnetinternet@gmail.com">melnetinternet@gmail.com</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2 text-sm">Legal</h4>
          <div className="flex flex-col space-y-1 text-sm text-zinc-400">
            <Link className="hover:text-white transition-colors" href="/terminos-y-condiciones">Términos</Link>
            <Link className="hover:text-white transition-colors" href="/privacidad">Privacidad</Link>
            <Link className="hover:text-white transition-colors" target="_blank" href="https://www.crcom.gov.co/es/conoce-tus-derechos-como-usuario-tic">Protección al Usuario</Link>
            <Link className="hover:text-white transition-colors" href="/quienes-somos">Quienes somos</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-[12px] text-white/40">
        © {new Date().getFullYear()} MelNet Internet. Todos los derechos reservados.
      </div>
    </footer>
  );
}