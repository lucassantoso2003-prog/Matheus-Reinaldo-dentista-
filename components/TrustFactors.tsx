import React from 'react';
import { TRUST_FACTORS } from '../constants';
import * as LucideIcons from 'lucide-react';

const TrustFactors: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Por que confiar o seu sorriso a mim?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_FACTORS.map((factor) => {
            // Dynamically resolve icon component
            const IconComponent = (LucideIcons as any)[factor.iconName] || LucideIcons.ShieldCheck;
            
            return (
              <div key={factor.id} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-accent/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 text-accent">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustFactors;