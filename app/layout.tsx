import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melnet Internet — Internet Hogar y Negocios",
  description:
    "Proveedor de servicios de internet confiable con planes de fibra óptica e inalámbrico para hogares y empresas. Conexión estable, velocidades competitivas y cobertura amplia por zonas. Contrata tu plan de internet en minutos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-dvh">{children}<WhatsAppButton /></main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
