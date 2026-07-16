import React from 'react';
import { EXPERT, HERO_IMAGES } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-gradient-to-br from-slate-50 to-slate-200 overflow-hidden">
      
      {/* Content Container */}
      <div className="flex-1 flex flex-col justify-center px-6 pt-12 pb-8 md:p-16 z-10 order-2 md:order-1">
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider mb-4 border border-accent/20">
            DENTISTA EM ALAGOINHAS E ARAÇAS-BA
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Eu, <span className="text-accent">{EXPERT.name}</span>, vou transformar o seu sorriso.
          </h1>
          
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            Cuidar do seu sorriso vai muito além de um procedimento — é sobre oferecer confiança, segurança e bem-estar em cada atendimento.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button 
              text="Agendar Minha Consulta Gratuita" 
              subtext="Resposta rápida • Sem compromisso"
              className="w-full md:w-auto shadow-xl shadow-accent/20"
            />
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 relative min-h-[40vh] md:min-h-auto order-1 md:order-2">
        <div className="absolute inset-0 bg-accent/5 md:bg-transparent"></div>
        <img 
          src={HERO_IMAGES.main} 
          alt={EXPERT.name} 
          className="w-full h-full object-cover object-top md:object-center mask-image-bottom"
          style={{
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;