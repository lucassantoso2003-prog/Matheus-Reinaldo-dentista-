import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Seu novo sorriso começa com <br className="hidden md:block" />
          <span className="text-accent">um simples clique.</span>
        </h2>
        
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Não adie mais o cuidado que você merece. Venha conhecer meu trabalho e entender qual o melhor tratamento para você.
        </p>

        <div className="transform hover:scale-105 transition-transform duration-300 inline-block">
          <Button 
            text="Agendar Primeira Consulta AGORA" 
            subtext="Vagas limitadas para avaliação gratuita"
            className="text-lg px-8 py-5 shadow-2xl shadow-accent/40"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;