export interface ExpertProfile {
  name: string;
  title: string;
  specialties: string[];
  location: string;
  instagramUrl: string;
  whatsappUrl: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  category?: 'hero' | 'result' | 'profile';
}

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
  iconName: string;
}