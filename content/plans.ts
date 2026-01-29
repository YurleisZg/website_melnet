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
    name: "Inicial Sierra Nevada",
    speed: "10 Mbps",
    priceCop: 85000,
    tagline: "Esencial para el hogar en la montaña",
    features: [
      "Fibra Óptica Sierra Nevada", 
      "Limitado a 5 dispositivos", // 
      "80% de cobertura en la zona" // 
    ],
  },
  {
    id: "sierra-60",
    name: "Pro Sierra Nevada",
    speed: "15 Mbps",
    priceCop: 100000,
    tagline: "Navegación fluida y estable",
    features: [
      "Dispositivos ilimitados", // 
      "Ideal para video y redes sociales", 
      "Cobertura del 80% en la zona" 
    ],
    highlighted: true,
  },
  {
    id: "sierra-100",
    name: "Ultra Sierra Nevada",
    speed: "20 Mbps",
    priceCop: 120000,
    tagline: "Máxima potencia para Sierra Nevada",
    features: [
      "Dispositivos ilimitados", // 
      "Fibra óptica de alta fidelidad", 
      "Conexión premium para familias"
    ],
  },

  {
    id: "antioquia-150",
    name: "Antioquia Plus",
    speed: "10 Mbps",
    priceCop: 60000,
    tagline: "Velocidad del futuro en el campo",
    features: [
      "Cobertura (75%)", // 
      "Dispositivos ilimitados", // 
      "Perfecto para teletrabajo"
    ],
  },
  {
    id: "antioquia-250",
    name: "Antioquia Élite",
    speed: "15 Mbps",
    priceCop: 80000,
    tagline: "El plan más robusto de Antioquia",
    features: [
      "Máximo ancho de banda", 
      "Dispositivos ilimitados", // 
      "Estabilidad para negocios rurales"
    ],

  },
  {
    id: "antioquia-empresarial",
    name: "Antioquia Empresarial",
    speed: "25 Mbps",
    priceCop: 100000,
    tagline: "Conectividad total para empresas",
    features: [
      "Prioridad de red", 
      "Dispositivos ilimitados", // 
      "Soporte técnico 24/7"
    ],
  }
];