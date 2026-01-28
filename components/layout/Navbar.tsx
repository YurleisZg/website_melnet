'use client'

import Link from "next/link";
import { useState } from 'react'
import ThemeToggle from "@/components/ui/ThemeToggle";

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
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-black dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo de MelNet Internet" className="w-18 h-auto object-contain dark:invert" />
          <Link href="/" className="font-semibold text-lg text-slate-900 dark:text-white">
            MelNet<span className="text-slate-700 dark:text-slate-200"> Internet</span>
          </Link>
        </div>

        <div className="flex items-center gap-8 ml-auto">
            <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link 
              key={i.href} 
              href={i.href} 
              className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
              {i.label}
              </Link>
            ))}
            </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <select 
              className="px-2 py-1 text-sm border border-slate-300 rounded-md bg-white text-slate-700 focus:outline-none dark:bg-neutral-900 dark:border-white/20 dark:text-white"
              onChange={(e) => console.log('Language:', e.target.value)}
              defaultValue="es"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>

          <button 
            className="md:hidden p-2 text-slate-700 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-black dark:border-white/10">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {nav.map((i) => (
              <Link 
                key={i.href} 
                href={i.href} 
                className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
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