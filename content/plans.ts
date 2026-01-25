export type Plan = {
  id: string;
  name: string;
  speed: string;      // "200 Mbps"
  priceCop: number;   // 89000
  tagline: string;    // "Perfecto para streaming"
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "hogar-120",
    name: "Hogar",
    speed: "120 Mbps",
    priceCop: 69000,
    tagline: "Para navegar y estudiar sin cortes",
    features: ["Router incluido", "Soporte por WhatsApp", "Instalación rápida"],
  },
  {
    id: "hogar-300",
    name: "Hogar Plus",
    speed: "300 Mbps",
    priceCop: 99000,
    tagline: "Streaming + gaming con baja latencia",
    features: ["Prioridad en soporte", "Mejor Wi-Fi (según zona)", "Sin cláusulas raras"],
    highlighted: true,
  },
  {
    id: "negocios-600",
    name: "Negocios",
    speed: "600 Mbps",
    priceCop: 159000,
    tagline: "Estabilidad para ventas y cámaras",
    features: ["Atención preferente", "SLA básico", "Opcional IP pública"],
  },
  
];
