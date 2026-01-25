"use client";

import Link from "next/link";
import { useMemo } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
];

export default function Hero() {
  const img = useMemo(() => {
    const i = Math.floor(Math.random() * HERO_IMAGES.length);
    return HERO_IMAGES[i];
  }, []);

  const wa = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573000000000";
  const waText = encodeURIComponent("Hola, quiero internet. Mi zona es:");

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      <img
        src={img}
        alt="Personas conectadas a internet"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        referrerPolicy="no-referrer"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-2xl text-center text-white">
          <p className="text-xs font-medium tracking-[0.22em] text-white/80">
            INSTALACIÓN RÁPIDA • SOPORTE WHATSAPP • COBERTURA POR ZONAS
          </p>

          <h1 className="mt-4 text-[44px] font-semibold leading-[0.95] tracking-tight md:text-[72px]">
            Hey,
            <br />
            <span className="text-white/85">conéctate</span>
            <br />
            hoy mismo.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
            Internet para hogar y negocio, con atención clara y respuesta rápida.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contratar"
              className="w-full rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black hover:opacity-90 sm:w-auto"
            >
              Quiero que me contacten
            </Link>

            <a
              href={`https://wa.me/${wa}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-2xl border border-white/30 bg-transparent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
  
        </div>
      </div>
    </section>
  );
}
