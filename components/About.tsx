import React from 'react';
import { EXPERT, HERO_IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-3 translate-y-3"></div>
            <img 
              src={HERO_IMAGES.secondary} 
              alt="Dr. Matheus no consultório" 
              className="relative w-full rounded-2xl shadow-xl border-4 border-white aspect-[4/5] object-cover object-top"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Muito prazer, sou o <span className="text-accent">Dr. Matheus.</span>
            </h2>
            
            <p className="text-secondary mb-6 text-lg leading-relaxed">
              Não sou apenas mais um dentista de "jaleco branco". Meu objetivo é fazer você se sentir em casa, enquanto cuido do seu sorriso com a seriedade técnica que sua saúde exige.
            </p>
            
            <p className="text-secondary mb-8 text-lg leading-relaxed">
              Atuo com foco total em devolver sua confiança, seja através de uma limpeza detalhada, uma cirurgia cuidadosa ou um planejamento estético completo.
            </p>

            <ul className="space-y-4 mb-8">
              {EXPERT.specialties.map((spec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{spec}</span>
                </li>
              ))}
            </ul>

            <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg border-l-4 border-accent">
              <p className="text-sm text-slate-600 italic">
                "Cuidar do sorriso é cuidar da alma."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;