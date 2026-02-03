import React from 'react';
import { EXPERT } from '../constants';
import { Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-primary">{EXPERT.name}</h3>
          <p className="text-slate-500 text-sm">{EXPERT.title}</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{EXPERT.location}</span>
          </div>
          <a 
            href={EXPERT.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Instagram size={16} />
            <span>@dr.matheusreinaldo</span>
          </a>
        </div>

      </div>
      <div className="text-center mt-8 text-[10px] text-gray-300">
        &copy; {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;