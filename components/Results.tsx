import React, { useState } from 'react';
import { RESULTS_GALLERY } from '../constants';
import Lightbox from './Lightbox';
import { Search } from 'lucide-react';

const Results: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-secondary text-lg">
            Veja algumas transformações realizadas no consultório.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {RESULTS_GALLERY.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-200 aspect-square shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Search className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium truncate">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 uppercase tracking-wider">
          * Resultados podem variar de pessoa para pessoa. Imagens ilustrativas de casos reais.
        </p>
      </div>

      <Lightbox 
        isOpen={!!selectedImage}
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default Results;