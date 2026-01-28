export type Plan = {
  id: string;
  name: string;
  speed: string;      
  priceCop: number;   
  tagline: string;    
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "sierra-30",
    name: "Inicial",
    speed: "30 Mbps",
    priceCop: 70000,
    tagline: "Esencial para el hogar en la montaña",
    features: [
      "Fibra Óptica Sierra Nevada", 
      "Limitado a 5 dispositivos", // 
      "80% de cobertura en la zona" // 
    ],
  },
  {
    id: "sierra-60",
    name: "Pro",
    speed: "60 Mbps",
    priceCop: 85000,
    tagline: "Navegación fluida y estable",
    features: [
      "Dispositivos ilimitados", // 
      "Ideal para video y redes sociales", 
      "Soporte técnico local"
    ],
    highlighted: true,
  },
  {
    id: "sierra-100",
    name: "Ultra",
    speed: "100 Mbps",
    priceCop: 100000,
    tagline: "Máxima potencia para Sierra Nevada",
    features: [
      "Dispositivos ilimitados", // 
      "Fibra óptica de alta fidelidad", 
      "Conexión premium para familias"
    ],
  },

  {
    id: "antioquia-150",
    name: "Barbosa Plus",
    speed: "150 Mbps",
    priceCop: 120000,
    tagline: "Velocidad del futuro en el campo",
    features: [
      "Cobertura Rural Barbosa (80%)", // 
      "Dispositivos ilimitados", // 
      "Perfecto para teletrabajo"
    ],
  },
  {
    id: "antioquia-250",
    name: "Barbosa Élite",
    speed: "250 Mbps",
    priceCop: 150000,
    tagline: "El plan más robusto de Antioquia",
    features: [
      "Máximo ancho de banda", 
      "Dispositivos ilimitados", // 
      "Estabilidad para negocios rurales"
    ],

  },
  {
    id: "antioquia-empresarial",
    name: "Barbosa Negocios",
    speed: "300 Mbps",
    priceCop: 180000,
    tagline: "Conectividad total para empresas",
    features: [
      "Prioridad de red", 
      "Dispositivos ilimitados", // 
      "Soporte técnico 24/7"
    ],
  }
];