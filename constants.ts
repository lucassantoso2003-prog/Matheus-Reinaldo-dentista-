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
  location: "Alagoinhas-BA | Conde-BA",
  instagramUrl: "https://www.instagram.com/dr.matheusreinaldo/"
};

export const HERO_IMAGES = {
  main: "https://i.imgur.com/5goMwxf.png",
  secondary: "https://i.imgur.com/kpbvOiz.png"
};

export const RESULTS_GALLERY: ImageAsset[] = [
  { src: "https://i.imgur.com/nuDZKBx.png", alt: "Transformação de sorriso antes e depois" },
  { src: "https://i.imgur.com/RcmdkFe.png", alt: "Tratamento estético dental" },
  { src: "https://i.imgur.com/yungolK.png", alt: "Correção dentária" },
  { src: "https://i.imgur.com/i8EC0SP.png", alt: "Restaurção de sorriso" },
  { src: "https://i.imgur.com/o8Y38ca.png", alt: "Procedimento cirúrgico resultado" },
  { src: "https://i.imgur.com/iCJ2Y2z.png", alt: "Estética dental avançada" },
  { src: "https://i.imgur.com/hQfWK4t.png", alt: "Clareamento e alinhamento" },
  { src: "https://i.imgur.com/zkS0m5I.png", alt: "Saúde bucal recuperada" },
  { src: "https://i.imgur.com/7IZN0bq.png", alt: "Sorriso natural" }
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
    description: 'Atendimento em Alagoinhas e Conde.',
    iconName: 'MapPin'
  }
];