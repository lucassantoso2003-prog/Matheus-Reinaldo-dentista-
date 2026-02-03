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
            DENTISTA EM ALAGOINHAS E CONDE
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Eu, <span className="text-accent">{EXPERT.name}</span>, vou transformar o seu sorriso.
          </h1>
          
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            Dê adeus à insegurança de sorrir. Tratamentos personalizados, atendimento humano e resultados que devolvem sua autoestima.
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
        {/* Decorative Badge */}
        <div className="absolute bottom-4 right-4 md:bottom-12 md:left-12 md:right-auto bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px]">
          <p className="text-xs font-bold text-accent uppercase mb-1">Especialista</p>
          <p className="text-sm text-slate-800 font-medium">Clínico Geral & Cirurgia Oral</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;