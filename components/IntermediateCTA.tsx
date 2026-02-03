import React from 'react';
import Button from './Button';

const IntermediateCTA: React.FC = () => {
  return (
    <section className="py-16 bg-cream border-y border-gray-100">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h3 className="text-2xl font-bold text-primary mb-4">
          Ainda com dúvida ou medo de dentista?
        </h3>
        <p className="text-secondary mb-8">
          A primeira consulta é o momento de conversarmos sem pressão. Vou ouvir suas queixas, avaliar seu caso e explicar tudo com calma. É gratuito e sem compromisso.
        </p>
        <div className="flex justify-center">
          <Button text="Quero fazer minha consulta sem compromisso" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default IntermediateCTA;