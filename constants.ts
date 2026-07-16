import { ExpertProfile, ImageAsset, TrustFactor } from './types';
import { ShieldCheck, Stethoscope, HeartHandshake, Award, Clock, MapPin } from 'lucide-react';

export const EXPERT: ExpertProfile = {
  name: "Dr. Matheus Reinaldo",
  title: "Dentista",
  specialties: [
    "Clínico Geral",
    "Cirurgia Oral Menor",
    "Cirurgia Plástica Periodontal",
    "Endodontia",
    "Atualizando em Implantodontia"
  ],
  location: "Alagoinhas-BA | Araças-Ba",
  instagramUrl: "https://www.instagram.com/dr.matheusreinaldo/",
  whatsappUrl: "https://wa.me/5575998337690?text=Olá,%20vim%20pelo%20site%20e%20quero%20mais%20informações."
};

export const HERO_IMAGES = {
  main: "https://i.imgur.com/uKwLvZv.png",
  secondary: "https://i.imgur.com/zQ3zsrQ.png",
  tertiary: "https://i.imgur.com/JIKUfYc.png"
};

export const RESULTS_GALLERY: ImageAsset[] = [
  { src: "https://i.imgur.com/BqFG3Sm.png", alt: "Cirurgia de siso" },
  { src: "https://i.imgur.com/ms01Ttv.png", alt: "Cirurgia plástica periodontal" },
  { src: "https://i.imgur.com/76sdKxD.png", alt: "Clareamento" },
  { src: "https://i.imgur.com/0Wa183v.png", alt: "Clareamento" },
  { src: "https://i.imgur.com/kg0OI9X.png", alt: "Restauração" },
  { src: "https://i.imgur.com/4zPIpLB.png", alt: "Implante" }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    id: '1',
    title: 'Avaliação Honesta',
    description: 'Sem tratamentos desnecessários. Transparência total.',
    iconName: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Mão Leve',
    description: 'Foco total no seu conforto e bem-estar durante o atendimento.',
    iconName: 'HeartHandshake'
  },
  {
    id: '3',
    title: 'Resultados Reais',
    description: 'Transformações estéticas e funcionais comprovadas.',
    iconName: 'Award'
  },
  {
    id: '4',
    title: 'Técnica Atualizada',
    description: 'Em constante atualização em implantodontia e cirurgia.',
    iconName: 'Stethoscope'
  },
  {
    id: '5',
    title: 'Sem Espera',
    description: 'Respeito absoluto pelo seu tempo agendado.',
    iconName: 'Clock'
  },
  {
    id: '6',
    title: 'Localização',
    description: 'Atendimento em Alagoinhas e Araças-Ba.',
    iconName: 'MapPin'
  }
];