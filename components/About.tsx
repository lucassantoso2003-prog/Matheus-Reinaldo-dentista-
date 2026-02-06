import React from 'react';
import { HERO_IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section className="pt-16 pb-4 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Primeira Imagem (Sobre) */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-3 translate-y-3"></div>
              <img 
                src={HERO_IMAGES.secondary} 
                alt="Dr. Matheus no consultório" 
                className="relative w-full rounded-2xl shadow-xl border-4 border-white aspect-[4/5] object-cover object-top"
              />
            </div>

            {/* Segunda Imagem (Nova) */}
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-3 translate-y-3"></div>
              <img 
                src={HERO_IMAGES.tertiary} 
                alt="Dr. Matheus em atendimento" 
                className="relative w-full rounded-2xl shadow-xl border-4 border-white aspect-[4/5] object-cover object-center"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:sticky md:top-24">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Muito prazer, sou o <span className="text-accent">Dr. Matheus.</span>
            </h2>
            
            <p className="text-secondary mb-4 text-lg leading-relaxed">
              Sou o Dr. Matheus Reinaldo, cirurgião-dentista com atuação em clínica geral, cirurgias complexas de terceiros molares (sisos), endodontia (tratamento de canal), periodontia (saúde da gengiva) e implantes dentários. Trabalho unindo conhecimento técnico, precisão e um atendimento humanizado, porque acredito que excelência começa na forma como você se sente na cadeira do dentista.
            </p>
            
            <p className="text-secondary mb-4 text-lg leading-relaxed">
              Meu objetivo é fazer você se sentir em casa, em um ambiente acolhedor e tranquilo, enquanto cuido do seu sorriso com toda a seriedade técnica que a sua saúde exige. Cada plano de tratamento é pensado de forma individual, respeitando suas necessidades, seu tempo e seu conforto.
            </p>

            <p className="text-secondary mb-4 text-lg leading-relaxed">
              Aqui, você encontra mais do que tratamentos odontológicos — encontra cuidado, atenção e compromisso com resultados que devolvem saúde, função e autoestima ao seu sorriso.
            </p>

            <p className="text-secondary mb-0 text-lg leading-relaxed font-semibold">
              Será um prazer cuidar de você. Seu sorriso está em boas mãos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;