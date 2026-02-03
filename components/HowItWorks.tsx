import React from 'react';
import { Instagram, CalendarCheck, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Instagram size={32} />,
      title: "1. Toque no Botão",
      desc: "Você será direcionado para o meu Instagram."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "2. Agende",
      desc: "Envie uma mensagem direta (DM) pedindo sua avaliação."
    },
    {
      icon: <Sparkles size={32} />,
      title: "3. Avaliação",
      desc: "Venha ao consultório e descubra como renovar seu sorriso."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Como funciona?</h2>
          <p className="text-secondary">Simples, rápido e sem burocracia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 transform scale-x-75"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-slate-500 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm">
            ✨ Primeira consulta sem compromisso
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;