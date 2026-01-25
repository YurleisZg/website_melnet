'use client'

import Link from "next/link";
import { useState } from 'react'

const nav = [
  { href: "/#planes", label: "Planes" },
  { href: "/#cobertura", label: "Cobertura" },
  { href: "/#soporte", label: "Soporte" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white backdrop-blur ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <img src="/logo1.png" alt="Melnet Logo" className="w-16 h-auto object-contain" />
          <Link href="/" className="font-semibold text-lg text-slate-900">
            Melnet<span className="text-slate-700"> Internet</span>
          </Link>
        </div>

        <div className="flex items-center gap-8 ml-auto ">
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-m text-slate-900 hover:text-blue-950">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center -mr-9">
            <button className="p-2 text-slate-700 hover:text-black">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor"/>
              </svg>
            </button>
            <button className="flex items-center gap-1 p-2 text-slate-700 hover:text-black">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" fill="#c41e3a"/>
                <rect x="2" y="4" width="20" height="2.67" fill="#c41e3a"/>
                <rect x="2" y="9.33" width="20" height="2.67" fill="#ffc400"/>
                <rect x="2" y="14.67" width="20" height="2.67" fill="#c41e3a"/>
              </svg>
              <span className="text-xs font-medium">ES</span>
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-700 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-2">
            {nav.map((i) => (
              <Link 
                key={i.href} 
                href={i.href} 
                className="py-2 text-sm text-slate-700 hover:text-black border-b border-gray-100 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
